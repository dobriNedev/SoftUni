function solve(arr1, arr2) {
    let isMach = false;
    let diffOnIndex = '';
    let sum = 0;
    if (arr1.length === arr2.length) {
        let diff = '';
        for (let i = 0; i < arr1.length; i++) {
            let num1 = Number(arr1[i]);
            let num2 = Number(arr2[i]);
            if (num1 === num2) {
                isMach = true;
                sum += num1;
            } else {
                isMach = false;
                diff = i;
                break;
            }
        }
        diffOnIndex = diff;
    } else {
        let diff = arr1.length - arr2.length;
        let shorterArr = '';
        if (diff > 0) {
            shorterArr = arr2;
        } else {
            shorterArr = arr1;
        }
        let currentIndex = 0;
        for (let i = 0; i < shorterArr.length; i++) {
            currentIndex++;
            num1 = arr1[i];
            num2 = arr2[i];
            if (num1 !== num2) {
                isMach = false;
                diffOnIndex = i;
                break;
            }
            diffOnIndex = currentIndex;
        }
    }
    if (isMach) {
        console.log(`Arrays are identical. Sum: ${sum}`);
    } else {
        console.log(`Arrays are not identical. Found difference at ${diffOnIndex} index`);
    }
}
solve(['10', '20', '30'], ['10', '20', '30']);
solve(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
solve(['1'], ['10']);
solve(['10'], ['10', '200']);