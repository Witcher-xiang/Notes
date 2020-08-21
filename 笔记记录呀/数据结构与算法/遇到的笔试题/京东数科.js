var name = 'global';
var obj = {
    name: 'local',
    foo: function(){
        this.name = 'foo';
    }.bind(window)
};
var bar = new obj.foo();
setTimeout(function() {
    console.log(window.name);
}, 0);
console.log(bar.name);

var bar3 = bar2 = bar;
bar2.name = 'foo2';
console.log(bar3.name);