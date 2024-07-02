// var x=[10,11,12,13,14,15];
// x.push(16);
// x.pop();
// x.shift()
// x.unshift(9) 
// console.log(x);

// var x;
// document.write(x);
// x=console.log(window.prompt("Enter Age"));


// var a = [10,11,12,13,14,15,16,17]

// a.map(ele =>{
//     console.log(ele)
// }
// )

var n = parseInt(window.prompt("enter number"));
var x = 0;
if(n==1 || n==2){
    console.log("prime");
    document.write("<h1>Prime</h1>");
}
for(var i=2 ; i<=(n/2)+1 ; i++){
    if(n%i==0){
        x=1;
        console.log("not prime");
        document.write("<h1>Not Prime</h1>");
        break;
    }
}
if(x==0){
    console.log("prime");
    document.write("<h1>Prime</h1>");
}
