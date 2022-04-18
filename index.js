// Using JS, convert: 
// [ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]
// To: 
// "a < b OR (c == d AND e != f)"


// assumption:
// expression  = [operator, left, right]
// only support string as Data type

const stack = []
const convert = (expression) => {
  let result = '';
  readExpression(expression);
  while(stack.length){
    const data = stack.pop();
    if(Array.isArray(data)){
      readExpression(data)
    } else {
      result+=`${data} `
    }
  }
  return result
}

const readExpression = (expression) => {
  const [operator, left, right] = expression;
  const shouldPushBracket = operator === 'AND'
  shouldPushBracket&&stack.push(')')
  stack.push(right)
  stack.push(operator)
  stack.push(left)
  shouldPushBracket&&stack.push('(')
}

console.log(convert([ "OR", ["<", "a", "b"], [ "AND", ["==", "c", "d"], ["!=", "e", "f"] ] ]))