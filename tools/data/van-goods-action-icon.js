exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-goods-action-icon": "@vant/weapp/goods-action-icon/index"'],
    detail: "GoodsAction 商品导航 GoodsActionIcon",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-goods-action-icon icon="chat-o" text="${1:客服}"${2} />'],
    detail: "GoodsAction 商品导航 GoodsActionIcon",
    documentation: `GoodsActionIcon`,
    attrs: [
      /**
       * GoodsActionIcon Props
        参数	说明	类型	默认值
        text	按钮文字	string	-
        icon	图标类型，可选值见icon组件	string	-
        info	图标右上角提示信息	string | number	-
        color v1.10.15	图标颜色	string	inherit
        size	图标大小，如 20px，2em，默认单位为px	string | number	-
        url	点击后跳转的链接地址	string	-
        link-type	链接跳转类型，可选值为 redirectTo switchTab reLaunch	string	navigateTo
        id	标识符	string	-
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
        class-prefix v1.10.1	类名前缀	string	van-icon
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
        body: ["icon="],
        detail: "icon",
        documentation: "图标类型，可选值见icon组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["info="],
        detail: "info",
        documentation: "图标右上角提示信息",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "图标颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "图标大小，如 20px，2em，默认单位为px",
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
        documentation: "链接跳转类型，可选值为 redirectTo、switchTab、reLaunch",
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
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["class-prefix="],
        detail: "class-prefix",
        documentation: "类名前缀",
        vals: null,
      },
      /**
       * GoodsActionIcon 外部样式类
        类名	说明
        icon-class	图标样式类
        text-class	文字样式类
        info-class v1.10.20	图标右上角文字样式类
       */
      {
        kind: "Field",
        body: ["icon-class="],
        detail: "icon-class",
        documentation: "图标样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["text-class="],
        detail: "text-class",
        documentation: "文字样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["info-class="],
        detail: "info-class",
        documentation: "图标右上角文字样式类",
        vals: null,
      },
    ],
    /**
     * GoodsActionIcon Slot
      名称	说明
      icon	自定义图标
     */
    slot: {
      kind: "Value",
      body: ["icon"],
      detail: "GoodsAction 商品导航 GoodsActionIcon Slot",
      documentation: `
      icon	自定义图标
      `,
      vals: null,
    },
  },
};
