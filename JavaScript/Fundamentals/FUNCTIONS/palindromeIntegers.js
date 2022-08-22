function palindromeIntegers(array) {
    let isPalindrome = false;
    for (let el of array) {
        let length = Number(el.toString().length);
        if (length === 1) {
            console.log('true');
            continue;
        } else {
            if (el.toString().length % 2 === 0) {
                //EVEN
                let half = length / 2;
                for (let start = 0, backwards = length - 1; start < half; start++, backwards--) {
                    let currentNumFront = Number(el.toString()[start]);
                    let currentNumBack = Number(el.toString()[backwards]);
                    if (currentNumFront === currentNumBack) {
                        isPalindrome = true;
                    } else {
                        isPalindrome = false;
                        break;
                    }
                }
                if (isPalindrome) {
                    console.log('true');
                } else {
                    console.log('false');
                }
            } else {
                // ODD
                half = (length + 1) / 2;
                for (let start = 0, backwards = length - 1; start <= half; start++, backwards--) {
                    let currentNumFront = Number(el.toString()[start]);
                    let currentNumBack = Number(el.toString()[backwards]);
                    if (currentNumFront === currentNumBack) {
                        isPalindrome = true;
                    } else {
                        isPalindrome = false;
                        break;
                    }
                }
                if (isPalindrome) {
                    console.log('true');
                } else {
                    console.log('false');
                }
            }
        }
    }
}
palindromeIntegers([32, 2, 232, 1010]);