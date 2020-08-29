var display = document.getElementById("res");
var clear = document.getElementById("btnClr");
var result = document.getElementById("btnEql");
var num = document.querySelectorAll(".num");
var operators = document.querySelectorAll(".operator");

var operand = "",
    nums,
    numbers = "";

var sp = function (sp) {
    nums = operand.split(sp);
    nums[2] = sp;
    numbers = parseInt(nums[0], 2) + nums[2] + parseInt(nums[1], 2);
    return numbers;
};

for (var i = 0; i < operators.length; i++) {
    operators[i].addEventListener("click", function () {
        if (this.id == "btnSum") {
            operand += "+";
            operator = "+";
        }
        if (this.id == "btnSub") {
            operand += "-";
            operator = "-";
        }
        if (this.id == "btnMul") {
            operand += "*";
            operator = "*";
        }
        if (this.id == "btnDiv") {
            operand += "/";
            operator = "/";
        }
        display.innerHTML = operand;
    });
}

for (var i = 0; i < num.length; i++) {
    num[i].addEventListener("click", function () {
        operand += this.innerHTML;
        display.innerHTML = operand;
    });
}

result.addEventListener("click", function () {
    operand = parseInt(eval(sp(operator)), 10).toString(2);
    display.innerHTML = operand;
});

clear.addEventListener("click", function () {
    display.innerHTML = "";
    operand = "";
});
