// ==UserScript==
// @name         OutlookPaint
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aleksandar Pavić
// @match        https://youroutlook/owa/*
// @icon         https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://ns.rs&size=16
// @grant        none
// @require      https://code.jquery.com/jquery-latest.js
// @require      https://gist.github.com/raw/2625891/waitForKeyElements.js
// @run-at       document-body
// ==/UserScript==

var hlCol = "#ffebcc"; //Change this for highlighted color for unread messages
var hlCol2 = "#fff9e6";

var bgCol = "#ffffff"; //this is read messages
var debug = 1; //turn on debugging
window.loaded = 0; //prevent multiple loads and multiple bindings of events


waitForKeyElements (
    ".scrollContainer",
    owaPaint
);


function owaPaint(){
if (window.loaded == 0) {
//    $("._lvv_w").css("border-bottom","1px dashed gray");

    //performing highlights
    $("._lvv_T").css("font-size","15px","important");
    $("._lvv_T").css("color","black","important");
    $("[autoid='_lvv_5']").css("font-size","14px","important");
    $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
    $("._lvv_w:odd").not("._lvv_y").css("background",hlCol2,"important");

    $(".scrollContainer").on('scroll',function() {
       $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
       $("._lvv_w:odd").not("._lvv_y").css("background",hlCol2,"important");

       $("._lvv_y").css("background",bgCol,"important");
        if (debug == 1) console.log("highlighting on scroll");
    });

    //removing highlight on click
    $(".scrollContainer").on('click',function(){
        $("._lvv_y").css("background",bgCol,"important");
        if (debug == 1) console.log("removing highlight on click");
    });

    //highlighting new messages
    $('.scrollContainer').bind('DOMSubtreeModified', function(){
        $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
        $("._lvv_w:odd").not("._lvv_y").css("background",hlCol2,"important");
        if (debug == 1) console.log("owapaint done");
    });
    if (debug == 1) console.log("owapaint done "+ window.loaded);
}
    window.loaded+1;
}
