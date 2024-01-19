exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-checkbox": "@vant/weapp/checkbox/index"'],
    detail: "Checkbox 复选框",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-checkbox value="{{ ${1:checked} }}"${2}>${3:复选框}</van-checkbox>',
    ],
    detail: "Checkbox 复选框",
    documentation: `在一组备选项中进行多选。`,
    attrs: [
      /**
       * Checkbox Props
        参数	说明	类型	默认值
        name	标识 Checkbox 名称	string	-
        shape	形状，可选值为 round square	string	round
        value	是否为选中状态	boolean	false
        disabled	是否禁用单选框	boolean	false
        label-disabled	是否禁用单选框内容点击	boolean	false
        label-position	文本位置，可选值为 left	string	right
        use-icon-slot	是否使用 icon slot	boolean	false
        checked-color	选中状态颜色	string	#1989fa
        icon-size	icon 大小	string | number	20px
       */
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "在表单内提交时的标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["shape="],
        detail: "shape",
        documentation: "形状，可选值为 round square",
        vals: {
          kind: "Value",
          body: ["round", "square"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "是否为选中状态",
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
        documentation: "是否禁用单选框",
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
        documentation: "是否禁用单选框内容点击",
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
        body: ["use-icon-slot="],
        detail: "use-icon-slot",
        documentation: "是否使用 icon slot",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
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
        body: ["icon-size="],
        detail: "icon-size",
        documentation: "icon 大小",
        vals: null,
      },

      /**
       * Checkbox Event
        事件名	说明	回调参数
        bind:change	当绑定值变化时触发的事件	当前组件的值
       */
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "当绑定值变化时触发的事件",
        vals: null,
      },

      /**
       * Checkbox 外部样式类
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
    /**
     * Checkbox Slot
      名称	说明
      -	自定义文本
      icon	自定义图标
     */
    slot: {
      kind: "Value",
      body: ["icon"],
      detail: "Checkbox 复选框 Slot",
      documentation: `
      icon	自定义图标
      `,
      vals: null,
    },
  },
};
