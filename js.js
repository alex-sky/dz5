////ряд Фибоначчи циклом
//function fib(n){
//	var a = 0;
//	var b = 1;
//	for(let i = 0; i<n; i++){
////		console.log(a);
//    	var c = a + b;
//		a = b;
//		b = c;
//	}
//};
////ряд Фибоначчи рекурсией
//var a = 0;
//var b = 1;
//var count = 0;
//function fib(n){
//    if(count<n){
////        console.log(a);
//        var c = a+b;
//        a=b;
//        b=c;
//        count++;
//        fib(n);
//    } else {
//        return false;
//    }
//};

var block = document.querySelector('.block');
console.log(window.pageYOffset);
//var top = parseInt(block.style.top), left = parseInt(block.style.left);
var top = 1;
var left = 1;
function move() {
    left++;
    if (left<(screen.width-100)) {
        block.style.left = parseInt(block.style.left)+1+'px';
        
    } 
//        else {
//        block.style.left = parseInt(block.style.left)-1+'px';
//        left--;
//        clearInterval(moveIt);
//    }
};
var moveIt = setInterval('move()', 5);
setTimeout("clearInterval(moveIt)", 5000);