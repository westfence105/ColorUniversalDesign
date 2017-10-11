class RGBAColor{
	constructor( s ){
		var values = s.match(/[0-9]+/g);
		this.r = parseInt(values[0]);
		this.g = parseInt(values[1]);
		this.b = parseInt(values[2]);
		if( values.length >= 4 ){
			this.a = parseInt(values[3])
		}
		else {
			this.a = 255;
		}
	}

	toString(){
		return 'rgba(' + this.r + ' ,' + this.g + ' ,' + this.b + ' ,' + this.a + ')';
	}

	toRGB(){
		return 'rgb(' + this.r + ' ,' + this.g + ' ,' + this.b + ')';
	}
}