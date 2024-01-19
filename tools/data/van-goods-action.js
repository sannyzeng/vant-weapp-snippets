exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-goods-action": "@vant/weapp/goods-action/index"'],
    detail: "GoodsAction 商品导航",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ["<van-goods-action${1}>${2}</van-goods-action>"],
    detail: "GoodsAction 商品导航",
    documentation: `用于为商品相关操作提供便捷交互。`,
    attrs: [
      /**
       * GoodsAction Props
        参数	说明	类型	默认值
        safe-area-inset-bottom	是否为 iPhoneX 留出底部安全距离	boolean	true
       */
      {
        kind: "Field",
        body: ["safe-area-inset-bottom="],
        detail: "safe-area-inset-bottom",
        documentation: "是否为 iPhoneX 留出底部安全距离",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
    ],
  },
};
