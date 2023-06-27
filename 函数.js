function TestJS05(props){//定义了一个TestJS05的函数，里面有一个参数props
    function prod(x,y){//调用函数prod，参数是x，y，函数的作用是把x和y相乘
        return x*y;
    }
    return prod(5,6);//将prod函数的值给TestJS05
}
const result=TestJS05();
console.log(result);