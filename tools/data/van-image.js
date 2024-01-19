exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-image": "@vant/weapp/image/index"'],
    detail: "Image 图片",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-image src="${1}"${2}>${3}</van-image>'],
    detail: "Image 图片",
    documentation: `增强版的 img 标签，提供多种图片填充模式，支持图片懒加载、加载中提示、加载失败提示。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        src	图片链接	string	-
        fit	图片填充模式	string	fill
        alt	替代文本	string	-
        width	宽度，默认单位为px	string | number	-
        height	高度，默认单位为px	string | number	-
        radius	圆角大小，默认单位为px	string | number	0
        round	是否显示为圆形	boolean	false
        lazy-load	是否懒加载	boolean	false
        webp v1.10.11	是否解析 webp 格式	boolean	false
        show-error	是否展示图片加载失败提示	boolean	true
        show-loading	是否展示图片加载中提示	boolean	true
        use-error-slot	是否使用 error 插槽	boolean	false
        use-loading-slot	是否使用 loading 插槽	boolean	false
        show-menu-by-longpress	是否开启长按图片显示识别小程序码菜单	boolean	false

        图片填充模式 
        名称	含义
        contain	保持宽高缩放图片，使图片的长边能完全显示出来
        cover	保持宽高缩放图片，使图片的短边能完全显示出来，裁剪长边
        fill	拉伸图片，使图片填满元素
        widthFix	缩放模式，宽度不变，高度自动变化，保持原图宽高比不变
        heightFix	缩放模式，高度不变，宽度自动变化，保持原图宽高比不变
        none	保持图片原有尺寸
       */
      {
        kind: "Field",
        body: ["src="],
        detail: "src",
        documentation: "图片链接",
        vals: null,
      },
      {
        kind: "Field",
        body: ["fit="],
        detail: "fit",
        documentation: "图片填充模式",
        vals: {
          kind: "Value",
          body: ["contain", "cover", "fill", "widthFix", "heightFix", "none"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["alt="],
        detail: "alt",
        documentation: "替代文本",
        vals: null,
      },
      {
        kind: "Field",
        body: ["width="],
        detail: "width",
        documentation: "宽度，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["height="],
        detail: "height",
        documentation: "高度，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["radius="],
        detail: "radius",
        documentation: "圆角大小，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["round="],
        detail: "round",
        documentation: "是否显示为圆形",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["lazy-load="],
        detail: "lazy-load",
        documentation: "是否懒加载",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["webp="],
        detail: "webp",
        documentation: "是否解析 webp 格式",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-error="],
        detail: "show-error",
        documentation: "是否展示图片加载失败提示",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-loading="],
        detail: "show-loading",
        documentation: "是否展示图片加载中提示",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-error-slot="],
        detail: "use-error-slot",
        documentation: "是否使用 error 插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-loading-slot="],
        detail: "use-loading-slot",
        documentation: "是否使用 loading 插槽",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-menu-by-longpress="],
        detail: "show-menu-by-longpress",
        documentation: "是否开启长按图片显示识别小程序码菜单",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },

      /**
       * Events
        事件名	说明	回调参数
        bind:click	点击图片时触发	event: Event
        bind:load	图片加载完毕时触发	event: Event
        bind:error	图片加载失败时触发	event: Event
       */
      {
        kind: "Event",
        body: ["bind:click"],
        detail: "bind:click",
        documentation: "点击图片时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:load"],
        detail: "bind:load",
        documentation: "图片加载完毕时触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:error"],
        detail: "bind:error",
        documentation: "图片加载失败时触发",
        vals: null,
      },

      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        image-class	图片样式类
        loading-class	loading 样式类
        error-class	error 样式类
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
        body: ["image-class="],
        detail: "image-class",
        documentation: "图片样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["loading-class="],
        detail: "loading-class",
        documentation: "loading 样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["error-class="],
        detail: "error-class",
        documentation: "error 样式类",
        vals: null,
      },
    ],
    /**
     * Slots
      名称	说明
      loading	自定义加载中的提示内容
      error	自定义加载失败时的提示内容
     */
    slot: {
      kind: "Value",
      body: ["loading", "error"],
      detail: "Image 图片 Slot",
      documentation: `
      loading	自定义加载中的提示内容
      error	自定义加载失败时的提示内容
      `,
      vals: null,
    },
  },
};
