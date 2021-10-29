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
        documentation: "标题额外类名",
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
    ],
  },
};
