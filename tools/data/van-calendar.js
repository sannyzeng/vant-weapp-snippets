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
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation:
          "选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间",
        vals: {
          kind: "Value",
          body: ["single", "multiple", "range"],
          detail: "",
          documentation:
            "选择类型:single表示选择单个日期，multiple表示选择多个日期，range表示选择日期区间",
        },
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "日历标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "主题色，对底部按钮和选中日期生效",
        vals: null,
      },
      {
        kind: "Field",
        body: ["min-date="],
        detail: "min-date",
        documentation: "可选择的最小日期",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max-date="],
        detail: "max-date",
        documentation: "可选择的最大日期",
        vals: null,
      },
      {
        kind: "Field",
        body: ["default-date="],
        detail: "default-date",
        documentation: "默认选中的日期，type为multiple或range时为数组",
        vals: null,
      },
      {
        kind: "Field",
        body: ["row-height="],
        detail: "row-height",
        documentation: "日期行高",
        vals: null,
      },
      {
        kind: "Field",
        body: ["formatter="],
        detail: "formatter",
        documentation: "日期格式化函数",
        vals: null,
      },
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
      {
        kind: "Field",
        body: ["confirm-text="],
        detail: "confirm-text",
        documentation: "确认按钮的文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["confirm-disabled-text="],
        detail: "confirm-disabled-text",
        documentation: "确认按钮处于禁用状态时的文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["first-day-of-week="],
        detail: "first-day-of-week",
        documentation: "设置周起始日",
        vals: null,
      },
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
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否显示日历弹窗",
        vals: null,
      },
      {
        kind: "Field",
        body: ["position="],
        detail: "position",
        documentation: "弹出位置，可选值为 top right left bottom",
        vals: {
          kind: "Value",
          body: ["top", "right", "left", "bottom"],
          detail: "",
          documentation: "",
        },
      },
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
      {
        kind: "Field",
        body: ["max-range="],
        detail: "max-range",
        documentation: "日期区间最多可选天数，默认无限制",
        vals: null,
      },
      {
        kind: "Field",
        body: ["range-prompt="],
        detail: "range-prompt",
        documentation: "范围选择超过最多可选天数时的提示文案",
        vals: null,
      },
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
      {
        kind: "Field",
        body: ["min-range="],
        detail: "min-range",
        documentation:
          "当 Calendar 的 type 为 multiple 时支持此属性，日期最少可选天数",
        vals: {
          kind: "Value",
          body: ["1", "2", "3", "4", "5", "6", "7", "10", "15"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Event",
        body: ["bind:select="],
        detail: "bind:select",
        documentation: "点击任意日期时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:unselect="],
        detail: "bind:unselect",
        documentation:
          "当 Calendar 的 type 为 multiple 时,点击已选中的日期时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation:
          "日期选择完成后触发，若show-confirm为true，则点击确认按钮后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:open="],
        detail: "bind:open",
        documentation: "打开弹出层时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "关闭弹出层时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:opened="],
        detail: "bind:opened",
        documentation: "打开弹出层且动画结束后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:closed="],
        detail: "bind:closed",
        documentation: "关闭弹出层且动画结束后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:over-range="],
        detail: "bind:over-range",
        documentation: "范围选择超过最多可选天数时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-subtitle="],
        detail: "bind:click-subtitle",
        documentation: "点击日历副标题时触发",
        vals: null,
      },
    ],
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
