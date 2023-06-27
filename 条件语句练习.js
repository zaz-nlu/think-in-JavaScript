function isodd(num){
    num=Number(num);
    if(num%2!==0){
        return true;
    }
    if(num%2==0){
        return false;
    }
}
const num = prompt('请输入一个数字');
alert('');