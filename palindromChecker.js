function palindrome(str) {
    let a = str.toLowerCase().replace(/[^a-z0-9]/g, "") //get string turn it into lowercase and eliminate all special characters.
    let b = a.split('').reverse().join(''); // turn var b into a array to reverse it. join in to make into a string.
    return a === b ? true : false;
  }


console.log(palindrome("not a palindrome"));