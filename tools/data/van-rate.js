exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-rate": "@vant/weapp/rate/index"'],
    detail: "Rate 评分",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-rate value="{{ ${1:value} }}"${2} />'],
    detail: "Rate 评分",
    documentation: `用于对事物进行评级操作。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符	string	-
        value	当前分值	number	-
        count	图标总数	number	5
        size	图标大小，默认单位为 px	string | number	20px
        gutter	图标间距，默认单位为 px	string | number	4px
        color	选中时的颜色	string	#ffd21e
        void-color	未选中时的颜色	string	#c7c7c7
        icon	选中时的图标名称或图片链接，可选值见 Icon 组件	string	star
        void-icon	未选中时的图标名称或图片链接，可选值见 Icon 组件	string	star-o
        allow-half	是否允许半选	boolean	false
        readonly	是否为只读状态	boolean	false
        disabled	是否禁用评分	boolean	false
        disabled-color	禁用时的颜色	string	#bdbdbd
        touchable	是否可以通过滑动手势选择评分	boolean	true
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "在表单内提交时的标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前分值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["count="],
        detail: "count",
        documentation: "图标总数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "图标大小，默认单位为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["gutter="],
        detail: "gutter",
        documentation: "图标间距，默认单位为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "选中时的颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["void-color="],
        detail: "void-color",
        documentation: "未选中时的颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon="],
        detail: "icon",
        documentation: "选中时的图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["void-icon="],
        detail: "void-icon",
        documentation: "未选中时的图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["allow-half="],
        detail: "allow-half",
        documentation: "是否允许半选",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["readonly="],
        detail: "readonly",
        documentation: "是否为只读状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用评分",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disabled-color="],
        detail: "disabled-color",
        documentation: "禁用时的颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["touchable="],
        detail: "touchable",
        documentation: "是否可以通过滑动手势选择评分",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名称	说明	回调参数
        bind:change	当前分值变化时触发的事件	event.detail:当前分值
       */
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "onChange",
        documentation: "当前分值变化时触发的事件",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        icon-class	图标样式类
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
        body: ["icon-class="],
        detail: "icon-class",
        documentation: "图标样式类",
        vals: null,
      },
    ],
  },
};
