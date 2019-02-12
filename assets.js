var images = [
    'sine',
    'square',
    'triangle',
    'sawtooth',
]

var textures = new Object;

for(i=0;i<images.length;i++){
    var img = new Image;
    img.src = '/img/' + images[i] + '.png';
    textures[images[i]] = img;
}