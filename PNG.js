var canvas = document.createElement('canvas');

function loadPNG(src, callback){
    var image = new Image();
    image.crossOrigin = 'anonymous';
    image.onload = function() {
        canvas.width = image.width;
        canvas.height = image.height;

        var context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(image, 0, 0);

        var imageData = context.getImageData(0, 0, canvas.width, canvas.height);

        callback(new PNG(imageData));
    };
    image.src = src;
}

function PNG(imageData){
    function _index(x, y){
        return (y*imageData.width + x) * 4; 
    };
    var png = {
        width: imageData.width,
        height: imageData.height,
        r: function(x, y){
            return imageData.data[_index(x, y)];        
        },
        g: function(x, y){
            return imageData.data[_index(x, y)+1];        
        },
        b: function(x, y){
            return imageData.data[_index(x, y)+2];        
        },
        a: function(x, y){
            return imageData.data[_index(x, y)+3];
        }
    }
    return png;
}