// ==UserScript==
// @name         OutlookPaint
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aleksandar Pavić
// @match        https://mail.ns.rs/owa/
// @icon         https://www.google.com/s2/favicons?domain=ns.rs
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var hlCol = "#fffce8"; //Change this for highlighted color for unread messages
var bgCol = "#ffffff"; //this is read messages
var debug = 0; //turn on debugging
window.loaded = 0; //prevent multiple loads and multiple bindings of events


$(document).ready(function(){
if (window.loaded == 0) {
    //performing highlights
    $("._lvv_T").css("font-size","15px");
    $("._lvv_T").css("color","black");
    $("[autoid='_lvv_5']").css("font-size","14px");
    $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
    $(".scrollContainer").on('scroll',function() {
       $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
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
        if (debug == 1) console.log("owapaint done");
    });
    if (debug == 1) console.log("owapaint done");
}
    window.loaded = 1;
});
