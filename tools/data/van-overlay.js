exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-overlay": "@vant/weapp/overlay/index"'],
    detail: "Overlay 遮罩层",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-overlay show="{{ ${1:show} }}"${2} />'],
    detail: "Overlay 遮罩层",
    documentation: `创建一个遮罩层，用于强调特定的页面元素，并阻止用户进行其他操作。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        show	是否展示遮罩层	boolean	false
        z-index	z-index 层级	string | number	1
        duration	动画时长，单位秒	string | number	0.3
        class-name	自定义类名	string	-
        custom-style	自定义样式	string	-
        lock-scroll v1.7.3	是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动	boolean	true
        root-portal v1.10.14	是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false
       */
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
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
        body: ["z-index="],
        detail: "z-index",
        documentation: "z-index 层级",
        vals: null,
      },
      {
        kind: "Field",
        body: ["duration="],
        detail: "duration",
        documentation: "动画时长，单位秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["class-name="],
        detail: "class-name",
        documentation: "自定义类名",
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
        body: ["lock-scroll="],
        detail: "lock-scroll",
        documentation: "是否锁定背景滚动，锁定时蒙层里的内容也将无法滚动",
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
          "是否从页面中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 ",
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
        bind:click	点击时触发	-
       */
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "点击时触发",
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
  },
};
