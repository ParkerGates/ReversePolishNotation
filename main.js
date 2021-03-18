let test1 = "3 5 10 + *";
let test2 = "4 5 *"
let test3 = "3 * + - / %"

function reversePolishNotation(exp) {
    rpn = new Stack();
    exp = exp.split(" ");

    for (let i = 0; i < exp.length; i ++) {
        rpn.push(exp[i]);

        switch(exp[i]) {
            case "+":
            case "-":
            case "*":
            case "**":
            case "/":
            case "%":
                top1 = rpn.pop();
                top2 = rpn.pop();
                top3 = rpn.pop();

                rpn.push(eval(top3 + " " + top1 + " " + top2));
                break;
        }
    }

    if (Number.isNaN(rpn.storage[0])) {
        return "ERROR in expression strucuture\nInput: " + exp.join(" ");
    }
    return rpn.storage[0];
}

console.log("Output: " + reversePolishNotation(test1));
console.log("Output: " + reversePolishNotation(test2));
console.log("Output: " + reversePolishNotation(test3));