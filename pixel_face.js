function write(png){
var canvas = document.getElementsByTagName('canvas')[0];
var context = canvas.getContext('2d');
    for( var x = 0 ; x < png.width ; x++){
        for( var y = 0 ; y < png.width ; y++){
            context.fillStyle = 'rgba('
            + transform(png.r(x, y), 255, 255, 0) + ','
            + transform(png.g(x, y), 0, 195, 0) + ','
            + transform(png.b(x, y), 0, 130, 255) + ','
            + png.a(x, y) + ')'
            context.fillRect(x * 10 , y * 10 , 10, 10);
        }
    }
}

function transform(base, to_min, to_avg, to_max){
	var to;
	if(base <= 128){
		to = to_max + ( to_avg- to_max) * base/128 
	}else{
		to = to_avg + (to_min - to_avg) * (base - 128)/128 
	}
	to = Math.round(to);
	console.log(to);
	return to;
}