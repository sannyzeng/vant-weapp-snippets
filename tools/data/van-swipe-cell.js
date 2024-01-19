exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-swipe-cell": "@vant/weapp/swipe-cell/index"'],
    detail: "SwipeCell 滑动单元格",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-swipe-cell right-width="{{ ${1:65} }}" left-width="{{ ${2:65} }}"${3}>',
      '<view slot="left">选择</view>',
      "<van-cell-group>",
      '<van-cell title="单元格" value="内容" />',
      "</van-cell-group>",
      '<view slot="right">删除</view>',
      "</van-swipe-cell>",
    ],
    detail: "SwipeCell 滑动单元格",
    documentation: `可以左右滑动来展示操作按钮的单元格组件。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	标识符，可以在 close 事件的参数中获取到	string | number	-
        left-width	左侧滑动区域宽度	number	0
        right-width	右侧滑动区域宽度	number	0
        async-close	是否异步关闭	boolean	false
        disabled v1.3.4	是否禁用滑动	boolean	false
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "标识符，可以在 close 事件的参数中获取到",
        vals: null,
      },
      {
        kind: "Field",
        body: ["left-width="],
        detail: "left-width",
        documentation: "左侧滑动区域宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["right-width="],
        detail: "right-width",
        documentation: "右侧滑动区域宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["async-close="],
        detail: "async-close",
        documentation: "是否异步关闭",
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
        documentation: "是否禁用滑动",
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
        bind:click	点击时触发	关闭时的点击位置 (left right cell outside)
        bind:close	关闭时触发	{ position: 'left' | 'right' , instance , name: string }
        bind:open	打开时触发	{ position: 'left' | 'right' , name: string }
       */
      {
        kind: "Event",
        body: ["bind:click"],
        detail: "点击时触发",
        documentation: "关闭时的点击位置 (left right cell outside)",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close"],
        detail: "关闭时触发",
        documentation:
          "{ position: 'left' | 'right' , instance , name: string }",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:open"],
        detail: "打开时触发",
        documentation: "{ position: 'left' | 'right' , name: string }",
        vals: null,
      },
    ],
    /**
     * Slot
      名称	说明
      -	自定义显示内容
      left	左侧滑动内容
      right	右侧滑动内容
     */
    slot: {
      kind: "Value",
      body: ["left", "right"],
      detail: "SwipeCell 滑动单元格 Slot",
      documentation: `
      -	自定义显示内容
      left	左侧滑动内容
      right	右侧滑动内容
      `,
      vals: null,
    },
  },
};
