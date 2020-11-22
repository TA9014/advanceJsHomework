function exercise1() {
    let num1 = 100;
    let result1 = "";
    let isPrime = (i) => {
        let iElem = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                iElem.push(j);
            }

        }
        if (iElem.length <= 2) {
            return true;
        } else {
            return false;
        }
    }



    for (let i = 2; i <= num1; i++) {
        if (isPrime(i)) {
            result1 += `${i}, `;
        }
    }
    document.querySelector('#result1').innerHTML = result1;
}

function exercise2() {
    let num2 = document.querySelector('#inpQ2').value;
    let result2 = "";
    let isPrime = (i) => {
        let iElem = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                iElem.push(j);
            }

        }
        if (iElem.length <= 2) {
            return true;
        } else {
            return false;
        }
    }
    if (isNaN(num2) || num2 == null || num2 < 2 || num2 == undefined) {
        alert('Please enter a valid number')
    } else {



        for (let i = 2; i <= num2; i++) {
            if (i === 4) {
                continue;
            } else if (isPrime(i)) {
                result2 += `${i}, `;
            }
        }
        document.querySelector('#result2').innerHTML = result2;
    }
}

function exercise3() {
    let num3 = document.querySelector('#inpQ3').value;
    let arr3 = []
    let result3 = "";
    let isPrime = (i) => {
        let iElem = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                iElem.push(j);
            }
        }

        if (iElem.length <= 2) {
            return true;
        } else {
            return false;
        }
    }
    if (isNaN(num3) || num3 == null || num3 < 2 || num3 == undefined) {
        alert('Please enter a valid number')
    } else {

        for (let i = 2; i <= num3 ** 2; i++) {
            if (arr3.length < num3) {
                if (isPrime(i)) {
                    result3 += `${i}, `;
                    arr3.push(i);
                }
            } else {
                break;
            }
        }
        document.querySelector('#result3').innerHTML = result3;
    }
}

function exercise4() {
    let num4 = document.querySelector('#inpQ4').value;
    let arr4 = []
    let result4 = 0;
    let isPrime = (i) => {
        let iElem = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                iElem.push(j);
            }
        }

        if (iElem.length <= 2) {
            return true;
        } else {
            return false;
        }
    }
    if (isNaN(num4) || num4 == null || num4 < 2 || num4 == undefined) {
        alert('Please enter a valid number')
    } else {

        for (let i = 2; i <= num4 ** 2; i++) {
            if (arr4.length < num4) {
                if (isPrime(i)) {
                    result4 += i;
                    arr4.push(i);
                }
            } else {
                break;
            }
        }
        document.querySelector('#result4').innerHTML = result4;
    }
}

function exercise5() {
    let num5 = document.querySelector('#inpQ5').value;
    let result5 = 0;
    if (isNaN(num5) || num5 == null || num5 < 0 || num5 == undefined) {
        alert('Please enter a valid number')
    } else {
        for (let i = 1; i <= num5; i++) {
            for (let j = 1; j <= i; j++) {
                result5 += i;
            }
        }
        document.querySelector('#result5').innerHTML = result5;
    }
}

function exercise5_2() {
    let num5_2 = document.querySelector('#inpQ5_2').value;
    let result5_2 = 0;
    if (isNaN(num5_2) || num5_2 == null || num5_2 < 0 || num5_2 == undefined) {
        alert('Please enter a valid number')
    } else {
        for (let i = 1; i <= num5_2; i++) {
            result5_2 += i ** 2;
        }
        document.querySelector('#result5_2').innerHTML = result5_2;
    }
}

function exercise6() {
    let num6 = document.querySelector('#inpQ6').value;
    let result6 = 1;
    let isPrime = (i) => {
        let iElem = [];
        for (let j = 1; j <= i; j++) {
            if (i % j === 0) {
                iElem.push(j);
            }
        }

        if (iElem.length <= 2) {
            return true;
        } else {
            return false;
        }
    }
    if (isNaN(num6) || num6 == null || num6 < 2 || num6 == undefined) {
        alert('Please enter a valid number')
    } else {

        for (let i = 2; i <= num6; i++) {
            if (isPrime(i)) {
                result6 -= i;
            } else {
                result6 += i;
            }
        }
        document.querySelector('#result6').innerHTML = result6;
    }
}

let num7 = [];
function exercise7inp() {
    let inp7 = document.querySelector('#inpQ7').value;
    if (isNaN(inp7) || inp7 === null || inp7 < 1 || inp7 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ7').value = ""
    } else {
        num7.push(Number(inp7))
        document.querySelector('#inpQ7').value = ""
        document.querySelector('#num7input').innerHTML = `[${String(num7)}]`;
    }
    return num7
}

function exercise7() {
    let minNum7 = Math.min(...num7)
    let maxDivider = "";
    for (let i = minNum7; i >= 1; i--) {
        let remain0 = []
        for (let value of num7) {
            if (value % i === 0) {
                remain0.push(i)
            }
        }
        if (remain0.length === num7.length) {
            maxDivider = i
            break;
        }

    }
    document.querySelector('#result7').innerHTML = `The maximum divider is <br> <h1>${maxDivider}</h1>`
}

let num8 = [];
function exercise8inp() {
    let inp8 = document.querySelector('#inpQ8').value;
    if (isNaN(inp8) || inp8 === null || inp8 < 1 || inp8 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ8').value = ""
    } else {
        num8.push(Number(inp8))
        document.querySelector('#inpQ8').value = ""
        document.querySelector('#num8input').innerHTML = `[${String(num8)}]`;
    }
    return num8
}

