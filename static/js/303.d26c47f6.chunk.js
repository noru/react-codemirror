(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[303],{346:function(e,a){!function(e){var a=/\b(?:double|float|[su]?int(?:32|64)|s?fixed(?:32|64)|bool|string|bytes)\b/;e.languages.protobuf=e.languages.extend("clike",{"class-name":{pattern:/(\b(?:enum|extend|message|service)\s+)[A-Za-z_]\w*(?=\s*\{)/,lookbehind:!0},keyword:/\b(?:enum|extend|extensions|import|message|oneof|option|optional|package|public|repeated|required|reserved|service|syntax|to)\b/}),e.languages.insertBefore("protobuf","operator",{map:{pattern:/\bmap<\s*[\w.]+\s*,\s*[\w.]+\s*>(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/[<>.,]/,builtin:a}},builtin:a,"positional-class-name":{pattern:/(?:\b|\B\.)[A-Za-z_]\w*(?:\.[A-Za-z_]\w*)*(?=\s+[A-Za-z_]\w*\s*[=;])/,alias:"class-name",inside:{punctuation:/\./}},annotation:{pattern:/(\[\s*)[A-Za-z_]\w*(?=\s*=)/,lookbehind:!0}})}(Prism)}}]);
//# sourceMappingURL=303.d26c47f6.chunk.js.map