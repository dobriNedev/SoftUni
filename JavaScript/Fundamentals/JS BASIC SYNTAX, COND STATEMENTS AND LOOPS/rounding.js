function round(n,m) {
    if (m > 15) {
        m = 15;
    }
    let rounded = n.toFixed(m);
    console.log(parseFloat(rounded));
}