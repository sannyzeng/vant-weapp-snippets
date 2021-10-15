## This is Code Snippets of Vant Weapp for VS Code. (Vant Weapp Version: v1.9.0)
### Git: 
[Vant Weapp Snippets - Github](https://github.com/sannyzeng/vant-weapp-snippets) 

[Vant Weapp Snippets - Gitee](https://gitee.com/sannyzeng/vant-weapp-snippets) 

### Thanks: 
[fishku](https://github.com/yhsy/vant-snippets)

### Snippets List
1. 基于[Vant Weapp](https://youzan.github.io/vant-weapp/#/home) v1.9.0， 支持所有 Vant Weapp 标签，例如 `wvanb`，输出 `<van-button>`。
2. 支持在 app.json/page.json `usingComponents` 中导入模块，例如 `wvanb` ，输出 `"van-button": "@vant/weapp/button/index"`。
3. 支持 wxss 快速导入公共样式，`wvans`，输出`@import '@vant/weapp/common/index.wxss';`。
4. 支持 js 中快速导入 Toast 等模块，`wvant`，输出`import Toast from '@vant/weapp/dist/toast/toast';`
5. 支持微信开发者工具。

### WXML/JSON
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvanb`        | `<van-button>`         |
|  2.   |    `wvanbp`        | `<van-button plain>`         |
|  3.   |    `wvanbb`        | `<van-button block>`         |
|  4.   |    `wvanbr`        | `<van-button round>`         |
|  5.   |    `wvanbs`        | `<van-button square>`         |
|  6.   |    `wvanc`        | `<van-cell>`     |
|  7.   |    `wvancl`        | `<van-cell is-link>`     |
|  8.   |    `wvancg`        | `<van-cell-group>`           |
|  9.   |    `wvancgi`        | `<van-cell-group inset>`           |
|  10.   |    `wvani`       | `<van-icon>`           |
|  11.   |    `wvanid`       | `<van-icon dot>`           |
|  12.   |    `wvanimg`        | `<van-image>`             |
|  13.   |    `wvanimgr`        | `<van-image round>`             |
|  14.   |    `wvanimgl`        | `<van-image lazy-load>`             |
|  15.   |    `wvanrow`       | `<van-row>` |
|  16.   |    `wvancol`       | `<van-col>`   |
|  17.   |    `wvanpop`        | `<van-popup>`             |
|  18.   |    `wvanpopr`        | `<van-popup round>`             |
|  19.   |    `wvanto`    | `<van-toast>`           |
|  20.   |    `wvantr`    | `<van-transition>`           |
|  21.   |    `wvancal`    | `<van-calendar>`           |
|  22.   |    `wvancheck`    | `<van-checkbox>`           |
|  23.   |    `wvandatetime`    | `<van-datetime-picker>`           |
|  24.   |    `wvanf`    | `<van-field>`           |
|  25.   |    `wvanpick`    | `<van-picker>`           |
|  26.   |    `wvanra`    | `<van-radio>`           |
|  27.   |    `wvanrate`    | `<van-rate>`           |
|  28.   |    `wvans`    | `<van-search>`           |
|  29.   |    `wvansli`    | `<van-slider>`           |
|  30.   |    `wvanstepper`    | `<van-stepper>`           |
|  31.   |    `wvanswi`    | `<van-switch>`           |
|  32.   |    `wvanupl`    | `<van-uploader>`           |
|  33.   |    `wvanac`    | `<van-action-sheet>`           |
|  34.   |    `wvandia`    | `<van-dialog>`           |
|  35.   |    `wvandrop`    | `<van-dropdown-menu>`           |
|  36.   |    `wvanload`    | `<van-loading>`           |
|  37.   |    `wvanno`    | `<van-notify>`           |
|  38.   |    `wvanover`    | `<van-overlay>`           |
|  39.   |    `wvanshare`    | `<van-share-sheet>`           |
|  40.   |    `wvanswipec`    | `<van-swipe-cell>`           |
|  41.   |    `wvancir`    | `<van-circle>`           |
|  42.   |    `wvancoll`    | `<van-collapse>`           |
|  43.   |    `wvancd`    | `<van-count-down>`           |
|  44.   |    `wvandiv`    | `<van-divider>`           |
|  45.   |    `wvanemp`    | `<van-empty>`           |
|  46.   |    `wvannot`    | `<van-notice-bar>`           |
|  47.   |    `wvanpro`    | `<van-progress>`           |
|  48.   |    `wvanske`    | `<van-skeleton>`           |
|  49.   |    `wvansteps`    | `<van-steps>`           |
|  50.   |    `wvansti`    | `<van-sticky>`           |
|  51.   |    `wvantag`    | `<van-tag>`           |
|  52.   |    `wvangrid`    | `<van-grid>`           |
|  53.   |    `wvanind`    | `<van-index-bar>`           |
|  54.   |    `wvannavb`    | `<van-nav-bar>`           |
|  55.   |    `wvansideb`    | `<van-sidebar>`           |
|  56.   |    `wvantab`    | `<van-tab>`           |
|  57.   |    `wvantabb`    | `<van-tabbar>`           |
|  58.   |    `wvantrees`    | `<van-tree-select>`           |
|  59.   |    `wvanarea`    | `<van-area>`           |
|  60.   |    `wvancard`    | `<van-card>`           |
|  61.   |    `wvansubm`    | `<van-submit-bar>`           |
|  62.   |    `wvangood`    | `<van-goods-action>`           |


### WXML Class Name
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvanellipsis`    | `van-ellipsis`           |
|  2.   |    `wvanellipsisl2`    | `van-multi-ellipsis--l2`           |
|  3.   |    `wvanellipsisl3`    | `van-multi-ellipsis--l3`           |
|  4.   |    `wvanhairlinetop`    | `van-hairline--top`           |
|  5.   |    `wvanhairlinebottom`    | `van-hairline--bottom`           |
|  6.   |    `wvanhairlineleft`    | `van-hairline--left`           |
|  7.   |    `wvanhairlineright`    | `van-hairline--right`           |
|  8.   |    `wvanhairlinetopbottom`    | `van-hairline--top-bottom`           |
|  9.   |    `wvanhairlinesurround`    | `van-hairline--surround`           |

### WXSS
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvans`        | `@import "miniprogram_npm/@vant/weapp/common/index.wxss";`         |

### JS

#### Toast
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvanto`        | `import Toast from "@vant/weapp/toast/toast"` | 
|  2.   |    `wvantol`        | `Toast.loading({message: '加载中...',forbidClick: true,});` | 
|  3.   |    `wvantos`        | `Toast.success('成功文案');`|  
|  4.   |    `wvantof`        | `Toast.fail('失败文案');`  |
|  5.   |    `wvantoc`        | `Toast.clear();`  |

#### Dialog
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvandia`        | `import Dialog from '@vant/weapp/dialog/dialog';`  |
|  2.   |    `wvandiaalert`        | `Dialog.alert({title: '标题',message: '弹窗内容',}).then(() => {// on close});`  |
|  3.   |    `wvandiacon`        | `Dialog.confirm({title: '标题',message: '弹窗内容',}).then(() => {// on confirm}).catch(() => {// on cancel});`  |
|  4.   |    `wvandiaclo`        | `Dialog.close();`  |
|  5.   |    `wvanno`        | `import Notify from "@vant/weapp/notify/notify";`  |

#### Notify
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvannotifypri`        | `Notify({ type: 'primary', message: '通知内容' });`  |
|  2.   |    `wvannotifysuc`        | `Notify({ type: 'success', message: '通知内容' });`  |
|  3.   |    `wvannotifydan`        | `Notify({ type: 'danger', message: '通知内容' });`  |
|  4.   |    `wvannotifywar`        | `Notify({ type: 'warning', message: '通知内容' });`  |
|  5.   |    `wvannotifycle`        | `Notify.clear();`  |