const operators = /[*/+-]/gi;

function hasHigherPrecedence(op1, op2) {
  const precedence = {
    '*': 3,
    '/': 2,
    '+': 1,
    '-': 0,
  }

  return precedence[op1] > precedence[op2];
}

function infixToPostfix(exp) {
  // 1. scan infix expression from left to right
  let newExpression = '';
  let stack = [];
  let char, op;


  for (let i = 0; i < exp.length; i++) {
    char = exp[i];
    
    if (!char.match(operators)) {
      // if char is operand append to newExpression
      newExpression += char;
    } else {
      // if char is operator we'll have to check in the
      // stack the operators precedence
      while (stack.length > 0 && hasHigherPrecedence(stack[stack.length-1], char)) {
        newExpression += stack[stack.length-1];
        stack.pop();
      }
      stack.push(char);
    } 
  }

  while (stack.length > 0) {
    newExpression += stack[stack.length-1];
    stack.pop();
  }
  
  return newExpression;
}
