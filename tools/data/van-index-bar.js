exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-index-bar": "@vant/weapp/index-bar/index"'],
    detail: "IndexBar 索引栏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-index-bar${1}>${2}</van-index-bar>"],
    detail: "IndexBar 索引栏",
    documentation: `用于列表的索引分类显示和快速定位。`,
    attrs: [
      /**
       * IndexBar Props
参数	说明	类型	默认值	版本
index-list	索引字符列表	string[] | number[]	A-Z	-
z-index	z-index 层级	number	1	-
sticky	是否开启锚点自动吸顶	boolean	true	-
sticky-offset-top	锚点自动吸顶时与顶部的距离	number	0	-
highlight-color	索引字符高亮颜色	string	#07c160	-

       */
      {
        kind: "Field",
        body: ["index-list="],
        detail: "index-list",
        documentation: "索引字符列表",
        vals: null,
      },
      {
        kind: "Field",
        body: ["z-index="],
        detail: "z-index",
        documentation: "z-index 层级",
        vals: null,
      },
      {
        kind: "Field",
        body: ["sticky="],
        detail: "sticky",
        documentation: "是否开启锚点自动吸顶",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["sticky-offset-top="],
        detail: "sticky-offset-top",
        documentation: "锚点自动吸顶时与顶部的距离",
        vals: null,
      },
      {
        kind: "Field",
        body: ["highlight-color="],
        detail: "highlight-color",
        documentation: "索引字符高亮颜色",
        vals: null,
      },
      /**
       * IndexBar Events
        事件名	说明	回调参数
        select	选中字符时触发	index: 索引字符
       */
      {
        kind: "Event",
        body: ["bind:select"],
        detail: "选中字符时触发",
        documentation: "index: 索引字符",
        vals: null,
      },
    ],
  },
};
