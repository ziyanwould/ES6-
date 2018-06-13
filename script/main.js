// let a =1;
// console.log(a);

// {
//      let b ='ziyanwould'
// }

// var 全局声明

//let 局部声明

//cost 常量声明

// window.onload = function (){
//     console.log(a,b)
// }
// let [a,b,c] = [0,1,2];
// console.log(a,b,c );

// let [q,[w,t],e] = [10,[14,15],1];
// console.log(q,w,t,e);

//设置默认值

// let [me=false] = []
// console.log(me)

//undefined  下是不可以赋值的
//赋值结构要一致
//对象是按对象名
// let [o,p='p的默认值'] = ['ziyanwould',null]
// console.log(o,p)

//赋值后进行结构 外面必须加圆括号
// let foo;
// ({foo} = {foo:'ziyanwould'});
// console.log(foo);

//尽量使用单引号 而不是双引号


//字符串的结构
// const [a,b,c,d,e,f ]= 'ziyanw';
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

//对象扩展运算符 在不确定元素情况下
// function ziyanwould(...arg){
//     console.log(arg[0]);
//     console.log(arg[1]);
//     console.log(arg[2]);
//     console.log(arg[3]);
// }
// ziyanwould(1,2,3)

//扩展运算符能避免原值被改变
// let arr1 = ['111','222','3333']
// let arr2 = arr1;
// console.log(arr2);
// arr2.push('55555');
// console.log(arr1);
//arr1 为何被改变 ，因为没有开辟新的内存空间，arr2改变时候arr1也被改变了


// let arr1 = ['111','222','3333']
// //let arr2 = arr1;
// let arr2 = [...arr1]
// console.log(arr2);
// arr2.push('55555');
// console.log(arr2);
// console.log(arr1);
//原因是不是直接赋值，而是把里面的元素传进去，


//使用for of 循环
// function ziyanwould(first,...arg){
//     console.log(arg.length);
//     for(let val of arg){
//         console.log(val);
//     }
// }

// ziyanwould(1,2,3,45,5,6,7,8,9,0)

//npm install -g live-server 时时刻刻刷新

//字符串模板 字符串的拼接等使用 支持里面放空格 换行，加粗，计算等
// let ziyanwould = "紫烟";
// let a =1;
// let b =2;
// let blog = `完美主义者${ziyanwould}<br>${a + b}

// 您好！！<br>
// `;

// document.write(blog)

//字符串 查找操作
//es5 做法

//判断一个字符串是否存在的做法 例如“紫烟”
//let ziyanwould = "紫烟";
//let blog = "完美主义者紫烟<br>您好！！<br>";
//document.write((blog.indexOf(ziyanwould)>0))

//es6 用法
// includes  判断某个字符串是否存在这个关键字
//let godisljr = 'ziyanwould';
//let keyword = 'this is ziyanwould for godisljr internet name';
//document.write(keyword.includes(godisljr))//判断ziyanwould是否存在 

//startsWith  判断某个字符串前面是否包含这个字符串
//document.write(keyword.startsWith(godisljr))//判断ziyanwould是否存在 


//startsWith  判断某个字符串前面是否包含这个字符串
//document.write(keyword.endsWith(godisljr))//判断ziyanwould是否存在 


//新的重复打印的字符串
//document.write('ziyanwould '.repeat(3))

// //数字的操作
// //二进制声明 binary 

// let  binary = 0B010101;
//  console.log(binary)

// //八进制 使用 声明 Octal
// let octal =0o666;
// console.log(octal)

//判断是否是数字 整数或者浮点型 都是为true 
// let  a =11/4;
// console.log(Number.isFinite(a))
// console.log(Number.isFinite('ziyanwould'))
// console.log(Number.isFinite(NaN))
// console.log(Number.isFinite(undefined))

//NaN 判断是不是NaN
// console.log(Number.isNaN(NaN))

// //判断是不是整数
// //Number.isInteger

// let a = 123.1;
// console.log(Number.isInteger(a))

// //判断是不是浮点型数字
// let a = 123.1;
// console.log(!Number.isInteger(a))



//转换整形数字
// let a = 918.21 
// console.log(Number.isInteger(a))//判断是否整数
// console.log(Number.parseInt(a))//保留整数
// console.log(Number.parseFloat(a))//保留浮点型 


//取值范围 超出最大值时候转换成字符串显示

