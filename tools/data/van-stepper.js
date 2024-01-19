exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-stepper": "@vant/weapp/stepper/index"'],
    detail: "Stepper 步进器",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-stepper value="{{ ${1:1} }}"${2}>${3}</van-stepper>'],
    detail: "Stepper 步进器",
    documentation: `步进器由增加按钮、减少按钮和输入框组成，用于在一定范围内输入、调整数字。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符	string	-
        value	输入值	string | number	最小值
        min	最小值	string | number	1
        max	最大值	string | number	-
        step	步长	string | number	1
        integer	是否只允许输入整数	boolean	false
        disabled	是否禁用	boolean	false
        disable-input	是否禁用输入框	boolean	false
        async-change	是否开启异步变更，开启后需要手动控制输入值	boolean	false
        input-width	输入框宽度，默认单位为 px	string | number	32px
        button-size	按钮大小，默认单位为 px，输入框高度会和按钮大小保持一致	string | number	28px
        show-plus	是否显示增加按钮	boolean	true
        show-minus	是否显示减少按钮	boolean	true
        decimal-length	固定显示的小数位数	number	-
        theme	样式风格，可选值为 round	string	-
        disable-plus	是否禁用增加按钮	boolean	-
        disable-minus	是否禁用减少按钮	boolean	-
        long-press	是否开启长按手势	boolean	true
        always-embed v1.9.3	强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)	boolean	false
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
        documentation: "输入值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["min="],
        detail: "min",
        documentation: "最小值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max="],
        detail: "max",
        documentation: "最大值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["step="],
        detail: "step",
        documentation: "步长",
        vals: null,
      },
      {
        kind: "Field",
        body: ["integer="],
        detail: "integer",
        documentation: "是否只允许输入整数",
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
        documentation: "是否禁用",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disable-input="],
        detail: "disable-input",
        documentation: "是否禁用输入框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["async-change="],
        detail: "async-change",
        documentation: "是否开启异步变更，开启后需要手动控制输入值",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["input-width="],
        detail: "input-width",
        documentation: "输入框宽度，默认单位为 px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["button-size="],
        detail: "button-size",
        documentation:
          "按钮大小，默认单位为 px，输入框高度会和按钮大小保持一致",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-plus="],
        detail: "show-plus",
        documentation: "是否显示增加按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-minus="],
        detail: "show-minus",
        documentation: "是否显示减少按钮",
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
        documentation: "固定显示的小数位数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["theme="],
        detail: "theme",
        documentation: "样式风格，可选值为 round",
        vals: {
          kind: "Value",
          body: ["round"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disable-plus="],
        detail: "disable-plus",
        documentation: "是否禁用增加按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disable-minus="],
        detail: "disable-minus",
        documentation: "是否禁用减少按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["long-press="],
        detail: "long-press",
        documentation: "是否开启长按手势",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["always-embed="],
        detail: "always-embed",
        documentation:
          "强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	回调参数
        bind:change	当绑定值变化时触发的事件	event.detail: 当前输入的值
        bind:overlimit	点击不可用的按钮时触发	-
        bind:plus	点击增加按钮时触发	-
        bind:minus	点击减少按钮时触发	-
        bind:focus	输入框聚焦时触发	-
        bind:blur	输入框失焦时触发
       */
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "当绑定值变化时触发的事件",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:overlimit="],
        detail: "bind:overlimit",
        documentation: "点击不可用的按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:plus="],
        detail: "bind:plus",
        documentation: "点击增加按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:minus="],
        detail: "bind:minus",
        documentation: "点击减少按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:focus="],
        detail: "bind:focus",
        documentation: "输入框聚焦时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:blur="],
        detail: "bind:blur",
        documentation: "输入框失焦时触发",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        input-class	输入框样式类
        plus-class	加号按钮样式类
        minus-class	减号按钮样式类
       */
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
      // input-class
      {
        kind: "Field",
        body: ["input-class="],
        detail: "input-class",
        documentation: "输入框样式类",
        vals: null,
      },
      // plus-class
      {
        kind: "Field",
        body: ["plus-class="],
        detail: "plus-class",
        documentation: "加号按钮样式类",
        vals: null,
      },
      // minus-class
      {
        kind: "Field",
        body: ["minus-class="],
        detail: "minus-class",
        documentation: "减号按钮样式类",
        vals: null,
      },
    ],
    /**
     * Slot
      名称	说明
      plus	加号按钮
      minus	减号按钮
     */
    slot: {
      kind: "Value",
      body: ["plus", "minus"],
      detail: "Stepper 步进器 Slot",
      documentation: `
      plus	加号按钮
      minus	减号按钮
      `,
      vals: null,
    },
  },
};
