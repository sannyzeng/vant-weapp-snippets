exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-field": "@vant/weapp/field/index"'],
    detail: "Field 输入框",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-field value="{{ ${1:value} }}" border="{{ ${2:false} }}"${3}>${4}</van-field>',
    ],
    detail: "Field 输入框",
    documentation: "用户可以在文本框内输入或编辑文字。",
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        name	在表单内提交时的标识符。可以通过配置 name 来扩大点击区域	string	-
        label	输入框左侧文本	string	-
        size	单元格大小，可选值为 large	string	-
        value	当前输入的值	string | number	-
        type	可设置为任意原生类型, 如 number idcard textarea digit	string	text
        fixed	如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true	boolean	false
        focus	获取焦点	boolean	false
        border	是否显示内边框	boolean	true
        disabled	是否禁用输入框	boolean	false
        readonly	是否只读	boolean	false
        clearable	是否启用清除控件	boolean	false
        clickable	是否开启点击反馈	boolean	false
        required	是否显示表单必填星号	boolean	false
        center	是否使内容垂直居中	boolean	false
        password	是否是密码类型	boolean	false
        title-width	标题宽度	string	6.2em
        maxlength	最大输入长度，设置为 -1 的时候不限制最大长度	number	-1
        placeholder	输入框为空时占位符	string	-
        placeholder-style	指定 placeholder 的样式	string	-
        custom-style	自定义样式	string	-
        is-link	是否展示右侧箭头并开启点击反馈	boolean	false
        arrow-direction	箭头方向，可选值为 left up down	string	-
        show-word-limit	是否显示字数统计，需要设置maxlength属性	boolean	false
        error	是否将输入内容标红	boolean	false
        error-message	底部错误提示文案，为空时不展示	string	''
        error-message-align	底部错误提示文案对齐方式，可选值为 center right	string	''
        input-align	输入框内容对齐方式，可选值为 center right	string	left
        autosize	是否自适应内容高度，只对 textarea 有效，
        可传入对象,如 { maxHeight: 100, minHeight: 50 }，
        单位为px	boolean | object	false
        left-icon	左侧图标名称或图片链接，可选值见 Icon 组件	string	-
        right-icon	右侧图标名称或图片链接，可选值见 Icon 组件	string	-
        confirm-type	设置键盘右下角按钮的文字，仅在 type='text' 时生效	string	done
        confirm-hold	点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效	boolean	false
        hold-keyboard	focus 时，点击页面的时候不收起键盘	boolean	false
        cursor-spacing	输入框聚焦时底部与键盘的距离	number	50
        adjust-position	键盘弹起时，是否自动上推页面	boolean	true
        show-confirm-bar	是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效	boolean	true
        selection-start	光标起始位置，自动聚集时有效，需与 selection-end 搭配使用	number	-1
        selection-end	光标结束位置，自动聚集时有效，需与 selection-start 搭配使用	number	-1
        auto-focus	自动聚焦，拉起键盘	boolean	false
        disable-default-padding	是否去掉 iOS 下的默认内边距，只对 textarea 有效	boolean	true
        cursor	指定 focus 时的光标位置	number	-1
        clear-trigger v1.8.4	显示清除图标的时机，always 表示输入框不为空时展示，
        focus 表示输入框聚焦且不为空时展示	string	focus
        always-embed v1.9.2	强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)	boolean	false
        extra-event-params v1.10.12	开启事件增强模式，会在 input 和 change 事件额外提供 cursor 和 keyCode 参数，计划在下一个大版本作为默认行为	boolean	false
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
        body: ["label="],
        detail: "label",
        documentation: "输入框左侧文本",
        vals: null,
      },
      {
        kind: "Field",
        body: ["size="],
        detail: "size",
        documentation: "单元格大小，可选值为 large",
        vals: {
          kind: "Value",
          body: ["large"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["value="],
        detail: "value",
        documentation: "当前输入的值",
        vals: null,
      },
      {
        kind: "Field",
        body: ["type="],
        detail: "type",
        documentation: "可设置为任意原生类型, 如 number idcard textarea digit",
        vals: {
          kind: "Value",
          body: ["text", "number", "idcard", "textarea", "digit"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["fixed="],
        detail: "fixed",
        documentation:
          "如果 type 为 textarea 且在一个 position:fixed 的区域，需要显示指定属性 fixed 为 true",
        vals: null,
      },
      {
        kind: "Field",
        body: ["focus="],
        detail: "focus",
        documentation: "获取焦点",
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
        body: ["disabled="],
        detail: "disabled",
        documentation: "是否禁用输入框",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["readonly="],
        detail: "readonly",
        documentation: "是否只读",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["clearable="],
        detail: "clearable",
        documentation: "是否启用清除控件",
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
        body: ["required="],
        detail: "required",
        documentation: "是否显示表单必填星号",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["center="],
        detail: "center",
        documentation: "是否使内容垂直居中",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["password="],
        detail: "password",
        documentation: "是否是密码类型",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["title-width="],
        detail: "title-width",
        documentation: "标题宽度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["maxlength="],
        detail: "maxlength",
        documentation: "最大输入长度，设置为 -1 的时候不限制最大长度",
        vals: null,
      },
      {
        kind: "Field",
        body: ["placeholder="],
        detail: "placeholder",
        documentation: "输入框为空时占位符",
        vals: null,
      },
      {
        kind: "Field",
        body: ["placeholder-style="],
        detail: "placeholder-style",
        documentation: "指定 placeholder 的样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["custom-style="],
        detail: "custom-style",
        documentation: "自定义样式",
        vals: null,
      },
      {
        kind: "Field",
        body: ["is-link="],
        detail: "is-link",
        documentation: "是否展示右侧箭头并开启点击反馈",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["arrow-direction="],
        detail: "arrow-direction",
        documentation: "箭头方向，可选值为 left up down",
        vals: {
          kind: "Value",
          body: ["left", "up", "down"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-word-limit="],
        detail: "show-word-limit",
        documentation: "是否显示字数统计，需要设置maxlength属性",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["error="],
        detail: "error",
        documentation: "是否将输入内容标红",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["error-message="],
        detail: "error-message",
        documentation: "底部错误提示文案，为空时不展示",
        vals: null,
      },
      {
        kind: "Field",
        body: ["error-message-align="],
        detail: "error-message-align",
        documentation: "底部错误提示文案对齐方式，可选值为 center right",
        vals: {
          kind: "Value",
          body: ["center", "right"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["input-align="],
        detail: "input-align",
        documentation: "输入框内容对齐方式，可选值为 center right",
        vals: {
          kind: "Value",
          body: ["center", "right"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["autosize="],
        detail: "autosize",
        documentation:
          "是否自适应内容高度，只对 textarea 有效，可传入对象,如 { maxHeight: 100, minHeight: 50 }，单位为px",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["left-icon="],
        detail: "left-icon",
        documentation: "左侧图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["right-icon="],
        detail: "right-icon",
        documentation: "右侧图标名称或图片链接，可选值见 Icon 组件",
        vals: null,
      },
      {
        kind: "Field",
        body: ["confirm-type="],
        detail: "confirm-type",
        documentation: "设置键盘右下角按钮的文字，仅在 type='text' 时生效",
        vals: {
          kind: "Value",
          body: ["done", "go", "next", "search", "send"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["confirm-hold="],
        detail: "confirm-hold",
        documentation:
          "点击键盘右下角按钮时是否保持键盘不收起，在 type='textarea' 时无效",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["hold-keyboard="],
        detail: "hold-keyboard",
        documentation: "focus 时，点击页面的时候不收起键盘",
        vals: null,
      },
      {
        kind: "Field",
        body: ["cursor-spacing="],
        detail: "cursor-spacing",
        documentation: "输入框聚焦时底部与键盘的距离",
        vals: null,
      },
      {
        kind: "Field",
        body: ["adjust-position="],
        detail: "adjust-position",
        documentation: "键盘弹起时，是否自动上推页面",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-confirm-bar="],
        detail: "show-confirm-bar",
        documentation:
          "是否显示键盘上方带有”完成“按钮那一栏，只对 textarea 有效",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["selection-start="],
        detail: "selection-start",
        documentation:
          "光标起始位置，自动聚集时有效，需与 selection-end 搭配使用",
        vals: null,
      },
      {
        kind: "Field",
        body: ["selection-end="],
        detail: "selection-end",
        documentation:
          "光标结束位置，自动聚集时有效，需与 selection-start 搭配使用",
        vals: null,
      },
      {
        kind: "Field",
        body: ["auto-focus="],
        detail: "auto-focus",
        documentation: "自动聚焦，拉起键盘",
        vals: null,
      },
      {
        kind: "Field",
        body: ["disable-default-padding="],
        detail: "disable-default-padding",
        documentation: "是否去掉 iOS 下的默认内边距，只对 textarea 有效",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["cursor="],
        detail: "cursor",
        documentation: "指定 focus 时的光标位置",
        vals: null,
      },
      {
        kind: "Field",
        body: ["clear-trigger="],
        detail: "clear-trigger",
        documentation:
          "显示清除图标的时机，always 表示输入框不为空时展示，focus 表示输入框聚焦且不为空时展示",
        vals: {
          kind: "Value",
          body: ["always", "focus"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["always-embed="],
        detail: "always-embed",
        documentation:
          "强制 input 处于同层状态，默认 focus 时 input 会切到非同层状态 (仅在 iOS 下生效)",
        vals: null,
      },
      {
        kind: "Field",
        body: ["extra-event-params="],
        detail: "extra-event-params",
        documentation:
          "开启事件增强模式，会在 input 和 change 事件额外提供 cursor 和 keyCode 参数，计划在下一个大版本作为默认行为",
        vals: null,
      },

      /**
       * Events
        事件	说明	回调参数
        bind:input	输入内容时触发	event.detail: 当前输入值; 在 extra-event-params 为 true 时为 InputDetail
        bind:change	输入内容时触发	event.detail: 当前输入值; 在 extra-event-params 为 true 时为 InputDetail
        bind:confirm	点击完成按钮时触发	event.detail: 当前输入值
        bind:click-icon	点击尾部图标时触发	-
        bind:focus	输入框聚焦时触发	event.detail.value: 当前输入值;
        event.detail.height: 键盘高度
        bind:blur	输入框失焦时触发	event.detail.value: 当前输入值;
        event.detail.cursor: 游标位置(如果 type 不为 textarea，值为 0)
        bind:clear	点击清空控件时触发	-
        bind:click-input	点击输入区域时触发	-
        bind:linechange	输入框行数变化时调用，只对 textarea 有效	event.detail = { height: 0, heightRpx: 0, lineCount: 0 }
        bind:keyboardheightchange	键盘高度发生变化的时候触发此事件	event.detail = { height: height, duration: duration }
       */
      {
        kind: "Event",
        body: ["bind:input="],
        detail: "bind:input",
        documentation: "输入内容时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:change="],
        detail: "bind:change",
        documentation: "输入内容时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:confirm="],
        detail: "bind:confirm",
        documentation: "点击完成按钮时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-icon="],
        detail: "bind:click-icon",
        documentation: "点击尾部图标时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:focus="],
        detail: "bind:focus",
        documentation: "输入框聚焦时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:blur="],
        detail: "bind:blur",
        documentation: "输入框失焦时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:clear="],
        detail: "bind:clear",
        documentation: "点击清空控件时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-input="],
        detail: "bind:click-input",
        documentation: "点击输入区域时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:linechange="],
        detail: "bind:linechange",
        documentation: "输入框行数变化时调用，只对 textarea 有效",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:keyboardheightchange="],
        detail: "bind:keyboardheightchange",
        documentation: "键盘高度发生变化的时候触发此事件",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class v1.10.21	根节点样式类
        label-class	左侧文本样式类
        input-class	输入框样式类
        right-icon-class	右侧图标样式类
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
        body: ["label-class="],
        detail: "label-class",
        documentation: "左侧文本样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["input-class="],
        detail: "input-class",
        documentation: "输入框样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["right-icon-class="],
        detail: "right-icon-class",
        documentation: "右侧图标样式类",
        vals: null,
      },
    ],
    /**
     * Slot
      名称	说明
      label	自定义输入框标签，如果设置了label属性则不生效
      left-icon	自定义输入框头部图标
      right-icon	自定义输入框尾部图标
      button	自定义输入框尾部按钮
      input	自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效
     */
    slot: {
      kind: "Value",
      body: ["label", "left-icon", "right-icon", "button", "input"],
      detail: "Field 输入框 Slot",
      documentation: `
      label	自定义输入框标签，如果设置了label属性则不生效
      left-icon	自定义输入框头部图标
      right-icon	自定义输入框尾部图标
      button	自定义输入框尾部按钮
      input	自定义输入框，使用此插槽后，与输入框相关的属性和事件将失效
      `,
      vals: null,
    },
  },
};
