(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[488],{833:function(e,n,t){!function(e){"use strict";e.defineMode("twig:inner",(function(){var e=["and","as","autoescape","endautoescape","block","do","endblock","else","elseif","extends","for","endfor","embed","endembed","filter","endfilter","flush","from","if","endif","in","is","include","import","not","or","set","spaceless","endspaceless","with","endwith","trans","endtrans","blocktrans","endblocktrans","macro","endmacro","use","verbatim","endverbatim"],n=/^[+\-*&%=<>!?|~^]/,t=/^[:\[\(\{]/,i=["true","false","null","empty","defined","divisibleby","divisible by","even","odd","iterable","sameas","same as"],r=/^(\d[+\-\*\/])?\d+(\.\d+)?/;function o(o,a){var s=o.peek();if(a.incomment)return o.skipTo("#}")?(o.eatWhile(/\#|}/),a.incomment=!1):o.skipToEnd(),"comment";if(a.intag){if(a.operator){if(a.operator=!1,o.match(i))return"atom";if(o.match(r))return"number"}if(a.sign){if(a.sign=!1,o.match(i))return"atom";if(o.match(r))return"number"}if(a.instring)return s==a.instring&&(a.instring=!1),o.next(),"string";if("'"==s||'"'==s)return a.instring=s,o.next(),"string";if(o.match(a.intag+"}")||o.eat("-")&&o.match(a.intag+"}"))return a.intag=!1,"tag";if(o.match(n))return a.operator=!0,"operator";if(o.match(t))a.sign=!0;else if(o.eat(" ")||o.sol()){if(o.match(e))return"keyword";if(o.match(i))return"atom";if(o.match(r))return"number";o.sol()&&o.next()}else o.next();return"variable"}if(o.eat("{")){if(o.eat("#"))return a.incomment=!0,o.skipTo("#}")?(o.eatWhile(/\#|}/),a.incomment=!1):o.skipToEnd(),"comment";if(s=o.eat(/\{|%/))return a.intag=s,"{"==s&&(a.intag="}"),o.eat("-"),"tag"}o.next()}return e=new RegExp("(("+e.join(")|(")+"))\\b"),i=new RegExp("(("+i.join(")|(")+"))\\b"),{startState:function(){return{}},token:function(e,n){return o(e,n)}}})),e.defineMode("twig",(function(n,t){var i=e.getMode(n,"twig:inner");return t&&t.base?e.multiplexingMode(e.getMode(n,t.base),{open:/\{[{#%]/,close:/[}#%]\}/,mode:i,parseDelimiters:!0}):i})),e.defineMIME("text/x-twig","twig")}(t(10),t(969))},969:function(e,n,t){!function(e){"use strict";e.multiplexingMode=function(n){var t=Array.prototype.slice.call(arguments,1);function i(e,n,t,i){if("string"==typeof n){var r=e.indexOf(n,t);return i&&r>-1?r+n.length:r}var o=n.exec(t?e.slice(t):e);return o?o.index+t+(i?o[0].length:0):-1}return{startState:function(){return{outer:e.startState(n),innerActive:null,inner:null}},copyState:function(t){return{outer:e.copyState(n,t.outer),innerActive:t.innerActive,inner:t.innerActive&&e.copyState(t.innerActive.mode,t.inner)}},token:function(r,o){if(o.innerActive){var a=o.innerActive;if(l=r.string,!a.close&&r.sol())return o.innerActive=o.inner=null,this.token(r,o);if((d=a.close?i(l,a.close,r.pos,a.parseDelimiters):-1)==r.pos&&!a.parseDelimiters)return r.match(a.close),o.innerActive=o.inner=null,a.delimStyle&&a.delimStyle+" "+a.delimStyle+"-close";d>-1&&(r.string=l.slice(0,d));var s=a.mode.token(r,o.inner);return d>-1&&(r.string=l),d==r.pos&&a.parseDelimiters&&(o.innerActive=o.inner=null),a.innerStyle&&(s=s?s+" "+a.innerStyle:a.innerStyle),s}for(var c=1/0,l=r.string,u=0;u<t.length;++u){var d,m=t[u];if((d=i(l,m.open,r.pos))==r.pos){m.parseDelimiters||r.match(m.open),o.innerActive=m;var f=0;if(n.indent){var p=n.indent(o.outer,"","");p!==e.Pass&&(f=p)}return o.inner=e.startState(m.mode,f),m.delimStyle&&m.delimStyle+" "+m.delimStyle+"-open"}-1!=d&&d<c&&(c=d)}c!=1/0&&(r.string=l.slice(0,c));var v=n.token(r,o.outer);return c!=1/0&&(r.string=l),v},indent:function(t,i,r){var o=t.innerActive?t.innerActive.mode:n;return o.indent?o.indent(t.innerActive?t.inner:t.outer,i,r):e.Pass},blankLine:function(i){var r=i.innerActive?i.innerActive.mode:n;if(r.blankLine&&r.blankLine(i.innerActive?i.inner:i.outer),i.innerActive)"\n"===i.innerActive.close&&(i.innerActive=i.inner=null);else for(var o=0;o<t.length;++o){var a=t[o];"\n"===a.open&&(i.innerActive=a,i.inner=e.startState(a.mode,r.indent?r.indent(i.outer,"",""):0))}},electricChars:n.electricChars,innerMode:function(e){return e.inner?{state:e.inner,mode:e.innerActive.mode}:{state:e.outer,mode:n}}}}}(t(10))}}]);
//# sourceMappingURL=488.5567abf9.chunk.js.map