exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-cascader": "@vant/weapp/cascader/index"'],
    detail:
      "Cascader 级联选择，级联选择框，用于多层级数据的选择，典型场景为省市区选择。",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-cascader value="${1}" title="${2:请选择所在地区}" placeholder="${3:请选择}" bind:close="${4:onClose}" bind:finish="${5:onFinish}" />',
    ],
    detail: "Cascader 级联选择",
    documentation: `级联选择框，用于多层级数据的选择，典型场景为省市区选择。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        title	顶部标题	string	-
        value	选中项的值	string | number	-
        options	可选项数据源	CascaderOption[]	[]
        placeholder	未选中时的提示文案	string	请选择
        active-color	选中状态的高亮颜色	string	#1989fa
        swipeable	是否开启手势左右滑动切换	boolean	false
        closeable	是否显示关闭图标	boolean	true
        show-header	是否展示标题栏	boolean	true
        close-icon	关闭图标名称或图片链接，等同于 Icon 组件的 name 属性	string	cross
        field-names	自定义 options 结构中的字段	CascaderFieldNames	{ text: 'text', value: 'value', children: 'children' }
        use-title-slot v1.11.3	是否使用自定义标题的插槽	boolean	false
       */
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "顶部标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "选中项的值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["options="],
        detail: "options",
        documentation: "可选项数据源",
        vals: null,
      },
      {
        kind: "Field",
        body: ["placeholder="],
        detail: "placeholder",
        documentation: "未选中时的提示文案",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-color="],
        detail: "active-color",
        documentation: "选中状态的高亮颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["swipeable="],
        detail: "swipeable",
        documentation: "是否开启手势左右滑动切换",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["closeable="],
        detail: "closeable",
        documentation: "是否显示关闭图标",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-header="],
        detail: "show-header",
        documentation: "是否展示标题栏",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["close-icon="],
        detail: "close-icon",
        documentation: "关闭图标名称或图片链接，等同于 Icon 组件的 name 属性",
        vals: null,
      },
      {
        kind: "Field",
        body: ["field-names="],
        detail: "field-names",
        documentation: "自定义 options 结构中的字段",
        vals: null,
      },
      {
        kind: "Field",
        body: ["use-title-slot="],
        detail: "use-title-slot",
        documentation: "是否使用自定义标题的插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件	说明	回调参数
        bind:change	选中项变化时触发	event.detail：{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }
        bind:finish	全部选项选择完成后触发	event.detail：{ value: string | number, selectedOptions: CascaderOption[], tabIndex: number }
        bind:close	点击关闭图标时触发	-
        bind:click-tab	点击标签时触发	event.detail：{ tabIndex: number, title: string }
       */
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "选中项变化时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:finish="],
        detail: "bind:finish",
        documentation: "全部选项选择完成后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "点击关闭图标时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-tab="],
        detail: "bind:click-tab",
        documentation: "点击标签时触发",
        vals: null,
      },
    ],
    /**
     * Slots
      名称	说明	参数
      title	自定义顶部标题	-
     */
    slot: {
      kind: "Value",
      body: ["title"],
      detail: "Cascader 级联选择 Slot",
      documentation: `
        title	自定义顶部标题
        `,
      vals: null,
    },
  },
};
