import style from"./main.scss";import smoothscroll from"smoothscroll-polyfill";smoothscroll.polyfill(),document.addEventListener("DOMContentLoaded",(function(){var o=document.querySelector(".circle"),e=function(){return window.innerHeight+window.pageYOffset>=document.body.offsetHeight-2};o.addEventListener("click",(function(){if(e())window.scrollTo({left:0,top:0,behavior:"smooth"});else for(var o=[document.querySelector(".sec3"),document.querySelector(".sec4"),document.querySelector(".sec5")],t=0;t<o.length;t++)if(o[t].offsetTop>(document.documentElement.scrollTop||document.body.scrollTop)){window.scrollTo({left:0,top:o[t].offsetTop,behavior:"smooth"});break}})),document.addEventListener("scroll",(function(){e()?o.style.transform="rotate(180deg)":o.style.transform=null}))}));