exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-steps": "@vant/weapp/steps/index"'],
    detail: "Steps 步骤条",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-steps steps="{{ ${1:steps} }}" active="{{ ${2:active} }}"${3} />',
    ],
    detail: "Steps 步骤条",
    documentation: `用于展示操作流程的各个环节，让用户了解当前的操作在整体流程中的位置。`,
    attrs: [
      /**
       * Steps Props
        参数	说明	类型	默认值
        active	当前步骤	number	0
        steps	步骤配置集合，见下面配置项	Step 配置项数组	[]
        direction	显示方向，可选值为 horizontal vertical	string	horizontal
        active-color	激活状态颜色	string	#07c160
        inactive-color	未激活状态颜色	string	#969799
        active-icon	激活状态底部图标，可选值见 Icon 组件	string	checked
        inactive-icon	未激活状态底部图标，可选值见 Icon 组件	string	-
       */
      {
        kind: "Field",
        body: ["active="],
        detail: "active",
        documentation: "当前步骤",
        vals: null,
      },
      {
        kind: "Field",
        body: ["steps="],
        detail: "steps",
        documentation: "步骤配置集合，见下面配置项",
        vals: null,
      },
      {
        kind: "Field",
        body: ["direction="],
        detail: "direction",
        documentation: "显示方向，可选值为 horizontal vertical",
        vals: {
          kind: "Value",
          body: ["horizontal", "vertical"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["active-color="],
        detail: "active-color",
        documentation: "激活状态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inactive-color="],
        detail: "inactive-color",
        documentation: "未激活状态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active-icon="],
        detail: "active-icon",
        documentation: "激活状态底部图标，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["inactive-icon="],
        detail: "inactive-icon",
        documentation: "未激活状态底部图标，可选值见 Icon 组件",
        vals: null,
      },

      /**
       * Events
        事件名称	说明	回调参数
        bind:click-step	点击步骤时触发的事件	event.detail:当前步骤的索引
       */
      {
        kind: "Event",
        body: ["bind:click-step"],
        detail: "点击步骤时触发的事件",
        documentation: "event.detail:当前步骤的索引",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        desc-class	描述信息样式类
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
        body: ["desc-class="],
        detail: "desc-class",
        documentation: "描述信息样式类",
        vals: null,
      },
    ],
  },
};
