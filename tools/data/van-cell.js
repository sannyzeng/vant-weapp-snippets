exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-cell": "@vant/weapp/cell/index"'],
    detail: "Cell 单元格",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-cell${1}>${2}</van-cell>"],
    detail: "Cell 单元格",
    documentation: `单元格为列表中的单个展示项。`,
    attrs: [
      /**
       * Cell Props
        参数	说明	类型	默认值
        icon	左侧图标名称或图片链接，可选值见 Icon 组件	string	-
        title	左侧标题	string | number	-
        title-width	标题宽度，须包含单位	string	-
        value	右侧内容	string | number	-
        label	标题下方的描述信息	string	-
        size	单元格大小，可选值为 large	string	-
        border	是否显示下边框	boolean	true
        center	是否使内容垂直居中	boolean	false
        url	点击后跳转的链接地址	string	-
        link-type	链接跳转类型，可选值为 redirectTo switchTab reLaunch	string	navigateTo
        clickable	是否开启点击反馈	boolean	false
        is-link	是否展示右侧箭头并开启点击反馈	boolean	false
        required	是否显示表单必填星号	boolean	false
        arrow-direction	箭头方向，可选值为 left up down	string	-
        use-label-slot	是否使用 label slot	boolean	false
        title-style v1.4.0	标题样式	string	-
       */
      {
        kind: "Field",
        body: ["icon="],
        detail: "icon",
        documentation: "左侧图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "左侧标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-width="],
        detail: "title-width",
        documentation: "标题宽度，须包含单位",
        vals: null,
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "右侧内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["label="],
        detail: "label",
        documentation: "标题下方的描述信息",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "单元格大小，可选值为 large",
        vals: {
          kind: "Value",
          body: ["large"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否显示下边框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["center="],
        detail: "center",
        documentation: "是否使内容垂直居中",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["url="],
        detail: "url",
        documentation: "点击后跳转的链接地址",
        vals: null,
      },
      {
        kind: "Field",
        body: ["link-type="],
        detail: "link-type",
        documentation: "链接跳转类型，可选值为 redirectTo switchTab reLaunch",
        vals: {
          kind: "Value",
          body: ["redirectTo", "switchTab", "reLaunch"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clickable="],
        detail: "clickable",
        documentation: "是否开启点击反馈",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["is-link="],
        detail: "is-link",
        documentation: "是否展示右侧箭头并开启点击反馈",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["required="],
        detail: "required",
        documentation: "是否显示表单必填星号",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["arrow-direction="],
        detail: "arrow-direction",
        documentation: "箭头方向，可选值为 left up down",
        vals: {
          kind: "Value",
          body: ["left", "up", "down"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-label-slot="],
        detail: "use-label-slot",
        documentation: "是否使用 label slot",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["title-style="],
        detail: "title-style",
        documentation: "标题样式",
        vals: null,
      },
      /**
       * Cell Event
        事件名	说明	参数
        bind:click	点击单元格时触发	-
       */
      {
        kind: "Event",
        body: ["bind:click"],
        detail: "bind:click",
        documentation: "点击单元格时触发",
        vals: null,
      },
      /**
       * Cell 外部样式类
        类名	说明
        custom-class	根节点样式类
        title-class	标题样式类
        label-class	描述信息样式类
        value-class	右侧内容样式类
       */
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-class="],
        detail: "title-class",
        documentation: "标题样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["label-class="],
        detail: "label-class",
        documentation: "描述信息样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["value-class="],
        detail: "value-class",
        documentation: "右侧内容样式类",
        vals: null,
      },
    ],
    /**
     * Cell Slot
      名称	说明
      -	自定义value显示内容，如果设置了value属性则不生效
      title	自定义title显示内容，如果设置了title属性则不生效
      label	自定义label显示内容，需要设置 use-label-slot属性
      icon	自定义icon显示内容，如果设置了icon属性则不生效
      right-icon	自定义右侧按钮，默认是arrow，如果设置了is-link属性则不生效
     */
    slot: {
      kind: "Value",
      body: ["title", "label", "icon", "right-icon"],
      detail: "Cell 单元格 Slot",
      documentation: `
      -	自定义value显示内容，如果设置了value属性则不生效
      title	自定义title显示内容，如果设置了title属性则不生效
      label	自定义label显示内容，需要设置 use-label-slot属性
      icon	自定义icon显示内容，如果设置了icon属性则不生效
      right-icon	自定义右侧按钮，默认是arrow，如果设置了is-link属性则不生效
      `,
      vals: null,
    },
  },
};