// let ziyanwould  = Math.pow(2,53)-1;//es5 的最大安全整数
// console.log(ziyanwould)
// console.log(Number.MAX_SAFE_INTEGER)//es6最大安全整数
// console.log(Number.MIN_SAFE_INTEGER)//es6最小安全整数
// console.log(Number.isSafeInteger(ziyanwould))//判断是否安全整数


//es6的基础知识
//json数组格式
// let json = {
//     '0':'ziyanwould',
//     '1':'紫嫣',
//     '2':'完美世界',
//     length:3
// }

// let arr = Array.from(json);//把json数组格式转换成数组
// console.log(arr)

//Array.of 方法
//'3,4,5,6'
// JSON.parse(jsonstr); //可以将json字符串转换成json对象 

// JSON.stringify(jsonobj); //可以将json对象转换成json对符串 
// let stt = '[3,4,5,6]';
// let json = JSON.parse(stt);
// let arr = Array.of(3,4,5,6)//可以转换成数组格式
// console.log(arr,json)

//find() 实例方法 查找的
//value

// let arr = [1,2,3,4,5,6,7,8,9];//查找元素
// let  arr2 = ["ziyanwould","紫烟","godisljr"]
// console.log(arr.find(function(value,index,arr2){
//     return value =="ziyanwould";
// }))


//fill 数组填充 替换数组中元素
// let arr =['ziyanwould','紫烟','godisljr'];
// arr.fill('web',1,3);
// console.log(arr)


//数组循环
//  let  arr = ["ziyanwould","紫烟","godisljr"]
// for (let item of arr){
//     console.log(item)
// }
// for (let item of arr.keys()){
//     console.log(item)
// }
// //索引和值
// for (let item of arr.entries()){
//     console.log(item)
// }
// //常用的办法
// for (let [index,val] of arr.entries()){
//     console.log(index+':'+val);
// }

//entries 手动循环  使用在不规则循环
//  let  arr = ["ziyanwould","紫烟","godisljr"];
//  let list = arr.entries();
//  console.log(list.next().value)//循环第一个 
//  console.log('-------------')
//  console.log(list.next().value)//循环第2个 
//  console.log('***************')
//  console.log(list.next().value)//循环第3个 
//  console.log('4564564654645645')



//函数的扩展和箭头函数

// function add(a,b=1){
//     return a+b;
// }
// console.log(add(3))

// function adds (a,b=10){
//    if(a==0){
//        throw new Error('A is error')//主动抛出异常
//    }
//    return a+b;
// }
// console.log(adds(3));
//es6 'use strict' 严谨模式 在严谨模式下不能使用默认值

// function add(a,b=1){
//     return a+b;
// }
// console.log(add.length)//必传函数

// var add=(a,b=1)=> a+b;//代码不是一行需要加花括号 不能写构造函数 默认带return
// console.log(add(1))

//要写花括号的情况
// var add = (a,b=1) => {return a+b};
// document.write(add(2))

//不是一行也要写花括号
// var add = (a,b=10)=>{
//     return a+b;
// }
// document.write(add(6))




//es6 中的函数与数组
//1.对象的函数结构 对象的函数解构json
// let json={
//     a:'ziyanwould',
//     b:'紫烟世界'
// }
// function fun({a,b='ziyanwould'}){
//     console.log(a,b);
// }
// //fun(json);


// //数组解构
// let arr=['ziyanwould','无敌的紫烟','强大的ES6'];
// function funs(a,b,c){
//     console.log(a,b,c);
// }
// funs(...arr)


// //in 的用法 判断对象或者数组中是否存在某个值

// let obj ={
//     a:'ziyanwould',
//     b:'紫烟世界'

// }
// console.log('a' in obj)//说明是否存在有a 这属性值
// console.log(1 in arr)//判断数组第一位是否为空位

// let  arrd =['ziyanwould',,,];//数组判断空位
// console.log(1 in arrd);


// //数组遍历 forEach
// let arr_each=['ziyanwould','godisljr','紫烟'];
// arr_each.forEach((val,index)=>console.log(index,val));

// //数组遍历 filter

// arr_each.filter(x=>console.log(x))

// //数组遍历 some
// arr_each.some(x=>console.log(x))

// //数组遍历 map
// console.log(arr_each.map(x=>'web'));

// //数组转换成字符串
// console.log(arr.toString());

// //数组转换成字符串 join(加入进行拼接成字符串)
// console.log(arr.join('-'));



//对象赋值 变量名的赋予吧 key值构建
// let  key  = 'skill';
// var obj={
//      [key]:'web'
// }
// console.log(obj);

