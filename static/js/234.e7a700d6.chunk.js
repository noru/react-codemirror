(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[234],{277:function(e,n){!function(e){function n(e,n){return"___"+e.toUpperCase()+n+"___"}Object.defineProperties(e.languages["markup-templating"]={},{buildPlaceholders:{value:function(t,a,r,o){if(t.language===a){var c=t.tokenStack=[];t.code=t.code.replace(r,(function(e){if("function"===typeof o&&!o(e))return e;for(var r,i=c.length;-1!==t.code.indexOf(r=n(a,i));)++i;return c[i]=e,r})),t.grammar=e.languages.markup}}},tokenizePlaceholders:{value:function(t,a){if(t.language===a&&t.tokenStack){t.grammar=e.languages[a];var r=0,o=Object.keys(t.tokenStack);!function c(i){for(var u=0;u<i.length&&!(r>=o.length);u++){var s=i[u];if("string"===typeof s||s.content&&"string"===typeof s.content){var p=o[r],g=t.tokenStack[p],l="string"===typeof s?s:s.content,f=n(a,p),k=l.indexOf(f);if(k>-1){++r;var h=l.substring(0,k),m=new e.Token(a,e.tokenize(g,t.grammar),"language-"+a,g),d=l.substring(k+f.length),v=[];h&&v.push.apply(v,c([h])),v.push(m),d&&v.push.apply(v,c([d])),"string"===typeof s?i.splice.apply(i,[u,1].concat(v)):s.content=v}}else s.content&&c(s.content)}return i}(t.tokens)}}}})}(Prism)}}]);
//# sourceMappingURL=234.e7a700d6.chunk.js.map