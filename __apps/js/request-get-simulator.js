!function(e){function t(t){e.Request={QueryString:[]};var n,o,r,i,u,s;for(r=null,i=[],o=location.search.substr(1).split("&"),u=0,s=o.length;s>u;u++)n=o[u],i=n.split("="),e.$_GET[i[0]]=decodeURIComponent(i[1]),e.Request.QueryString[i[0]]=decodeURIComponent(i[1]);var l=function(t){var n,o,r,i,u,s;for(r=null,i=[],o=e.location.search.substr(1).split("&"),u=0,s=o.length;s>u;u++)n=o[u],i=n.split("="),i[0]===t&&(r=decodeURIComponent(i[1]));return r};return void 0!=typeof t&&"object"==typeof t&&t.QueryString?l(t.QueryString):void 0}e.$_GET=[],e.Request={QueryString:[]},t()}(window);