function exercise8() {
    let maxNum8 = Math.max(...num8)
    let minMultiplier = "";
    for (let i = maxNum8; i <= Infinity; i++) {
        let remain0 = []
        for (let value of num8) {
            if (i % value === 0) {
                remain0.push(i)
            }
        }
        if (remain0.length === num8.length) {
            minMultiplier = i
            break;
        }

    }
    document.querySelector('#result8').innerHTML = `The minimum multiplier is <br> <h1>${minMultiplier}</h1>`
}

function exercise9() {
    let num9 = document.querySelector('#inpQ9').value;
    let nFac = 1;
    if (isNaN(num9) || num9 === null || num9 < 0 || num9 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ9').value = ""
    } else if (+num9 === 0) {
        nFac = 1;
        document.querySelector('#result9').innerHTML = `${num9}! = <br> ${nFac}`
        document.querySelector('#inpQ9').value = ""
    } else {
        for (let i = 1; i <= num9; i++) {
            nFac *= i;
        }
        document.querySelector('#result9').innerHTML = `${num9}! = <br> <h1>${nFac}</h1>`
        document.querySelector('#inpQ9').value = ""
    }
}

let num10 = [];
function exercise10inp() {
    let inp10 = document.querySelector('#inpQ10').value;
    if (isNaN(inp10) || inp10 === null || inp10 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ10').value = ""
    } else {
        num10.push(Number(inp10))
        document.querySelector('#inpQ10').value = ""
        document.querySelector('#num10input').innerHTML = `[${String(num10)}]`;
    }
    return num10
}

function exercise10() {
    let asd = document.querySelector('#ASCD10').checked;
    let des = document.querySelector('#DESC10').checked;
    if (asd === false && des === false) {
        alert('Please select sort type')
    } else if (asd) {
        num10.sort((a, b) => a - b);
        document.querySelector('#result10').innerHTML = `[${String(num10)}]`
    } else {
        num10.sort((a, b) => b - a);
        document.querySelector('#result10').innerHTML = `[${String(num10)}]`
    }
}

let num11 = [];
function exercise11inp() {
    let inp11 = document.querySelector('#inpQ11').value;
    if (isNaN(inp11) || inp11 === null || inp11 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ11').value = ""
    } else {
        num11.push(Number(inp11))
        document.querySelector('#inpQ11').value = ""
        document.querySelector('#num11input').innerHTML = `[${String(num11)}]`;
    }
    return num11
}

function exercise11() {
    let asd = document.querySelector('#ASCD11').checked;
    let des = document.querySelector('#DESC11').checked;
    let finish = false;
    if (asd === false && des === false) {
        alert('Please select sort type')
    } else if (asd) {
        let res = [];
        let tmp = num11
        for (let i = 1; i <= num11.length; i++) {
            let minValue = Math.min(...tmp)
            res.push(minValue)
            tmp = tmp.filter(value => value !== minValue)
        }
        document.querySelector('#result11').innerHTML = `[${String(res)}]`

    } else {
        let res = [];
        let tmp = num11
        for (let i = 1; i <= num11.length; i++) {
            let maxValue = Math.max(...tmp)
            res.push(maxValue)
            tmp = tmp.filter(value => value !== maxValue)
        }
        document.querySelector('#result11').innerHTML = `[${String(res)}]`
    }
}

function exercise12() {
    let num12 = document.querySelector('#inpQ12').value;
    let sum = 0;
    if (isNaN(num12) || num12 === null || num12 < 0 || num12 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ12').value = ""
    } else {
        for (let i = 1; i <= num12; i++) {
            if (i % 3 === 0 || i % 5 === 0) {
                sum += i
            }
        }
        document.querySelector('#result12').innerHTML = `ผลรวมของพหุคูณของ 3 หรือ 5 <br> ของ ${num12} = <br> <h1>${sum}</h1>`
        document.querySelector('#inpQ12').value = ""
    }
}

function exercise13() {
    let num13 = document.querySelector('#inpQ13').value;
    let sum = 0;
    if (isNaN(num13) || num13 === null || num13 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ13').value = ""
    } else {
        for (let value of num13) {
            sum += Number(value)
        }
    }
    document.querySelector('#result13').innerHTML = `ผลรวมของเลขโดดของ ${num13} = <br> <h1>${sum}</h1>`
    document.querySelector('#inpQ13').value = ""
}

function exercise14() {
    let num14 = document.querySelector('#inpQ14').value;
    let nFac = 1;
    let sum = 0;
    if (isNaN(num14) || num14 === null || num14 < 0 || num14 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ14').value = ""
    } else if (+num14 === 0) {
        nFac = 1;
    } else {
        for (let i = 1; i <= num14; i++) {
            nFac *= i;
        }
    }
    for (let value of String(nFac)) {
        sum += Number(value)
    }
    document.querySelector('#result14').innerHTML = `ผลรวมของเลขโดดของ ${num14}! = <br> <h1>${sum}</h1>`
    document.querySelector('#inpQ14').value = ""
}

function exercise15() {
    let num15 = document.querySelector('#inpQ15').value;
    let sum = 0;
    if (isNaN(num15) || num15 === null || num15 === undefined) {
        alert('Please enter a valid number')
        document.querySelector('#inpQ15').value = ""
    } else {
        for ( let i =1; i<=num15; i++) {
            for (let value of String(i)) {
                sum += Number(value)
            }
        }
    }
    document.querySelector('#result15').innerHTML = `ผลรวมของเลขโดดตั้ง 1 - ${num15} = <br> <h1>${sum}</h1>`
    document.querySelector('#inpQ15').value = ""
}