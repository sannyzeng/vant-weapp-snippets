exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-checkbox-group": "@vant/weapp/checkbox-group/index"'],
    detail: "Checkbox 复选框组",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-checkbox-group value="{{ ${1:result} }}"${2}></van-checkbox-group>',
    ],
    detail: "Checkbox 复选框组",
    documentation: `需要与van-checkbox-group一起使用，选中值是一个数组，通过value绑定在van-checkbox-group上，数组中的项即为选中的Checkbox的name属性设置的值。`,
    attrs: [
      /**
       * CheckboxGroup Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符	string	-
        value	所有选中项的 name	Array	-
        disabled	是否禁用所有单选框	boolean	false
        max	设置最大可选数	number	0（无限制）
        direction v1.7.0	排列方向，可选值为 horizontal	string	vertical
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
        documentation: "所有选中项的 name",
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
        body: ["max="],
        detail: "max",
        documentation: "设置最大可选数",
        vals: null,
      },
      {
        kind: "Field",
        body: ["direction="],
        detail: "direction",
        documentation: "排列方向，可选值为 horizontal",
        vals: {
          kind: "Value",
          body: ["vertical", "horizontal"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * CheckboxGroup Event
        事件名	说明	回调参数
        bind:change	当绑定值变化时触发的事件	当前组件的值
       */
      {
        kind: "Event",
        body: ["bind:change"],
        detail: "onChange",
        documentation: "当绑定值变化时触发的事件",
        vals: null,
      },
    ],
  },
};
