// ==UserScript==
// @name         自动填写表单-住院医师规范化培训系统 v3.3.53
// @version      0.01
// @description  从 CSV 文件中读取信息，并将其填写到表单中
// @match        http://222.180.163.201:9111/HomePage.aspx?*
// @grant        none
// ==/UserScript==
// @match        http://222.180.163.201:9111/HomePage.aspx?*

// 多选款的ID
const checkboxList = [
  "chkTrainItem_1",
  "chkTrainItem_2",
  "chkTrainItem_3",
  "chkTrainItem_4",
  "chkTrainItem_5",
  "chkTrainItem_6",
  "chkTrainItem_7",
];
(function () {
  const checkboxList = [
    "chkTrainItem_1",
    "chkTrainItem_2",
    "chkTrainItem_3",
    "chkTrainItem_4",
    "chkTrainItem_5",
    "chkTrainItem_6",
    "chkTrainItem_7",
  ];
  //*—————— 添加额外的库—————— */
  var script = document.createElement("script");
  var script01 = document.createElement("script");
  script.setAttribute("type", "text/javascript");
  script.setAttribute(
    "src",
    "https://cdnjs.cloudflare.com/ajax/libs/jschardet/1.4.1/jschardet.min.js"
  );

  script01.setAttribute("type", "text/javascript");
  script01.setAttribute(
    "src",
    "https://unpkg.com/iconv-lite@0.5.1/dist/iconv-lite.min.js"
  );

  document.getElementsByTagName("head")[0].appendChild(script);

  document.getElementsByTagName("head")[0].appendChild(script01);

  // 填充富文本
  const fillRichText = (param) => {
    const iframe = document.getElementsByClassName("ke-edit-iframe")[0];
    // 获取iframe中的文档对象
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // 获取iframe中的元素
    var element = iframeDoc.getElementsByClassName("ke-content")[0];
    element.innerText = param;
    console.log(iframe, element);
  };
  // 填充Form表单
  async function fillForm(data) {
    const total = data.length;
    console.log("CSV读取的数据为：", data);
    for (let i = 0; i < total; i++) {
      const currentData = data[i];
      // 如果此行被填写过则跳过本行
      if (isAlreadyRowDataFill(currentData)) {
        continue;
      }

      const form = document.forms[0];

      for (const key in currentData) {
        if (checkboxList.includes(key)) {
          const currentDom = form.elements.namedItem(key);
          currentDom &&
            (form.elements.namedItem(key).checked =
              currentData[key] === "TRUE" || "true");
        } else {
          const input = form.elements.namedItem(key);
          if (input) {
            input.value = currentData[key];
          }
        }

        if (key === "ke-content") {
          fillRichText(currentData[key]);
        }
      }

      addRowDataToCache(currentData);
      break;
    }
  }

  // 判断缓存中的数据是否已经存在
  const isAlreadyRowDataFill = (data) => {
    const key = JSON.stringify(data);
    if (localStorage.getItem(key) === key) return true;

    return false;
  };

  // 将数据添加到缓存中
  const addRowDataToCache = (data) => {
    const key = JSON.stringify(data);
    localStorage.setItem(key, key);
  };

  // 读取 CSV 文件内容
  async function readCSVFile(file) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        // 使用 jschardet 库检测文件编码
        const detectedEncoding = jschardet.detect(reader.result);
        const encoding = detectedEncoding.encoding;
        
        // 如果文件编码不是 UTF-8，则使用 iconv-lite 库转换编码
        if (encoding && encoding.toUpperCase() !== "UTF-8") {
          const decodedContent = iconv.decode(reader.result, encoding);
          resolve(decodedContent);
        } else {
          const decodedContent = new TextDecoder().decode(reader.result);
          resolve(decodedContent);
        }
      };

      reader.onerror = () => {
        reject(reader.error);
      };
    });
  }

  const processCsvData = async (event) => {
    const file = event.target.files[0];
    const content = await readCSVFile(file);
    return content;
  };

  function csvToData(csv) {
    const rows = csv.trim().split("\n");

    const headers = rows.shift().split(",");
    const data = rows.map((row) => {
      const values = row.split(",");
      return headers.reduce((obj, header, index) => {
        obj[header.trim()] = values[index].trim();
        return obj;
      }, {});
    });
    return data;
  }

  const refreshInputDom = (input) =>{
    // 上传后不清空文件
    //   if (input.files && input.files[0]) {
    //   // 获取input的父级节点
    //   var parent = input.parentNode;
      
    //   // 创建一个新的input元素
    //   var newInput = document.createElement("input");
    //   newInput.type = "file";
    //   newInput.onchange = function(file) { handleFileChange(this,file); };
      
    //   // 替换旧的input元素
    //   parent.replaceChild(newInput, input);
      
    //   // 将新文件添加到新的input元素中
    //   // newInput.files = input.files;
    // }
    // 上传后清空文件
    if(input) input.value = "";
  }
  const handleFileChange = async (input,newFile) => {
    
  
    console.log("执行了")
    const text = await processCsvData(newFile);
    const formData = csvToData(text);

    fillForm(formData);
    refreshInputDom(input);
  };

  function showFloatingTextBox() {
    // 创建文本框元素
    const textBox = document.createElement("div");
    textBox.style.position = "fixed";
    textBox.style.top = "50px";
    textBox.style.right = "0";
    textBox.style.width = "200px";
    textBox.style.height = "100px";
    textBox.style.zIndex = "9999";
    textBox.style.background = "white";

    // 插入上传文件信息
    const form = document.createElement("form");
    form.setAttribute("enctype", "multipart/form-data");

    const fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("name", "file");
    form.appendChild(fileInput);

    fileInput.onchange = function(file) { handleFileChange(this,file); };

    textBox.appendChild(form);
    // 将文本框和按钮添加到页面
    document.body.appendChild(textBox);
  }

  // Main function
  async function main() {
    // 展示弹窗
    showFloatingTextBox();
  }

  main();
})();
