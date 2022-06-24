function calculator (Addition, Subtraction, Multiplication, Division){


    operation = this.calculator();


    if (operation == Addition){
        return number1 + number2;

    } else if (operation == Subtraction){
        return number1 - number2;

    } else if (operation == Multiplication){
        return number1 * number2;

    } else if (operation == Division){
        return number1 / number2;

    } else{
        return "Inavlid";
    }

}

alert(prompt('please enter operartion: '))
alert(prompt('Enter first number: '));
alert(prompt('Enter second number: '));

calculator()


