exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-datetime-picker": "@vant/weapp/datetime-picker/index"'],
    detail: "DatetimePicker 时间选择",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-datetime-picker value="{{ ${1:currentDate} }}" min-date="{{ ${2:minDate} }}" max-date="{{ ${3:maxDate} }}"${4} />',
    ],
    detail: "DatetimePicker 时间选择",
    documentation:
      "用于选择时间，支持日期、时分等时间维度，通常与 弹出层 组件配合使用。",
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        value	当前选中值	string | number	-
        type	类型，可选值为 date time year-month
        不建议动态修改	string	datetime
        min-date	可选的最小时间，精确到分钟	number	十年前
        max-date	可选的最大时间，精确到分钟	number	十年后
        min-hour	可选的最小小时，针对 time 类型	number	0
        max-hour	可选的最大小时，针对 time 类型	number	23
        min-minute	可选的最小分钟，针对 time 类型	number	0
        max-minute	可选的最大分钟，针对 time 类型	number	59
        filter	选项过滤函数(type 可能值为 year, month, day, hour, minute)	(type, values) => values	-
        formatter	选项格式化函数(type 可能值为 year, month, day, hour, minute)	(type, value) => value	-
        title	顶部栏标题	string	''
        show-toolbar	是否显示顶部栏	boolean	true
        loading	是否显示加载状态	boolean	false
        item-height	选项高度	number	44
        confirm-button-text	确认按钮文字	string	确认
        cancel-button-text	取消按钮文字	string	取消
        visible-item-count	可见的选项个数	number	6
       */
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前选中值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "类型，可选值为 date time year-month",
        vals: {
          kind: "Value",
          body: ["date", "time", "year-month"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["min-date="],
        detail: "min-date",
        documentation: "可选的最小时间，精确到分钟",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max-date="],
        detail: "max-date",
        documentation: "可选的最大时间，精确到分钟",
        vals: null,
      },
      {
        kind: "Field",
        body: ["min-hour="],
        detail: "min-hour",
        documentation: "可选的最小小时，针对 time 类型",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max-hour="],
        detail: "max-hour",
        documentation: "可选的最大小时，针对 time 类型",
        vals: null,
      },
      {
        kind: "Field",
        body: ["min-minute="],
        detail: "min-minute",
        documentation: "可选的最小分钟，针对 time 类型",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max-minute="],
        detail: "max-minute",
        documentation: "可选的最大分钟，针对 time 类型",
        vals: null,
      },
      {
        kind: "Field",
        body: ["filter="],
        detail: "filter",
        documentation:
          "选项过滤函数(type 可能值为 year, month, day, hour, minute)",
        vals: null,
      },
      {
        kind: "Field",
        body: ["formatter="],
        detail: "formatter",
        documentation:
          "选项格式化函数(type 可能值为 year, month, day, hour, minute)",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "顶部栏标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-toolbar="],
        detail: "show-toolbar",
        documentation: "是否显示顶部栏",
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
        documentation: "是否显示加载状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["item-height="],
        detail: "item-height",
        documentation: "选项高度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["confirm-button-text="],
        detail: "confirm-button-text",
        documentation: "确认按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cancel-button-text="],
        detail: "cancel-button-text",
        documentation: "取消按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["visible-item-count="],
        detail: "visible-item-count",
        documentation: "可见的选项个数",
        vals: null,
      },

      /**
       * Events
        事件名称	说明	回调参数
        bind:input	当值变化时触发的事件	当前 value
        bind:change	当值变化时触发的事件	组件实例
        bind:confirm	点击完成按钮时触发的事件	当前 value
        bind:cancel	点击取消按钮时触发的事件	-
       */
      {
        kind: "Event",
        body: ["bind:input="],
        detail: "bind:input",
        documentation: "当值变化时触发的事件",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "当值变化时触发的事件",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation: "点击完成按钮时触发的事件",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:cancel="],
        detail: "bind:cancel",
        documentation: "点击取消按钮时触发的事件",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        active-class	选中项样式类
        toolbar-class	顶部栏样式类
        column-class	列样式类
       */
      {
        kind: "Field",
        body: ["active-class="],
        detail: "active-class",
        documentation: "选中项样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["toolbar-class="],
        detail: "toolbar-class",
        documentation: "顶部栏样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["column-class="],
        detail: "column-class",
        documentation: "列样式类",
        vals: null,
      },
    ],
  },
};
