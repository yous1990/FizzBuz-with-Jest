const fizzbuzz = (i) => {
    let output = "";

    if( i % 15 == 0) {return output += "FizzBuzz";}yarn
    if( i % 3 == 0) { return output += "Fizz";}
    if( i % 5 == 0) {return output += "Buzz";}
    

    if (output == "") {return output = i;}

   
}

export const main = (n) => {
    for (let i=1; i<=n; i++) {
        console.log(fizzbuzz(i))
    }
}

main(100);