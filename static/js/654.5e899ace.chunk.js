(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[654],{781:function(e,t,n){!function(e){"use strict";e.defineMode("julia",(function(t,n){function r(e,t){return"undefined"===typeof t&&(t="\\b"),new RegExp("^(("+e.join(")|(")+"))"+t)}var i="\\\\[0-7]{1,3}",a="\\\\x[A-Fa-f0-9]{1,2}",s="\\\\[abefnrtv0%?'\"\\\\]",o="([^\\u0027\\u005C\\uD800-\\uDFFF]|[\\uD800-\\uDFFF][\\uDC00-\\uDFFF])",u=n.operators||r(["[<>]:","[<>=]=","<<=?",">>>?=?","=>","->","\\/\\/","[\\\\%*+\\-<>!=\\/^|&\\u00F7\\u22BB]=?","\\?","\\$","~",":","\\u00D7","\\u2208","\\u2209","\\u220B","\\u220C","\\u2218","\\u221A","\\u221B","\\u2229","\\u222A","\\u2260","\\u2264","\\u2265","\\u2286","\\u2288","\\u228A","\\u22C5","\\b(in|isa)\\b(?!.?\\()"],""),c=n.delimiters||/^[;,()[\]{}]/,f=n.identifiers||/^[_A-Za-z\u00A1-\u2217\u2219-\uFFFF][\w\u00A1-\u2217\u2219-\uFFFF]*!*/,l=r([i,a,s,o],"'"),m=["begin","function","type","struct","immutable","let","macro","for","while","quote","if","else","elseif","try","finally","catch","do"],p=["end","else","elseif","catch","finally"],h=["if","else","elseif","while","for","begin","let","end","do","try","catch","finally","return","break","continue","global","local","const","export","import","importall","using","function","where","macro","module","baremodule","struct","type","mutable","immutable","quote","typealias","abstract","primitive","bitstype"],d=["true","false","nothing","NaN","Inf"];e.registerHelper("hintWords","julia",h.concat(d));var k=r(m),b=r(p),F=r(h),g=r(d),v=/^@[_A-Za-z][\w]*/,x=/^:[_A-Za-z\u00A1-\uFFFF][\w\u00A1-\uFFFF]*!*/,z=/^(`|([_A-Za-z\u00A1-\uFFFF]*"("")?))/;function P(e){return e.nestedArrays>0}function y(e){return e.nestedGenerators>0}function A(e,t){return"undefined"===typeof t&&(t=0),e.scopes.length<=t?null:e.scopes[e.scopes.length-(t+1)]}function E(e,t){if(e.match(/^#=/,!1))return t.tokenize=C,t.tokenize(e,t);var n=t.leavingExpr;if(e.sol()&&(n=!1),t.leavingExpr=!1,n&&e.match(/^'+/))return"operator";if(e.match(/\.{4,}/))return"error";if(e.match(/\.{1,3}/))return"operator";if(e.eatSpace())return null;var r,i=e.peek();if("#"===i)return e.skipToEnd(),"comment";if("["===i&&(t.scopes.push("["),t.nestedArrays++),"("===i&&(t.scopes.push("("),t.nestedGenerators++),P(t)&&"]"===i){for(;t.scopes.length&&"["!==A(t);)t.scopes.pop();t.scopes.pop(),t.nestedArrays--,t.leavingExpr=!0}if(y(t)&&")"===i){for(;t.scopes.length&&"("!==A(t);)t.scopes.pop();t.scopes.pop(),t.nestedGenerators--,t.leavingExpr=!0}if(P(t)){if("end"==t.lastToken&&e.match(/^:/))return"operator";if(e.match(/^end/))return"number"}if((r=e.match(k,!1))&&t.scopes.push(r[0]),e.match(b,!1)&&t.scopes.pop(),e.match(/^::(?![:\$])/))return t.tokenize=w,t.tokenize(e,t);if(!n&&e.match(x)||e.match(/:([<>]:|<<=?|>>>?=?|->|\/\/|\.{2,3}|[\.\\%*+\-<>!\/^|&]=?|[~\?\$])/))return"builtin";if(e.match(u))return"operator";if(e.match(/^\.?\d/,!1)){var a=RegExp(/^im\b/),s=!1;if(e.match(/^0x\.[0-9a-f_]+p[\+\-]?[_\d]+/i)&&(s=!0),e.match(/^0x[0-9a-f_]+/i)&&(s=!0),e.match(/^0b[01_]+/i)&&(s=!0),e.match(/^0o[0-7_]+/i)&&(s=!0),e.match(/^(?:(?:\d[_\d]*)?\.(?!\.)(?:\d[_\d]*)?|\d[_\d]*\.(?!\.)(?:\d[_\d]*))?([Eef][\+\-]?[_\d]+)?/i)&&(s=!0),e.match(/^\d[_\d]*(e[\+\-]?\d+)?/i)&&(s=!0),s)return e.match(a),t.leavingExpr=!0,"number"}if(e.match(/^'/))return t.tokenize=D,t.tokenize(e,t);if(e.match(z))return t.tokenize=T(e.current()),t.tokenize(e,t);if(e.match(v))return"meta";if(e.match(c))return null;if(e.match(F))return"keyword";if(e.match(g))return"builtin";var o=t.isDefinition||"function"==t.lastToken||"macro"==t.lastToken||"type"==t.lastToken||"struct"==t.lastToken||"immutable"==t.lastToken;return e.match(f)?o?"."===e.peek()?(t.isDefinition=!0,"variable"):(t.isDefinition=!1,"def"):e.match(/^({[^}]*})*\(/,!1)?(t.tokenize=_,t.tokenize(e,t)):(t.leavingExpr=!0,"variable"):(e.next(),"error")}function _(e,t){for(;;){var n=e.match(/^(\(\s*)/),r=0;if(n&&(t.firstParenPos<0&&(t.firstParenPos=t.scopes.length),t.scopes.push("("),r+=n[1].length),"("==A(t)&&e.match(/^\)/)&&(t.scopes.pop(),r+=1,t.scopes.length<=t.firstParenPos)){var i=e.match(/^(\s*where\s+[^\s=]+)*\s*?=(?!=)/,!1);return e.backUp(r),t.firstParenPos=-1,t.tokenize=E,i?"def":"builtin"}if(e.match(/^$/g,!1)){for(e.backUp(r);t.scopes.length>t.firstParenPos;)t.scopes.pop();return t.firstParenPos=-1,t.tokenize=E,"builtin"}if(!e.match(/^[^()]+/))return e.next(),null}}function w(e,t){return e.match(/.*?(?=,|;|{|}|\(|\)|=|$|\s)/),e.match(/^{/)?t.nestedParameters++:e.match(/^}/)&&t.nestedParameters>0&&t.nestedParameters--,t.nestedParameters>0?e.match(/.*?(?={|})/)||e.next():0==t.nestedParameters&&(t.tokenize=E),"builtin"}function C(e,t){return e.match(/^#=/)&&t.nestedComments++,e.match(/.*?(?=(#=|=#))/)||e.skipToEnd(),e.match(/^=#/)&&(t.nestedComments--,0==t.nestedComments&&(t.tokenize=E)),"comment"}function D(e,t){var n,r=!1;if(e.match(l))r=!0;else if(n=e.match(/\\u([a-f0-9]{1,4})(?=')/i))((i=parseInt(n[1],16))<=55295||i>=57344)&&(r=!0,e.next());else if(n=e.match(/\\U([A-Fa-f0-9]{5,8})(?=')/)){var i;(i=parseInt(n[1],16))<=1114111&&(r=!0,e.next())}return r?(t.leavingExpr=!0,t.tokenize=E,"string"):(e.match(/^[^']+(?=')/)||e.skipToEnd(),e.match(/^'/)&&(t.tokenize=E),"error")}function T(e){function t(t,n){if(t.eat("\\"))t.next();else{if(t.match(e))return n.tokenize=E,n.leavingExpr=!0,"string";t.eat(/[`"]/)}return t.eatWhile(/[^\\`"]/),"string"}return'"""'===e.substr(-3)?e='"""':'"'===e.substr(-1)&&(e='"'),t}return{startState:function(){return{tokenize:E,scopes:[],lastToken:null,leavingExpr:!1,isDefinition:!1,nestedArrays:0,nestedComments:0,nestedGenerators:0,nestedParameters:0,firstParenPos:-1}},token:function(e,t){var n=t.tokenize(e,t),r=e.current();return r&&n&&(t.lastToken=r),n},indent:function(e,n){var r=0;return("]"===n||")"===n||/^end\b/.test(n)||/^else/.test(n)||/^catch\b/.test(n)||/^elseif\b/.test(n)||/^finally/.test(n))&&(r=-1),(e.scopes.length+r)*t.indentUnit},electricInput:/\b(end|else|catch|finally)\b/,blockCommentStart:"#=",blockCommentEnd:"=#",lineComment:"#",closeBrackets:'()[]{}""',fold:"indent"}})),e.defineMIME("text/x-julia","julia")}(n(10))}}]);
//# sourceMappingURL=654.5e899ace.chunk.js.map