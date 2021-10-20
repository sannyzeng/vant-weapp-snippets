const vscode = require("vscode");
const doc = require("../tools/data").data;

console.log(doc);

/**
 * 自动提示实现，这里模拟一个很简单的操作
 * 当输入 this.dependencies.xxx时自动把package.json中的依赖带出来
 * 当然这个例子没啥实际意义，仅仅是为了演示如何实现功能
 * @param {*} document
 * @param {*} position
 * @param {*} token
 * @param {*} context
 */
function provideCompletionItems(document, position, token, context) {
  // console.log(document, position);
  const line = document.lineAt(position);
  // console.log(line._text, /<van-button/.test(line._text));
  // 支持换行 代码从起始位置到输入位置
  const text = document.getText(
    new vscode.Range(new vscode.Position(0, 0), position)
  );

  // 匹配tagName
  let tagNameMatch = line._text.match(/van-[\w](.*?)[\s].*?/);
  let tagName = tagNameMatch ? tagNameMatch[0].replace(/ /g, "") : "";
  let attrNameMatch = text.match(/\s+(\S*)$/);
  let attrName = attrNameMatch
    ? attrNameMatch[0].replace(/[\s|=|\"|\']/g, "")
    : "";
  console.log(text, text.length);
  console.log("tagName,attrName:", tagName, attrName);
  console.log(tagName != "" && attrName == "");
  console.log("line:", line._text);

  // class
  if (attrName == "class") {
    return doc.list["class"].body.map((bodyItem) => {
      let completionItem = new vscode.CompletionItem(
        bodyItem,
        vscode.CompletionItemKind[doc.list["class"].kind]
      );
      completionItem.detail = doc.list["class"].detail;
      completionItem.documentation = doc.list["class"].documentation;
      // 代码替换位置，查找位置会同步应用
      completionItem.range = new vscode.Range(
        new vscode.Position(position.line, position.character),
        new vscode.Position(position.line, position.character)
      );
      return completionItem;
    });
  }

  if (line._text.indexOf("<van") != -1) {
    if (tagName != "" && attrName == "") {
      let attrs = doc.list[tagName].wxml.attrs;
      return attrs
        .map((item) => {
          return item.body.map((bodyItem) => {
            let completionItem = new vscode.CompletionItem(
              bodyItem,
              vscode.CompletionItemKind[item.kind]
            );
            completionItem.detail = item.detail;
            completionItem.documentation = item.documentation;
            // 代码替换位置，查找位置会同步应用
            completionItem.range = new vscode.Range(
              new vscode.Position(position.line, position.character),
              new vscode.Position(position.line, position.character)
            );
            return completionItem;
          });
        })
        .flat();
    } else if (tagName != "" && attrName != "") {
      let attrItem = doc.list[tagName].wxml.attrs.filter((item) => {
        return item.detail == attrName;
      });
      if (attrItem[0].vals) {
        return attrItem[0].vals.body.map((bodyItem) => {
          let completionItem = new vscode.CompletionItem(
            bodyItem,
            vscode.CompletionItemKind[attrItem[0].vals.kind]
          );
          completionItem.detail = attrItem[0].vals.detail;
          completionItem.documentation = attrItem[0].vals.documentation;
          // 代码替换位置，查找位置会同步应用
          completionItem.range = new vscode.Range(
            new vscode.Position(position.line, position.character),
            new vscode.Position(position.line, position.character)
          );
          return completionItem;
        });
      } else {
        return "";
      }
    }
  }
}

/**
 * 光标选中当前自动补全item时触发动作，一般情况下无需处理
 * @param {*} item
 * @param {*} token
 */
function resolveCompletionItem(item, token) {
  return null;
}

module.exports = function (context) {
  // 注册代码建议提示，只有当按下“.”时才触发
  context.subscriptions.push(
    vscode.languages.registerCompletionItemProvider(
      "wxml",
      {
        provideCompletionItems,
        resolveCompletionItem,
      },
      "",
      " ",
      '"',
      "'"
    )
  );
};
