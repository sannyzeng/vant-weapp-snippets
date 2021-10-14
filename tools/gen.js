const fs = require("fs");
const data = require("./data").data;

// snippets json 文件路径
let snippetsJsonPath = "./snippets/";
let snippets_json = "vant-json.json";
let snippets_wxml = "vant-wxml.json";
let snippets_js = "vant-js.json";
let snippets_wxss = "vant-wxss.json";

// 数据
let resultData = {
  vantjson: [],
  vantwxml: [],
  vantjs: [],
  vantwxss: [],
};

// 获取prefix
function getPrefix(dataKey, _prefix, _name) {
  let name = _name.replace(/-/g, "");
  let names = name.split("").map((item, idx) => {
    return name.substr(0, idx + 1);
  });
  let result = "";
  for (let i = 0; i < names.length; i++) {
    let prefixStr = `${_prefix}${names[i]}`;
    let idx = resultData[dataKey].findIndex((item) => {
      return item.prefix == prefixStr;
    });
    if (idx == -1) {
      result = prefixStr;
      break;
    }
  }
  return result;
}
// 格式化wxml
function formatWxmlText(wxml) {
  if (wxml.replaceKey.length == 0) return wxml.text;
  let text = wxml.text;
  for (let i = 0; i < wxml.replaceKey.length; i++) {
    text = text.replace(wxml.replaceKey[i], wxml.replaceContent[i]);
  }
  return text;
}

// 格式化數據
function formatSnippetsData(arr) {
  let result = {};
  for (let i = 0; i < arr.length; i++) {
    result[arr[i].name] = {
      prefix: arr[i].prefix,
      body: arr[i].body,
      description: arr[i].description,
    };
  }
  return JSON.stringify(result);
}

Object.keys(data.list).forEach(function (key) {
  let item = data.list[key];
  //   console.log(item);
  let name = key;

  // 处理vant-wxss
  if (item["wxss"]) {
    resultData.vantwxss.push({
      name: `w-vant-${name}`,
      prefix: getPrefix("vantwxss", "wvan", name),
      body: item["wxss"],
      description: `引入 van-${name} 样式`,
    });
  }

  // 处理vant-json
  if (item["json"]) {
    resultData.vantjson.push({
      name: `w-vant-${name}`,
      prefix: getPrefix("vantjson", "wvan", name),
      body: item["json"],
      description: `引入 van-${name}`,
    });
  }

  // 处理vant-wxml
  if (item["wxml"]) {
    resultData.vantwxml.push({
      name: `w-vant-${name}`,
      prefix: getPrefix("vantwxml", "wvan", name),
      body: formatWxmlText(item["wxml"]),
      description: `Vant ${name}`,
    });
  }

  // 处理vant-js
  if (item["js"]) {
    resultData.vantjs.push({
      name: `w-vant-${name}`,
      prefix: getPrefix("vantjs", "wvan", name),
      body: item["js"],
      description: `import ${name}`,
    });
  }
});

// 輸出結果
fs.writeFileSync(
  `${snippetsJsonPath}${snippets_json}`,
  formatSnippetsData(resultData.vantjson)
);
fs.writeFileSync(
  `${snippetsJsonPath}${snippets_wxml}`,
  formatSnippetsData(resultData.vantwxml)
);
fs.writeFileSync(
  `${snippetsJsonPath}${snippets_js}`,
  formatSnippetsData(resultData.vantjs)
);
fs.writeFileSync(
  `${snippetsJsonPath}${snippets_wxss}`,
  formatSnippetsData(resultData.vantwxss)
);
