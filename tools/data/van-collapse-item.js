exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-collapse-item": "@vant/weapp/collapse-item/index"'],
    detail: "Collapse 折叠面板Item",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      "<van-collapse-item${1}>${2:提供多样店铺模板，快速搭建网上商城}</van-collapse-item>",
    ],
    detail: "Collapse 折叠面板Item",
    documentation: `将一组内容放置在多个折叠面板中，点击面板的标题可以展开或收缩其内容。`,
    attrs: [
      /**
       * CollapseItem Props
        参数	说明	类型	默认值
        name	唯一标识符，默认为索引值	string | number	index
        title	标题栏左侧内容	string | number	-
        size	标题栏大小，可选值为large	string	-
        icon	标题栏左侧图标名称或图片链接，可选值见 Icon 组件	string	-
        value	标题栏右侧内容	string | number	-
        label	标题栏描述信息	string	-
        border	是否显示内边框	boolean	true
        is-link	是否展示标题栏右侧箭头并开启点击反馈	boolean	true
        clickable	是否开启点击反馈	boolean	false
        disabled	是否禁用面板	boolean	false
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "唯一标识符，默认为索引值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "标题栏左侧内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "标题栏大小，可选值为large",
        vals: {
          kind: "Value",
          body: ["large"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["icon="],
        detail: "icon",
        documentation: "标题栏左侧图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "标题栏右侧内容",
        vals: null,
      },
      {
        kind: "Field",
        body: ["label="],
        detail: "label",
        documentation: "标题栏描述信息",
        vals: null,
      },
      {
        kind: "Field",
        body: ["border="],
        detail: "border",
        documentation: "是否显示内边框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["is-link="],
        detail: "is-link",
        documentation: "是否展示标题栏右侧箭头并开启点击反馈",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clickable="],
        detail: "clickable",
        documentation: "是否开启点击反馈",
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
        documentation: "是否禁用面板",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * CollapseItem 外部样式类
        类名	说明
        custom-class	根节点样式类
        content-class	内容样式类
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
        body: ["content-class="],
        detail: "content-class",
        documentation: "内容样式类",
        vals: null,
      },
    ],
    /**
     * CollapseItem Slot
      名称	说明
      -	面板内容
      value	自定义显示内容
      icon	自定义icon
      title	自定义title
      right-icon	自定义右侧按钮，默认是arrow, 需要将 is-link 设置为 false, 才会生效
     */
    slot: {
      kind: "Value",
      body: ["value", "icon", "title", "right-icon"],
      detail: "Collapse 折叠面板Item Slot",
      documentation: `
      -	面板内容
      value	自定义显示内容
      icon	自定义icon
      title	自定义title
      right-icon	自定义右侧按钮，默认是arrow, 需要将 is-link 设置为 false, 才会生效
      `,
      vals: null,
    },
  },
};
