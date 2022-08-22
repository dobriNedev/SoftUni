function solve(param) {
    let something = typeof(param);
    console.log(something);
    if (something == 'string' || something == 'number') {
        console.log(param);
    } else {
        console.log('Parameter is not suitable for printing');
    }
}
solve('sex');
solve(69);
solve(false);
solve();