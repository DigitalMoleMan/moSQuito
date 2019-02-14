const input = new Object;
document.addEventListener('keydown', (event) => {
    input[event.key.toLowerCase()] = true

    if (input.w) moveSelector(0, -1);
    if (input.s) moveSelector(0, 1);

    if (input.a) moveSelector(-1, 0);
    if (input.d) moveSelector(1, 0);

    if (input.arrowleft) {
        if (newNote.type > 1) newNote.type--
    }
    if (input.arrowright) {
        if (newNote.type < types.length - 1) newNote.type++
    }
    if (input.arrowup) newNote.length++
    if (input.arrowdown) newNote.length--

    if (input.enter) playTrack();

    if (input[' ']) addNote(selector.x + editor.scroll.x, selector.y + editor.scroll.y, newNote.type);
    if (input.x) removeNote(selector.x + editor.scroll.x, selector.y + editor.scroll.y);

    if (!playing) playNote(selector.y + editor.scroll.y, newNote.type);

})
document.addEventListener('keyup', (event) => {
    input[event.key.toLowerCase()] = false;
})

function moveSelector(x, y) {
    selector.x += x;
    selector.y += y;

    if (selector.x < 0) {
        selector.x++
        if (editor.scroll.x > 0) editor.scroll.x--
    }
    if (selector.x >= editor.width) {
        selector.x--
        if ((editor.width + editor.scroll.x) <= track.length) editor.scroll.x++
    }
    if (selector.y < 0) {
        selector.y++
        if (editor.scroll.y > 0) editor.scroll.y--
    }
    if (selector.y >= editor.height - 1) {
        selector.y--
        if ((editor.height + editor.scroll.y) <= frequencies.length) editor.scroll.y++
    }

}