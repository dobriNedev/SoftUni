

function addAndSubstract(n1, n2, n3) {
    let sumOfFirstAndSecond = sum(n1, n2);
    console.log(substract(sumOfFirstAndSecond, n3))
    function sum(param1, param2) {
        return n1 + n2;
    };

    function substract(param1, param2) {
        return param1 - param2
    };
}

addAndSubstract(42,
    58,
    100);