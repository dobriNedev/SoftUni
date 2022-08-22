function solve(n1,op,n2) {
    let res = n1 + op + n2;
    console.log(eval(res).toFixed(2));
}
solve(5,'+',10);
solve(25.5,'-',3);
solve(10,'/',10);
solve(5,'*',10);