(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[572],{919:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default="# Literals\n1234\n0.0e101\n.123\n0b01010011100\n0o01234567\n0x0987654321abcdef\n7\n2147483647\n3L\n79228162514264337593543950336L\n0x100000000L\n79228162514264337593543950336\n0xdeadbeef\n3.14j\n10.j\n10j\n.001j\n1e100j\n3.14e-10j\n\n\n# String Literals\n'For\\''\n\"God\\\"\"\n\"\"\"so loved\nthe world\"\"\"\n'''that he gave\nhis only begotten\\' '''\n'that whosoever believeth in him'\n''\n\n# Identifiers\n__a__\na.b\na.b.c\n\n#Unicode identifiers on Python3\n# a = x\\ddot\na\u20d7 = x\u0308\n# a = v\\dot\na\u20d7 = v\u0307\n\n#F\\vec = m \\cdot a\\vec\nF\u20d7 = m\u2022a\u20d7 \n\n# Operators\n+ - * / % & | ^ ~ < >\n== != <= >= <> << >> // **\nand or not in is\n\n#infix matrix multiplication operator (PEP 465)\nA @ B\n\n# Delimiters\n() [] {} , : ` = ; @ .  # Note that @ and . require the proper context on Python 2.\n+= -= *= /= %= &= |= ^=\n//= >>= <<= **=\n\n# Keywords\nas assert break class continue def del elif else except\nfinally for from global if import lambda pass raise\nreturn try while with yield\n\n# Python 2 Keywords (otherwise Identifiers)\nexec print\n\n# Python 3 Keywords (otherwise Identifiers)\nnonlocal\n\n# Types\nbool classmethod complex dict enumerate float frozenset int list object\nproperty reversed set slice staticmethod str super tuple type\n\n# Python 2 Types (otherwise Identifiers)\nbasestring buffer file long unicode xrange\n\n# Python 3 Types (otherwise Identifiers)\nbytearray bytes filter map memoryview open range zip\n\n# Some Example code\nimport os\nfrom package import ParentClass\n\n@nonsenseDecorator\ndef doesNothing():\n    pass\n\nclass ExampleClass(ParentClass):\n    @staticmethod\n    def example(inputStr):\n        a = list(inputStr)\n        a.reverse()\n        return ''.join(a)\n\n    def __init__(self, mixin = 'Hello'):\n        self.mixin = mixin\n\n# Python 3.6 f-strings (https://www.python.org/dev/peps/pep-0498/)\nf'My name is {name}, my age next year is {age+1}, my anniversary is {anniversary:%A, %B %d, %Y}.'\nf'He said his name is {name!r}.'\nf\"\"\"He said his name is {name!r}.\"\"\"\nf'{\"quoted string\"}'\nf'{{ {4*10} }}'\nf'This is an error }'\nf'This is ok }}'\nfr'x={4*10}\n'\n\n"}}]);
//# sourceMappingURL=572.dd97583f.chunk.js.map