function palindrome(str) {
    let a = str.toLowerCase().replace(/[^a-z0-9]/g, "") //get string turn it into lowercase and eliminate all special caracters.
    let b = a.split('').reverse().join(''); // turn var b into a array to reverse it. join in to make into a string.
    if(a===b){//compare var a and var b to see if they are the same.
       return true; // if same, true.
   }else{
       return false;//if not, false;
   }
  }


console.log(palindrome("not a palindrome"));