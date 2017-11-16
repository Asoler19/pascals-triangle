let n = 1000;
function pascal(n) {

   if(n > 0){
    return (n === 1) ? 2:1
        
}else{
return (n - 1) * (n-2)
console.log(n)
}
}

console.log(pascal(36))