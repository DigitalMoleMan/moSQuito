/*
	moSQuito - input
*/

const input = new Object;

var keybinds = {
    trackEditor: {
        up: 'w',
        down: 's',
        left: 'a',
        right: 'd',
        addNote: ' ',
        removeNote: 'delete',
        play: 'enter',
    },
}

document.addEventListener('keydown', (event) => {
    var pressedKey = event.key.toLocaleLowerCase();
    //log(pressedKey);
    input[pressedKey] = true

    if (input[keybinds.trackEditor.up]) moveSelector(0, -1);
    if (input[keybinds.trackEditor.down]) moveSelector(0, 1);

    if (input[keybinds.trackEditor.left]) moveSelector(-1, 0);
    if (input[keybinds.trackEditor.right]) moveSelector(1, 0);

    if (input[keybinds.trackEditor.play]) playComp();

    if (input[keybinds.trackEditor.addNote]) {
        addNote(selector.x + selector.scroll.x, selector.y + selector.scroll.y, waveform, perc)
    }
    if (input[keybinds.trackEditor.removeNote]) {
        removeNote(selector.x + selector.scroll.x, selector.y + selector.scroll.y)
    }

    if (input.arrowleft) {
        if (waveform > 0) waveform--
    }
    if (input.arrowright) {
        if (waveform < types.length - 1) waveform++
    }
    if (input['+']) wavelength++
    if (input['-']) wavelength--

    if (input['.']) mod++
    if (input[',']) mod--

    if (input.p) perc = !perc

})
document.addEventListener('keyup', (event) => input[event.key.toLowerCase()] = false)

function moveSelector(x, y) {

    selector.x += x;
    selector.y += y;

    if (selector.x < 0) {
        selector.x++
        if (selector.scroll.x > 0) selector.scroll.x--
    }
    if (selector.x >= ui.track.width) {
        selector.x--
        selector.scroll.x++
    }
    if (selector.y < 0) {
        selector.y++
        if (selector.scroll.y > 0) selector.scroll.y--
    }
    if (selector.y >= ui.track.height) {
        selector.y--
        if ((ui.track.height + selector.scroll.y) <= frequencies.length) selector.scroll.y++
    }

    playNote(selector.y + selector.scroll.y, waveform, wavelength);
}