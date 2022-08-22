function solve(base,x) {
    let block = 1 * 1 * x;
    let levels = 0;
    let stone = 0;
    let marble = 0;
    let lapisLazuli = 0;
    let gold = 0;
    let isTopLevel = false;
    while (base !== 1) {
      levels++;
      if (base === 2) {
        isTopLevel = true;
        break;
      }
      if (levels % 5 === 0) {
        lapisLazuli += ((4 * base) - 4) * x;
        stone += ((base - 2) * (base - 2)) * x;
        base -= 2;
        continue;
      }
      marble += ((4 * base) - 4) * x;
      stone += ((base - 2) * (base - 2)) * x;
      base -= 2;
    }
    if (base === 1) {
      levels++;
    }
    if (isTopLevel) {
      gold += 2 * base * block;
    } else {
      gold += block;
    }
    let totalHeight = levels * x;
    console.log(`Stone required: ${Math.ceil(stone)}`);
    console.log(`Marble required: ${Math.ceil(marble)}`);
    console.log(`Lapis Lazuli required: ${Math.ceil(lapisLazuli)}`);
    console.log(`Gold required: ${Math.ceil(gold)}`);
    console.log(`Final pyramid height: ${Math.floor(totalHeight)}`);
    }
    solve(11,0.75);