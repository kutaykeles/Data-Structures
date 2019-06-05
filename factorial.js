//05.06.2019 Kutay Keleş
//Recursion ile faktöriyel hesabı.

function factorial(n){
    if(n == 0){
        return 1;
        
    }
    return(n*factorial(n-1));
}

//console.log(factorial(n));
