const amountDOMs = document.getElementsByClassName("ta_r");

const amounts = Array.prototype.map.call(amountDOMs, (dom) =>
    Number.parseInt(dom.textContent.split(",").join(""))
);

const sum = amounts.reduce((amount, sum) => sum + amount, 0);

const formatDigit = (digit, result) => {
    if (digit.length <= 3) return `${digit}${result}`;

    const quotient = BigInt(digit) / BigInt(1000);
    const remainder = BigInt(digit) % BigInt(1000);

    return formatDigit(
        `${quotient}`,
        `,${
            "0".repeat(3 - remainder.toString().length) + remainder.toString()
        }` + result
    );
};


console.log(formatDigit(sum.toString(), ""));

// console.log(formatDigit("123456123456123456123456", "")); // BigInt test