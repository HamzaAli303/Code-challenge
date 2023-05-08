function newTower(n) {
    let tower = [];
    let width = n * 2 - 1
    for (let i = 0; i < n; i++) {
        let stars = i * 2 + 1
        let spaces = (width - stars) / 2
        let level = ' '.repeat(spaces) + '*'.repeat(stars) + ' '.repeat(spaces);
        tower.push(level);

    }
    return tower
}
console.log(newTower(5));