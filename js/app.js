// 1
function setAlarm(employed, vacation) {
    return employed && !vacation;
}

// 2
function closeCompare(a, b, margin = 0) {
    if (b - margin <= a && a <= b + margin) {
        return 0;
    }
    if (a < b) {
        return -1;
    }
    return 1;

// 3
    function or(a, b) {
        return !(!a && !b);
    }
// true, false = true how the function works because a! is falsy and b! this would give false for !a && !b but we use !(...) so the outcome of what is inside the round brackets we invert it false is turned into truthy
// true, true = true
// false, true = true
// false, false = false

    function xor(a, b) {
        return !(!a && !b ) && !(a && b); // we check of at least one of the arguments is truthy and after that && we want to ensure that both a and be are not truthy at the same time
    }
/*  if I could use ||, I would've done it like this. The exercise stated that we shouldn't use ||, that's what made it really tricky.
function or(a, b) {
    return a || b;
}

function xor(a, b) {
    return (a || b) && !(a && b);
}
 */
// 4
    function _if(bool, func1, func2) {
        if (bool) {
            return func1();
        }
        return func2();
    }

// 5
    function rentalCarCost(rentedDays) {
        const standrardCarRentalRateInUSD = 40
        if (rentedDays >= 7) {
            return (rentedDays * standrardCarRentalRateInUSD) - 50;
        } else if (rentedDays >= 3) {
            return (rentedDays * standrardCarRentalRateInUSD) - 20;
        }
        return rentedDays * standrardCarRentalRateInUSD;
    }
}

// 6
function getRealFloor(n) {
    if (n < 0) {
        return n;
    }
    else if (n === 0 || n === 1) {
        return n;
    }
    else if (n < 13) {
        return n - 1;
    }
    return n - 2;
}

// 7
function advancedRocksPaperScissors (pl1,pl2) {
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
    }
    return "Player 2 Won!";
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
    let totalCost = applyVIPDiscount(baseCost, isVIP);
    totalCost = applyLoyaltyPoints(totalCost, loyaltyPoints);
    totalCost = ensureNonNegative(totalCost);
    let shippingCost = calculateShippingCost(isInternational);
    return totalCost + shippingCost;
}

function applyVIPDiscount(baseCost, isVIP) {
    if (isVIP) {
        return baseCost * 0.95;
    }
    return baseCost;
}

function applyLoyaltyPoints(totalCost, loyaltyPoints) {
    return totalCost - (loyaltyPoints * 0.01);
}

function ensureNonNegative(totalCost) {
    if (totalCost < 0) {
        return 0;
    }
    return totalCost;
}

function calculateShippingCost(isInternational) {
    if (isInternational) {
        return 10;
    }
    return 5;
}


console.log(getTotalOrderCost(100, true, 100, false)); // 100*0.95 = 95 , 95-1 = 94 , 94+5 = 99
console.log(getTotalOrderCost(100, true, 100, true)); // 100*0.95 = 95 , 95-1 = 94 , 94+10 = 104

// 11
function getTicketPrice(basePrice, daysUntilShow, isWeekend) {
    let price = basePrice;

    if (daysUntilShow > 30) {
        price *= 0.90;
    }

    if (isWeekend) {
        price += 15;
    }

    return price;
}


console.log(getTicketPrice(100,31,true)) // 100*0.9+15 = 105