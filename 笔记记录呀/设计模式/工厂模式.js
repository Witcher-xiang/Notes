/*  工厂模式顾名思义，工厂一样批量生产  

    即最简单的思想就是函数封装把需要的东西封装进入函数 不用写相同的代码
    略微复杂一点点的思想：一个工厂能提供一个创建对象的公共接口，我们可以在其中指定我们希望被创建的工厂对象的类型。 即传入类型，然后去new不对类型的对象
*/

/*
    最简单的工厂模式代码：
*/
function createPerson(name, age) {
    let obj = {}
    obj.name = name;
    obj.age = age;
    obj.say = function() {
        console.log(obj)
    }
}

/* 复杂一点的工厂模式的代码： */ 