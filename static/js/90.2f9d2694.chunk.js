(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[90],{133:function(e,r){!function(e){e.languages.diff={coord:[/^(?:\*{3}|-{3}|\+{3}).*$/m,/^@@.*@@$/m,/^\d+.*$/m]};var r={"deleted-sign":"-","deleted-arrow":"<","inserted-sign":"+","inserted-arrow":">",unchanged:" ",diff:"!"};Object.keys(r).forEach((function(i){var n=r[i],a=[];/^\w+$/.test(i)||a.push(/\w+/.exec(i)[0]),"diff"===i&&a.push("bold"),e.languages.diff[i]={pattern:RegExp("^(?:["+n+"].*(?:\r\n?|\n|(?![\\s\\S])))+","m"),alias:a}})),Object.defineProperty(e.languages.diff,"PREFIXES",{value:r})}(Prism)}}]);
//# sourceMappingURL=90.2f9d2694.chunk.js.map