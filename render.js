tile = (n) => n * 32

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = tile(24)
canvas.height = tile(16)
console.log(Math.floor(window.innerWidth / 32))
ctx.imageSmoothingEnabled = false;

document.body.insertBefore(canvas, null)


ctx.font = "16px monospace"
ctx.textAlign = "left"
ctx.textBaseline = "hanging"

var noteColors = [
    '#00000000',
    '#f66',
    '#6f6',
    '#66f',
    '#f8f'
]

function render() {

    //track area
    fillRect(editor.x, editor.y, editor.width, editor.height, '#222')

    //measures
    for (i = 0; i < 32; i++) {
        if ((i % 8) > 3) {
            var x = (editor.x + i) - (editor.scroll.x % 8);
            fillRect(x, 1, 1, editor.height, '#333')
        }
    }


    //Draw Notes
    for (x = 0; x < track.length; x++) {
        for (y = 0; y < track[x].length; y++) {
            if (track[x][y].key > 0) {
                var c = noteColors[track[x][y].type];
                fillRect(x + editor.x - editor.scroll.x, track[x][y].key + editor.y - editor.scroll.y, 1, 1, c)
            }
        }
    }

    //Playhead
    if (playing) fillRect(playhead - editor.scroll.x, editor.y, 1, editor.height, '#ffffff80')

    //beats
    fillRect(0, 0, canvas.width, 1, '#111')
    for (i = 0; i < editor.width; i++) {
        drawText(editor.x + i + editor.scroll.x, editor.x + i, 0, '#fff')
    }


    //keys
    fillRect(0, editor.y, 1, editor.height, '#111')
    for (i = 0; i < keys.length; i++) {

        drawText(keys[(i + editor.scroll.y) % keys.length], 0, editor.y + i, '#fff')
    }

    //Selector
    strokeRect(editor.x + selector.x, editor.y + selector.y, selector.width, selector.height, '#fff')

    //bottom bar
    fillRect(0, 12, canvas.width, 6, '#111')

    //Wave Type
    drawImage(textures[types[newNote.type]], 3, 14);
    drawText(types[newNote.type], 4, 14, '#fff')



}





function fillRect(x, y, width, height, color) {
    ctx.fillStyle = color;
    ctx.fillRect(tile(x), tile(y), tile(width), tile(height))
}

function strokeRect(x, y, width, height, color) {
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.strokeRect(tile(x), tile(y), tile(width), tile(height))
}

function drawText(text, x, y, color) {
    ctx.fillStyle = color

    ctx.fillText(text, tile(x), tile(y))
}

drawImage = (image, x, y) => ctx.drawImage(image, tile(x), tile(y))