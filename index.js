function len(a) {
    return a.filter(el => el.length <= 3);
}
console.log(len(['12', 'aa', 'ertry']));