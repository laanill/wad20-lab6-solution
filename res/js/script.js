$(function () {

    let number1 = null;
    let number2 = null;
    let operator = null;

    let resetButton = $('#ce');
    let equalsButton = $('#equals');
    let resultContainer = $('#result');
    let inputField = $('#eq');
    let operatorButtons = $('.operator');

    function parse() {
        let value = "";
        if (number1 !== null) {
            value += number1 + " "
        }
        if (operator !== null) {
            value += operator + " "
        }
        if (number2 !== null) {
            value += number2
        }

        inputField.val(value);
    }

    resetButton.click(function () {
        resultContainer.text("");
        inputField.val("");
        number1 = null;
        number2 = null;
        operator = null;
    });

    equalsButton.click(function () {
        let result = (number1 !== null) ? number1 : 0;
        switch (operator) {
            case '+':
                result = number1 + number2;
                break;
            case '-':
                result = number1 - number2;
                break;
            case '*':
                result = number1 * number2;
                break;
            case '/':
                result = number1 / number2;
                break;
            case '^':
                result = Math.pow(number1, number2);
                break;
        }
        resultContainer.text(result);
    });


    for (let operatorButton of operatorButtons) {
        $(operatorButton).click(function () {
            if (number1 === null) {
                alert('You have to select a number first');
                return;
            }
            operator = $(this).attr('id');
            parse();
        })
    }

    for (let i = 0; i < 10; i++) {
        let number = $('#number-' + i);
        number.click(function () {
            if (operator) {
                number2 = (number2 === null) ? i : Number.parseInt(number2 + "" + i)
            } else {
                number1 = (number1 === null) ? i : Number.parseInt(number1 + "" + i)
            }
            parse()
        })
    }
});
