exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-radio": "@vant/weapp/radio/index"'],
    detail: "Radio 单选框",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-radio${1}>${2:单选框 1}</van-radio>"],
    detail: "Radio 单选框",
    documentation: `在一组备选项中进行单选。`,
    attrs: [
      /**
       * Radio Props
        参数	说明	类型	默认值
        name	标识符	string	-
        shape	形状，可选值为 square	string	round
        disabled	是否为禁用状态	boolean	false
        label-disabled	是否禁用文本内容点击	boolean	false
        label-position	文本位置，可选值为 left	string	right
        icon-size	图标大小，默认单位为px	string | number	20px
        checked-color	选中状态颜色	string	#1989fa
        use-icon-slot	是否使用 icon 插槽	boolean	false
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["shape="],
        detail: "shape",
        documentation: "形状，可选值为 square",
        vals: {
          kind: "Value",
          body: ["square"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否为禁用状态",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["label-disabled="],
        detail: "label-disabled",
        documentation: "是否禁用文本内容点击",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["label-position="],
        detail: "label-position",
        documentation: "文本位置，可选值为 left",
        vals: {
          kind: "Value",
          body: ["left", "right"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["icon-size="],
        detail: "icon-size",
        documentation: "图标大小，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["checked-color="],
        detail: "checked-color",
        documentation: "选中状态颜色",
        vals: null,
      },
      {
        kind: "Field",
        body: ["use-icon-slot="],
        detail: "use-icon-slot",
        documentation: "是否使用 icon 插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Radio Event
        事件名	说明	回调参数
        bind:change	当绑定值变化时触发的事件	当前选中项的 name
       */
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "onChange",
        documentation: "当绑定值变化时触发的事件",
        vals: null,
      },

      /**
       * Radio 外部样式类
        类名	说明
        custom-class	根节点样式类
        icon-class	图标样式类
        label-class	描述信息样式类
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
        body: ["icon-class="],
        detail: "icon-class",
        documentation: "图标样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["label-class="],
        detail: "label-class",
        documentation: "描述信息样式类",
        vals: null,
      },
    ],
  },
};