// //自定义对象方法 挺重要的
// let objs={
//     add:function(a,b){
//         return a+b;
//     }
// }
// console.log(objs.add(1,2))


//is() 两个对象进行比较
// let obj1 = {name:'ziyanwould'};
// let obj2 = {name:'ziyanwould'};
// console.log(obj1.name===obj2.name);
// console.log(Object.is(obj1.name,obj2.name))


//===同值相等 ,严格相等
// console.log(+0===-0);
// console.log(NaN===NaN);

// console.log(Object.is(+0,-0));
// console.log(Object.is(NaN,NaN));

//assign 合并对象

// let a={a:'ziyanwould'};
// let b={b:'紫烟'};
// let c={c:'文本'};

// let d=Object.assign(a,b,c)
// console.log(d)


//symbol
//数据类型
// let a= new String;
// let b= new Number;
// let c=new Boolean;
// let d=new Array;
// let e=Object;


// let f =Symbol();//全局的原始数据
// console.log(typeof(f))



// let ziyanwould =Symbol('紫烟');
// console.log(ziyanwould);
// console.log(ziyanwould.toString());//转化为字符串


// let  ziyanwould = Symbol();//Symbol 只能用方括号
// let obj={
//     [ziyanwould]:'紫烟'
// }
// console.log(obj[ziyanwould]);
// obj[ziyanwould]='web';
// console.log(obj[ziyanwould]);


// let obj = {
//     name:'ziyanwould',
//     skill:'web'
// }
// let age=Symbol();
// obj[age]=18;
// console.log(obj);
// for(let item in obj){
//     console.log(obj[item])
// }


// //set  （可以去重）//数据结构

// let setArr = new Set(['ziyanwould','紫烟','would']);
// console.log(setArr);

// //set 增删查
// setArr.add('紫烟');//不允许重复
// console.log(setArr);

// //has 查找
// console.log(setArr.has('would'))

// //全部删除clear
// // setArr.clear();

// //删除某一个方法
// //setArr.delete('would')
// console.log(setArr);

// //for ...of
// for(let item of setArr){
//      console.log(item) ;
// }
// //forEach
// setArr.forEach((value)=>console.log(value));

// //size 方法
// console.log('size',setArr.size)


// //weakset

// let weakObj = new WeakSet();
// let obj={a:'ziyanwould',b:'强大的紫烟'};
// weakObj.add(obj);
// console.log(weakObj)



// //map的数据结构 赋值 

// let json={
//     name:'ziyanwould',
//     skill:'eat'
// }
// console.log(json.name)
// //=>
// var map = new Map();
// map.set(json,'photoshop');
// console.log(map);

// //灵活性对转，高效
// map.set('ziyanwould',json);
// console.log(map);


// //map增删查

// //get 
// console.log(map.get('ziyanwould'));

// //delete
// // map.delete(json)
// // console.log(map)

// //clear
// //map.clear()

// //查看里面的个数
// console.log(map.size)

// //has 查找 返回true false
// console.log(map.has('ziyanwould'));


// //set设置 get获取 has查找判断 delete删除某一个 clear删除全部 size里面的个数



//proxy 代理 ES6 增强 对象和函数(方法) 生命周期(勾函数) 预处理
// let obj ={
//     add:function(val){
//         return val +100;
//     },
//     name:'i am godisljr'
// }
// // console.log(obj.add(100),obj.name)

// let pro = new Proxy({
//   //第一个放对象体
//     add:function(val){
//         return val +100;
//     },
//     name:'i am godisljr'

// },{
//  //第二个放预处理机制 get :在开始得到某一项东西之前、

//    get:function(target,key,property){//死记硬背这三个参数
//     console.log('come in get');
//     console.log('<br/>',target)
//     return target[key];//要返回对应的属性和属性值（初步理解）
   
//    },
//    set:function(target,key,value,receiver){
//     console.log(` setting ${key} = ${value}`)//有坑，此时变化不代表最后的变化  
//     return target[key]=value+'6555';//预处理后要把结果返回才行 不然值不会有变化。
//    }

// })

// console.log(pro.name)//显示结果 预处理机制

// pro.name='我'

// console.log(pro.name)//显示结果 预处理机制


//apply方法的预处理
let target = function(){
     return 'this is my godisljr';
}
let handler={
    apply(target,ctx,args){
        console.log('do apply')//需要return
        return Reflect.apply(...arguments)//暂时史记硬背
    }
}
let pro = new Proxy(target,handler);

console.log(pro())