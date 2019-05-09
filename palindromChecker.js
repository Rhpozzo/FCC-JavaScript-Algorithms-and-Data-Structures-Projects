function palindrome(str) {
    let a = str.toLowerCase().replace(/[^a-z0-9]/g, "") //get string turn it into lowercase and eliminate all special caracters.
    let b = []; //hold you array to compare.
    for(let i of a){ //push letters to compare in if statement.
      b.push(i)
    }
    b = b.reverse().join('').toString() // reverse b var eliminate spaces, turn it into a string.
   if(a===b){//compare var a and var b to see if they are the same.
       return true; // if same, true.
   }else{
       return false;//if not, false;
   }
  }


console.log(palindrome("A man, a plan, a canal. Panama"));