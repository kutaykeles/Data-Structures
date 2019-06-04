//06.05.2019 Kutay Keleş


function squareRoot(s){

let x =0;

if(s < 0)
{
    console.log("Negative!");
    return;
}

else if(s == 0){

    console.log(0);
}


while((Math.pow(x,2)-s)<0){
    x+=1
    
}

console.log(x - (Math.pow(x,2)-s) / (2*x) );
    
}

squareRoot(124);
