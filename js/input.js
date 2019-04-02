/*
	moSQuito - input
*/

class Input {
    constructor() {
        this.keybinds = {
            //directions
            up: 'w',
            down: 's',
            left: 'a',
            right: 'd',

            //actions
            select: ' ',
            delete: 'x',
            back: 'z',
            play: 'enter'
        }
    }
}

const input = new Object;

var keybinds = {
    up: 'w',
    down: 's',
    left: 'a',
    right: 'd',
    select: ' ',
    delete: 'x',
    back: 'z',
    play: 'enter'
}



document.addEventListener('keydown', (event) => {
    var pressedKey = event.key.toLocaleLowerCase();
    input[pressedKey] = true;

    switch (nav.view[nav.view.length - 1]) {
        case 'composition':
            {
                if (input[keybinds.up]) moveSelector(0, -1);
                if (input[keybinds.down]) moveSelector(0, 1);
                if (input[keybinds.left]) moveSelector(-1, 0);
                if (input[keybinds.right]) moveSelector(1, 0);

                if(input[keybinds.select]) nav.goTo('trackEditor')
            }
            break
        case 'trackEditor':
            {
                if (input[keybinds.up]) moveSelector(0, -1);
                if (input[keybinds.down]) moveSelector(0, 1);
                if (input[keybinds.left]) moveSelector(-1, 0);
                if (input[keybinds.right]) moveSelector(1, 0);

                if (input[keybinds.play]) player.play();

                if (input[keybinds.select]) edit.addNote(comp.tracks[0], selector.x + selector.scroll.x, selector.y + selector.scroll.y, .1)
                if (input[keybinds.delete]) edit.deleteNote(comp.tracks[0], selector.x + selector.scroll.x, selector.y + selector.scroll.y)

                if (input[keybinds.back]) nav.goBack();

                player.playNote(selector.y + selector.scroll.y, .2, comp.tracks[0].sound);
            }
            break
    }

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
        if ((ui.track.height + selector.scroll.y) < frequencies.length) {
            selector.scroll.y++
        }
    }
}