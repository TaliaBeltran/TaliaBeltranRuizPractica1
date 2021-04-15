function palindromeChecker(str) {
    const newStr = str.replace(/[\W_]/g, "").toLowerCase()
    const strReversed = newStr.split("").reverse().join("")
  
    return newStr === strReversed ? "true" : "false"
  }
  
  console.log(palindromeChecker("Ali tomo tilathis is a sample string")) 
  console.log(palindromeChecker("a")) 
  console.log(palindromeChecker("bangnab")) 

