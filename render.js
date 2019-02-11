tile = (n) => n * 32

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')

canvas.width = tile(24)
canvas.height = tile(16)

ctx.imageSmoothingEnabled = false;

document.body.insertBefore(canvas, null)

function render() {
    fillRect(0, 0, canvas.width, canvas.height, '#000')

    for (i = 0; i < editor.width; i++) {
        drawText(editor.x + i + editor.scroll.x, editor.x + i, 0, '#fff')
    }


    fillRect(editor.x, editor.y, editor.width, editor.height, '#111')


    for(i=0;i<editor.width; i++){
        fillRect(editor.x + (i * 8), 1, 4, editor.height, '#222')
    }


    strokeRect(editor.x + selector.x, editor.y + selector.y, 1, 1, '#fff')


    //bottom bar
    drawText(keys[newNote.key % keys.length], 1, 14, '#fff')
    drawText(types[newNote.type], 4, 14, '#fff')


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