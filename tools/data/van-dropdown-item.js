exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-dropdown-item": "@vant/weapp/dropdown-item/index"'],
    detail: "DropdownMenu 下拉菜单Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-dropdown-item value="{{ ${1:value} }}" options="{{ ${2:option} }}"${3} />',
    ],
    detail: "DropdownMenu 下拉菜单Item",
    documentation: `向下弹出的菜单列表。`,
    attrs: [
      /**
       * DropdownItem Props
        参数	说明	类型	默认值
        value	当前选中项对应的 value	number | string	-
        title	菜单项标题	string	当前选中项文字
        options	选项数组	Option[]	[]
        disabled	是否禁用菜单	boolean	false
        title-class	标题额外类名，建议使用自定义样式 item-title-class 代替	string	-
        popup-style	自定义弹出层样式	string	-
        use-before-toggle v1.10.12	是否开启下拉菜单打开或者关闭前校验	boolean	false
        root-portal v1.10.14	是否从页面子树中脱离出来，用于解决各种 fixed 失效问题，微信基础库 >= 2.25.2 	boolean	false
       */
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前选中项对应的 value",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "菜单项标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["options="],
        detail: "options",
        documentation: "选项数组",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用菜单",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["title-class="],
        detail: "title-class",
        documentation: "标题额外类名，建议使用自定义样式 item-title-class 代替",
        vals: null,
      },
      {
        kind: "Field",
        body: ["popup-style="],
        detail: "popup-style",
        documentation: "自定义弹出层样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["use-before-toggle="],
        detail: "use-before-toggle",
        documentation: "是否开启下拉菜单打开或者关闭前校验",
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
       * DropdownItem Events
        事件名	说明	回调参数
        change	点击选项导致 value 变化时触发	value
        open	打开菜单栏时触发	-
        close	关闭菜单栏时触发	-
        opened	打开菜单栏且动画结束后触发	-
        closed	关闭菜单栏且动画结束后触发	-
        before-toggle v1.10.12	下拉菜单打开或者关闭前触发，需要将use-before-toggle属性设置为true	event.detail.status: true 打开下拉菜单，false 关闭下拉菜单
        event.detail.callback: 回调函数，调用callback(false)终止下拉菜单状态变更
       */
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "点击选项导致 value 变化时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:open="],
        detail: "bind:open",
        documentation: "打开菜单栏时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:close="],
        detail: "bind:close",
        documentation: "关闭菜单栏时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:opened="],
        detail: "bind:opened",
        documentation: "打开菜单栏且动画结束后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:closed="],
        detail: "bind:closed",
        documentation: "关闭菜单栏且动画结束后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:before-toggle="],
        detail: "bind:before-toggle",
        documentation:
          "下拉菜单打开或者关闭前触发，需要将use-before-toggle属性设置为true",
        vals: null,
      },

      /**
       * DropdownItem 外部样式类
        类名	说明
        custom-class v1.10.7	根节点样式类
        item-title-class v1.10.7	选项样式类
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
        body: ["item-title-class="],
        detail: "item-title-class",
        documentation: "选项样式类",
        vals: null,
      },
    ],
  },
};
