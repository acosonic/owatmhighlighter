// ==UserScript==
// @name         OutlookPaint
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       Aleksandar Pavić https://www.linkedin.com/in/acosonic/detail/recent-activity/posts/
// @match        https://changethis/owa/
// @icon         https://www.google.com/s2/favicons?domain=ns.rs
// @grant        none
// @require      http://code.jquery.com/jquery-latest.js
// ==/UserScript==

$(document).ready(function(){
    $("._lvv_w").not("._lvv_y").css("background","#ffe6e6","important");
    $(".scrollContainer").on('scroll',function() {
       $("._lvv_w").not("._lvv_y").css("background","#ffe6e6","important");
    });
});
