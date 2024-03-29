exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-tabs": "@vant/weapp/tabs/index"'],
    detail: "Tab 标签页 Tabs",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-tabs active="{{ ${1:active} }}"${2}>${3}</van-tabs>'],
    detail: "Tab 标签页 Tabs",
    documentation: `选项卡组件，用于在不同的内容区域之间进行切换。`,
    attrs: [
      /**
       * Tabs Props
        参数	说明	类型	默认值
        type	样式风格，可选值为card	string	line
        color	标签主题色	string	#ee0a24
        active	当前选中标签的标识符	string | number	0
        duration	动画时间，单位秒	number	0.3
        line-width	底部条宽度，默认单位px	string | number	40px
        line-height	底部条高度，默认单位px	string | number	3px
        animated	是否开启切换标签内容时的转场动画	boolean	false
        border	是否展示外边框，仅在 line 风格下生效	boolean	false
        ellipsis	是否省略过长的标题文字	boolean	true
        sticky	是否使用粘性定位布局	boolean	false
        swipeable	是否开启手势滑动切换	boolean	false
        lazy-render	是否开启标签页内容延迟渲染	boolean	true
        offset-top	粘性定位布局下与顶部的最小距离，单位px	number	-
        swipe-threshold	滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动	number	5
        title-active-color	标题选中态颜色	string	-
        title-inactive-color	标题默认态颜色	string	-
        z-index	z-index 层级	number	1
        use-before-change v1.10.10	是否开启切换前校验	boolean	false
       */
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "样式风格，可选值为card",
        vals: {
          kind: "Value",
          body: ["line", "card"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["color="],
        detail: "color",
        documentation: "标签主题色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["active="],
        detail: "active",
        documentation: "当前选中标签的标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["duration="],
        detail: "duration",
        documentation: "动画时间，单位秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["line-width="],
        detail: "line-width",
        documentation: "底部条宽度，默认单位px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["line-height="],
        detail: "line-height",
        documentation: "底部条高度，默认单位px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["animated="],
        detail: "animated",
        documentation: "是否开启切换标签内容时的转场动画",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否展示外边框，仅在 line 风格下生效",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["ellipsis="],
        detail: "ellipsis",
        documentation: "是否省略过长的标题文字",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["sticky="],
        detail: "sticky",
        documentation: "是否使用粘性定位布局",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["swipeable="],
        detail: "swipeable",
        documentation: "是否开启手势滑动切换",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["lazy-render="],
        detail: "lazy-render",
        documentation: "是否开启标签页内容延迟渲染",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["offset-top="],
        detail: "offset-top",
        documentation: "粘性定位布局下与顶部的最小距离，单位px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["swipe-threshold="],
        detail: "swipe-threshold",
        documentation:
          "滚动阈值，标签数量超过阈值且总宽度超过标签栏宽度时开始横向滚动",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-active-color="],
        detail: "title-active-color",
        documentation: "标题选中态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-inactive-color="],
        detail: "title-inactive-color",
        documentation: "标题默认态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["z-index="],
        detail: "z-index",
        documentation: "z-index 层级",
        vals: null,
      },
      {
        kind: "Field",
        body: ["use-before-change="],
        detail: "use-before-change",
        documentation: "是否开启切换前校验",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * Tabs Event
        事件名	说明	参数
        bind:click	点击标签时触发	name：标签标识符，title：标题
        bind:before-change v1.10.10	tab 切换前会触发，在回调函数中返回 false 可终止 tab 切换，绑定事件的同时需要将use-before-change属性设置为true	event.detail.name: 当前切换的 tab 标识符， event.detail.title: 当前切换的 tab 标题， event.detail.index: 当前切换的 tab 下标，event.detail.callback: 回调函数，调用callback(false)终止 tab 切换
        bind:change	当前激活的标签改变时触发	name：标签标识符，title：标题
        bind:disabled	点击被禁用的标签时触发	name：标签标识符，title：标题
        bind:scroll	滚动时触发	{ scrollTop: 距离顶部位置, isFixed: 是否吸顶 }
       */
      {
        kind: "Event",
        body: ["bind:click="],
        detail: "bind:click",
        documentation: "点击标签时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:before-change="],
        detail: "bind:before-change",
        documentation:
          "tab 切换前会触发，在回调函数中返回 false 可终止 tab 切换，绑定事件的同时需要将use-before-change属性设置为true",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "当前激活的标签改变时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:disabled="],
        detail: "bind:disabled",
        documentation: "点击被禁用的标签时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:scroll="],
        detail: "bind:scroll",
        documentation: "滚动时触发",
        vals: null,
      },
      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        nav-class	标签栏样式类
        tab-class	标签样式类
        tab-active-class	标签激活态样式类
        wrap-class	标签栏根节点样式类
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
        body: ["nav-class="],
        detail: "nav-class",
        documentation: "标签栏样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["tab-class="],
        detail: "tab-class",
        documentation: "标签样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["tab-active-class="],
        detail: "tab-active-class",
        documentation: "标签激活态样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["wrap-class="],
        detail: "wrap-class",
        documentation: "标签栏根节点样式类",
        vals: null,
      },
    ],
    /**
     * Tabs Slot
      名称	说明
      nav-left	标题左侧内容
      nav-right	标题右侧内容
     */
    slot: {
      kind: "Value",
      body: ["nav-left", "nav-right"],
      detail: "Tab 标签页 Tabs Slot",
      documentation: `
      nav-left	标题左侧内容
      nav-right	标题右侧内容
      `,
      vals: null,
    },
  },
};
