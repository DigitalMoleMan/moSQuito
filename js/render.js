/*
	moSQuito - render
*/

tile = (n) => n * 32
inTiles = (n) => Math.floor(n / 32);

var cw = window

const canvas = document.getElementById('canvas')
const ctx = canvas.getContext('2d')

canvas.width = tile(30)
canvas.height = tile(20)
ctx.imageSmoothingEnabled = false;

const themes = [
    dark = {
        primary: '#222',
        secondary: '#333',
        text: '#fff',
        background: '#111'
    },
    light = {
        primary: '#eee',
        secondary: '#bbb',
        text: '#111',
        background: '#ddd'
    }
]

var theme = themes[0];

var ui = {
    track: {
        x: new Number,
        y: new Number,
        width: 29,
        height: 18,
        color: theme.primary
    },
    top: {
        x: 0,
        y: 0,
        width: inTiles(canvas.width),
        height: 1,
        color: theme.background
    },
    right: {
        x: 0,
        y: 1,
        width: 1,
        height: inTiles(canvas.height),
        color: theme.background
    },
    bottom: {
        x: 0,
        y: 19,
        width: inTiles(canvas.width),
        height: 1,
        color: theme.background
    },
    /*elememts*/
    //track
    //top
    //right
    keys: {
        x: 1,
        y: 0,
    },
    //bottom
    waveform: {
        x: 2,
        y: 1
    }
}

const style = {
    align: [
        'start',
        'end',
        'center',
        'left',
        'right'
    ],
    baseline: [
        'alphabetic',
        'top',
        'hanging',
        'middle',
        'ideographic',
        'bottom'
    ]
}

var noteColors = [
    '#f66',
    '#6f6',
    '#66f',
    '#f8f'
]

function renderInit() {
    ui.track.x = ui.right.width
    ui.track.y = ui.top.height

    /*elements*/

    //track

    //top

    //right
    ui.keys.x += ui.right.x
    ui.keys.y += ui.right.y
    //bottom
    ui.waveform.x += ui.bottom.x
    ui.waveform.y += ui.bottom.y
}

render = () => {
    switch (nav.view[nav.view.length - 1]) {
        case 'composition':
            composition: {
                tracks: {
                    fillRect(0, 0, canvas.width, canvas.height, '#111');
                    comp.tracks.forEach((track, i) => {

                        var trackNumber = i + 1;

                        drawText(trackNumber, 0, (i * 4) + 1, theme.text, 32, 0, 1);

                        fillRect(1, (i * 4) + 1, 28, 3, '#222');

                        //Wave Type
                        drawImage(textures[types[track.sound.type]], 2, (i * 4) + 1)
                        drawText(types[track.sound.type], 3, (i * 4) + 1, theme.text, 32, 3, 1)

                        track.notes.forEach((beat, x) => {
                            beat.forEach((note) => {
                                ctx.fillStyle = noteColors[track.sound.type]
                                ctx.fillRect(tile(2) + x, tile(i * 4) + note, note.length, 1);
                            })
                        })

                    });
                }
                selector: {
                    strokeRect(selector.x, selector.y, 1, 1, '#fff');

                }
            }
            break
        case 'trackEditor':
            trackEditor: {
                body: {
                    fillRect(0, 0, 32, 20, theme.background);
                }
                track: {

                    fillRect(ui.track.x, ui.track.y, ui.track.width, ui.track.height, theme.primary)

                    //measures
                    for (i = 0; i < 5; i++) {
                        var ts = comp.timeSign.notes;
                        fillRect((ui.track.x - selector.scroll.x % 8) + 2 * i * ts, ui.track.y, ts, ui.track.height, theme.secondary)
                    }

                    for (i = 0; i < ui.track.height; i++) {
                        var c = '#00000020'
                        if ((i + selector.scroll.y) % keys.length == 0) c = '#444'
                        strokeLine(ui.track.x, ui.track.y + i, ui.track.x + ui.track.width, ui.track.y + i, c)
                    }

                    //Draw Notes
                    comp.tracks[0].notes.forEach((beat, x) => {
                        beat.forEach((note, y) => {
                            var c = noteColors[0]
                            fillRect(ui.track.x + x - selector.scroll.x, ui.track.y + note.key - selector.scroll.y, note.length * 10, 1, c)
                        });
                    });

                    //Playhead
                    fillRect(player.playhead - selector.scroll.x, ui.track.y, 1, ui.track.height, '#ffffff80')

                    //Selector
                    strokeRect(ui.track.x + selector.x, ui.track.y + selector.y, selector.width, selector.height, theme.text)
                }
                right: {
                    fillRect(ui.right.x, ui.right.y, ui.right.width, ui.right.height, theme.background)

                    //keys
                    for (i = 0; i < keys.length; i++) {
                        drawText(i, ui.track.x, ui.track.y + (keys.length * i) - selector.scroll.y, theme.text, tile(.5), 4, 1)
                        strokeLine(ui.right.x, ui.track.y + (keys.length * i) - selector.scroll.y, ui.right.x + ui.right.width, ui.track.y + (keys.length * i) - selector.scroll.y, '#444')
                    }


                    for (i = 0; i < ui.right.height; i++) {
                        drawText(keys[(i + selector.scroll.y) % keys.length], ui.right.x, (ui.track.y) + i, theme.text, tile(.5), 3, 1);
                    }
                }
                top: {
                    fillRect(ui.top.x, ui.top.y, ui.top.width, ui.top.height, theme.background)

                    //beats
                    for (i = 0; i < ui.track.width; i++) {
                        drawText((1 + i + selector.scroll.x), ui.track.x + i, ui.track.y, theme.text, tile(.5), 3, 5)
                    }
                }
                bottom: {
                    fillRect(ui.bottom.x, ui.bottom.y, ui.bottom.width, ui.bottom.height, theme.background)

                }
            }
            break
    }
}

