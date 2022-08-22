function sortBy2Criteria(params) {
    let sortedByLength = params.sort((a,b) => a.length - b.length || a.localeCompare(b) );
    console.log(sortedByLength.join('\n'));
}
sortBy2Criteria(['alpha', 'beta', 'gamma']);

console.log('---------------');

sortBy2Criteria(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George']);