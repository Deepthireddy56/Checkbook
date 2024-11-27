// Converting number to Words

function numToWord(num) {
    
    const ones = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine","Ten"];
    const tens = ["","Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen"];
    const tys = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];

    if (num == 0) return "zero";
    let result = "";

     // Checking hundreds place
    if (num >= 100) {
        result += ones[Math.floor(num / 100)] + " hundred";
        num %= 100;                                              // Here num value re-assigned
        if (num > 0) {
            result += " and ";
        }
    }

    // Checking tens and ones place
    if (num > 10 && num < 20) {
        result += tens[num - 10];
    } else {
        if (num >= 20) {
            result += tys[Math.floor(num / 10)];
            num %= 10;                                      // Here num value re-assigned
            if (num > 0) {
                result += " ";
            }
        }
        if (num > 0 && num <= 10) {
            result += ones[num];
        }
    }
    return result;
}

// let number = 565;
// console.log(numToWord(number)); 

function updateCheckbook() {
    let accountNo = document.getElementById('accountNo').value;
    let name = document.getElementById('name').value;
    let amount = document.getElementById('amount').value;

    document.getElementById('checkAccountNo').textContent = accountNo ;
    document.getElementById('checkName').textContent = name ;
    document.getElementById('checkAmount').textContent = amount ;
    document.getElementById('checkAmountWords').textContent = amount && !isNaN(amount) ? numToWord(amount) : "" ;
    document.getElementById('checkDate').textContent = new Date().toISOString().split('T')[0];
}