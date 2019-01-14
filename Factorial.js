/*
Description:
Yor task is to write function factorial

https://en.wikipedia.org/wiki/Factorial
*/

function factorial(n){
    let arr=[];
    for (let i=1;i<=n;i++)
    arr.push(i)
    return arr.reduce((a,b)=>a*b,1)
}
