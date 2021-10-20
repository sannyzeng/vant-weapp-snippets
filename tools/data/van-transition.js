exports.data = {
  json: {
    kind: "Snippet",
    body: ['"van-transition": "@vant/weapp/transition/index"'],
    detail: "Transition 动画",
    documentation: `在app.json或index.json中引入组件`,
  },
  wxml: {
    kind: "Snippet",
    body: [
      '<van-transition show="{{ ${1:show} }}"${2}>${3:内容}</van-transition>',
    ],
    detail: "Transition 动画",
    documentation: "使元素从一种样式逐渐变化为另一种样式的效果。",
    attrs: [
      {
        kind: "Field",
        body: ["name="],
        detail: "name",
        documentation: "动画类型",
        vals: {
          kind: "Value",
          body: [
            "fade",
            "fade-up",
            "fade-down",
            "fade-left",
            "fade-right",
            "slide-up",
            "slide-down",
            "slide-left",
            "slide-right",
          ],
          detail: "",
          documentation: `
            fade	淡入
            fade-up	上滑淡入
            fade-down	下滑淡入
            fade-left	左滑淡入
            fade-right	右滑淡入
            slide-up	上滑进入
            slide-down	下滑进入
            slide-left	左滑进入
            slide-right	右滑进入
            `,
        },
      },
      {
        kind: "Field",
        body: ["show="],
        detail: "show",
        documentation: "是否展示组件",
        vals: {
          kind: "Value",
          body: ["true", "false"],
          detail: "",
          documentation: "",
        },
      },
      {
        kind: "Field",
        body: ["duration="],
        detail: "duration",
        documentation: "动画时长，单位为毫秒",
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
        kind: "Event",
        body: ["bind:before-enter="],
        detail: "bind:before-enter",
        documentation: "进入前触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:enter="],
        detail: "bind:enter",
        documentation: "进入中触发",
        vals: null,
      },
      {
        kind: "Field",
        body: ["bind:after-enter="],
        detail: "bind:after-enter",
        documentation: "进入后触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:before-leave="],
        detail: "bind:before-leave",
        documentation: "离开前触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:leave="],
        detail: "bind:leave",
        documentation: "离开中触发",
        vals: null,
      },
      {
        kind: "Event",
        body: ["bind:after-leave="],
        detail: "bind:after-leave",
        documentation: "离开后触发",
        vals: null,
      },
      {
        kind: "Field",
        body: ["custom-class="],
        detail: "custom-class",
        documentation: "根节点样式类",
        vals: null,
      },
      {
        kind: "Field",
        body: ["enter-class="],
        detail: "enter-class",
        documentation:
          "定义进入过渡的开始状态。在元素被插入之前生效，在元素被插入之后的下一帧移除。",
        vals: null,
      },
      {
        kind: "Field",
        body: ["enter-active-class="],
        detail: "enter-active-class",
        documentation:
          "定义进入过渡生效时的状态。在整个进入过渡的阶段中应用，在元素被插入之前生效，在过渡/动画完成之后移除。这个类可以被用来定义进入过渡的过程时间，延迟和曲线函数。",
        vals: null,
      },
      {
        kind: "Field",
        body: ["enter-to-class="],
        detail: "enter-to-class",
        documentation:
          "定义进入过渡的结束状态。在元素被插入之后下一帧生效 (与此同时 enter-class 被移除)，在过渡/动画完成之后移除。",
        vals: null,
      },
      {
        kind: "Field",
        body: ["leave-class="],
        detail: "leave-class",
        documentation:
          "定义离开过渡的开始状态。在离开过渡被触发时立刻生效，下一帧被移除。",
        vals: null,
      },
      {
        kind: "Field",
        body: ["leave-active-class="],
        detail: "leave-active-class",
        documentation:
          "定义离开过渡生效时的状态。在整个离开过渡的阶段中应用，在离开过渡被触发时立刻生效，在过渡/动画完成之后移除。这个类可以被用来定义离开过渡的过程时间，延迟和曲线函数。",
        vals: null,
      },
      {
        kind: "Field",
        body: ["leave-to-class="],
        detail: "leave-to-class",
        documentation:
          "定义离开过渡的结束状态。在离开过渡被触发之后下一帧生效 (与此同时 leave-class 被删除)，在过渡/动画完成之后移除。",
        vals: null,
      },
    ],
  },
};
