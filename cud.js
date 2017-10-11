$( function(){
	var list = '';
	$('*').css(['color','background-color'], function(i,value){
		var c = new RGBColor(value['color']);
	});

	alert(list)
})