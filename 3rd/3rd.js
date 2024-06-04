var sum =0;
var i=0;
do{
    var number=prompt("Please enter number");
    
    if(isFinite(number)){
        sum = sum + Number(number);
    }else{
        sum = sum +number;
    }
    
    i++;
}while(number==0 || sum <100 );

alert("the sum is " + sum)

