exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-collapse": "@vant/weapp/collapse/index"'],
    detail: "Collapse 折叠面板",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-collapse value="{{ ${1:activeNames} }}"${2}></van-collapse>'],
    detail: "Collapse 折叠面板",
    documentation: `将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。`,
    attrs: [
      /**
       * Collapse Props
        参数	说明	类型	默认值
        value	当前展开面板的 name	非手风琴模式：(string | number)[]
        手风琴模式：string | number	-
        accordion	是否开启手风琴模式	boolean	false
        border	是否显示外边框	boolean	true
       */
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前展开面板的 name",
        vals: null,
      },
      {
        kind: "Field",
        body: ["accordion="],
        detail: "accordion",
        documentation: "是否开启手风琴模式",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否显示外边框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Collapse Event
        事件名	说明	参数
        change	切换面板时触发	activeNames: string | Array
        open	展开面板时触发	currentName: string | number
        close	关闭面板时触发	currentName: string | number
       */
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "切换面板时触发",
        documentation: "activeNames: string | Array",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:open"],
        detail: "展开面板时触发",
        documentation: "currentName: string | number",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close"],
        detail: "关闭面板时触发",
        documentation: "currentName: string | number",
        vals: null,
      },

      /**
       * Collapse 外部样式类
        类名	说明
        custom-class	根节点样式类
       */
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
    ],
  },
};
