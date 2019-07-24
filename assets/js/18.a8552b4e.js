(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{291:function(t,a,s){"use strict";s.r(a);var n=s(0),e=Object(n.a)({},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("blockquote",[s("p",[t._v("CSS 字体样式相关知识")])]),t._v(" "),s("h1",{attrs:{id:"css-中的文字"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#css-中的文字","aria-hidden":"true"}},[t._v("#")]),t._v(" CSS 中的文字")]),t._v(" "),s("p",[t._v("用于样式文本的 CSS 属性通常可以分为两类，我们将在本文中分别观察。")]),t._v(" "),s("ol",[s("li",[t._v("字体样式: 作用于字体的属性，会直接应用到文本中，比如使用哪种字体，字体的大小是怎样的，字体是粗体还是斜体，等等。")]),t._v(" "),s("li",[t._v("文本布局风格: 作用于文本的间距以及其他布局功能的属性，比如，允许操纵行与字之间的空间，以及在内容框中，文本如何对齐。")])]),t._v(" "),s("h3",{attrs:{id:"字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体","aria-hidden":"true"}},[t._v("#")]),t._v(" 字体")]),t._v(" "),s("h4",{attrs:{id:"颜色"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#颜色","aria-hidden":"true"}},[t._v("#")]),t._v(" 颜色")]),t._v(" "),s("p",[t._v("color 属性设置选中元素的前景内容的颜色 (通常指文本，不过也包含一些其他东西，或者是使用 text-decoration 属性放置在文本下方或上方的线 (underline overline)。")]),t._v(" "),s("h4",{attrs:{id:"字体种类"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体种类","aria-hidden":"true"}},[t._v("#")]),t._v(" 字体种类")]),t._v(" "),s("h5",{attrs:{id:"font-family"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-family","aria-hidden":"true"}},[t._v("#")]),t._v(" font-family")]),t._v(" "),s("p",[s("code",[t._v("font-family")]),t._v(" 这个允许你为浏览器指定一个字体 (或者一个字体的列表)，然后浏览器可以将这种字体应用到选中的元素上。浏览器只会把在当前机器上可用的字体应用到当前正在访问的网站上；如果字体不可用，那么就会用浏览器默认的字体代替 default font.")]),t._v(" "),s("blockquote",[s("p",[t._v("CSS 定义了 5 个常用的字体名称:  serif, sans-serif, monospace, cursive,和 fantasy. "),s("br"),t._v("\n这些都是非常通用的，当使用这些通用名称时，使用的字体完全取决于每个浏览器，而且它们所运行的每个操作系统也会有所不同。"),s("br"),t._v("\n这是一种糟糕的情况，浏览器会尽力提供一个看上去合适的字体。serif, sans-serif 和 monospace 是比较好预测的，"),s("br"),t._v("\n默认的情况应该比较合理，另一方面，cursive 和 fantasy 是不太好预测的，我们建议使用它们的时候应该稍微注意一些，多多测试。")])]),t._v(" "),s("h5",{attrs:{id:"字体栈font-family"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体栈font-family","aria-hidden":"true"}},[t._v("#")]),t._v(" 字体栈font-family")]),t._v(" "),s("p",[t._v("由于你无法保证你想在你的网页上使用的字体的可用性 (甚至一个网络字体可能由于某些原因而出错), 你可以提供一个字体栈 (font stack)，这样的话，浏览器就有多种字体可以选择了。只需包含一个font-family属性，其值由几个用逗号分离的字体名称组成")]),t._v(" "),s("h4",{attrs:{id:"字体大小font-size"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体大小font-size","aria-hidden":"true"}},[t._v("#")]),t._v(" 字体大小font-size")]),t._v(" "),s("ol",[s("li",[t._v("像素px:将像素的值赋予给你的文本。这是一个绝对单位， 它导致了在任何情况下，页面上的文本所计算出来的像素值都是一样的。")]),t._v(" "),s("li",[t._v("em:1em 等于我们设计的当前元素的父元素上设置的字体大小 (更加具体的话，比如包含在父元素中的大写字母 M 的宽度) 。")]),t._v(" "),s("li",[t._v("rems: 这个单位的效果和 ems 差不多，除了 1rem 等于 HTML 中的根元素的字体大小， (i.e. ) ，而不是父元素。不支持ie8 及以下的版本浏览器。")]),t._v(" "),s("li",[t._v("font-size 是继承自父元素的，所以都从 html 元素开始。")])]),t._v(" "),s("blockquote",[s("p",[t._v("将html节点的 font-size 设置成 10px 是不错的选择，方便计算子元素的字体大小。")])]),t._v(" "),s("h4",{attrs:{id:"字体样式、粗细、文本转换和文本装饰"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字体样式、粗细、文本转换和文本装饰","aria-hidden":"true"}},[t._v("#")]),t._v(" 字体样式、粗细、文本转换和文本装饰")]),t._v(" "),s("h5",{attrs:{id:"font-style-设置字体斜体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-style-设置字体斜体","aria-hidden":"true"}},[t._v("#")]),t._v(" font-style 设置字体斜体")]),t._v(" "),s("ol",[s("li",[t._v("normal: 将文本设置为普通字体 (将存在的斜体关闭)")]),t._v(" "),s("li",[t._v("italic: 如果当前字体的斜体版本可用，那么文本设置为斜体版本；如果不可用，那么会利用 oblique 状态来模拟 italics。")]),t._v(" "),s("li",[t._v("oblique: 将文本设置为斜体字体的模拟版本，也就是将普通文本倾斜的样式应用到文本中。")])]),t._v(" "),s("h5",{attrs:{id:"font-weight-设置字体粗细"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-weight-设置字体粗细","aria-hidden":"true"}},[t._v("#")]),t._v(" font-weight 设置字体粗细")]),t._v(" "),s("blockquote",[s("p",[t._v("这里有很多值可选 (比如 -light, -normal, -bold, -extrabold, -black, 等等), 不过事实上你很少会用到 normal 和 bold以外的值")])]),t._v(" "),s("ol",[s("li",[t._v("normal, bold: 普通或者加粗的字体粗细")]),t._v(" "),s("li",[t._v("lighter, bolder: 将当前元素的粗体设置为比其父元素粗体更细或更粗一步。")]),t._v(" "),s("li",[t._v("100–900: 数值粗体值，如果需要，可提供比上述关键字更精细的粒度控制。")])]),t._v(" "),s("h5",{attrs:{id:"text-transform-设置允许转换的字体"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-transform-设置允许转换的字体","aria-hidden":"true"}},[t._v("#")]),t._v(" text-transform 设置允许转换的字体")]),t._v(" "),s("ol",[s("li",[t._v("none: 防止任何转型。")]),t._v(" "),s("li",[t._v("uppercase: 将所有文本转为大写。")]),t._v(" "),s("li",[t._v("lowercase: 将所有文本转为小写。")]),t._v(" "),s("li",[t._v("capitalize: 转换所有单词让其首字母大写。")]),t._v(" "),s("li",[t._v("full-width: 将所有字形转换成固定宽度的正方形，类似于等宽字体，允许对齐。拉丁字符以及亚洲语言字形（如中文，日文，韩文）")])]),t._v(" "),s("h5",{attrs:{id:"text-decoration-设置-取消字体上的文本装饰-你将主要使用此方法在设置链接时取消设置链接上的默认下划线。"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#text-decoration-设置-取消字体上的文本装饰-你将主要使用此方法在设置链接时取消设置链接上的默认下划线。","aria-hidden":"true"}},[t._v("#")]),t._v(" text-decoration 设置/取消字体上的文本装饰 (你将主要使用此方法在设置链接时取消设置链接上的默认下划线。)")]),t._v(" "),s("ol",[s("li",[t._v("none: 取消已经存在的任何文本装饰。")]),t._v(" "),s("li",[t._v("underline: 文本下划线.")]),t._v(" "),s("li",[t._v("overline: 文本上划线")]),t._v(" "),s("li",[t._v("line-through: 穿过文本的线 strikethrough over the text.")])]),t._v(" "),s("blockquote",[s("p",[t._v("它由 text-decoration-line, text-decoration-style 和 text-decoration-color 构成。")])]),t._v(" "),s("h4",{attrs:{id:"文字阴影"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文字阴影","aria-hidden":"true"}},[t._v("#")]),t._v(" 文字阴影")]),t._v(" "),s("p",[t._v("/* offset-x | offset-y | blur-radius | color */\ntext-shadow: 1px 1px 2px black;")]),t._v(" "),s("p",[t._v("color 和 offset+blur 可以交换位置。")]),t._v(" "),s("h4",{attrs:{id:"行高"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#行高","aria-hidden":"true"}},[t._v("#")]),t._v(" 行高")]),t._v(" "),s("p",[s("code",[t._v("line-height")]),t._v(" 设置文本每行之间的高，可以接受大多数单位 ，不过也可以设置一个无单位的值，作为乘数，通常这种是比较好的做法。无单位的值乘以 "),s("code",[t._v("font-size")]),t._v(" 来获得 "),s("code",[t._v("line-height")]),t._v(".")]),t._v(" "),s("h4",{attrs:{id:"字母和单词间距"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#字母和单词间距","aria-hidden":"true"}},[t._v("#")]),t._v(" 字母和单词间距")]),t._v(" "),s("p",[s("code",[t._v("letter-spacing")]),t._v(" 和 "),s("code",[t._v("word-spacing")]),t._v(" 属性允许你设置你的文本中的字母与字母之间的间距、或是单词与单词之间的间距。")]),t._v(" "),s("h4",{attrs:{id:"font-face"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#font-face","aria-hidden":"true"}},[t._v("#")]),t._v(" @font-face { }")]),t._v(" "),s("p",[t._v("通过 URL 设置网络字体，实现非本地化的字体")]),t._v(" "),s("blockquote",[s("p",[t._v("浏览器支持不同的字体格式，因此您需要多种字体格式以获得良好的跨浏览器支持。例如,大多数现代浏览器都支持WOFF / WOFF2(Web\nOpen Font Format versions 1 and 2，Web开放字体格式版本1和2)，它是最有效的格式，但是旧版本IE只支持EOT (Embedded Open Type，嵌入式开放类型)的字体,你可能需要包括一个SVG版本的字体支持旧版本的iPhone和Android浏览器。我们将向您展示如何生成所需的代码。")])]),t._v(" "),s("div",{staticClass:"language-css extra-class"},[s("pre",{pre:!0,attrs:{class:"language-css"}},[s("code",[s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFont"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v('url("myFont.ttf")')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token selector"}},[t._v("html")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"myFont"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"Bitstream Vera Serif"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" serif"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token atrule"}},[s("span",{pre:!0,attrs:{class:"token rule"}},[t._v("@font-face")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-family")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'ciclefina'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('fonts/cicle_fina-webfont.eot')")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("src")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('fonts/cicle_fina-webfont.eot?#iefix')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'embedded-opentype'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('fonts/cicle_fina-webfont.woff2')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'woff2'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('fonts/cicle_fina-webfont.woff')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'woff'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('fonts/cicle_fina-webfont.ttf')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'truetype'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n         "),s("span",{pre:!0,attrs:{class:"token url"}},[t._v("url('fonts/cicle_fina-webfont.svg#ciclefina')")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("format")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'svg'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-weight")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[t._v("font-style")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" normal"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n//不同的 format 可以实现跨浏览器的字体格式兼容，font-weight font-style 可以指定该字体的 字重 和 斜体。\n\n")])])])])},[],!1,null,null,null);a.default=e.exports}}]);