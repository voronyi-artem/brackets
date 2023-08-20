module.exports = function check(str, bracketsConfig) {  
  const pars = new Map(bracketsConfig); 
  const arrayBrackets = []; 
  for (const brackConfig of str) {
    
    if (pars.get(arrayBrackets.at(-1)) == brackConfig) {
      
      arrayBrackets.pop(); 
    } else {
      
      arrayBrackets.push(brackConfig); 
    }
  }
  return arrayBrackets.length == 0; 
}