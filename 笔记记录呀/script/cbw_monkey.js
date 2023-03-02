// ==UserScript==
// @name         自动填写表单-住院医师规范化培训系统 v3.3.53
// @version      0.01
// @description  从 CSV 文件中读取信息，并将其填写到表单中
// @match        http://222.180.163.201:9111/HomePage.aspx?*
// @grant        none
// ==/UserScript==
// @match        http://222.180.163.201:9111/HomePage.aspx?*

(function () {

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
  const fillRichText = (param) =>{
    const iframe = document.getElementsByClassName("ke-edit-iframe")[0];
    // 获取iframe中的文档对象
    var iframeDoc = iframe.contentDocument || iframe.contentWindow.document;
    // 获取iframe中的元素
    var element = iframeDoc.getElementsByClassName("ke-content")[0];
    element.innerText = param;
    console.log(iframe, element);
  }
  // 填充Form表单
  async function fillForm(data) {
    const total = data.length;
    console.log("让我看看csv转化的数据", data);
    for (let i = 0; i < total; i++) {
      
      const currentData = data[i];
      const form = document.forms[0];
      
      for (const key in currentData) {
        const input = form.elements.namedItem(key);
        if (input) {
          input.value = currentData[key];
        }
      }
      // checkbox
      form.elements.namedItem("chkTrainItem_7").checked = true;
      fillRichText("富文本测试字段")
      // var editor = document.querySelector("ke-content");
      // var editor01 =  document.getElementsByClassName("ke-content")[0];
      // console.log("editor:",editor,editor01,iframe)
      // console.log("textAraea:",textAraea, textAraea.value)

      // form.submit();
    }
  }

  // 读取 CSV 文件内容
  async function readCSVFile(file) {
    const reader = new FileReader();
    reader.readAsArrayBuffer(file);

    return new Promise((resolve, reject) => {
      reader.onload = () => {
        // 使用 jschardet 库检测文件编码
        const detectedEncoding = jschardet.detect(reader.result);
        const encoding = detectedEncoding.encoding;

        console.log("encoding:", encoding, file);
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

  const handleFileChange = async (file) => {
    const text = await processCsvData(file);
    const formData = csvToData(text);
    console.log(formData);
    fillForm(formData);
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

    // 创建按钮元素
    const btn = document.createElement("button");
    btn.innerText = "确定";
    btn.style.position = "fixed";
    btn.style.top = "260px";
    btn.style.right = "10px";
    btn.style.zIndex = "9999";

    // 插入上传文件信息
    const form = document.createElement("form");
    form.setAttribute("enctype", "multipart/form-data");

    const fileInput = document.createElement("input");
    fileInput.setAttribute("type", "file");
    fileInput.setAttribute("name", "file");
    form.appendChild(fileInput);

    const submitButton = document.createElement("button");
    submitButton.setAttribute("type", "submit");
    submitButton.innerText = "Upload";
    form.appendChild(submitButton);

    submitButton.onclick = (e) => {
      e.preventDefault();
      console.log("提交按钮");
    };

    fileInput.onchange = (file) => handleFileChange(file);

    textBox.appendChild(form);
    // 将文本框和按钮添加到页面
    document.body.appendChild(textBox);
    document.body.appendChild(btn);

    // 点击按钮后返回输入的文本，并隐藏文本框
    btn.addEventListener("click", () => {
      const text = textBox.value;
      textBox.style.right = "-310px";
      setTimeout(() => {
        textBox.remove();
        btn.remove();
      }, 300);
      return text;
    });

    // 自动隐藏文本框
    setTimeout(() => {
      textBox.style.right = "-310px";
      setTimeout(() => {
        textBox.remove();
        btn.remove();
      }, 300);
    }, 9990000);
  }

  // Main function
  async function main() {
    // 展示弹窗
    showFloatingTextBox();
  }

  main(); 
})();

function readFile() {
  return new Promise((resolve, reject) => {
    let reader = new FileReader();
    reader.onload = (e) => {
      resolve(e);
    };
    reader.onerror = (e) => {
      reject(e);
    };
    if (type === "text") {
      reader.readAsText(file);
    } else if (type === "binary") {
      reader.readAsBinaryString(file);
    } else {
      reader.readAsArrayBuffer(file);
    }
  });
}

async function getData(file) {
  let out = {};
  let headers = {};
  // 读取文件数据
  let e = await readFile(file.raw, "text");
  let data = e.target.result;
  let buf = new Uint8Array(data);
  // utf8格式的文件读取中文会乱码，添加BOM，使其格式变为utf-8 with bom
  let blob = new Blob(["\ufeff" + data], { type: "text/csv; charset=utf-8" });
  e = await readFile(blob);
  data = e.target.result;
  // 读取excel数据
  let workbook = window.XLSX.read(data, {
    type: "array",
    raw: true,
    codepage: 936,
  });
  // 读取所有sheet数据
  workbook.SheetNames.forEach((n) => {
    out[n] = window.XLSX.utils.sheet_to_json(workbook.Sheets[n], {
      cellDates: true,
      raw: true,
    });
    // 以横向方式读取数据，第一行为标题数组
    headers[n] = window.XLSX.utils.sheet_to_json(workbook.Sheets[n], {
      header: 1,
      cellDates: true,
      raw: true,
    });
  });
  // 获取第一个sheet的数据
  let sheetName = workbook.SheetNames[0];
  arr = out[sheetName]; // 所有数据
  header = header[sheetName];
  console.log("workbook:", workbook);
}
