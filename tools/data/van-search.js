exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-search": "@vant/weapp/search/index"'],
    detail: "Search 搜索",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-search value="{{ ${1:value} }}"${2}>${3}</van-search>'],
    detail: "Search 搜索",
    documentation: `用于搜索场景的输入框组件。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符	string	-
        label	搜索框左侧文本	string	-
        shape	形状，可选值为 round	string	square
        value	当前输入的值	string | number	-
        background	搜索框背景色	string	#f2f2f2
        show-action	是否在搜索框右侧显示取消按钮	boolean	false
        action-text v1.0.0	取消按钮文字	string	取消
        focus	获取焦点	boolean	false
        error	是否将输入内容标红	boolean	false
        disabled	是否禁用输入框	boolean	false
        readonly	是否只读	boolean	false
        clearable	是否启用清除控件	boolean	true
        clear-trigger v1.8.4	显示清除图标的时机，always 表示输入框不为空时展示，
        focus 表示输入框聚焦且不为空时展示	string	focus
        clear-icon v1.8.4	清除图标名称或图片链接	string	clear
        maxlength	最大输入长度，设置为 -1 的时候不限制最大长度	number	-1
        use-action-slot	是否使用 action slot	boolean	false
        placeholder	输入框为空时占位符	string	-
        placeholder-style	指定占位符的样式	string	-
        input-align	输入框内容对齐方式，可选值为 center right	string	left
        use-left-icon-slot	是否使用输入框左侧图标 slot	boolean	false
        use-right-icon-slot	是否使用输入框右侧图标 slot	boolean	false
        left-icon	输入框左侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-left-icon-slot，则该属性无效）	string	search
        right-icon	输入框右侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-right-icon-slot，则该属性无效）	string	-
        cursor-spacing	输入框聚焦时底部与键盘的距离	number	0
       */
      {
        kind: "Field",
        body: ["label="],
        detail: "label",
        documentation: "搜索框左侧文本",
        vals: null,
      },
      {
        kind: "Field",
        body: ["shape="],
        detail: "shape",
        documentation: "形状，可选值为 round",
        vals: {
          kind: "Value",
          body: ["square", "round"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前输入的值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["background="],
        detail: "background",
        documentation: "搜索框背景色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["show-action="],
        detail: "show-action",
        documentation: "是否在搜索框右侧显示取消按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["action-text="],
        detail: "action-text",
        documentation: "取消按钮文字",
        vals: null,
      },
      {
        kind: "Field",
        body: ["focus="],
        detail: "focus",
        documentation: "获取焦点",
        vals: null,
      },
      {
        kind: "Field",
        body: ["error="],
        detail: "error",
        documentation: "是否将输入内容标红",
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
        documentation: "是否禁用输入框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["readonly="],
        detail: "readonly",
        documentation: "是否只读",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clearable="],
        detail: "clearable",
        documentation: "是否启用清除控件",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clear-trigger="],
        detail: "clear-trigger",
        documentation:
          "显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示",
        vals: {
          kind: "Value",
          body: ["always", "focus"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clear-icon="],
        detail: "clear-icon",
        documentation: "清除图标名称或图片链接",
        vals: null,
      },
      {
        kind: "Field",
        body: ["maxlength="],
        detail: "maxlength",
        documentation: "最大输入长度，设置为 -1 的时候不限制最大长度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["use-action-slot="],
        detail: "use-action-slot",
        documentation: "是否使用 action slot",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["placeholder="],
        detail: "placeholder",
        documentation: "输入框为空时占位符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["placeholder-style="],
        detail: "placeholder-style",
        documentation: "指定占位符的样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["input-align="],
        detail: "input-align",
        documentation: "输入框内容对齐方式，可选值为 center right",
        vals: {
          kind: "Value",
          body: ["left", "center", "right"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-left-icon-slot="],
        detail: "use-left-icon-slot",
        documentation: "是否使用输入框左侧图标 slot",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-right-icon-slot="],
        detail: "use-right-icon-slot",
        documentation: "是否使用输入框右侧图标 slot",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["left-icon="],
        detail: "left-icon",
        documentation:
          "输入框左侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-left-icon-slot，则该属性无效）",
        vals: null,
      },
      {
        kind: "Field",
        body: ["right-icon="],
        detail: "right-icon",
        documentation:
          "输入框右侧图标名称或图片链接，可选值见 Icon 组件（如果设置了 use-right-icon-slot，则该属性无效）",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cursor-spacing="],
        detail: "cursor-spacing",
        documentation: "输入框聚焦时底部与键盘的距离",
        vals: null,
      },

      /**
       * Events
        事件名	说明	参数
        bind:search	确定搜索时触发	event.detail: 当前输入值
        bind:change	输入内容变化时触发	event.detail: 当前输入值
        bind:cancel	取消搜索搜索时触发	-
        bind:focus	输入框聚焦时触发	-
        bind:blur	输入框失焦时触发	-
        bind:clear	点击清空控件时触发	-
        bind:click-input	点击搜索区域时触发	-
       */
      {
        kind: "Event",
        body: ["bind:search"],
        detail: "search",
        documentation: "确定搜索时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "change",
        documentation: "输入内容变化时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:cancel"],
        detail: "cancel",
        documentation: "取消搜索搜索时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:focus"],
        detail: "focus",
        documentation: "输入框聚焦时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:blur"],
        detail: "blur",
        documentation: "输入框失焦时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:clear"],
        detail: "clear",
        documentation: "点击清空控件时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-input"],
        detail: "click-input",
        documentation: "点击搜索区域时触发",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        field-class	搜索框样式类
        input-class	输入框样式类
        cancel-class	取消按钮样式类
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
        body: ["field-class="],
        detail: "field-class",
        documentation: "搜索框样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["input-class="],
        detail: "input-class",
        documentation: "输入框样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cancel-class="],
        detail: "cancel-class",
        documentation: "取消按钮样式类",
        vals: null,
      },
    ],

    /**
     * Slot
      名称	说明
      action	自定义搜索框右侧按钮，需要在use-action-slot为 true 时才会显示
      label	自定义搜索框左侧文本
      left-icon	自定义输入框左侧图标，需要在use-left-icon-slot为 true 时才会显示
      right-icon	自定义输入框右侧图标，需要在use-right-icon-slot为 true 时才会显示
     */
    slot: {
      kind: "Value",
      body: ["action", "label", "left-icon", "right-icon"],
      detail: "Search 搜索 Slot",
      documentation: `
      action	自定义搜索框右侧按钮，需要在use-action-slot为 true 时才会显示
      label	自定义搜索框左侧文本
      left-icon	自定义输入框左侧图标，需要在use-left-icon-slot为 true 时才会显示
      right-icon	自定义输入框右侧图标，需要在use-right-icon-slot为 true 时才会显示
      `,
      vals: null,
    },
  },
};
