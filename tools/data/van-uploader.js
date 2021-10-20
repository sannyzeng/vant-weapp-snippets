exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-uploader": "@vant/weapp/uploader/index"'],
    detail: "Uploader 文件上传",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: ['<van-uploader file-list="{{ ${1:fileList} }}"${2} />'],
    detail: "Uploader 文件上传",
    documentation: `用于将本地的图片或文件上传至服务器，并在上传过程中展示预览图和上传进度。目前 Uploader 组件不包含将文件上传至服务器的接口逻辑，该步骤需要自行实现。`,
    attrs: [
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "标识符，可以在回调函数的第二项参数中获取",
        vals: null,
      },
      {
        kind: "Field",
        body: ["accept="],
        detail: "accept",
        documentation: "接受的文件类型, 可选值为all media image file video",
        vals: {
          kind: "Value",
          body: ["image", "all", "media", "file", "video"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["sizeType="],
        detail: "sizeType",
        documentation:
          "所选的图片的尺寸, 当accept为image类型时设置所选图片的尺寸可选值为original compressed",
        vals: {
          kind: "Value",
          body: ["original", "compressed"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["preview-size="],
        detail: "preview-size",
        documentation: "预览图和上传区域的尺寸，默认单位为px",
        vals: null,
      },
      {
        kind: "Field",
        body: ["preview-image="],
        detail: "preview-image",
        documentation: "是否在上传完成后展示预览图",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["preview-full-image="],
        detail: "preview-full-image",
        documentation: "是否在点击预览图后展示全屏图片预览",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["multiple="],
        detail: "multiple",
        documentation: "是否开启图片多选，部分安卓机型不支持",
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
        documentation: "是否禁用文件上传",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["show-upload="],
        detail: "show-upload",
        documentation: "是否展示文件上传按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["deletable="],
        detail: "deletable",
        documentation: "是否展示删除按钮",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["capture="],
        detail: "capture",
        documentation:
          "图片或者视频选取模式，当accept为image类型时设置capture可选值为camera可以直接调起摄像头",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max-size="],
        detail: "max-size",
        documentation: "文件大小限制，单位为byte",
        vals: null,
      },
      {
        kind: "Field",
        body: ["max-count="],
        detail: "max-count",
        documentation: "文件上传数量限制",
        vals: null,
      },
      {
        kind: "Field",
        body: ["upload-text="],
        detail: "upload-text",
        documentation: "上传区域文字提示",
        vals: null,
      },
      {
        kind: "Field",
        body: ["image-fit="],
        detail: "image-fit",
        documentation: "预览图裁剪模式，可选值参考小程序image组件的mode属性",
        vals: {
          kind: "Value",
          body: [
            "scaleToFill",
            "aspectFit",
            "aspectFill",
            "widthFix",
            "heightFix",
            "top",
            "bottom",
            "center",
            "left",
            "right",
            "topleft",
            "topright",
            "bottomleft",
            "bottomright",
          ],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["use-before-read="],
        detail: "use-before-read",
        documentation: "是否开启文件读取前事件",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["camera="],
        detail: "camera",
        documentation: "当 accept 为 video 时生效，可选值为 back front",
        vals: {
          kind: "Value",
          body: ["back", "front"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["compressed="],
        detail: "compressed",
        documentation: "当 accept 为 video 时生效，是否压缩视频，默认为true",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["max-duration="],
        detail: "max-duration",
        documentation:
          "当 accept 为 video 时生效，拍摄视频最长拍摄时间，单位秒",
        vals: null,
      },
      {
        kind: "Field",
        body: ["upload-icon="],
        detail: "upload-icon",
        documentation: "上传区域图标，可选值见 Icon 组件",
        vals: {
          kind: "Value",
          body: ["plus"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Event",
        body: ["bind:before-read="],
        detail: "bind:before-read",
        documentation:
          "文件读取前，在回调函数中返回 false 可终止文件读取，绑定事件的同时需要将use-before-read属性设置为true",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:after-read="],
        detail: "bind:after-read",
        documentation: "文件读取完成后",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:oversize="],
        detail: "bind:oversize",
        documentation: "文件超出大小限制",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:click-preview="],
        detail: "bind:click-preview",
        documentation: "点击预览图片",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:delete="],
        detail: "bind:delete",
        documentation: "删除图片",
        vals: null,
      },
    ],
  },
};
