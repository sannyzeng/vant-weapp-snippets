exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-notice-bar": "@vant/weapp/notice-bar/index"'],
    detail: "NoticeBar 通知栏",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-notice-bar${1} />"],
    detail: "NoticeBar 通知栏",
    documentation: `用于循环播放展示一组消息通知。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        mode	通知栏模式，可选值为 closeable link	string	''
        text	通知文本内容	string	''
        color	通知文本颜色	string	#ed6a0c
        background	滚动条背景	string	#fffbe8
        left-icon	左侧图标名称或图片链接	string	-
        delay	动画延迟时间 (ms)	number	1
        speed	滚动速率 (px/s)	number	60
        scrollable	是否开启滚动播放，内容长度溢出时默认开启	boolean	-
        wrapable	是否开启文本换行，只在禁用滚动时生效	boolean	false
        open-type	微信开放能力	string	navigate
       */
      {
        kind: "Field",
        body: ["mode="],
        detail: "mode",
        documentation: "通知栏模式，可选值为 closeable link",
        vals: {
          kind: "Value",
          body: ["closeable", "link"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["text="],
        detail: "text",
        documentation: "通知文本内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "通知文本颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["background="],
        detail: "background",
        documentation: "滚动条背景",
        vals: null,
      },
      {
        kind: "Field",
        body: ["left-icon="],
        detail: "left-icon",
        documentation: "左侧图标名称或图片链接",
        vals: null,
      },
      {
        kind: "Field",
        body: ["delay="],
        detail: "delay",
        documentation: "动画延迟时间 (ms)",
        vals: null,
      },
      {
        kind: "Field",
        body: ["speed="],
        detail: "speed",
        documentation: "滚动速率 (px/s)",
        vals: null,
      },
      {
        kind: "Field",
        body: ["scrollable="],
        detail: "scrollable",
        documentation: "是否开启滚动播放，内容长度溢出时默认开启",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["wrapable="],
        detail: "wrapable",
        documentation: "是否开启文本换行，只在禁用滚动时生效",
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
        documentation: "微信开放能力",
        vals: null,
      },
      /**
       * Events
        事件名	说明	参数
        bind:click	点击通知栏时触发	event: Event
        bind:close	关闭通知栏时触发	event: Event
       */
      {
        kind: "Event",
        body: ["bind:click"],
        detail: "点击通知栏时触发",
        documentation: "event: Event",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close"],
        detail: "关闭通知栏时触发",
        documentation: "event: Event",
        vals: null,
      },
      /**
       * 外部样式类
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
    /**
     * Slot
      名称	说明
      -	通知文本内容，仅在 text 属性为空时有效
      left-icon	自定义左侧图标
      right-icon	自定义右侧图标
     */
    slot: {
      kind: "Value",
      body: ["left-icon", "right-icon"],
      detail: "NoticeBar 通知栏 Slot",
      documentation: `
      -	通知文本内容，仅在 text 属性为空时有效
      left-icon	自定义左侧图标
      right-icon	自定义右侧图标
      `,
      vals: null,
    },
  },
};
