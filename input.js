const input = new Object
var logInput = true;
document.addEventListener('keydown', (event) => {
    input[event.key.toLowerCase()] = true
    keypress()
})
document.addEventListener('keyup', (event) => input[event.key.toLowerCase()] = false)

function keypress() {
    if (input.w ) moveSelector(0, -1);
    if (input.s ) moveSelector(0, 1);

    if (input.a) moveSelector(-1, 0);
    if (input.d) moveSelector(1, 0);

    if (input.arrowleft) arrayLoopB(types)
    if (input.arrowright) arrayLoopF(types)
    if (input.arrowup) newNote.length++
    if (input.arrowdown) newNote.length--

    if (input.enter) addNote(selector.x, selector.y);

    if (input['+']) moveSelector(0, -12);
    if (input['-']) moveSelector(0, 12);

    if (input[' ']) {
        play()
    } else {
        playNote(selector.y, newNote.type);
    }
}

function moveSelector(x, y){
    selector.x += x;
    selector.y += y;


}

arrayLoopB = (arr) => arr.unshift(arr.pop());
arrayLoopF = (arr) => arr.push(arr.shift());