exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-calendar": "@vant/weapp/calendar/index"'],
    detail: "Calendar 日历",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-calendar show="{{ ${1:show} }}"${2}>${3}</van-calendar>'],
    detail: "Calendar 日历",
    documentation: "日历组件用于选择日期或日期区间。",
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        type	选择类型:
        single表示选择单个日期，
        multiple表示选择多个日期，
        range表示选择日期区间	string	single
        title	日历标题	string	日期选择
        color	主题色，对底部按钮和选中日期生效	string	#ee0a24
        min-date	可选择的最小日期	timestamp	当前日期
        max-date	可选择的最大日期	timestamp	当前日期的六个月后
        default-date v1.10.21	默认选中的日期，type为multiple或range时为数组，传入 null 表示默认不选择	timestamp | timestamp[] | null	今天
        row-height	日期行高	number | string	64
        formatter	日期格式化函数	(day: Day) => Day	-
        poppable	是否以弹层的形式展示日历	boolean	true
        show-mark	是否显示月份背景水印	boolean	true
        show-title	是否展示日历标题	boolean	true
        show-subtitle	是否展示日历副标题（年月）	boolean	true
        show-confirm	是否展示确认按钮	boolean	true
        confirm-text	确认按钮的文字	string	确定
        confirm-disabled-text	确认按钮处于禁用状态时的文字	string	确定
        first-day-of-week	设置周起始日	0~6	0
        readonly v1.9.1	是否为只读状态，只读状态下不能选择日期	boolean	false
        root-portal v1.11.3	是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false
       */
      // type
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "选择类型",
        vals: {
          kind: "Value",
          body: ["single", "multiple", "range"],
          detail: "",
          documentation: "",
        },
      },
      // title
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "日历标题",
        vals: null,
      },
      // color
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "主题色，对底部按钮和选中日期生效",
        vals: null,
      },
      // min-date
      {
        kind: "Field",
        body: ["min-date="],
        detail: "min-date",
        documentation: "可选择的最小日期",
        vals: null,
      },
      // max-date
      {
        kind: "Field",
        body: ["max-date="],
        detail: "max-date",
        documentation: "可选择的最大日期",
        vals: null,
      },
      // default-date
      {
        kind: "Field",
        body: ["default-date="],
        detail: "default-date",
        documentation:
          "默认选中的日期，type为multiple或range时为数组，传入 null 表示默认不选择",
        vals: null,
      },
      // row-height
      {
        kind: "Field",
        body: ["row-height="],
        detail: "row-height",
        documentation: "日期行高",
        vals: null,
      },
      // formatter
      {
        kind: "Field",
        body: ["formatter="],
        detail: "formatter",
        documentation: "日期格式化函数",
        vals: null,
      },
      // poppable
      {
        kind: "Field",
        body: ["poppable="],
        detail: "poppable",
        documentation: "是否以弹层的形式展示日历",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // show-mark
      {
        kind: "Field",
        body: ["show-mark="],
        detail: "show-mark",
        documentation: "是否显示月份背景水印",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // show-title
      {
        kind: "Field",
        body: ["show-title="],
        detail: "show-title",
        documentation: "是否展示日历标题",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // show-subtitle
      {
        kind: "Field",
        body: ["show-subtitle="],
        detail: "show-subtitle",
        documentation: "是否展示日历副标题（年月）",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // show-confirm
      {
        kind: "Field",
        body: ["show-confirm="],
        detail: "show-confirm",
        documentation: "是否展示确认按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // confirm-text
      {
        kind: "Field",
        body: ["confirm-text="],
        detail: "confirm-text",
        documentation: "确认按钮的文字",
        vals: null,
      },
      // confirm-disabled-text
      {
        kind: "Field",
        body: ["confirm-disabled-text="],
        detail: "confirm-disabled-text",
        documentation: "确认按钮处于禁用状态时的文字",
        vals: null,
      },
      // first-day-of-week
      {
        kind: "Field",
        body: ["first-day-of-week="],
        detail: "first-day-of-week",
        documentation: "设置周起始日",
        vals: null,
      },
      // readonly
      {
        kind: "Field",
        body: ["readonly="],
        detail: "readonly",
        documentation: "是否为只读状态，只读状态下不能选择日期",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // root-portal
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
       * Poppable Props
        当 Calendar 的 poppable 为 true 时，支持以下 props:

        参数	说明	类型	默认值
        show	是否显示日历弹窗	boolean	false
        position	弹出位置，可选值为 top right left	string	bottom
        round	是否显示圆角弹窗	boolean	true
        close-on-click-overlay	是否在点击遮罩层后关闭	boolean	true
        safe-area-inset-bottom	是否开启底部安全区适配	boolean	true
       */
      // show
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否显示日历弹窗",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // position
      {
        kind: "Field",
        body: ["position="],
        detail: "position",
        documentation: "弹出位置，可选值为 top right left",
        vals: {
          kind: "Value",
          body: ["bottom", "top", "right", "left"],
          detail: "",
          documentation: "",
        },
      },
      // round
      {
        kind: "Field",
        body: ["round="],
        detail: "round",
        documentation: "是否显示圆角弹窗",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // close-on-click-overlay
      {
        kind: "Field",
        body: ["close-on-click-overlay="],
        detail: "close-on-click-overlay",
        documentation: "是否在点击遮罩层后关闭",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // safe-area-inset-bottom
      {
        kind: "Field",
        body: ["safe-area-inset-bottom="],
        detail: "safe-area-inset-bottom",
        documentation: "是否开启底部安全区适配",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * 
        Range Props
        当 Calendar 的 type 为 range 时，支持以下 props:

        参数	说明	类型	默认值
        max-range	日期区间最多可选天数，默认无限制	number | string	-
        range-prompt	范围选择超过最多可选天数时的提示文案	string | null	选择天数不能超过 xx 天
        show-range-prompt	范围选择超过最多可选天数时，是否展示提示文案	boolean	true
        allow-same-day	是否允许日期范围的起止时间为同一天	boolean	false
       */
      // max-range
      {
        kind: "Field",
        body: ["max-range="],
        detail: "max-range",
        documentation: "日期区间最多可选天数，默认无限制",
        vals: null,
      },
      // range-prompt
      {
        kind: "Field",
        body: ["range-prompt="],
        detail: "range-prompt",
        documentation: "范围选择超过最多可选天数时的提示文案",
        vals: null,
      },
      // show-range-prompt
      {
        kind: "Field",
        body: ["show-range-prompt="],
        detail: "show-range-prompt",
        documentation: "范围选择超过最多可选天数时，是否展示提示文案",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      // allow-same-day
      {
        kind: "Field",
        body: ["allow-same-day="],
        detail: "allow-same-day",
        documentation: "是否允许日期范围的起止时间为同一天",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Multiple Props
        当 Calendar 的 type 为 multiple 时，支持以下 props:

        参数	说明	类型	默认值
        min-range	日期最少可选天数	number | string	1
       */
      // min-range
      {
        kind: "Field",
        body: ["min-range="],
        detail: "min-range",
        documentation: "日期最少可选天数",
        vals: null,
      },

      /**
       * Events
        事件名	说明	回调参数
        bind:select	点击任意日期时触发	value: Date | Date[]
        bind:unselect	当 Calendar 的 type 为 multiple 时,点击已选中的日期时触发	value: Date
        bind:confirm	日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发	value: Date | Date[]
        bind:open	打开弹出层时触发	-
        bind:close	关闭弹出层时触发	-
        bind:opened	打开弹出层且动画结束后触发	-
        bind:closed	关闭弹出层且动画结束后触发	-
        bind:over-range	范围选择超过最多可选天数时触发	-
        bind:click-subtitle v1.8.1	点击日历副标题时触发	WechatMiniprogram.TouchEvent
       */
      // bind:select
      {
        kind: "Event",
        body: ["bind:select="],
        detail: "bind:select",
        documentation: "点击任意日期时触发",
        vals: null,
      },
      // bind:unselect
      {
        kind: "Event",
        body: ["bind:unselect="],
        detail: "bind:unselect",
        documentation:
          "当 Calendar 的 type 为 multiple 时,点击已选中的日期时触发",
        vals: null,
      },
      // bind:confirm
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation:
          "日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发",
        vals: null,
      },
      // bind:open
      {
        kind: "Event",
        body: ["bind:open="],
        detail: "bind:open",
        documentation: "打开弹出层时触发",
        vals: null,
      },
      // bind:close
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "关闭弹出层时触发",
        vals: null,
      },
      // bind:opened
      {
        kind: "Event",
        body: ["bind:opened="],
        detail: "bind:opened",
        documentation: "打开弹出层且动画结束后触发",
        vals: null,
      },
      // bind:closed
      {
        kind: "Event",
        body: ["bind:closed="],
        detail: "bind:closed",
        documentation: "关闭弹出层且动画结束后触发",
        vals: null,
      },
      // bind:over-range
      {
        kind: "Event",
        body: ["bind:over-range="],
        detail: "bind:over-range",
        documentation: "范围选择超过最多可选天数时触发",
        vals: null,
      },
      // bind:click-subtitle
      {
        kind: "Event",
        body: ["bind:click-subtitle="],
        detail: "bind:click-subtitle",
        documentation: "点击日历副标题时触发",
        vals: null,
      },
    ],
    /**
     * Slots
      名称	说明
      title	自定义标题
      footer	自定义底部区域内容
     */
    slot: {
      kind: "Value",
      body: ["title", "footer"],
      detail: "Calendar 日历 Slot",
      documentation: `
      title	自定义标题
      footer	自定义底部区域内容
      `,
      vals: null,
    },
  },
};
