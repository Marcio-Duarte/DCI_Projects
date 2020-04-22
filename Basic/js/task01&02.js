/* 1. Create a script which checks to see if someone is old enough to by drive
   1.1 - 1st Way : Do it in a simple way
   1.2 - 2nd Way : I want to see at least one function
   1.3 - 3rd Way : I want to see a class
   Hint 1: Ask "How old are you?" by prompt
   Hint 2: Write console messages / alert messages "You can drive", 
   "You can not drive", "need to start again" if the client enter a character!
    
   2. Create a script which calculates how old someone is based on their birth year.
   - Redo task #1 but based on birth year and this year (2020)
   - In this case, use switch case the solution and a function */

$(document).ready(function () {
    class Person {
        constructor(name, birthdate) {
            this._name = name;
            this._birthdate = birthdate;
            this._age = 0;
            this.calculateAge();
        }
        get name() {
            return this._name;
        }
        get age() {
            return this._age;
        }
        canDrive() {
            if (this._age > 17) {
                return `${this._name} can drive.`;
            } else if (this._age < 1) {
                return `Dont joke with me!!! no one as ${this._age} years old.`;
            }
            return `${this._name} can not drive with ${this._age}.`;
        }
        /* This function calculates the age when we create an instance of Person*/
        calculateAge() {
            let birthdate = Date.parse(this._birthdate);
            let today = Date.now();
            let dateObj = new Date();
            dateObj.setTime(today - birthdate);
            this._age = dateObj.getFullYear() - 1970;
        }
    }

    $('#check-user button[type="submit"]:nth-child(1)').click(function (e) {
        e.preventDefault();
        let inputs = getInputValues();
        if (inputs.length > 1) {
            let newUser = new Person(inputs[0], inputs[1]);
            alert(newUser.canDrive());
        }
    });

    $('#check-user button[type="submit"]:nth-child(2)').click(function (e) {
        e.preventDefault();
        let inputs = getInputValues();
        if (inputs.length > 1) {
            let newUser = new Person(inputs[0], inputs[1]);
            alert(`${newUser.name} is ${newUser.age}.`);
        }
    });
    cleanAllInputs();
});

/* This function loops all inputs and return the values. */
function getInputValues() {
    var inputValues = [];
    $('#check-user input').each(function (e) {
        if (isEmpty($(this).val())) {
            alert(`Please insert a valid ${$(this).prop('name')}`);
            return false;
        } else {
            inputValues.push($(this).val());
            $(this).val('');
        }
    });
    return inputValues;
}

function cleanAllInputs() {
    $('body input').each(function (e) {
        $(this).val('');
    });
}

/* Function to test empty inputs */
function isEmpty(value) {
    let pattern = /[^\s]/;
    return !pattern.test(value);
}