// ==UserScript==
// @name fbAdblockJS
// @description  block ads in facebook.com
// @author Vovk Igor
// @license MIT
// @version 0.1
// @require  https://ajax.googleapis.com/ajax/libs/jquery/1.3/jquery.min.js
// @include https://www.facebook.com/*
// @namespace https://greasyfork.org/users/123043
// ==/UserScript==

var func = function(){
    
   //блокує рекламу зліва під меню
   $("._m8d").hide();
   
   //блокує історію зверху
   $(".stories_feed_wrap").hide();
    
   //блокує репост спільнотою спільноти
   $("div[class^='feed_repost']").hide();
   $('[id^="post-"][class *="post_copy"]').hide();
    
   //блокує платну рекламу в новинах
   $(".wall_marked_as_ads").parent().parent().parent().parent().parent().hide();
   $("._ads_promoted_post_data_w").hide();
 };

   //блокує історію зверху
   $(".stories_feed_wrap").hide();

    $(document).ready(function() 
    {
       func();
       setInterval(func,1000);
    }); 
