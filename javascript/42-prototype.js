let a = {
    name1 : 'aditya',
    color : 'brown',
    gender : 'male'
}
let b = a.__proto__ = {
    fun : ()=>{
        console.log('language: hindi')
    }
}
b.__proto__ = {
    fun2 : ()=>{console.log('age : 20')}
}
a.fun();
a.fun2();
