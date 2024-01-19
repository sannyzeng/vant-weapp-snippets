exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-dialog": "@vant/weapp/dialog/index"'],
    detail: "Dialog 弹出框",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-dialog id="van-dialog">${1}</van-dialog>'],
    detail: "Dialog 弹出框",
    documentation: `弹出模态框，常用于消息提示、消息确认，或在当前页面内完成特定的交互操作，支持函数调用和组件调用两种方式。`,

    /**
     * Slot
      名称	说明
      title	自定义title显示内容，如果设置了title属性则不生效
      confirm-button 1.10.23	自定义confirm-button显示内容，需要 use-confirm-button-slot 为 true
      cancel-button 1.10.23	自定义cancel-button显示内容，需要 use-cancel-button-slot 为 true
     */
    slot: {
      kind: "Value",
      body: ["title", "confirm-button", "cancel-button"],
      detail: "Dialog 弹出框 Slot",
      documentation: `
      title	自定义title显示内容，如果设置了title属性则不生效
      confirm-button 自定义confirm-button显示内容，需要 use-confirm-button-slot 为 true
      cancel-button 自定义cancel-button显示内容，需要 use-cancel-button-slot 为 true
      `,
      vals: null,
    },
    attrs: [
      /**
       * Props
        通过组件调用 Dialog 时，支持以下 Props:

        参数	说明	类型	默认值
        show	是否显示弹窗	boolean	-
        confirm-button-id v1.10.25	确认按钮的标识符，作为底层原生button组件的id值	string	-
        title	标题	string	-
        width	弹窗宽度，默认单位为px	string | number	320px
        message	文本内容，支持通过\n换行	string	-
        theme	样式风格，可选值为round-button	string	default
        message-align	内容对齐方式，可选值为left right	string	center
        z-index	z-index 层级	number	100
        class-name	自定义类名，dialog 在自定义组件内时无效，已废弃，请使用 custom-class 代替，将在 2.0.0 移除	string	''
        custom-style	自定义样式	string	''
        show-confirm-button	是否展示确认按钮	boolean	true
        show-cancel-button	是否展示取消按钮	boolean	false
        confirm-button-text	确认按钮的文案	string	确认
        cancel-button-text	取消按钮的文案	string	取消
        confirm-button-color	确认按钮的字体颜色	string	#ee0a24
        cancel-button-color	取消按钮的字体颜色	string	#333
        overlay	是否展示遮罩层	boolean	true
        overlay-style v1.0.0	自定义遮罩层样式	object	-
        close-on-click-overlay	点击遮罩层时是否关闭弹窗	boolean	false
        use-slot	是否使用自定义内容的插槽	boolean	false
        use-title-slot	是否使用自定义标题的插槽	boolean	false
        use-confirm-button-slot 1.10.23	是否使用自定义确认按钮的插槽	boolean	false
        use-cancel-button-slot 1.10.23	是否使用自定义取消按钮的插槽	boolean	false
        async-close	已废弃，将在 2.0.0 移除，请使用 beforeClose 属性代替	boolean	false
        before-close	关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise	(action) => boolean | Promise<boolean>	-
        transition	动画名称，可选值为fade	string	scale
        confirm-button-open-type	确认按钮的微信开放能力，具体支持可参考 微信官方文档	string	-
        root-portal v1.11.3	是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false
       */

      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否显示弹窗",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["confirm-button-id="],
        detail: "confirm-button-id",
        documentation: "确认按钮的标识符，作为底层原生button组件的id值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["width="],
        detail: "width",
        documentation: "弹窗宽度，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["message="],
        detail: "message",
        documentation: "文本内容，支持通过\n换行",
        vals: null,
      },
      {
        kind: "Field",
        body: ["theme="],
        detail: "theme",
        documentation: "样式风格，可选值为round-button",
        vals: {
          kind: "Value",
          body: ["round-button"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["message-align="],
        detail: "message-align",
        documentation: "内容对齐方式，可选值为left right",
        vals: {
          kind: "Value",
          body: ["left", "right"],
          detail: "",
          documentation: "",
        },
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
        body: ["class-name="],
        detail: "class-name",
        documentation:
          "自定义类名，dialog 在自定义组件内时无效，已废弃，请使用 custom-class 代替，将在 2.0.0 移除",
        vals: null,
      },
      {
        kind: "Field",
        body: ["custom-style="],
        detail: "custom-style",
        documentation: "自定义样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-confirm-button="],
        detail: "show-confirm-button",
        documentation: "是否展示确认按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-cancel-button="],
        detail: "show-cancel-button",
        documentation: "是否展示取消按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["confirm-button-text="],
        detail: "confirm-button-text",
        documentation: "确认按钮的文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cancel-button-text="],
        detail: "cancel-button-text",
        documentation: "取消按钮的文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["confirm-button-color="],
        detail: "confirm-button-color",
        documentation: "确认按钮的字体颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cancel-button-color="],
        detail: "cancel-button-color",
        documentation: "取消按钮的字体颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["overlay="],
        detail: "overlay",
        documentation: "是否展示遮罩层",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["overlay-style="],
        detail: "overlay-style",
        documentation: "自定义遮罩层样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["close-on-click-overlay="],
        detail: "close-on-click-overlay",
        documentation: "点击遮罩层时是否关闭弹窗",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-slot="],
        detail: "use-slot",
        documentation: "是否使用自定义内容的插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-title-slot="],
        detail: "use-title-slot",
        documentation: "是否使用自定义标题的插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-confirm-button-slot="],
        detail: "use-confirm-button-slot",
        documentation: "是否使用自定义确认按钮的插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-cancel-button-slot="],
        detail: "use-cancel-button-slot",
        documentation: "是否使用自定义取消按钮的插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["async-close="],
        detail: "async-close",
        documentation: "已废弃，将在 2.0.0 移除，请使用 beforeClose 属性代替",
        vals: null,
      },
      {
        kind: "Field",
        body: ["before-close="],
        detail: "before-close",
        documentation:
          "关闭前的回调函数，返回 false 可阻止关闭，支持返回 Promise",
        vals: null,
      },
      {
        kind: "Field",
        body: ["transition="],
        detail: "transition",
        documentation: "动画名称，可选值为fade",
        vals: {
          kind: "Value",
          body: ["fade"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["confirm-button-open-type="],
        detail: "confirm-button-open-type",
        documentation: "确认按钮的微信开放能力，具体支持可参考 微信官方文档",
        vals: null,
      },
      {
        kind: "Field",
        body: ["root-portal="],
        detail: "root-portal",
        documentation:
          "是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件	说明	回调参数
        bind:close	弹窗关闭时触发	event.detail: 触发关闭事件的来源，
        枚举为confirm,cancel,overlay
        bind:confirm	点击确认按钮时触发	-
        bind:cancel	点击取消按钮时触发	-
        bind:getuserinfo	点击确认按钮时，会返回获取到的用户信息，
        从返回参数的 detail 中获取到的值同 wx.getUserInfo	-
        bind:contact	客服消息回调	-
        bind:getphonenumber	获取用户手机号回调	-
        bind:getrealtimephonenumber v1.10.21	获取手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效	-
        bind:agreeprivacyauthorization v1.10.25	同意隐私协议回调，openType="agreePrivacyAuthorization"时有效	-
        bind:error	当使用开放能力时，发生错误的回调	-
        bind:opensetting	在打开授权设置页后回调
       */
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "弹窗关闭时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation: "点击确认按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:cancel="],
        detail: "bind:cancel",
        documentation: "点击取消按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getuserinfo="],
        detail: "bind:getuserinfo",
        documentation:
          "点击确认按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:contact="],
        detail: "bind:contact",
        documentation: "客服消息回调",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getphonenumber="],
        detail: "bind:getphonenumber",
        documentation: "获取用户手机号回调",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getrealtimephonenumber="],
        detail: "bind:getrealtimephonenumber",
        documentation:
          "获取手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:agreeprivacyauthorization="],
        detail: "bind:agreeprivacyauthorization",
        documentation:
          '同意隐私协议回调，openType="agreePrivacyAuthorization"时有效',
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:error="],
        detail: "bind:error",
        documentation: "当使用开放能力时，发生错误的回调",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:opensetting="],
        detail: "bind:opensetting",
        documentation: "在打开授权设置页后回调",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class v1.10.8	根节点样式类
        cancle-button-class v1.10.21	取消按钮样式类
        confirm-button-class v1.10.21	确认按钮样式类
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
        body: ["cancle-button-class="],
        detail: "cancle-button-class",
        documentation: "取消按钮样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["confirm-button-class="],
        detail: "confirm-button-class",
        documentation: "确认按钮样式类",
        vals: null,
      },
    ],
  },
  js: {
    kind: "Snippet",
    body: ['import Dialog from "@vant/weapp/dialog/dialog";'],
    detail: "Dialog 弹出框",
    documentation: `import Dialog`,
  },
  functions: [
    {
      kind: "Function",
      body: ["Dialog({title: '${1:标题}',message: '${2:弹窗内容}'});"],
      detail: "Dialog",
      documentation: "Dialog({title: '${1:标题}',message: '${2:弹窗内容}'});",
    },
    {
      kind: "Function",
      body: [
        "Dialog.confirm({",
        "title: '${1:标题}',",
        "message: '${2:弹窗内容}',",
        "})",
        ".then(() => {",
        "// on confirm",
        "${3}",
        "})",
        ".catch(() => {",
        "// on cancel",
        "${4}",
        "});",
      ],
      detail: "Dialog.confirm",
      documentation: "Dialog.confirm",
    },
    {
      kind: "Function",
      body: [
        "Dialog.alert({",
        "title: '${1:标题}',",
        "message: '${2:弹窗内容}',",
        "})",
        ".then(() => {",
        "// on confirm",
        "${3}",
        "})",
      ],
      detail: "Dialog.alert",
      documentation: "Dialog.alert",
    },
    {
      kind: "Function",
      body: ["Dialog.close();"],
      detail: "Dialog.close",
      documentation: "Dialog.close",
    },
    {
      kind: "Function",
      body: ["Dialog.setDefaultOptions({${1}});"],
      detail: "Dialog.setDefaultOptions",
      documentation: "Dialog.setDefaultOptions",
    },
    {
      kind: "Function",
      body: ["Dialog.resetDefaultOptions();"],
      detail: "Dialog.resetDefaultOptions",
      documentation: "Dialog.resetDefaultOptions",
    },
    {
      kind: "Function",
      body: ["Dialog.stopLoading();"],
      detail: "Dialog.stopLoading",
      documentation: "Dialog.stopLoading",
    },
  ],
};
