(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[507],{854:function(n,e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;e.default='# Features of Crystal\n# - Ruby-inspired syntax.\n# - Statically type-checked but without having to specify the type of variables or method arguments.\n# - Be able to call C code by writing bindings to it in Crystal.\n# - Have compile-time evaluation and generation of code, to avoid boilerplate code.\n# - Compile to efficient native code.\n\n# A very basic HTTP server\nrequire "http/server"\n\nserver = HTTP::Server.new(8080) do |request|\n  HTTP::Response.ok "text/plain", "Hello world, got #{request.path}!"\nend\n\nputs "Listening on http://0.0.0.0:8080"\nserver.listen\n\nmodule Foo\n  abstract def abstract_method : String\n\n  @[AlwaysInline]\n  def with_foofoo\n    with Foo.new(self) yield\n  end\n\n  struct Foo\n    def initialize(@foo : ::Foo)\n    end\n\n    def hello_world\n      @foo.abstract_method\n    end\n  end\nend\n\nclass Bar\n  include Foo\n\n  @@foobar = 12345\n\n  def initialize(@bar : Int32)\n  end\n\n  macro alias_method(name, method)\n    def {{ name }}(*args)\n      {{ method }}(*args)\n    end\n  end\n\n  def a_method\n    "Hello, World"\n  end\n\n  alias_method abstract_method, a_method\n\n  def show_instance_vars : Nil\n    {% for var in @type.instance_vars %}\n      puts "@{{ var }} = #{ @{{ var }} }"\n    {% end %}\n  end\nend\n\nclass Baz < Bar; end\n\nlib LibC\n  fun c_puts = "puts"(str : Char*) : Int\nend\n\nbaz = Baz.new(100)\nbaz.show_instance_vars\nbaz.with_foofoo do\n  LibC.c_puts hello_world\nend\n\n'}}]);
//# sourceMappingURL=507.c7c38cf5.chunk.js.map