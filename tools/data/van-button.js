exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-button": "@vant/weapp/button/index"'],
    detail: "Button 按钮",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-button${1}>${2:默认按钮}</van-button>"],
    detail: "Button 按钮",
    documentation: `按钮用于触发一个操作，如提交表单。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        id	标识符	string	-
        button-id v1.10.25	标识符，作为原生button组件的id值	string	-
        type	按钮类型，可选值为 primary info warning danger	string	default
        size	按钮尺寸，可选值为 normal large small mini	string	normal
        color v1.0.0	按钮颜色，支持传入linear-gradient渐变色	string	-
        icon	左侧图标名称或图片链接，可选值见 Icon 组件	string	-
        class-prefix	图标类名前缀，同 Icon 组件的 class-prefix 属性	string	van-icon
        plain	是否为朴素按钮	boolean	false
        block	是否为块级元素	boolean	false
        round	是否为圆形按钮	boolean	false
        square	是否为方形按钮	boolean	false
        disabled	是否禁用按钮	boolean	false
        hairline	是否使用 0.5px 边框	boolean	false
        loading	是否显示为加载状态	boolean	false
        loading-text	加载状态提示文字	string	-
        loading-type	加载状态图标类型，可选值为 spinner	string	circular
        loading-size	加载图标大小	string	20px
        custom-style	自定义样式	string	-
        open-type	微信开放能力，具体支持可参考 微信官方文档	string	-
        app-parameter	打开 APP 时，向 APP 传递的参数	string	-
        lang	指定返回用户信息的语言，zh_CN 简体中文，
        zh_TW 繁体中文，en 英文	string	en
        session-from	会话来源	string	-
        business-id	客服消息子商户 id	number	-
        send-message-title	会话内消息卡片标题	string	当前标题
        send-message-path	会话内消息卡片点击跳转小程序路径	string	当前分享路径
        send-message-img	sendMessageImg	string	截图
        show-message-card	显示会话内消息卡片	string	false
        dataset	按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值	any	-
        form-type	用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件	string	-
       */
      {
        kind: "Field",
        body: ["id="],
        detail: "id",
        documentation: "标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["button-id="],
        detail: "button-id",
        documentation: "标识符，作为原生button组件的id值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "按钮类型，可选值为 primary info warning danger",
        vals: {
          kind: "Value",
          body: ["default", "primary", "info", "warning", "danger"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "按钮尺寸，可选值为 normal large small mini",
        vals: {
          kind: "Value",
          body: ["normal", "large", "small", "mini"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "按钮颜色，支持传入linear-gradient渐变色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["icon="],
        detail: "icon",
        documentation: "左侧图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["class-prefix="],
        detail: "class-prefix",
        documentation: "图标类名前缀，同 Icon 组件的 class-prefix 属性",
        vals: null,
      },
      {
        kind: "Field",
        body: ["plain="],
        detail: "plain",
        documentation: "是否为朴素按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["block="],
        detail: "block",
        documentation: "是否为块级元素",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["round="],
        detail: "round",
        documentation: "是否为圆形按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["square="],
        detail: "square",
        documentation: "是否为方形按钮",
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
        body: ["hairline="],
        detail: "hairline",
        documentation: "是否使用 0.5px 边框",
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
        documentation: "是否显示为加载状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["loading-text="],
        detail: "loading-text",
        documentation: "加载状态提示文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["loading-type="],
        detail: "loading-type",
        documentation: "加载状态图标类型，可选值为 spinner",
        vals: {
          kind: "Value",
          body: ["circular", "spinner"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["loading-size="],
        detail: "loading-size",
        documentation: "加载图标大小",
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
        body: ["open-type="],
        detail: "open-type",
        documentation: "微信开放能力，具体支持可参考 微信官方文档",
        vals: null,
      },
      {
        kind: "Field",
        body: ["app-parameter="],
        detail: "app-parameter",
        documentation: "打开 APP 时，向 APP 传递的参数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["lang="],
        detail: "lang",
        documentation:
          "指定返回用户信息的语言，zh_CN 简体中文，zh_TW 繁体中文，en 英文",
        vals: {
          kind: "Value",
          body: ["zh_CN", "zh_TW", "en"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["session-from="],
        detail: "session-from",
        documentation: "会话来源",
        vals: null,
      },
      {
        kind: "Field",
        body: ["business-id="],
        detail: "business-id",
        documentation: "客服消息子商户 id",
        vals: null,
      },
      {
        kind: "Field",
        body: ["send-message-title="],
        detail: "send-message-title",
        documentation: "会话内消息卡片标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["send-message-path="],
        detail: "send-message-path",
        documentation: "会话内消息卡片点击跳转小程序路径",
        vals: null,
      },
      {
        kind: "Field",
        body: ["send-message-img="],
        detail: "send-message-img",
        documentation: "sendMessageImg",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-message-card="],
        detail: "show-message-card",
        documentation: "显示会话内消息卡片",
        vals: null,
      },
      {
        kind: "Field",
        body: ["dataset="],
        detail: "dataset",
        documentation:
          "按钮 dataset，open-type 为 share 时，可在 onShareAppMessage 事件的 event.target.dataset.detail 中看到传入的值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["form-type="],
        detail: "form-type",
        documentation:
          "用于 form 组件，可选值为submit reset，点击分别会触发 form 组件的 submit/reset 事件",
        vals: {
          kind: "Value",
          body: ["submit", "reset"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	参数
        bind:click	点击按钮，且按钮状态不为加载或禁用时触发	-
        bind:getuserinfo	用户点击该按钮时，会返回获取到的用户信息，
        从返回参数的 detail 中获取到的值同 wx.getUserInfo	-
        bind:contact	客服消息回调	-
        bind:getphonenumber	获取用户手机号回调	-
        bind:getrealtimephonenumber v1.10.21	获取手机号实时验证回调，open-type=getRealtimePhoneNumber 时有效	-
        bind:agreeprivacyauthorization v1.10.24	同意隐私协议回调，openType="agreePrivacyAuthorization"时有效	-
        bind:error	当使用开放能力时，发生错误的回调	-
        bind:opensetting	在打开授权设置页后回调	-
        bind:chooseavatar	当 open-type 的值为 chooseAvatar 时，选择头像之后的回调
       */
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "点击按钮，且按钮状态不为加载或禁用时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getuserinfo="],
        detail: "bind:getuserinfo",
        documentation:
          "用户点击该按钮时，会返回获取到的用户信息，从返回参数的 detail 中获取到的值同 wx.getUserInfo",
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
      {
        kind: "Event",
        body: ["bind:chooseavatar="],
        detail: "bind:chooseavatar",
        documentation:
          "当 open-type 的值为 chooseAvatar 时，选择头像之后的回调",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        loading-class	加载图标样式类
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
        body: ["loading-class="],
        detail: "loading-class",
        documentation: "加载图标样式类",
        vals: null,
      },
    ],
  },
};
