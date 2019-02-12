tile = (n) => n * 32

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = tile(24)
canvas.height = tile(16)

ctx.imageSmoothingEnabled = false;

document.body.insertBefore(canvas, null)

function render() {
    fillRect(0, 0, canvas.width, canvas.height, '#000')


    //top numbers
    for (i = 0; i < track.length; i++) {
        drawText((editor.x + i) - editor.scroll.x, editor.x + i, 0, '#fff')
    }

    


    //track area
    fillRect(editor.x, editor.y, editor.width, editor.height, '#111')


    //measures
    for (i = 0; i < editor.width; i++) {
        fillRect(editor.x + (i * 8), 1, 4, editor.height, '#222')
    }


    //Draw Notes
    for (x = 0; x < track.length; x++) {
        var n = track[x]
        if (n.hasNote) {
            var c = new String;
            if (n.type == 0) c = '#f66';
            if (n.type == 1) c = '#6f6';
            if (n.type == 2) c = '#66f';
            if (n.type == 3) c = '#f8f';
            fillRect(x - editor.scroll.x, n.key, 1, 1, c)
        }
    }

    //Playhead
    fillRect(Math.floor(playhead / 10), editor.y, 1, editor.height, '#ffffff80')


    //Selector
    strokeRect(editor.x + selector.x,editor.y + selector.y, selector.width, selector.height, '#fff')


    //bottom bar
    drawText(keys[selector.y % keys.length], 1, 14, '#fff')

    //Wave Type
    drawImage(textures[types[newNote.type]], 3, 14);
    drawText(types[newNote.type], 4, 14, '#fff')

    for (i = 0; i < keys.length; i++) {
        drawText(keys[i], editor.x, editor.y + i, '#fff')
    }
}





function fillRect(x, y, width, height, color) {
    if (color != undefined) ctx.fillStyle = color
    ctx.fillRect(tile(x), tile(y), tile(width), tile(height))
}

function strokeRect(x, y, width, height, color) {
    ctx.strokeStyle = color
    ctx.lineWidth = 2
    ctx.strokeRect(tile(x), tile(y), tile(width), tile(height))
}

function drawText(text, x, y, color) {
    ctx.fillStyle = color
    ctx.font = "16px monospace"
    ctx.textAlign = "left"
    ctx.textBaseline = "hanging"
    ctx.fillText(text, tile(x), tile(y))
}

function drawImage(image, x, y) {
    ctx.drawImage(image, tile(x), tile(y))
}