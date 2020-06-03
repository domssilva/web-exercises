/*
  Formula logic being applied with infix to postfix
  transformation, using stacks.
*/

function operation(operator, op1, op2) {
  const operators = /[*/+-]/gi;
  let res = 0;
  
  switch(operator) {
    case '*':
      res = op1 * op2;
      break;
    case '/':
      res = op1 / op2;
      break;
    case '+':
      res = op1 + op2;
      break;
    case '-':
      res = op1 - op2;
      break;
    default:
      break;
  }

  return res;
}

function evaluatePostfix(exp) {
  const operators = /[*/+-]/gi;
  let res, char,
      op1, op2;
  let stack = [];
  // 1. scan expression from left to right
  for (let i = 0; i < exp.length; i++) {
    res = 0;
    char = exp[i];

    if (char.match(operators)) {
      // char is an operator -> pop 2 elements from stack
      op2 = Number(stack.pop());
      op1 = Number(stack.pop());
      res = operation(char, op1, op2);

      // push result to stack
      stack.push(res);
    } else {
      // char is an operand -> push to stack
      stack.push(Number(char));
    }
  }

  return stack[0];
}

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
  const operators = /[*/+-]/gi;
  // 1. scan infix expression from left to right
  let newExpression = [];
  let stack = [];
  let char;


  for (let i = 0; i < exp.length; i++) {
    char = exp[i];
    
    if (!char.match(operators)) {
      // if char is operand append to newExpression
      newExpression.push(char);
    } else {
      // if char is operator we'll have to check in the
      // stack the operators precedence
      while (stack.length > 0 && hasHigherPrecedence(stack[stack.length-1], char)) {
        newExpression.push(stack[stack.length-1]);
        stack.pop();
      }
      stack.push(char);
    } 
  }

  while (stack.length > 0) {
    newExpression.push(stack[stack.length-1]);
    stack.pop();
  }
  
  return newExpression;
}


function splitExpression(exp) {
  const operators = /[*/+-]/gi;
  // Receives expression : string and returns
  // the splitted expression : array
  let char;
  let tmp = '';
  let splittedExpression = [];

  for (let i = 0; i <= exp.length; i++) {
    char = exp[i];

    if ( i === exp.length) {
      splittedExpression.push(tmp);
    } else if (char.match(operators)) {
      splittedExpression.push(tmp);
      splittedExpression.push(char);
      tmp = '';
    } else {
      tmp += char;
    }
  }

  return splittedExpression;
}

const calculate = [evaluatePostfix, hasHigherPrecedence, infixToPostfix, operation, splitExpression];
export default calculate;