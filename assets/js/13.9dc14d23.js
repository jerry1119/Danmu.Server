(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{795:function(a,t,s){"use strict";s.r(t);var n=s(70),r=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api"}},[a._v("#")]),a._v(" API")]),a._v(" "),s("h2",{attrs:{id:"通用弹幕接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#通用弹幕接口"}},[a._v("#")]),a._v(" 通用弹幕接口")]),a._v(" "),s("p",[a._v("使用通用弹幕接口，需要自己在前端实现弹幕转换。")]),a._v(" "),s("h3",{attrs:{id:"请求弹幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求弹幕"}},[a._v("#")]),a._v(" 请求弹幕")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/v1?id=[id]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/?id=C6CC6218F1FB8770")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/v1/[id]")]),a._v(" ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/C6CC6218F1FB8770")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/v1/[id].[format]")]),a._v(" ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/C6CC6218F1FB8770.xml")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/C6CC6218F1FB8770.json")]),a._v("  (json 格式的弹幕)")])]),a._v(" "),s("h3",{attrs:{id:"发送弹幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送弹幕"}},[a._v("#")]),a._v(" 发送弹幕")]),a._v(" "),s("ul",[s("li",[a._v("接口  "),s("code",[a._v("/api/danmu/v1/")])]),a._v(" "),s("li",[a._v("方法  "),s("code",[a._v("POST")])]),a._v(" "),s("li",[a._v("类型  "),s("code",[a._v("application/json")])]),a._v(" "),s("li",[a._v("参数")])]),a._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C6CC6218F1FB8770"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//视频ID")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("28.48447")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//时间")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"mode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//模式 1-滚动 4-底部 5-顶部")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"size"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//字号")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"color"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("16777215")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//颜色，需转10进制")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"author"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"DIYgod"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//作者")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"authorId"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//作者id，填写时可配合用户系统，待完善")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"弹幕"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//弹幕内容")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"referer"')]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('""')]),a._v("  "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//来源，不填为当前网址，如果是hash导航，需手动填写")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br")])]),s("h3",{attrs:{id:"bilibili-弹幕"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bilibili-弹幕"}},[a._v("#")]),a._v(" BiliBili 弹幕")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/v1/bilibili/?cid=[cid]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/v1/bilibili/danmu.xml?cid=[cid]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/v1/bilibili/danmu.json?cid=[cid]")]),a._v(" ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/bilibili/danmu.xml?cid=1176840")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/v1/bilibili/?aid=[aid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/v1/bilibili/danmu.xml?aid=[aid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/v1/bilibili/danmu.json?aid=[aid]&p=[p]")]),a._v(" ，当 p=1 时可以省略参数 p，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/bilibili/danmu.xml?aid=810872&p=1")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/v1/bilibili/?bvid=[bvid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/v1/bilibili/danmu.xml?bvid=[bvid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/v1/bilibili/danmu.json?bvid=[bvid]&p=[p]")]),a._v(" ，当 p=1 时可以省略参数 p，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/v1/bilibili/danmu.xml?bvid=18b411j72u&p=1")])])]),a._v(" "),s("h2",{attrs:{id:"dplayer-弹幕接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dplayer-弹幕接口"}},[a._v("#")]),a._v(" Dplayer 弹幕接口")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/dplayer/")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/")])])]),a._v(" "),s("h3",{attrs:{id:"bilibili-弹幕接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bilibili-弹幕接口"}},[a._v("#")]),a._v(" BiliBili 弹幕接口")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/dplayer/v3/bilibili/?cid=[cid]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?cid=73636868")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/dplayer/v3/bilibili/?aid=[aid]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?aid=41940944")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/dplayer/v3/bilibili/?aid=[aid]&p=[p]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?aid=41940944&p=1")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/dplayer/v3/bilibili/?bvid=[bvid]&p=[p]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?bvid=18b411j72u&p=1")])])]),a._v(" "),s("h3",{attrs:{id:"bilibili-历史弹幕接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bilibili-历史弹幕接口"}},[a._v("#")]),a._v(" BiliBili 历史弹幕接口")]),a._v(" "),s("blockquote",[s("p",[a._v("需配合 "),s("RouterLink",{attrs:{to:"/danmu/install.html#配置文件解释"}},[a._v("BCookie")]),a._v(" 使用")],1)]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/dplayer/v3/bilibili/?cid=[cid]&date=[date]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?cid=73636868&date=2019-07-26")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/dplayer/v3/bilibili/?cid=[cid]&date=[date0]&date=[date1]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/dplayer/v3/bilibili/?cid=73636868&date=2019-07-26&date=2019-04-01")])]),a._v(" "),s("li",[a._v("使用 aid 方法同理。")]),a._v(" "),s("li",[a._v("使用 bvid 方法同理。")])]),a._v(" "),s("h2",{attrs:{id:"artplayer-弹幕接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#artplayer-弹幕接口"}},[a._v("#")]),a._v(" ArtPlayer 弹幕接口")]),a._v(" "),s("h3",{attrs:{id:"请求弹幕-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#请求弹幕-2"}},[a._v("#")]),a._v(" 请求弹幕")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/artplayer/v1?id=[id]")]),a._v("  ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/?id=C6CC6218F1FB8770")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/artplayer/v1/[id]")]),a._v(" ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/C6CC6218F1FB8770")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/artplayer/v1/[id].[format]")]),a._v(" ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/C6CC6218F1FB8770.xml")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/C6CC6218F1FB8770.json")]),a._v("  (json 格式的弹幕)")])]),a._v(" "),s("h3",{attrs:{id:"发送弹幕-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发送弹幕-2"}},[a._v("#")]),a._v(" 发送弹幕")]),a._v(" "),s("ul",[s("li",[a._v("接口  "),s("code",[a._v("/api/danmu/artplayer/v1/")])]),a._v(" "),s("li",[a._v("方法  "),s("code",[a._v("POST")])]),a._v(" "),s("li",[a._v("类型  "),s("code",[a._v("application/json")])]),a._v(" "),s("li",[a._v("参数")])]),a._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"C6CC6218F1FB8770"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//视频ID")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"text"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"弹幕啊"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//弹幕文本")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"time"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("23.359518")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//时间")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"color"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"#fff"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//颜色")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[a._v('"mode"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("0")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("//弹幕类型 0-滚动 1-固定")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br")])]),s("h3",{attrs:{id:"bilibili-弹幕接口-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bilibili-弹幕接口-2"}},[a._v("#")]),a._v(" BiliBili 弹幕接口")]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/artplayer/v1/bilibili/?cid=[cid]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.xml?cid=[cid]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.json?cid=[cid]")]),a._v(" ，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/bilibili/danmu.xml?cid=1176840")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/artplayer/v1/bilibili/?aid=[aid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.xml?aid=[aid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.json?aid=[aid]&p=[p]")]),a._v(" ，当 p=1 时可以省略参数 p，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/bilibili/danmu.xml?aid=810872&p=1")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/artplayer/v1/bilibili/?bvid=[bvid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.xml?bvid=[bvid]&p=[p]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.json?bvid=[bvid]&p=[p]")]),a._v(" ，当 p=1 时可以省略参数 p，例如"),s("br"),a._v(" "),s("code",[a._v("https://danmu.u2sb.top/api/danmu/artplayer/v1/bilibili/danmu.xml?bvid=18b411j72u&p=1")])])]),a._v(" "),s("h3",{attrs:{id:"bilibili-历史弹幕接口-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bilibili-历史弹幕接口-2"}},[a._v("#")]),a._v(" BiliBili 历史弹幕接口")]),a._v(" "),s("blockquote",[s("p",[a._v("需配合 "),s("RouterLink",{attrs:{to:"/danmu/install.html#配置文件解释"}},[a._v("BCookie")]),a._v(" 使用")],1)]),a._v(" "),s("ul",[s("li",[s("code",[a._v("/api/danmu/artplayer/v1/bilibili/?cid=[cid]&date=[date0]&date=[date1]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.xml?cid=[cid]date=[date0]&date=[date1]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.json?cid=[cid]date=[date0]&date=[date1]")])]),a._v(" "),s("li",[s("code",[a._v("/api/danmu/artplayer/v1/bilibili/?aid=[aid]&p=[p]&date=[date0]&date=[date1]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.xml?aid=[aid]&p=[p]&date=[date0]&date=[date1]")]),a._v(" "),s("br"),a._v(" "),s("code",[a._v("/api/danmu/artplayer/v1/bilibili/danmu.json?aid=[aid]&p=[p]&date=[date0]&date=[date1]")])])]),a._v(" "),s("h3",{attrs:{id:"artplayer-示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#artplayer-示例"}},[a._v("#")]),a._v(" ArtPlayer 示例")]),a._v(" "),s("blockquote",[s("p",[a._v("推荐使用 XML 格式的弹幕，JSON 格式的弹幕需要在服务端做额外的转换")])]),a._v(" "),s("div",{staticClass:"language-js xml格式 line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" art "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Artplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  container"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".artplayer-app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/1.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  autoSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  setting"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  playbackRate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  fullscreenWeb"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("artplayerPluginDanmuku")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      danmuku"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://danmu.u2sb.top/api/danmu/artplayer/v1/bilibili.xml?aid=810872&p=1"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      speed"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      maxlength"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      opacity"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      synchronousPlayback"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br")])]),s("div",{staticClass:"language-js json格式 line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" art "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("new")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Artplayer")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n  container"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('".artplayer-app"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  url"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"/1.mp4"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  autoSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  setting"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  playbackRate"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  fullscreenWeb"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("true")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n  plugins"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("artplayerPluginDanmuku")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n      "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("danmuku")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("fetch")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v('"https://danmu.u2sb.top/api/danmu/artplayer/v1/bilibili.json?aid=810872&p=1"')]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("res")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("json")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n          "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("then")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("res")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=>")]),a._v(" res"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("data"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      speed"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      maxlength"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      margin"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("10")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("100")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      opacity"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      fontSize"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("25")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n      synchronousPlayback"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("false")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br"),s("span",{staticClass:"line-number"},[a._v("4")]),s("br"),s("span",{staticClass:"line-number"},[a._v("5")]),s("br"),s("span",{staticClass:"line-number"},[a._v("6")]),s("br"),s("span",{staticClass:"line-number"},[a._v("7")]),s("br"),s("span",{staticClass:"line-number"},[a._v("8")]),s("br"),s("span",{staticClass:"line-number"},[a._v("9")]),s("br"),s("span",{staticClass:"line-number"},[a._v("10")]),s("br"),s("span",{staticClass:"line-number"},[a._v("11")]),s("br"),s("span",{staticClass:"line-number"},[a._v("12")]),s("br"),s("span",{staticClass:"line-number"},[a._v("13")]),s("br"),s("span",{staticClass:"line-number"},[a._v("14")]),s("br"),s("span",{staticClass:"line-number"},[a._v("15")]),s("br"),s("span",{staticClass:"line-number"},[a._v("16")]),s("br"),s("span",{staticClass:"line-number"},[a._v("17")]),s("br"),s("span",{staticClass:"line-number"},[a._v("18")]),s("br"),s("span",{staticClass:"line-number"},[a._v("19")]),s("br"),s("span",{staticClass:"line-number"},[a._v("20")]),s("br"),s("span",{staticClass:"line-number"},[a._v("21")]),s("br"),s("span",{staticClass:"line-number"},[a._v("22")]),s("br"),s("span",{staticClass:"line-number"},[a._v("23")]),s("br"),s("span",{staticClass:"line-number"},[a._v("24")]),s("br")])]),s("ClientOnly",[s("Vssue",{attrs:{title:"API-danmu | 弹幕服务器文档"}})],1)],1)}),[],!1,null,null,null);t.default=r.exports}}]);