/*
function renderTrackEditor() {
    renderTrack(ui.track)
    renderRight(ui.right)
    renderTop(ui.top)
    renderBottom(ui.bottom)
}

function renderTrack() {
    // Track
    fillRect(ui.track.x, ui.track.y, ui.track.width, ui.track.height, ui.track.color)

    //measures
    for (i = 0; i < 5; i++) {
        var ts = composition.timeSign.notes;
        fillRect((ui.track.x - selector.scroll.x % 8) + 2 * i * ts, ui.track.y, ts, ui.track.height, '#333')
    }

    for (i = 0; i < ui.track.height; i++) {
        var c = '#00000020'
        if ((i + selector.scroll.y) % keys.length == 0) c = '#444'
        strokeLine(ui.track.x, ui.track.y + i, ui.track.x + ui.track.width, ui.track.y + i, c)
    }

    //Draw Notes
    for (x = 0; x < composition.track.length; x++) {
        for (y = 0; y < composition.track[x].length; y++) {
            var note = composition.track[x][y]
            var c = noteColors[note.type]
            var wl = note.wavelength
            fillRect(ui.track.x + x - selector.scroll.x, ui.track.y + note.key - selector.scroll.y, 1, 1, c)
        }
    }

    //Playhead
    fillRect(playhead - selector.scroll.x, ui.track.y, 1, ui.track.height, '#ffffff80')

    //Selector
    strokeRect(ui.track.x + selector.x, ui.track.y + selector.y, selector.width, selector.height, '#fff')
}

function renderRight() {
    fillRect(ui.right.x, ui.right.y, ui.right.width, ui.right.height, ui.right.color)

    //keys
    for (i = 0; i < keys.length; i++) {
        drawText(i, ui.track.x - 2, ui.track.y + (keys.length * i) - selector.scroll.y, '#fff', 12)
        strokeLine(ui.right.x, ui.track.y + (keys.length * i) - selector.scroll.y, ui.right.x + ui.right.width, ui.track.y + (keys.length * i) - selector.scroll.y, '#444')
    }

    for (i = 0; i < ui.right.height; i++) {
        drawText(keys[(i + selector.scroll.y) % keys.length], ui.keys.x, ui.keys.y + i, '#fff', 16);
    }
}

function renderTop() {
    fillRect(ui.top.x, ui.top.y, ui.top.width, ui.top.height, ui.top.color)

    //beats
    for (i = 0; i < ui.track.width; i++) {
        drawText(1 + i + selector.scroll.x, ui.track.x + i, ui.track.y - 1, '#fff', 12)
    }
}

function renderBottom() {
    fillRect(ui.bottom.x, ui.bottom.y, ui.bottom.width, ui.bottom.height, ui.bottom.color)

    //Wave Type
    drawImage(textures[types[waveform]], ui.waveform.x, ui.waveform.y)
    drawText(types[waveform], ui.waveform.x + 1, ui.waveform.y, '#fff', 32)

    //wavelength
    drawText(wavelength, ui.bottom.x + 10, ui.bottom.y + 1, '#fff', 32)

    drawText(mod, ui.bottom.x + 15, ui.bottom.y + 1, '#fff', 32)
}

*/


function fillRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(tile(x), tile(y), tile(width), tile(height))
}

function strokeRect(x, y, width, height, color) {
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.strokeRect(tile(x), tile(y), tile(width), tile(height))
}

function strokeLine(x1, y1, x2, y2, color) {
    ctx.strokeStyle = color;
    ctx.beginPath();
    ctx.moveTo(tile(x1), tile(y1));
    ctx.lineTo(tile(x2), tile(y2));
    ctx.stroke();
}

function drawText(text, x, y, color, size, align, base) {
    ctx.fillStyle = color
    ctx.font = size + 'px monospace'
    ctx.textAlign = style.align[align]
    ctx.textBaseline = style.baseline[base]
    ctx.fillText(text, tile(x), tile(y))
}

function drawImage(image, x, y) {
    ctx.drawImage(image, tile(x), tile(y))
}

renderInit()