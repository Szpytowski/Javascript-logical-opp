// 1
function setAlarm(employed, vacation){
    return employed && vacation === false;
}

// 2
function closeCompare(a, b, margin=0) {
    if (a >= b - margin && a <= b + margin) {
        return 0;
    } else if (a < b) {
        return -1;
    } else {
        return 1;
    }
}

// 3
const or = (a, b) => {
    if (a) {
        return true;
    }
    if (b) {
        return true;
    }
    return false;
};

const xor = (a, b) => {
    if (a && !b) {
        return true;
    }
    if (!a && b) {
        return true;
    }
    return false;
};

// 4
function _if(bool, func1, func2) {
    if (bool) {
        return func1();
    } else {
        return func2();
    }
}

// 5
function rentalCarCost(d) {
    if (d >= 7) {
        return (d * 40) - 50;
    } else if (d >= 3) {
        return (d * 40) - 20;
    } else {
        return d * 40;
    }
}

// 6
function getRealFloor(n) {
    if (n < 0) {
        return n;
    }
    else if (n === 0) {
        return 0;
    }
    else if (n === 1) {
        return 0;
    }
    else if (n < 13) {
        return n - 1;
    }
    else {
        return n - 2;
    }
}

// 7
function rpsls(pl1,pl2) {
    if (pl1 === pl2) {
        return "Draw!";
    }
    if (
        (pl1 === 'rock' && (pl2 === 'scissors' || pl2 === 'lizard')) ||
        (pl1 === 'paper' && (pl2 === 'rock' || pl2 === 'spock')) ||
        (pl1 === 'scissors' && (pl2 === 'paper' || pl2 === 'lizard')) ||
        (pl1 === 'lizard' && (pl2 === 'spock' || pl2 === 'paper')) ||
        (pl1 === 'spock' && (pl2 === 'scissors' || pl2 === 'rock'))
    ) {
        return "Player 1 Won!" ;
    } else {
        return "Player 2 Won!";
    }
}

// 8
function hasNumber(myString) {
    return /\d/.test(myString);
}

function isValidPassword(password) {
    if (password.length < 8) {
        return false;
    }

    const hasUppercase = /[A-Z]/.test(password);
    const hasNumeric = hasNumber(password);

    return hasUppercase && hasNumeric;
}
console.log(isValidPassword('test1')); // false
console.log(isValidPassword('Test123')); // false
console.log(isValidPassword('StrongPassword123')); // true

// 9
function getPasswordStrength(password) {
    const chars = Array.from(password);
    const hasUppercase = chars.some(char => /[A-Z]/.test(char));
    const hasSpecial = chars.some(char => /[!@#$%^&*(),.?":{}|<>]/.test(char));
    const hasNumeric = chars.some(char => !isNaN(char) && char !== ' ');

    let strength = 0;
    if (password.length >= 8) {
        strength++;
    }
    if (hasUppercase) {
        strength++;
    }
    if (hasSpecial) {
        strength++;
    }
    if (hasNumeric) {
        strength++;
    }
    return strength;
}

console.log(getPasswordStrength('test1'));
console.log(getPasswordStrength('Test123'));
console.log(getPasswordStrength('StrongPassword123'));
console.log(getPasswordStrength('StrongPassword123$$'));

// 10
function getTotalOrderCost(baseCost, isVIP, loyaltyPoints, isInternational) {
    let totalCost = baseCost;

    if (isVIP) {
        totalCost *= 0.95;
    }
    totalCost -= loyaltyPoints * 0.01;

    if (totalCost < 0) {
        totalCost = 0;
    }

    let shippingCost = 5;

    if (isInternational) {
        shippingCost = 10;
    }

    totalCost += shippingCost;

    return totalCost;
}

console.log(getTotalOrderCost(100, true, 100, false)); // 100*0.95 = 95 , 95-1 = 94 , 94+5 = 99
console.log(getTotalOrderCost(100, true, 100, true)); // 100*0.95 = 95 , 95-1 = 94 , 94+10 = 104

// 11
function getTicketPrice(basePrice, daysUntilShow, isWeekend) {
    if (daysUntilShow > 30) {
        basePrice *= 0.90;
    }

    if (isWeekend) {
        basePrice += 15;
    }

    return basePrice;
}

console.log(getTicketPrice(100,31,true)) // 100*0.9+15 = 105