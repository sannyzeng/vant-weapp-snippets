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

### WXML/JSON
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvanb`        | `<van-button>`         |
|  2.   |    `wvanc`        | `<van-cell>`     |
|  3.   |    `wvance`        | `<van-cell-group>`           |
|  4.   |    `wvani`       | `<van-icon>`           |
|  5.   |    `wvanim`        | `<van-image>`             |
|  6.   |    `wvanr`       | `<van-row>` |
|  7.   |    `wvanco`       | `<van-col>`   |
|  8.   |    `wvanp`        | `<van-popup>`             |
|  9.   |    `wvant`    | `<van-toast>`           |
|  10.   |    `wvantr`    | `<van-transition>`           |
|  12.   |    `wvanca`    | `<van-calendar>`           |
|  13.   |    `wvanch`    | `<van-checkbox>`           |
|  14.   |    `wvand`    | `<van-datetime-picker>`           |
|  15.   |    `wvanf`    | `<van-field>`           |
|  16.   |    `wvanpi`    | `<van-picker>`           |
|  17.   |    `wvanra`    | `<van-radio>`           |
|  18.   |    `wvanrat`    | `<van-rate>`           |
|  19.   |    `wvans`    | `<van-search>`           |
|  20.   |    `wvansl`    | `<van-slider>`           |
|  21.   |    `wvanst`    | `<van-stepper>`           |
|  22.   |    `wvansw`    | `<van-switch>`           |
|  23.   |    `wvanu`    | `<van-uploader>`           |
|  24.   |    `wvana`    | `<van-action-sheet>`           |
|  25.   |    `wvandi`    | `<van-dialog>`           |
|  26.   |    `wvandr`    | `<van-dropdown-menu>`           |
|  27.   |    `wvanl`    | `<van-loading>`           |
|  28.   |    `wvann`    | `<van-notify>`           |
|  29.   |    `wvano`    | `<van-overlay>`           |
|  30.   |    `wvansh`    | `<van-share-sheet>`           |
|  31.   |    `wvanswi`    | `<van-swipe-cell>`           |
|  32.   |    `wvanci`    | `<van-circle>`           |
|  33.   |    `wvancol`    | `<van-collapse>`           |
|  34.   |    `wvancou`    | `<van-count-down>`           |
|  35.   |    `wvandiv`    | `<van-divider>`           |
|  36.   |    `wvane`    | `<van-empty>`           |
|  37.   |    `wvanno`    | `<van-notice-bar>`           |
|  38.   |    `wvanpr`    | `<van-progress>`           |
|  39.   |    `wvansk`    | `<van-skeleton>`           |
|  40.   |    `wvanste`    | `<van-steps>`           |
|  41.   |    `wvansti`    | `<van-sticky>`           |
|  42.   |    `wvanta`    | `<van-tag>`           |
|  43.   |    `wvang`    | `<van-grid>`           |
|  44.   |    `wvanin`    | `<van-index-bar>`           |
|  45.   |    `wvanna`    | `<van-nav-bar>`           |
|  46.   |    `wvansi`    | `<van-sidebar>`           |
|  47.   |    `wvantab`    | `<van-tab>`           |
|  48.   |    `wvantabb`    | `<van-tabbar>`           |
|  49.   |    `wvantre`    | `<van-tree-select>`           |
|  50.   |    `wvanar`    | `<van-tree-area>`           |
|  51.   |    `wvancar`    | `<van-card>`           |
|  52.   |    `wvansu`    | `<van-submit-bar>`           |
|  53.   |    `wvango`    | `<van-goods-action>`           |

### WXSS
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvans`        | `@import '@vant/weapp/common/index.wxss';`         |

### JS
|  No.  | Trigger&nbsp;Key | Vant Tag                |
| :---: | :--------------: | :---------------------- |
|  1.   |    `wvant`        | `import Toast from '@vant/weapp/dist/toast/toast';`  
|  2.   |    `wvand`        | `import Dialog from '@vant/weapp/dist/dialog/dialog';`  
|  3.   |    `wvann`        | `import Notify from 'path/to/@vant/weapp/dist/notify/notify';`  