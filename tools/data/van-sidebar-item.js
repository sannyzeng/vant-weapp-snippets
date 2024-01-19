exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-sidebar-item": "@vant/weapp/sidebar-item/index"'],
    detail: "Sidebar 侧边导航Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-sidebar-item${1} />"],
    detail: "Sidebar 侧边导航Item",
    documentation: `垂直展示的导航栏，用于在不同的内容区域之间进行切换。`,
    attrs: [
      /**
       * SidebarItem Props
        参数	说明	类型	默认值
        title	内容	string	''
        dot	是否显示右上角小红点	boolean	false
        info	图标右上角徽标的内容（已废弃，请使用 badge 属性）	string | number	''
        badge v1.5.0	图标右上角徽标的内容	string | number	''
        disabled	是否禁用该项	boolean	false
       */
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["dot="],
        detail: "dot",
        documentation: "是否显示右上角小红点",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["info="],
        detail: "info",
        documentation: "图标右上角徽标的内容（已废弃，请使用 badge 属性）",
        vals: null,
      },
      {
        kind: "Field",
        body: ["badge="],
        detail: "badge",
        documentation: "图标右上角徽标的内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用该项",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * SidebarItem Event
        事件名	说明	参数
        click	点击徽章时触发	event.detail 为当前徽章的索引
       */
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "点击徽章时触发",
        vals: null,
      },
      /**
       * SidebarItem 外部样式类
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
     * SidebarItem Slot
      名称	说明
      title	自定义标题栏，如果设置了title属性则不生效
     */
    slot: {
      kind: "Value",
      body: ["title"],
      detail: "Sidebar 侧边导航Item Slot",
      documentation: `
      title	自定义标题栏，如果设置了title属性则不生效
      `,
      vals: null,
    },
  },
};
