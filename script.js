// check if prime number
function isPrime(n){
  let d = 2;

  while(n> d){
    if(n % 2 ===0 || n % d === 0 ){
      return false;
    }
    else if(d >=3){
      d = d+2
    }
    else{
      d++;
    }
  }
  return true;
}

//find prime factors
function primeFactors(n){
  let arr=[],
      d=2;

  while(n > d){
    if(n % d ===0){
      arr.push(d);
      n= n/d;
    }
    else{
      d++
    }
  }
  return arr;
}

//fibonacci
function fib(x) {
//this is the memoization version, which is a lot faster than the usal recursive version 
//because it caches the values of x
    if (x < 2) return x;

    if(!fib.cache) fib.cache={};

    if(fib.cache[x]) return fib.cache[x];

    return fib.cache[x] =fib(x-1)+fib(x-2);

}


