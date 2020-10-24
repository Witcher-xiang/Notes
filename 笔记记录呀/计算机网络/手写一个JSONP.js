/*
JSONP的原理就不说了，我们简单来理解一下

*/

 /*
        大概意思就是 上层定义一个函数 然后下层脚本调用一下
        那就很好办了呀
        （1）我可以通讯告诉服务端，我这里的回调函数名称是什么 正如 addScript01
        （2）也是通讯告诉服务端 但是写起来就简单很多了 如：addScript02

        但是蘑菇街面试关 问如何多随机生成几个
    */
   function callBack(...params){

}
const addScript01 = (src,funName) => {
    const script = document.createElement("script");
    script.setAttribute("type", "test/javascript");
    script.src = `${src}?funName=${funName}`;
    document.appendChild(document.body);
}
addScript01("www.baidu.com")

const addScript02 = (src,funName) => {
    const script = document.createElement("script");
    script.setAttribute("type", "test/javascript");
    script.src = `${src}?callBack=${funName}`;
    document.appendChild(document.body);
}
addScript02("www.mogujie.com", "result");
// 直接这里调用即可 你传入的函数名
function result(params){
     console.log("服务端传过来的参数是params",params)
}