(this["webpackJsonp@uiw/react-codemirror"]=this["webpackJsonp@uiw/react-codemirror"]||[]).push([[576],{923:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;n.default='.. This is an excerpt from Sphinx documentation: http://sphinx.pocoo.org/_sources/rest.txt\n\n.. highlightlang:: rest\n\n.. _rst-primer:\n\nreStructuredText Primer\n=======================\n\nThis section is a brief introduction to reStructuredText (reST) concepts and\nsyntax, intended to provide authors with enough information to author documents\nproductively.  Since reST was designed to be a simple, unobtrusive markup\nlanguage, this will not take too long.\n\n.. seealso::\n\n   The authoritative `reStructuredText User Documentation\n   <http://docutils.sourceforge.net/rst.html>`_.  The "ref" links in this\n   document link to the description of the individual constructs in the reST\n   reference.\n\n\nParagraphs\n----------\n\nThe paragraph (:duref:`ref <paragraphs>`) is the most basic block in a reST\ndocument.  Paragraphs are simply chunks of text separated by one or more blank\nlines.  As in Python, indentation is significant in reST, so all lines of the\nsame paragraph must be left-aligned to the same level of indentation.\n\n\n.. _inlinemarkup:\n\nInline markup\n-------------\n\nThe standard reST inline markup is quite simple: use\n\n* one asterisk: ``*text*`` for emphasis (italics),\n* two asterisks: ``**text**`` for strong emphasis (boldface), and\n* backquotes: ````text```` for code samples.\n\nIf asterisks or backquotes appear in running text and could be confused with\ninline markup delimiters, they have to be escaped with a backslash.\n\nBe aware of some restrictions of this markup:\n\n* it may not be nested,\n* content may not start or end with whitespace: ``* text*`` is wrong,\n* it must be separated from surrounding text by non-word characters.  Use a\n  backslash escaped space to work around that: ``thisis *one* word``.\n\nThese restrictions may be lifted in future versions of the docutils.\n\nreST also allows for custom "interpreted text roles"\', which signify that the\nenclosed text should be interpreted in a specific way.  Sphinx uses this to\nprovide semantic markup and cross-referencing of identifiers, as described in\nthe appropriate section.  The general syntax is ``:rolename:`content```.\n\nStandard reST provides the following roles:\n\n* :durole:`emphasis` -- alternate spelling for ``*emphasis*``\n* :durole:`strong` -- alternate spelling for ``**strong**``\n* :durole:`literal` -- alternate spelling for ````literal````\n* :durole:`subscript` -- subscript text\n* :durole:`superscript` -- superscript text\n* :durole:`title-reference` -- for titles of books, periodicals, and other\n  materials\n\nSee :ref:`inline-markup` for roles added by Sphinx.\n\n\nLists and Quote-like blocks\n---------------------------\n\nList markup (:duref:`ref <bullet-lists>`) is natural: just place an asterisk at\nthe start of a paragraph and indent properly.  The same goes for numbered lists;\nthey can also be autonumbered using a ``#`` sign::\n\n   * This is a bulleted list.\n   * It has two items, the second\n     item uses two lines.\n\n   1. This is a numbered list.\n   2. It has two items too.\n\n   #. This is a numbered list.\n   #. It has two items too.\n\n\nNested lists are possible, but be aware that they must be separated from the\nparent list items by blank lines::\n\n   * this is\n   * a list\n\n     * with a nested list\n     * and some subitems\n\n   * and here the parent list continues\n\nDefinition lists (:duref:`ref <definition-lists>`) are created as follows::\n\n   term (up to a line of text)\n      Definition of the term, which must be indented\n\n      and can even consist of multiple paragraphs\n\n   next term\n      Description.\n\nNote that the term cannot have more than one line of text.\n\nQuoted paragraphs (:duref:`ref <block-quotes>`) are created by just indenting\nthem more than the surrounding paragraphs.\n\nLine blocks (:duref:`ref <line-blocks>`) are a way of preserving line breaks::\n\n   | These lines are\n   | broken exactly like in\n   | the source file.\n\nThere are also several more special blocks available:\n\n* field lists (:duref:`ref <field-lists>`)\n* option lists (:duref:`ref <option-lists>`)\n* quoted literal blocks (:duref:`ref <quoted-literal-blocks>`)\n* doctest blocks (:duref:`ref <doctest-blocks>`)\n\n\nSource Code\n-----------\n\nLiteral code blocks (:duref:`ref <literal-blocks>`) are introduced by ending a\nparagraph with the special marker ``::``.  The literal block must be indented\n(and, like all paragraphs, separated from the surrounding ones by blank lines)::\n\n   This is a normal text paragraph. The next paragraph is a code sample::\n\n      It is not processed in any way, except\n      that the indentation is removed.\n\n      It can span multiple lines.\n\n   This is a normal text paragraph again.\n\nThe handling of the ``::`` marker is smart:\n\n* If it occurs as a paragraph of its own, that paragraph is completely left\n  out of the document.\n* If it is preceded by whitespace, the marker is removed.\n* If it is preceded by non-whitespace, the marker is replaced by a single\n  colon.\n\nThat way, the second sentence in the above example\'s first paragraph would be\nrendered as "The next paragraph is a code sample:".\n\n\n.. _rst-tables:\n\nTables\n------\n\nTwo forms of tables are supported.  For *grid tables* (:duref:`ref\n<grid-tables>`), you have to "paint" the cell grid yourself.  They look like\nthis::\n\n   +------------------------+------------+----------+----------+\n   | Header row, column 1   | Header 2   | Header 3 | Header 4 |\n   | (header rows optional) |            |          |          |\n   +========================+============+==========+==========+\n   | body row 1, column 1   | column 2   | column 3 | column 4 |\n   +------------------------+------------+----------+----------+\n   | body row 2             | ...        | ...      |          |\n   +------------------------+------------+----------+----------+\n\n*Simple tables* (:duref:`ref <simple-tables>`) are easier to write, but\nlimited: they must contain more than one row, and the first column cannot\ncontain multiple lines.  They look like this::\n\n   =====  =====  =======\n   A      B      A and B\n   =====  =====  =======\n   False  False  False\n   True   False  False\n   False  True   False\n   True   True   True\n   =====  =====  =======\n\n\nHyperlinks\n----------\n\nExternal links\n^^^^^^^^^^^^^^\n\nUse ```Link text <http://example.com/>`_`` for inline web links.  If the link\ntext should be the web address, you don\'t need special markup at all, the parser\nfinds links and mail addresses in ordinary text.\n\nYou can also separate the link and the target definition (:duref:`ref\n<hyperlink-targets>`), like this::\n\n   This is a paragraph that contains `a link`_.\n\n   .. _a link: http://example.com/\n\n\nInternal links\n^^^^^^^^^^^^^^\n\nInternal linking is done via a special reST role provided by Sphinx, see the\nsection on specific markup, :ref:`ref-role`.\n\n\nSections\n--------\n\nSection headers (:duref:`ref <sections>`) are created by underlining (and\noptionally overlining) the section title with a punctuation character, at least\nas long as the text::\n\n   =================\n   This is a heading\n   =================\n\nNormally, there are no heading levels assigned to certain characters as the\nstructure is determined from the succession of headings.  However, for the\nPython documentation, this convention is used which you may follow:\n\n* ``#`` with overline, for parts\n* ``*`` with overline, for chapters\n* ``=``, for sections\n* ``-``, for subsections\n* ``^``, for subsubsections\n* ``"``, for paragraphs\n\nOf course, you are free to use your own marker characters (see the reST\ndocumentation), and use a deeper nesting level, but keep in mind that most\ntarget formats (HTML, LaTeX) have a limited supported nesting depth.\n\n\nExplicit Markup\n---------------\n\n"Explicit markup" (:duref:`ref <explicit-markup-blocks>`) is used in reST for\nmost constructs that need special handling, such as footnotes,\nspecially-highlighted paragraphs, comments, and generic directives.\n\nAn explicit markup block begins with a line starting with ``..`` followed by\nwhitespace and is terminated by the next paragraph at the same level of\nindentation.  (There needs to be a blank line between explicit markup and normal\nparagraphs.  This may all sound a bit complicated, but it is intuitive enough\nwhen you write it.)\n\n\n.. _directives:\n\nDirectives\n----------\n\nA directive (:duref:`ref <directives>`) is a generic block of explicit markup.\nBesides roles, it is one of the extension mechanisms of reST, and Sphinx makes\nheavy use of it.\n\nDocutils supports the following directives:\n\n* Admonitions: :dudir:`attention`, :dudir:`caution`, :dudir:`danger`,\n  :dudir:`error`, :dudir:`hint`, :dudir:`important`, :dudir:`note`,\n  :dudir:`tip`, :dudir:`warning` and the generic :dudir:`admonition`.\n  (Most themes style only "note" and "warning" specially.)\n\n* Images:\n\n  - :dudir:`image` (see also Images_ below)\n  - :dudir:`figure` (an image with caption and optional legend)\n\n* Additional body elements:\n\n  - :dudir:`contents` (a local, i.e. for the current file only, table of\n    contents)\n  - :dudir:`container` (a container with a custom class, useful to generate an\n    outer ``<div>`` in HTML)\n  - :dudir:`rubric` (a heading without relation to the document sectioning)\n  - :dudir:`topic`, :dudir:`sidebar` (special highlighted body elements)\n  - :dudir:`parsed-literal` (literal block that supports inline markup)\n  - :dudir:`epigraph` (a block quote with optional attribution line)\n  - :dudir:`highlights`, :dudir:`pull-quote` (block quotes with their own\n    class attribute)\n  - :dudir:`compound` (a compound paragraph)\n\n* Special tables:\n\n  - :dudir:`table` (a table with title)\n  - :dudir:`csv-table` (a table generated from comma-separated values)\n  - :dudir:`list-table` (a table generated from a list of lists)\n\n* Special directives:\n\n  - :dudir:`raw` (include raw target-format markup)\n  - :dudir:`include` (include reStructuredText from another file)\n    -- in Sphinx, when given an absolute include file path, this directive takes\n    it as relative to the source directory\n  - :dudir:`class` (assign a class attribute to the next element) [1]_\n\n* HTML specifics:\n\n  - :dudir:`meta` (generation of HTML ``<meta>`` tags)\n  - :dudir:`title` (override document title)\n\n* Influencing markup:\n\n  - :dudir:`default-role` (set a new default role)\n  - :dudir:`role` (create a new role)\n\n  Since these are only per-file, better use Sphinx\' facilities for setting the\n  :confval:`default_role`.\n\nDo *not* use the directives :dudir:`sectnum`, :dudir:`header` and\n:dudir:`footer`.\n\nDirectives added by Sphinx are described in :ref:`sphinxmarkup`.\n\nBasically, a directive consists of a name, arguments, options and content. (Keep\nthis terminology in mind, it is used in the next chapter describing custom\ndirectives.)  Looking at this example, ::\n\n   .. function:: foo(x)\n                 foo(y, z)\n      :module: some.module.name\n\n      Return a line of text input from the user.\n\n``function`` is the directive name.  It is given two arguments here, the\nremainder of the first line and the second line, as well as one option\n``module`` (as you can see, options are given in the lines immediately following\nthe arguments and indicated by the colons).  Options must be indented to the\nsame level as the directive content.\n\nThe directive content follows after a blank line and is indented relative to the\ndirective start.\n\n\nImages\n------\n\nreST supports an image directive (:dudir:`ref <image>`), used like so::\n\n   .. image:: gnu.png\n      (options)\n\nWhen used within Sphinx, the file name given (here ``gnu.png``) must either be\nrelative to the source file, or absolute which means that they are relative to\nthe top source directory.  For example, the file ``sketch/spam.rst`` could refer\nto the image ``images/spam.png`` as ``../images/spam.png`` or\n``/images/spam.png``.\n\nSphinx will automatically copy image files over to a subdirectory of the output\ndirectory on building (e.g. the ``_static`` directory for HTML output.)\n\nInterpretation of image size options (``width`` and ``height``) is as follows:\nif the size has no unit or the unit is pixels, the given size will only be\nrespected for output channels that support pixels (i.e. not in LaTeX output).\nOther units (like ``pt`` for points) will be used for HTML and LaTeX output.\n\nSphinx extends the standard docutils behavior by allowing an asterisk for the\nextension::\n\n   .. image:: gnu.*\n\nSphinx then searches for all images matching the provided pattern and determines\ntheir type.  Each builder then chooses the best image out of these candidates.\nFor instance, if the file name ``gnu.*`` was given and two files :file:`gnu.pdf`\nand :file:`gnu.png` existed in the source tree, the LaTeX builder would choose\nthe former, while the HTML builder would prefer the latter.\n\n.. versionchanged:: 0.4\n   Added the support for file names ending in an asterisk.\n\n.. versionchanged:: 0.6\n   Image paths can now be absolute.\n\n\nFootnotes\n---------\n\nFor footnotes (:duref:`ref <footnotes>`), use ``[#name]_`` to mark the footnote\nlocation, and add the footnote body at the bottom of the document after a\n"Footnotes" rubric heading, like so::\n\n   Lorem ipsum [#f1]_ dolor sit amet ... [#f2]_\n\n   .. rubric:: Footnotes\n\n   .. [#f1] Text of the first footnote.\n   .. [#f2] Text of the second footnote.\n\nYou can also explicitly number the footnotes (``[1]_``) or use auto-numbered\nfootnotes without names (``[#]_``).\n\n\nCitations\n---------\n\nStandard reST citations (:duref:`ref <citations>`) are supported, with the\nadditional feature that they are "global", i.e. all citations can be referenced\nfrom all files.  Use them like so::\n\n   Lorem ipsum [Ref]_ dolor sit amet.\n\n   .. [Ref] Book or article reference, URL or whatever.\n\nCitation usage is similar to footnote usage, but with a label that is not\nnumeric or begins with ``#``.\n\n\nSubstitutions\n-------------\n\nreST supports "substitutions" (:duref:`ref <substitution-definitions>`), which\nare pieces of text and/or markup referred to in the text by ``|name|``.  They\nare defined like footnotes with explicit markup blocks, like this::\n\n   .. |name| replace:: replacement *text*\n\nor this::\n\n   .. |caution| image:: warning.png\n                :alt: Warning!\n\nSee the :duref:`reST reference for substitutions <substitution-definitions>`\nfor details.\n\nIf you want to use some substitutions for all documents, put them into\n:confval:`rst_prolog` or put them into a separate file and include it into all\ndocuments you want to use them in, using the :rst:dir:`include` directive.  (Be\nsure to give the include file a file name extension differing from that of other\nsource files, to avoid Sphinx finding it as a standalone document.)\n\nSphinx defines some default substitutions, see :ref:`default-substitutions`.\n\n\nComments\n--------\n\nEvery explicit markup block which isn\'t a valid markup construct (like the\nfootnotes above) is regarded as a comment (:duref:`ref <comments>`).  For\nexample::\n\n   .. This is a comment.\n\nYou can indent text after a comment start to form multiline comments::\n\n   ..\n      This whole indented block\n      is a comment.\n\n      Still in the comment.\n\n\nSource encoding\n---------------\n\nSince the easiest way to include special characters like em dashes or copyright\nsigns in reST is to directly write them as Unicode characters, one has to\nspecify an encoding.  Sphinx assumes source files to be encoded in UTF-8 by\ndefault; you can change this with the :confval:`source_encoding` config value.\n\n\nGotchas\n-------\n\nThere are some problems one commonly runs into while authoring reST documents:\n\n* **Separation of inline markup:** As said above, inline markup spans must be\n  separated from the surrounding text by non-word characters, you have to use a\n  backslash-escaped space to get around that.  See `the reference\n  <http://docutils.sf.net/docs/ref/rst/restructuredtext.html#inline-markup>`_\n  for the details.\n\n* **No nested inline markup:** Something like ``*see :func:`foo`*`` is not\n  possible.\n\n.. rubric:: Footnotes\n'}}]);
//# sourceMappingURL=576.2373227f.chunk.js.map