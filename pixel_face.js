

function write(png){
var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');
    for( var x = 0 ; x < png.width ; x++){
        for( var y = 0 ; y < png.width ; y++){
            context.fillStyle = 'rgba('
            + png.r(x, y) + ','+ png.g(x, y) + ','+ png.b(x, y) + ','+ png.a(x, y) + ')'
            context.fillRect(x * 10 , y * 10 , 10, 10);
        }
    }
}