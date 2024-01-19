exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-radio-group": "@vant/weapp/radio-group/index"'],
    detail: "Radio 单选框组",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-radio-group value="{{ ${1:radio} }}"${2}></van-radio-group>'],
    detail: "Radio 单选框组",
    documentation: `在app.json或index.json中引入组件`,
    attrs: [
      /**
       * RadioGroup Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符	string	-
        value	当前选中项的标识符	any	-
        disabled	是否禁用所有单选框	boolean	false
        direction v1.6.7	排列方向，可选值为 horizontal	string	vertical
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
        body: ["value="],
        detail: "value",
        documentation: "当前选中项的标识符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用所有单选框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["direction="],
        detail: "direction",
        documentation: "排列方向，可选值为 horizontal",
        vals: {
          kind: "Value",
          body: ["horizontal", "vertical"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * RadioGroup Event
        事件名	说明	回调参数
        bind:change	当绑定值变化时触发的事件	当前选中项的 name
       */
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "bind:change",
        documentation: "当绑定值变化时触发的事件",
        vals: null,
      },
    ],
  },
};
