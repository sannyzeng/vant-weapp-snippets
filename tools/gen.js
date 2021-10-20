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
  if (item["wxss"] && item["wxss"].body) {
    resultData.vantwxss.push({
      name: `${name}`,
      prefix: `${name}`,
      body: item["wxss"].body,
      description: item["wxss"].documentation,
    });
  }

  // 处理vant-json
  if (item["json"] && item["json"].body) {
    resultData.vantjson.push({
      name: `${name}`,
      prefix: `${name}`,
      body: item["json"].body,
      description: item["json"].documentation,
    });
  }

  // 处理vant-wxml
  if (item["wxml"] && item["wxml"].body) {
    resultData.vantwxml.push({
      name: `${name}`,
      prefix: `${name}`,
      body: item["wxml"].body,
      description: item["wxml"].documentation,
    });
  }

  // 处理vant-js
  if (item["js"] && item["js"].body) {
    resultData.vantjs.push({
      name: `${name}`,
      prefix: `import ${name}`,
      body: item["js"].body,
      description: item["js"].documentation,
    });
  }

  // 处理functions
  if (item["functions"] && item["functions"].length > 0) {
    for (let i = 0; i < item["functions"].length; i++) {
      resultData.vantjs.push({
        name: `${item["functions"][i].detail}`,
        prefix: `${item["functions"][i].detail}`,
        body: item["functions"][i].body,
        description: item["functions"][i].documentation,
      });
    }
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
