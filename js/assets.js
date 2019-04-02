class AssetLoader {
    constructor() {
        this.pngImgs = [
            'sine',
            'square',
            'triangle',
            'sawtooth',
        ];
    }

    loadImages(path, imgArr, ext) {
        var obj = new Object;
        imgArr.forEach(image => {
            var img = new Image;
            img.src = path + image + ext;
            obj[image] = img;
        });
        return obj
    }

}