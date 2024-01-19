exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-submit-bar": "@vant/weapp/submit-bar/index"'],
    detail: "SubmitBar 提交订单栏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-submit-bar price="{{ ${1:3050} }}"${2} />'],
    detail: "SubmitBar 提交订单栏",
    documentation: `用于展示订单金额与提交订单。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        price	价格（单位分）	number	-
        label	价格文案	string	合计：
        suffix-label	价格右侧文案	string	-
        button-text	按钮文字	string	-
        button-type	按钮类型	string	danger
        tip	提示文案	string | boolean	-
        tip-icon	图标名称或图片链接，可选值见 Icon 组件	string	-
        disabled	是否禁用按钮	boolean	false
        loading	是否显示加载中的按钮	boolean	false
        currency	货币符号	string	¥
        safe-area-inset-bottom	是否为 iPhoneX 留出底部安全距离	boolean	true
        decimal-length	价格小数点后位数	number	2
       */
      {
        kind: "Field",
        body: ["price="],
        detail: "price",
        documentation: "价格（单位分）",
        vals: null,
      },
      {
        kind: "Field",
        body: ["label="],
        detail: "label",
        documentation: "价格文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["suffix-label="],
        detail: "suffix-label",
        documentation: "价格右侧文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["button-text="],
        detail: "button-text",
        documentation: "按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["button-type="],
        detail: "button-type",
        documentation: "按钮类型",
        vals: {
          kind: "Value",
          body: ["danger", "warning", "primary"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["tip="],
        detail: "tip",
        documentation: "提示文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["tip-icon="],
        detail: "tip-icon",
        documentation: "图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["loading="],
        detail: "loading",
        documentation: "是否显示加载中的按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["currency="],
        detail: "currency",
        documentation: "货币符号",
        vals: null,
      },
      {
        kind: "Field",
        body: ["safe-area-inset-bottom="],
        detail: "safe-area-inset-bottom",
        documentation: "是否为 iPhoneX 留出底部安全距离",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["decimal-length="],
        detail: "decimal-length",
        documentation: "价格小数点后位数",
        vals: null,
      },
      /**
       * Events
        事件名	说明	参数
        bind:submit	按钮点击事件回调	-
       */
      {
        kind: "Event",
        body: ["bind:submit="],
        detail: "bind:submit",
        documentation: "按钮点击事件回调",
        vals: null,
      },
      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        price-class	价格样式类
        button-class	按钮样式类
        bar-class	订单栏样式类
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
        body: ["price-class="],
        detail: "price-class",
        documentation: "价格样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["button-class="],
        detail: "button-class",
        documentation: "按钮样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["bar-class="],
        detail: "bar-class",
        documentation: "订单栏样式类",
        vals: null,
      },
    ],
    /**
     * Slot
      名称	说明
      -	自定义订单栏左侧内容
      top	自定义订单栏上方内容
      tip	提示文案中的额外操作和说明
     */
    slot: {
      kind: "Value",
      body: ["top", "tip"],
      detail: "SubmitBar 提交订单栏 Slot",
      documentation: `
      -	自定义订单栏左侧内容
      top	自定义订单栏上方内容
      tip	提示文案中的额外操作和说明
      `,
      vals: null,
    },
  },
};
