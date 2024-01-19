exports.data = {
  json: {
    kind: "Snippet",
    body: [
      '"van-goods-action-button": "@vant/weapp/goods-action-button/index"',
    ],
    detail: "GoodsAction 商品导航 GoodsActionButton",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-goods-action-button text="加入购物车" type="warning"${1}/>'],
    detail: "GoodsAction 商品导航 GoodsActionButton",
    documentation: `GoodsActionButton`,
    attrs: [
      /**
       * GoodsActionButton Props
        参数	说明	类型	默认值
        text	按钮文字	string	-
        color	按钮颜色，支持传入 linear-gradient 渐变色	string	-
        url	点击后跳转的链接地址	string	-
        link-type	链接跳转类型，可选值为 redirectTo switchTab reLaunch	string	navigateTo
        id	标识符	string	-
        button-id v1.10.25	标识符，作为原生button组件的id值	string	-
        type	按钮类型，可选值为 primary warning danger	string	danger
        plain	是否为朴素按钮	boolean	false
        size	按钮尺寸，可选值为 normal large small mini	string	normal
        disabled	是否禁用按钮	boolean	false
        loading	是否显示为加载状态	boolean	false
        open-type	微信开放能力，具体支持可参考 微信官方文档	string	-
        app-parameter	打开 APP 时，向 APP 传递的参数	string	-
        lang	指定返回用户信息的语言，zh_CN 简体中文，
        zh_TW 繁体中文，en 英文	string	en
        session-from	会话来源	string	-
        send-message-title	会话内消息卡片标题	string	当前标题
        send-message-path	会话内消息卡片点击跳转小程序路径	string	当前分享路径
        send-message-img	sendMessageImg	string	截图
        show-message-card	显示会话内消息卡片	string	false
        custom-style v1.11.3	自定义样式	string	''
       */
      {
        kind: "Field",
        body: ["text="],
        detail: "text",
        documentation: "按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "按钮颜色，支持传入 linear-gradient 渐变色",
        vals: null,
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
        body: ["id="],
        detail: "id",
        documentation: "标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["button-id="],
        detail: "button-id v1.10.25",
        documentation: "标识符，作为原生button组件的id值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "按钮类型，可选值为 primary warning danger",
        vals: {
          kind: "Value",
          body: ["primary", "warning", "danger"],
          detail: "",
          documentation: "",
        },
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
        vals: null,
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
        body: ["custom-style="],
        detail: "custom-style v1.11.3",
        documentation: "自定义样式",
        vals: null,
      },
      /**
       * Events
        事件名	说明	参数
        bind:click	按钮点击事件回调	-
       */
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "按钮点击事件回调",
        vals: null,
      },
      /**
       * GoodsActionButton 外部样式类
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
