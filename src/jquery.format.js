/*
 * jQuery Format Plugin v${version}
 * http://www.asual.com/jquery/format/
 *
 * Copyright (c) 2009-2011 Rostislav Hristov
 * Uses code by Matt Kruse
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://jquery.org/license
 *
 * Date: ${timestamp}
 */
(function(v){var m={date:{format:"MMM dd, yyyy h:mm:ss a",monthsFull:"January February March April May June July August September October November December".split(" "),monthsShort:"Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec".split(" "),daysFull:"Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "),daysShort:"Sun Mon Tue Wed Thu Fri Sat".split(" "),shortDateFormat:"M/d/yyyy h:mm a",longDateFormat:"EEEE, MMMM dd, yyyy h:mm:ss a"},number:{format:"#,##0.0#",groupingSeparator:",", decimalSeparator:"."},bool:{trueString:["true","yes"],falseString:["false","no"],trueValue:"Yes",falseValue:"No"}};v.format={locale:function(b){a={a:6};if(b)for(var k in b)for(var g in b[k])m[k][g]=b[k][g];return m},bool:function(b){"string"===typeof b&&(b=b.toLowerCase(),v.inArray(b,m.bool.trueString)?b=!0:v.inArray(b,m.bool.falseString)&&(b=!1));return b?m.bool.trueValue:m.bool.falseValue},date:function(b,k){var g=0,h=0,c=0,c=h="",n,e;if("string"==typeof b){var q=function(b,c,d,e){for(;e>=d;e--){var f= b.substring(c,c+e);if(f.length>=d&&/^\d+$/.test(f))return f}return null};"undefined"==typeof k&&(k=m.date.format);for(var d=0,l=new Date(0,0,0,0,0,0,0),j=l.getYear(),f=l.getMonth()+1,p=1,i=l.getHours(),t=l.getMinutes(),u=l.getSeconds(),l=l.getMilliseconds(),s="",r;g<k.length;){c="";for(h=k.charAt(g);k.charAt(g)==h&&g<k.length;)c+=k.charAt(g++);-1<c.indexOf("MMMM")&&4<c.length&&(c="MMMM");-1<c.indexOf("EEEE")&&4<c.length&&(c="EEEE");if("yyyy"==c||"yy"==c||"y"==c){"yyyy"==c&&(e=n=4);"yy"==c&&(e=n=2); "y"==c&&(n=2,e=4);j=q(b,d,n,e);if(null===j)return 0;d+=j.length;2==j.length&&(j=parseInt(j,10),j=70<j?1900+j:2E3+j)}else if("MMMM"==c){h=f=0;for(c=m.date.monthsFull.length;h<c;h++)if(r=m.date.monthsFull[h],b.substring(d,d+r.length).toLowerCase()==r.toLowerCase()){f=h+1;d+=r.length;break}if(1>f||12<f)return 0}else if("MMM"==c){h=f=0;for(c=m.date.monthsShort.length;h<c;h++)if(r=m.date.monthsShort[h],b.substring(d,d+r.length).toLowerCase()==r.toLowerCase()){f=h+1;d+=r.length;break}if(1>f||12<f)return 0}else if("EEEE"== c){h=0;for(c=m.date.daysFull.length;h<c;h++)if(r=m.date.daysFull[h],b.substring(d,d+r.length).toLowerCase()==r.toLowerCase()){d+=r.length;break}}else if("EEE"==c){h=0;for(c=m.date.daysShort.length;h<c;h++)if(r=m.date.daysShort[h],b.substring(d,d+r.length).toLowerCase()==r.toLowerCase()){d+=r.length;break}}else if("MM"==c||"M"==c){f=q(b,d,1,2);if(null===f||1>f||12<f)return 0;d+=f.length}else if("dd"==c||"d"==c){p=q(b,d,1,2);if(null===p||1>p||31<p)return 0;d+=p.length}else if("hh"==c||"h"==c){i=q(b, d,1,2);if(null===i||1>i||12<i)return 0;d+=i.length}else if("HH"==c||"H"==c){i=q(b,d,1,2);if(null===i||0>i||23<i)return 0;d+=i.length}else if("KK"==c||"K"==c){i=q(b,d,1,2);if(null===i||0>i||11<i)return 0;d+=i.length}else if("kk"==c||"k"==c){i=q(b,d,1,2);if(null===i||1>i||24<i)return 0;d+=i.length;i--}else if("mm"==c||"m"==c){t=q(b,d,1,2);if(null===t||0>t||59<t)return 0;d+=t.length}else if("ss"==c||"s"==c){u=q(b,d,1,2);if(null===u||0>u||59<u)return 0;d+=u.length}else if("SSS"==c||"SS"==c||"S"==c){l= q(b,d,1,3);if(null===l||0>l||999<l)return 0;d+=l.length}else if("a"==c){s=b.substring(d,d+2).toLowerCase();if("am"==s)s="AM";else if("pm"==s)s="PM";else return 0;d+=2}else{if(c!=b.substring(d,d+c.length))return 0;d+=c.length}}if(d!=b.length)return 0;if(2==f)if(0===j%4&&0!==j%100||0===j%400){if(29<p)return 0}else if(28<p)return 0;if((4==f||6==f||9==f||11==f)&&30<p)return 0;12>i&&"PM"==s?i=i-0+12:11<i&&"AM"==s&&(i-=12);return new Date(j,f-1,p,i,t,u,l)}g=function(b,c){return"undefined"==typeof c||2== c?(0<=b&&10>b?"0":"")+b:0<=b&&10>b?"00"+b:10<=b&&100>b?"0"+b:b};"undefined"==typeof k&&(k=m.date.format);e=b.getYear();1E3>e&&(e=String(e+1900));q=b.getMonth()+1;d=b.getDate();j=b.getDay();f=b.getHours();p=b.getMinutes();n=b.getSeconds();i=b.getMilliseconds();b={y:e,yyyy:e,yy:String(e).substring(2,4),M:q,MM:g(q),MMM:m.date.monthsShort[q-1],MMMM:m.date.monthsFull[q-1],d:d,dd:g(d),EEE:m.date.daysShort[j],EEEE:m.date.daysFull[j],H:f,HH:g(f)};b.h=0===f?12:12<f?f-12:f;b.hh=g(b.h);b.k=0!==f?f:24;b.kk=g(b.k); b.K=11<f?f-12:f;b.KK=g(b.K);b.a=11<f?"PM":"AM";b.m=p;b.mm=g(p);b.s=n;b.ss=g(n);b.S=i;b.SS=g(i);b.SSS=g(i,3);e="";g=0;c=h="";for(n=!1;g<k.length;)if(c="",h=k.charAt(g),"'"==h)g++,k.charAt(g)==h?(e+=h,g++):n=!n;else{for(;k.charAt(g)==h;)c+=k.charAt(g++);-1!=c.indexOf("MMMM")&&4<c.length&&(c="MMMM");-1!=c.indexOf("EEEE")&&4<c.length&&(c="EEEE");e="undefined"!=typeof b[c]&&!n?e+b[c]:e+c}return e},number:function(b,k){var g,h,c,n,e;if("string"==typeof b)return g=m.number.groupingSeparator,c=m.number.decimalSeparator, n=b.indexOf(c),e=1,-1!=n&&(e=Math.pow(10,b.length-n-1)),b=b.replace(RegExp("["+g+"]","g"),""),b=b.replace(RegExp("["+c+"]"),"."),Math.round(b*e)/e;if("undefined"==typeof k||1>k.length)k=m.number.format;h=k.lastIndexOf(",");n=k.indexOf(".");c=g="";var q=0>b,d=k.substr(n+1).replace(/#/g,"").length,l=k.substr(n+1).length,j=10,b=Math.abs(b);if(-1!=n){c=m.number.decimalSeparator;if(0<l){e=1E3;var j=Math.pow(j,l),f=Math.round(parseInt(b*j*e-Math.round(b)*j*e,10)/e),f=String(0>f?Math.round(parseInt(b*j* e-parseInt(b,10)*j*e,10)/e):f),p=b.toString().split(".");if("undefined"!=typeof p[1])for(e=0;e<l;e++)if("0"==p[1].substr(e,1)&&e<l-1&&(f.length!=l||"0"==f.substr(0,1)))f="0"+f;else break;for(e=0;e<l-c.length;e++)f+="0";p="";for(e=0;e<f.length;e++){l=f.substr(e,1);if(e>=d&&"0"==l&&/^0*$/.test(f.substr(e+1)))break;p+=l}c+=p}c==m.number.decimalSeparator&&(c="")}if(0!==n){g=""!=c?String(parseInt(Math.round(b*j)/j,10)):String(Math.round(b));d=m.number.groupingSeparator;j=0;-1!=h&&(j=-1!=n?n-h:k.length- h,j--);if(0<j){h=0;l="";for(e=g.length;e--;)0!==h&&0===h%j&&(l=d+l),l=g.substr(e,1)+l,h++;g=l}e=/#|,/g;n=-1!=n?k.substr(0,n).replace(e,"").length:k.replace(e,"").length;for(e=g.length;e<n;e++)g="0"+g}return(q?"-":"")+(g+c)}}})(jQuery);