// 先谈谈MVC
/*
Model view contoller 一个比较老的视图架构

使用模式：观察者模式

通俗流程：
（1）当用户输入通过的上controller层，这层会去更新Model层然后通知View层重新渲染
（2）当Model层发生变化的时候，Model层会变更，然后通知View层去重新渲染

从观察者模式来看：
（1）在Model层会去创建相应的观察者队列，然后将View层当作观察者，放入队列
（2）当model发生变化时，controller层会调用通知观察者的函数，通知观察者去做一个更新

这就是MVC的一个大体结构，主要使用了观察者模式，通过controller去控制和通知各个层

*/