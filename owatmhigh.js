// ==UserScript==
// @name         OutlookPaint
// @namespace    http://tampermonkey.net/
// @version      0.3
// @description  try to take over the world!
// @author       Aleksandar Pavić https://www.linkedin.com/in/acosonic/detail/recent-activity/posts/
// @match        https://changethis/owa/
// @icon         https://www.google.com/s2/favicons?domain=ns.rs
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

var hlCol = "#ffe6e6"; //Change this for highlighted color for unread messages
var bgCol = "#ffffff"; //this is read messages

$(document).ready(function(){

    setTimeout(function(){ window.OutlookPaint(); }, 1000);
    //console.log("triggered");

});

window.OutlookPaint = function() {
    //performing highlights
    $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
    $(".scrollContainer").on('scroll',function() {
       $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
    });

    //removing highlight on click
    $(".scrollContainer").on('click',function(){
        $("._lvv_y").css("background",bgCol,"important");
    });

    //highlighting new messages
    $('.scrollContainer').bind('DOMSubtreeModified', function(){
        $("._lvv_w").not("._lvv_y").css("background",hlCol,"important");
    });
      //  console.log("finished OutlookPaint");

}


