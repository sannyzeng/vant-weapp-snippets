exports.data = {
  version: "v1.9.0",
  list: {
    button: {
      prefix: "vanb",
      json: ['"van-button": "@vant/weapp/button/index"'],
      wxml: {
        text: '<van-button type="default" size="normal">默认按钮</van-button>',
        replaceKey: ["default", "normal"],
        replaceContent: [
          "${1|primary,info,warning,danger,default|}",
          "${2|normal,large,small,mini|}",
        ],
      },
    },
    "button-plain": {
      prefix: "vanbp",
      wxml: {
        text: '<van-button type="default" size="normal" plain>朴素按钮</van-button>',
        replaceKey: ["default", "normal"],
        replaceContent: [
          "${1|primary,info,warning,danger,default|}",
          "${2|normal,large,small,mini|}",
        ],
      },
    },
    "button-block": {
      prefix: "vanbb",
      wxml: {
        text: '<van-button type="default" size="normal" block>块级元素按钮</van-button>',
        replaceKey: ["default", "normal"],
        replaceContent: [
          "${1|primary,info,warning,danger,default|}",
          "${2|normal,large,small,mini|}",
        ],
      },
    },
    "button-round": {
      prefix: "vanbr",
      wxml: {
        text: '<van-button type="default" size="normal" round>圆形按钮</van-button>',
        replaceKey: ["default", "normal"],
        replaceContent: [
          "${1|primary,info,warning,danger,default|}",
          "${2|normal,large,small,mini|}",
        ],
      },
    },
    "button-square": {
      prefix: "vanbs",
      wxml: {
        text: '<van-button type="default" size="normal" square>方形按钮</van-button>',
        replaceKey: ["default", "normal"],
        replaceContent: [
          "${1|primary,info,warning,danger,default|}",
          "${2|normal,large,small,mini|}",
        ],
      },
    },
    cell: {
      prefix: "vanc",
      json: ['"van-cell": "@vant/weapp/cell/index"'],
      wxml: {
        text: '<van-cell title="单元格" value="内容" label="描述信息" border="{{ false }}" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    "cell-link": {
      prefix: "vancl",
      wxml: {
        text: '<van-cell title="单元格" value="内容" label="描述信息" border="{{ false }}" is-link />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    "cell-group": {
      prefix: "vancg",
      json: ['"van-cell-group": "@vant/weapp/cell-group/index"'],
      wxml: {
        text: "<van-cell-group>${1}</van-cell-group>",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "cell-group-inset": {
      prefix: "vancgi",
      wxml: {
        text: "<van-cell-group inset>${1}</van-cell-group>",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "config-provider": {
      prefix: "vancp",
      json: ['"van-config-provider": "@vant/weapp/config-provider/index"'],
      wxml: null,
    },
    icon: {
      prefix: "vani",
      json: ['"van-icon": "@vant/weapp/icon/index"'],
      wxml: {
        text: '<van-icon name="close" />',
        replaceKey: ["close"],
        replaceContent: [
          "${1|success,plus,cross,fail,arrow,arrow-left,arrow-up,arrow-down|}",
        ],
      },
    },
    "icon-dot": {
      prefix: "vanid",
      wxml: {
        text: '<van-icon name="chat" dot />',
        replaceKey: ["chat"],
        replaceContent: [
          "${1|chat,success,plus,cross,fail,arrow,arrow-left,arrow-up,arrow-down|}",
        ],
      },
    },
    image: {
      prefix: "vanimg",
      json: ['"van-image": "@vant/weapp/image/index"'],
      wxml: {
        text: '<van-image width="100" height="100" src="${1}" fit="contain" />',
        replaceKey: ["contain"],
        replaceContent: ["${1|contain,cover,fill,widthFix,heightFix,none|}"],
      },
    },
    "image-round": {
      prefix: "vanimgr",
      wxml: {
        text: '<van-image width="100" height="100" src="${1}" fit="contain" round />',
        replaceKey: ["contain"],
        replaceContent: ["${1|contain,cover,fill,widthFix,heightFix,none|}"],
      },
    },
    "image-lazyload": {
      prefix: "vanimgl",
      wxml: {
        text: '<van-image width="100" height="100" src="${1}" fit="contain" lazy-load />',
        replaceKey: ["contain"],
        replaceContent: ["${1|contain,cover,fill,widthFix,heightFix,none|}"],
      },
    },
    row: {
      prefix: "vanrow",
      json: ['"van-row": "@vant/weapp/row/index"'],
      wxml: {
        text: "<van-row>${1}</van-row>",
        replaceKey: [],
        replaceContent: [],
      },
    },
    col: {
      prefix: "vancol",
      json: ['"van-col": "@vant/weapp/col/index"'],
      wxml: {
        text: '<van-col span="${1}" offset="${2}>span: 8</van-col>',
        replaceKey: [],
        replaceContent: [],
      },
    },
    popup: {
      prefix: "vanpop",
      json: ['"van-popup": "@vant/weapp/popup/index"'],
      wxml: {
        text: '<van-popup position="center" show="{{ show }}" bind:close="onClose">内容</van-popup>',
        replaceKey: ["center"],
        replaceContent: ["${1|center,top,bottom,right,left|}"],
      },
    },
    "popup-round": {
      prefix: "vanpopr",
      wxml: {
        text: '<van-popup position="center" round show="{{ show }}" bind:close="onClose">内容</van-popup>',
        replaceKey: ["center"],
        replaceContent: ["${1|center,top,bottom,right,left|}"],
      },
    },
    toast: {
      prefix: "vanto",
      json: ['"van-toast": "@vant/weapp/toast/index"'],
      wxml: {
        text: '<van-toast id="van-toast" />',
        replaceKey: [],
        replaceContent: [],
      },
      js: ['import Toast from "@vant/weapp/toast/toast"'],
    },
    "toast-loading": {
      prefix: "vantol",
      js: [
        `
      Toast.loading({
        message: '加载中...',
        forbidClick: true,
      });
      `,
      ],
    },
    "toast-success": {
      prefix: "vantos",
      js: [`Toast.success('成功文案');`],
    },
    "toast-fail": {
      prefix: "vantof",
      js: [`Toast.fail('失败文案');`],
    },
    "toast-clear": {
      prefix: "vantoc",
      js: [`Toast.clear();`],
    },
    transition: {
      prefix: "vantr",
      json: ['"van-transition": "@vant/weapp/transition/index"'],
      wxml: {
        text: '<van-transition name="fade" show="{{ show }}" custom-class="block">内容</van-transition>',
        replaceKey: ["fade"],
        replaceContent: [
          "${1|fade,fade-up,fade-down,fade-left,fade-right,slide-up,slide-down,slide-left,slide-right|}",
        ],
      },
    },
    calendar: {
      prefix: "vancal",
      json: ['"van-calendar": "@vant/weapp/calendar/index"'],
      wxml: {
        text: '<van-calendar type="single" show="{{ show }}" bind:close="onClose" bind:confirm="onConfirm" />',
        replaceKey: ["single"],
        replaceContent: ["${1|single,multiple,range|}"],
      },
    },
    checkbox: {
      prefix: "vancheck",
      json: [
        '"van-checkbox": "@vant/weapp/checkbox/index",',
        '"van-checkbox-group": "@vant/weapp/checkbox-group/index"',
      ],
      wxml: {
        text: '<van-checkbox shape="round" value="{{ checked }}" bind:change="onChange">复选框</van-checkbox>',
        replaceKey: ["round"],
        replaceContent: ["${1|round,square|}"],
      },
    },
    "datetime-picker": {
      prefix: "vandatetime",
      json: ['"van-datetime-picker": "@vant/weapp/datetime-picker/index"'],
      wxml: {
        text: `<van-datetime-picker
            type="datetime"
            value="{{ currentDate }}"
            min-date="{{ minDate }}"
            max-date="{{ maxDate }}"
            bind:input="onInput"
            />`,
        replaceKey: ['type="datetime"'],
        replaceContent: ['type="${1|datetime,date,time,year-month|}"'],
      },
    },
    field: {
      prefix: "vanf",
      json: ['"van-field": "@vant/weapp/field/index"'],
      wxml: {
        text: `<van-field
            type="text"
            value="{{ value }}"
            placeholder="请输入用户名"
            border="{{ false }}"
            bind:change="onChange"
          />`,
        replaceKey: ["text"],
        replaceContent: ["${1|text,number,idcard,textarea,digit|}"],
      },
    },
    picker: {
      prefix: "vanpick",
      json: ['"van-picker": "@vant/weapp/picker/index"'],
      wxml: {
        text: '<van-picker columns="{{ columns }}" bind:change="onChange" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    radio: {
      prefix: "vanra",
      json: [
        '"van-radio": "@vant/weapp/radio/index",',
        '"van-radio-group": "@vant/weapp/radio-group/index"',
      ],
      wxml: {
        text: `<van-radio-group direction="vertical" value="{{ radio }}" bind:change="onChange">
          <van-radio shape="round" name="1">单选框 1</van-radio>
          <van-radio name="2">单选框 2</van-radio>
        </van-radio-group>`,
        replaceKey: ["vertical", "round"],
        replaceContent: ["${1|vertical,horizontal|}", "${2|round,square|}"],
      },
    },
    rate: {
      prefix: "vanrate",
      json: ['"van-rate": "@vant/weapp/rate/index"'],
      wxml: {
        text: '<van-rate value="{{ value }}" bind:change="onChange" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    search: {
      prefix: "vans",
      json: ['"van-search": "@vant/weapp/search/index"'],
      wxml: {
        text: '<van-search value="{{ value }}" placeholder="请输入搜索关键词" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    slider: {
      prefix: "vansli",
      json: ['"van-slider": "@vant/weapp/slider/index"'],
      wxml: {
        text: '<van-slider value="50" bind:change="onChange" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    stepper: {
      prefix: "vanstepper",
      json: ['"van-stepper": "@vant/weapp/stepper/index"'],
      wxml: {
        text: '<van-stepper value="{{ 1 }}" bind:change="onChange" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    switch: {
      prefix: "vanswi",
      json: ['"van-switch": "@vant/weapp/switch/index"'],
      wxml: {
        text: '<van-switch checked="{{ checked }}" bind:change="onChange" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    uploader: {
      prefix: "vanupl",
      json: ['"van-uploader": "@vant/weapp/uploader/index"'],
      wxml: {
        text: '<van-uploader accept="image" file-list="{{ fileList }}" bind:after-read="afterRead" />',
        replaceKey: ["image"],
        replaceContent: ["${1|image,all,media,file,video|}"],
      },
    },
    "action-sheet": {
      prefix: "vanac",
      json: ['"van-action-sheet": "@vant/weapp/action-sheet/index"'],
      wxml: {
        text: `<van-action-sheet
          show="{{ show }}"
          actions="{{ actions }}"
          bind:close="onClose"
          bind:select="onSelect"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    dialog: {
      prefix: "vandia",
      json: ['"van-dialog": "@vant/weapp/dialog/index"'],
      wxml: {
        text: '<van-dialog id="van-dialog" />',
        replaceKey: [],
        replaceContent: [],
      },
      js: ['import Dialog from "@vant/weapp/dialog/dialog";'],
    },
    "dialog-alert": {
      prefix: "vandiaalert",
      js: [
        `
      Dialog.alert({
        title: '标题',
        message: '弹窗内容',
      }).then(() => {
        // on close
      });
      `,
      ],
    },
    "dialog-confirm": {
      prefix: "vandiacon",
      js: [
        `
      Dialog.confirm({
        title: '标题',
        message: '弹窗内容',
      })
        .then(() => {
          // on confirm
        })
        .catch(() => {
          // on cancel
        });
      `,
      ],
    },
    "dialog-close": {
      prefix: "vandiaclo",
      js: ["Dialog.close();"],
    },
    "dropdown-menu": {
      prefix: "vandrop",
      json: [
        '"van-dropdown-menu": "@vant/weapp/dropdown-menu/index",',
        '"van-dropdown-item": "@vant/weapp/dropdown-item/index"',
      ],
      wxml: {
        text: `<van-dropdown-menu>
          <van-dropdown-item value="{{ value1 }}" options="{{ option1 }}" />
          <van-dropdown-item value="{{ value2 }}" options="{{ option2 }}" />
        </van-dropdown-menu>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    loading: {
      prefix: "vanload",
      json: ['"van-loading": "@vant/weapp/loading/index"'],
      wxml: {
        text: '<van-loading type="circular" />',
        replaceKey: ["circular"],
        replaceContent: ["${1|circular,spinner|}"],
      },
    },
    notify: {
      prefix: "vanno",
      json: ['"van-notify": "@vant/weapp/notify/index"'],
      wxml: {
        text: '<van-notify id="van-notify" />',
        replaceKey: [],
        replaceContent: [],
      },
      js: ['import Notify from "@vant/weapp/notify/notify";'],
    },
    "notify-primary": {
      prefix: "vannotifypri",
      js: ['Notify({ type: "primary", message: "通知内容" });'],
    },
    "notify-success": {
      prefix: "vannotifysuc",
      js: ['Notify({ type: "success", message: "通知内容" });'],
    },
    "notify-danger": {
      prefix: "vannotifydan",
      js: ['Notify({ type: "danger", message: "通知内容" });'],
    },
    "notify-warning": {
      prefix: "vannotifywar",
      js: ['Notify({ type: "warning", message: "通知内容" });'],
    },
    "notify-clear": {
      prefix: "vannotifycle",
      js: ["Notify.clear();"],
    },
    overlay: {
      prefix: "vanover",
      json: ['"van-overlay": "@vant/weapp/overlay/index"'],
      wxml: {
        text: '<van-overlay show="{{ show }}" bind:click="onClickHide" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    "share-sheet": {
      prefix: "vanshare",
      json: ['"van-share-sheet": "@vant/weapp/share-sheet/index"'],
      wxml: {
        text: `<van-share-sheet
          show="{{ showShare }}"
          title="立即分享给好友"
          options="{{ options }}"
          bind:select="onSelect"
          bind:close="onClose"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "swipe-cell": {
      prefix: "vanswipec",
      json: ['"van-swipe-cell": "@vant/weapp/swipe-cell/index"'],
      wxml: {
        text: `<van-swipe-cell right-width="{{ 65 }}" left-width="{{ 65 }}">
          <view slot="left">选择</view>
          <van-cell-group>
            <van-cell title="单元格" value="内容" />
          </van-cell-group>
          <view slot="right">删除</view>
        </van-swipe-cell>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    circle: {
      prefix: "vancir",
      json: ['"van-circle": "@vant/weapp/circle/index"'],
      wxml: {
        text: '<van-circle value="{{ 30 }}" text="text" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    collapse: {
      prefix: "vancoll",
      json: [
        '"van-collapse": "@vant/weapp/collapse/index",',
        '"van-collapse-item": "@vant/weapp/collapse-item/index"',
      ],
      wxml: {
        text: `<van-collapse value="{{ activeNames }}" bind:change="onChange">
          <van-collapse-item title="有赞微商城" name="1">
            提供多样店铺模板，快速搭建网上商城
          </van-collapse-item>
          <van-collapse-item title="有赞零售" name="2">
            网店吸粉获客、会员分层营销、一机多种收款，告别经营低效和客户流失
          </van-collapse-item>
          <van-collapse-item title="有赞美业" name="3" disabled>
            线上拓客，随时预约，贴心顺手的开单收银
          </van-collapse-item>
        </van-collapse>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "count-down": {
      prefix: "vancd",
      json: ['"van-count-down": "@vant/weapp/count-down/index"'],
      wxml: {
        text: '<van-count-down time="{{ time }}" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    divider: {
      prefix: "vandiv",
      json: ['"van-divider": "@vant/weapp/divider/index"'],
      wxml: {
        text: "<van-divider />",
        replaceKey: [],
        replaceContent: [],
      },
    },
    empty: {
      prefix: "vanemp",
      json: ['"van-empty": "@vant/weapp/empty/index"'],
      wxml: {
        text: '<van-empty image="default" description="描述文字" />',
        replaceKey: ["default"],
        replaceContent: ["${1|default,error,network,search|}"],
      },
    },
    "notice-bar": {
      prefix: "vannot",
      json: ['"van-notice-bar": "@vant/weapp/notice-bar/index"'],
      wxml: {
        text: `<van-notice-bar
          left-icon="volume-o"
          text="在代码阅读过程中人们说脏话的频率是衡量代码质量的唯一标准。"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    progress: {
      prefix: "vanpro",
      json: ['"van-progress": "@vant/weapp/progress/index"'],
      wxml: {
        text: '<van-progress percentage="50" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    skeleton: {
      prefix: "vanske",
      json: ['"van-skeleton": "@vant/weapp/skeleton/index"'],
      wxml: {
        text: '<van-skeleton title row="3" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    steps: {
      prefix: "vansteps",
      json: ['"van-steps": "@vant/weapp/steps/index"'],
      wxml: {
        text: '<van-steps direction="horizontal" steps="{{ steps }}" active="{{ active }}" />',
        replaceKey: ["horizontal"],
        replaceContent: ["${1|horizontal,vertical|}"],
      },
    },
    sticky: {
      prefix: "vansti",
      json: ['"van-sticky": "@vant/weapp/sticky/index"'],
      wxml: {
        text: "<van-sticky>${1}</van-sticky>",
        replaceKey: [],
        replaceContent: [],
      },
    },
    tag: {
      prefix: "vantag",
      json: ['"van-tag": "@vant/weapp/tag/index"'],
      wxml: {
        text: '<van-tag type="primary">标签</van-tag>',
        replaceKey: ["primary"],
        replaceContent: ["${1|primary,success,danger,warning|}"],
      },
    },
    grid: {
      prefix: "vangrid",
      json: [
        '"van-grid": "@vant/weapp/grid/index",',
        '"van-grid-item": "@vant/weapp/grid-item/index"',
      ],
      wxml: {
        text: `<van-grid>
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
          <van-grid-item icon="photo-o" text="文字" />
        </van-grid>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "index-bar": {
      prefix: "vanind",
      json: [
        '"van-index-bar": "@vant/weapp/index-bar/index",',
        '"van-index-anchor": "@vant/weapp/index-anchor/index"',
      ],
      wxml: {
        text: `<van-index-bar>
          <view>
            <van-index-anchor index="A" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
          </view>

          <view>
            <van-index-anchor index="B" />
            <van-cell title="文本" />
            <van-cell title="文本" />
            <van-cell title="文本" />
          </view>
        </van-index-bar>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "nav-bar": {
      prefix: "vannavb",
      json: ['"van-nav-bar": "@vant/weapp/nav-bar/index"'],
      wxml: {
        text: `<van-nav-bar
          title="标题"
          left-text="返回"
          right-text="按钮"
          left-arrow
          bind:click-left="onClickLeft"
          bind:click-right="onClickRight"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    sidebar: {
      prefix: "vansideb",
      json: [
        '"van-sidebar": "@vant/weapp/sidebar/index",',
        '"van-sidebar-item": "@vant/weapp/sidebar-item/index"',
      ],
      wxml: {
        text: `<van-sidebar active-key="{{ activeKey }}">
          <van-sidebar-item title="标签名" />
          <van-sidebar-item title="标签名" />
          <van-sidebar-item title="标签名" />
        </van-sidebar>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    tab: {
      prefix: "vantab",
      json: [
        '"van-tab": "@vant/weapp/tab/index",',
        '"van-tabs": "@vant/weapp/tabs/index"',
      ],
      wxml: {
        text: `<van-tabs type="line" active="{{ active }}" bind:change="onChange">
          <van-tab title="标签 1">内容 1</van-tab>
          <van-tab title="标签 2">内容 2</van-tab>
          <van-tab title="标签 3">内容 3</van-tab>
          <van-tab title="标签 4">内容 4</van-tab>
        </van-tabs>`,
        replaceKey: ["line"],
        replaceContent: ["${1|line,card|}"],
      },
    },
    tabbar: {
      prefix: "vantabb",
      json: [
        '"van-tabbar": "@vant/weapp/tabbar/index",',
        '"van-tabbar-item": "@vant/weapp/tabbar-item/index"',
      ],
      wxml: {
        text: `<van-tabbar active="{{ active }}" bind:change="onChange">
          <van-tabbar-item icon="home-o">标签</van-tabbar-item>
          <van-tabbar-item icon="search">标签</van-tabbar-item>
          <van-tabbar-item icon="friends-o">标签</van-tabbar-item>
          <van-tabbar-item icon="setting-o">标签</van-tabbar-item>
        </van-tabbar>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "tree-select": {
      prefix: "vantrees",
      json: ['"van-tree-select": "@vant/weapp/tree-select/index"'],
      wxml: {
        text: `<van-tree-select
          items="{{ items }}"
          main-active-index="{{ mainActiveIndex }}"
          active-id="{{ activeId }}"
          bind:click-nav="onClickNav"
          bind:click-item="onClickItem"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    area: {
      prefix: "vanarea",
      json: ['"van-area": "@vant/weapp/area/index"'],
      wxml: {
        text: '<van-area area-list="{{ areaList }}" />',
        replaceKey: [],
        replaceContent: [],
      },
    },
    card: {
      prefix: "vancard",
      json: ['"van-card": "@vant/weapp/card/index"'],
      wxml: {
        text: `<van-card
          num="2"
          price="2.00"
          desc="描述信息"
          title="商品标题"
          thumb="{{ imageURL }}"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "submit-bar": {
      prefix: "vansubm",
      json: ['"van-submit-bar": "@vant/weapp/submit-bar/index"'],
      wxml: {
        text: `<van-submit-bar
          price="{{ 3050 }}"
          button-text="提交订单"
          bind:submit="onSubmit"
        />`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    "goods-action": {
      prefix: "vangood",
      json: [
        '"van-goods-action": "@vant/weapp/goods-action/index",',
        '"van-goods-action-icon": "@vant/weapp/goods-action-icon/index",',
        '"van-goods-action-button": "@vant/weapp/goods-action-button/index"',
      ],
      wxml: {
        text: `<van-goods-action>
          <van-goods-action-icon icon="chat-o" text="客服" bind:click="onClickIcon" />
          <van-goods-action-icon icon="cart-o" text="购物车" bind:click="onClickIcon" />
          <van-goods-action-button
            text="加入购物车"
            type="warning"
            bind:click="onClickButton"
          />
          <van-goods-action-button text="立即购买" bind:click="onClickButton" />
        </van-goods-action>`,
        replaceKey: [],
        replaceContent: [],
      },
    },
    // 內置樣式
    style: {
      wxss: ['@import "miniprogram_npm/@vant/weapp/common/index.wxss";'],
    },
    "van-ellipsis": {
      prefix: "vanellipsis",
      wxml: {
        text: "van-ellipsis",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-multi-ellipsis--l2": {
      prefix: "vanellipsisl2",
      wxml: {
        text: "van-multi-ellipsis--l2",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-multi-ellipsis--l3": {
      prefix: "vanellipsisl3",
      autoPrefix: false,
      wxml: {
        text: "van-multi-ellipsis--l3",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-hairline--top": {
      prefix: "vanhairlinetop",
      wxml: {
        text: "van-hairline--top",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-hairline--bottom": {
      prefix: "vanhairlinebottom",
      wxml: {
        text: "van-hairline--bottom",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-hairline--left": {
      prefix: "vanhairlineleft",
      wxml: {
        text: "van-hairline--left",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-hairline--right": {
      prefix: "vanhairlineright",
      wxml: {
        text: "van-hairline--right",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-hairline--top-bottom": {
      prefix: "vanhairlinetopbottom",
      wxml: {
        text: "van-hairline--top-bottom",
        replaceKey: [],
        replaceContent: [],
      },
    },
    "van-hairline--surround": {
      prefix: "vanhairlinesurround",
      wxml: {
        text: "van-hairline--surround",
        replaceKey: [],
        replaceContent: [],
      },
    },
  },
};
