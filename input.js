const input = new Object
var logInput = true;
document.addEventListener('keydown', (event) => {
    input[event.key.toLowerCase()] = true
    keypress()
})
document.addEventListener('keyup', (event) => input[event.key.toLowerCase()] = false)

function keypress() {
    if (input.w) moveSelector(0, -1);
    if (input.s) moveSelector(0, 1);

    if (input.a) moveSelector(-1, 0);
    if (input.d) moveSelector(1, 0);

    if (input.arrowleft) newNote.type--
    if (input.arrowright) newNote.type++
    if (input.arrowup) newNote.length++
    if (input.arrowdown) newNote.length--

    if (input.enter) playTrack();

    if (input['+']) moveSelector(0, -12);
    if (input['-']) moveSelector(0, 12);
    if (input.x) removeNote(selector.x, selector.y);
    if (input[' ']) {
        addNote(editor.x + selector.x,editor.y + selector.y, newNote.type);
    } else {
        if (!playing)playNote(selector.y, newNote.type);
    }
    
}

function moveSelector(x, y) {
    selector.x += x;
    selector.y += y;
    
    //if (selector.x < editor.x) selector.x = editor.x
    //if (selector.y < editor.y) selector.y = editor.y
    if (selector.x > editor.x + editor.width) {
        selector.x = editor.x + editor.width
        editor.scroll++
    }
    //if (selector.y > editor.y + editor.height) selector.y = editor.y + editor.height
    
}

arrayLoopB = (arr) => arr.unshift(arr.pop());
arrayLoopF = (arr) => arr.push(arr.shift());