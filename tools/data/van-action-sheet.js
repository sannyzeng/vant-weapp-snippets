exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-action-sheet": "@vant/weapp/action-sheet/index"'],
    detail: "ActionSheet 动作面板",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-action-sheet show="{{ ${1:show} }}" actions="{{ ${2:actions} }}"${3} />',
    ],
    detail: "ActionSheet 动作面板",
    documentation: `底部弹起的模态面板，包含与当前情境相关的多个选项。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        show	是否显示动作面板	boolean	-
        actions	菜单选项	Array	[]
        title	标题	string	-
        description v1.0.0	选项上方的描述信息	string	-
        z-index	z-index 层级	number	100
        cancel-text	取消按钮文字	string	-
        overlay	是否显示遮罩层	boolean	-
        round v1.0.0	是否显示圆角	boolean	true
        close-on-click-action	是否在点击选项后关闭	boolean	true
        close-on-click-overlay	点击遮罩是否关闭菜单	boolean	true
        safe-area-inset-bottom	是否为 iPhoneX 留出底部安全距离	boolean	true
        root-portal v1.11.3	是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false

       */
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否显示动作面板",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["actions="],
        detail: "actions",
        documentation: "菜单选项",
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
        body: ["description="],
        detail: "description",
        documentation: "选项上方的描述信息",
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
        body: ["cancel-text="],
        detail: "cancel-text",
        documentation: "取消按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["overlay="],
        detail: "overlay",
        documentation: "是否显示遮罩层",
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
        documentation: "是否显示圆角",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["close-on-click-action="],
        detail: "close-on-click-action",
        documentation: "是否在点击选项后关闭",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["close-on-click-overlay="],
        detail: "close-on-click-overlay",
        documentation: "点击遮罩是否关闭菜单",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
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
        body: ["root-portal="],
        detail: "root-portal",
        documentation:
          "是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 ",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * Events
        事件名	说明	参数
        bind:select	选中选项时触发，禁用或加载状态下不会触发	event.detail: 选项对应的对象
        bind:close	关闭时触发	-
        bind:cancel	取消按钮点击时触发	-
        bind:click-overlay	点击遮罩层时触发	-
        bind:getuserinfo	用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效	-
        bind:contact	客服消息回调，openType="contact"时有效	-
        bind:getphonenumber	获取用户手机号回调，openType="getPhoneNumber"时有效	-
        bind:getrealtimephonenumber v1.10.21	获取手机号实时验证回调，openType="getRealtimePhoneNumber"时有效	-
        bind:agreeprivacyauthorization v1.10.24	同意隐私协议回调，openType="agreePrivacyAuthorization"时有效	-
        bind:error	当使用开放能力时，发生错误的回调，openType="launchApp"时有效	-
        bind:launchapp	打开 APP 成功的回调，openType="launchApp"时有效	-
        bind:opensetting	在打开授权设置页后回调，openType="openSetting"时有效
       */
      {
        kind: "Event",
        body: ["bind:select="],
        detail: "bind:select",
        documentation: "选中选项时触发，禁用或加载状态下不会触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "关闭时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:cancel="],
        detail: "bind:cancel",
        documentation: "取消按钮点击时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-overlay="],
        detail: "bind:click-overlay",
        documentation: "点击遮罩层时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getuserinfo="],
        detail: "bind:getuserinfo",
        documentation:
          '用户点击该按钮时，会返回获取到的用户信息，回调的 detail 数据与 wx.getUserInfo 返回的一致，openType="getUserInfo"时有效',
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:contact="],
        detail: "bind:contact",
        documentation: '客服消息回调，openType="contact"时有效',
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getphonenumber="],
        detail: "bind:getphonenumber",
        documentation: '获取用户手机号回调，openType="getPhoneNumber"时有效',
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:getrealtimephonenumber="],
        detail: "bind:getrealtimephonenumber",
        documentation:
          '获取手机号实时验证回调，openType="getRealtimePhoneNumber"时有效',
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
        documentation:
          '当使用开放能力时，发生错误的回调，openType="launchApp"时有效',
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:launchapp="],
        detail: "bind:launchapp",
        documentation: '打开 APP 成功的回调，openType="launchApp"时有效',
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:opensetting="],
        detail: "bind:opensetting",
        documentation: '在打开授权设置页后回调，openType="openSetting"时有效',
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class v1.10.7	根节点样式类
        list-class v1.10.7	actions容器样式类
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
        body: ["list-class="],
        detail: "list-class",
        documentation: "actions容器样式类",
        vals: null,
      },
    ],
  },
};
