exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-card": "@vant/weapp/card/index"'],
    detail: "Card 商品卡片",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-card thumb="{{ ${1:imageURL} }}"${2} />'],
    detail: "Card 商品卡片",
    documentation: `商品卡片，用于展示商品的图片、价格等信息。`,
    attrs: [
      /**
       * Props
        参数	说明	类型	默认值
        thumb	左侧图片	string	-
        thumb-mode	左侧图片裁剪、缩放的模式，可选值参考小程序 image 组件 mode 属性值	string	aspectFit
        title	标题	string	-
        desc	描述	string	-
        tag	标签	string	-
        num	商品数量	string | number	-
        price	商品价格	string | number	-
        origin-price	商品划线原价	string | number	-
        centered	内容是否垂直居中	string	false
        currency	货币符号	string	¥
        thumb-link	点击左侧图片后跳转的链接地址	string	-
        link-type	链接跳转类型，可选值为 redirectTo switchTab reLaunch	string	navigateTo
        lazy-load	是否开启图片懒加载	boolean	false
       */
      {
        kind: "Field",
        body: ["thumb="],
        detail: "thumb",
        documentation: "左侧图片",
        vals: null,
      },
      {
        kind: "Field",
        body: ["thumb-mode="],
        detail: "thumb-mode",
        documentation:
          "左侧图片裁剪、缩放的模式，可选值参考小程序 image 组件 mode 属性值",
        vals: {
          kind: "Value",
          body: [
            "scaleToFill",
            "aspectFit",
            "aspectFill",
            "widthFix",
            "top",
            "bottom",
            "center",
            "left",
            "right",
            "top left",
            "top right",
            "bottom left",
            "bottom right",
          ],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["title="],
        detail: "title",
        documentation: "标题",
        vals: null,
      },
      {
        kind: "Field",
        body: ["desc="],
        detail: "desc",
        documentation: "描述",
        vals: null,
      },
      {
        kind: "Field",
        body: ["tag="],
        detail: "tag",
        documentation: "标签",
        vals: null,
      },
      {
        kind: "Field",
        body: ["num="],
        detail: "num",
        documentation: "商品数量",
        vals: null,
      },
      {
        kind: "Field",
        body: ["price="],
        detail: "price",
        documentation: "商品价格",
        vals: null,
      },
      {
        kind: "Field",
        body: ["origin-price="],
        detail: "origin-price",
        documentation: "商品划线原价",
        vals: null,
      },
      {
        kind: "Field",
        body: ["centered="],
        detail: "centered",
        documentation: "内容是否垂直居中",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["currency="],
        detail: "currency",
        documentation: "货币符号",
        vals: null,
      },
      {
        kind: "Field",
        body: ["thumb-link="],
        detail: "thumb-link",
        documentation: "点击左侧图片后跳转的链接地址",
        vals: null,
      },
      {
        kind: "Field",
        body: ["link-type="],
        detail: "link-type",
        documentation: "链接跳转类型，可选值为 redirectTo switchTab reLaunch",
        vals: {
          kind: "Value",
          body: ["redirectTo", "switchTab", "reLaunch"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["lazy-load="],
        detail: "lazy-load",
        documentation: "是否开启图片懒加载",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      /**
       * 外部样式类
        类名	说明
        custom-class	根节点样式类
        thumb-class	左侧图片样式类
        title-class	标题样式类
        price-class	价格样式类
        origin-price-class	划线原价样式类
        desc-class	描述样式类
        num-class	数量样式类
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
        body: ["thumb-class="],
        detail: "thumb-class",
        documentation: "左侧图片样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["title-class="],
        detail: "title-class",
        documentation: "标题样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["price-class="],
        detail: "price-class",
        documentation: "价格样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["origin-price-class="],
        detail: "origin-price-class",
        documentation: "划线原价样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["desc-class="],
        detail: "desc-class",
        documentation: "描述样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["num-class="],
        detail: "num-class",
        documentation: "数量样式类",
        vals: null,
      },
    ],
    /**
     * Slot
      名称	说明
      title	自定义标题栏，如果设置了title属性则不生效
      desc	自定义描述栏，如果设置了desc属性则不生效
      num	自定义数量
      price	自定义价格
      origin-price	自定义商品原价，如果设置了origin-price属性则不生效
      price-top	自定义价格上方区域
      bottom	自定义价格下方区域
      thumb	自定义图片，如果设置了thumb属性则不生效
      tag	自定义图片角标，如果设置了tag属性则不生效
      tags	自定义描述下方标签区域
      footer	自定义右下角内容
     */
    slot: {
      kind: "Value",
      body: [
        "title",
        "desc",
        "num",
        "price",
        "origin-price",
        "price-top",
        "bottom",
        "thumb",
        "tag",
        "tags",
        "footer",
      ],
      detail: "Card 商品卡片 Slot",
      documentation: `
      title	自定义标题栏，如果设置了title属性则不生效
      desc	自定义描述栏，如果设置了desc属性则不生效
      num	自定义数量
      price	自定义价格
      origin-price	自定义商品原价，如果设置了origin-price属性则不生效
      price-top	自定义价格上方区域
      bottom	自定义价格下方区域
      thumb	自定义图片，如果设置了thumb属性则不生效
      tag	自定义图片角标，如果设置了tag属性则不生效
      tags	自定义描述下方标签区域
      footer	自定义右下角内容
      `,
      vals: null,
    },
  },
};
