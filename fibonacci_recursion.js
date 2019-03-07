var arr = [1, 1];

fib (arr[0], arr[1], 100);

function fib (a, b, n){
    var temp = a + b;
    arr.push(temp);

    if( arr.length < n){
        fib(arr[arr.length-2], arr[arr.length-1], n)
    }
}

console.log(arr);
