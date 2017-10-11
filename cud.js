$( function(){
	//These shall not be hard-code...
	var diff_threshold = 100;
	var gb_threshold = 200;
	var gb_addition = 100;

	var list = '';
	function search( $el, bc ){
		nbc = new RGBAColor( $el.css('background-color') );
		if( nbc.a ){
			bc = nbc;
		}

		if( $el.css('color') ){
			var c = new RGBAColor( $el.css('color') );
			if( c.r > c.g && c.r > c.b ){
				var diff = ( bc.g + bc.b ) - ( c.g + c.b );
				if( Math.abs( diff ) < diff_threshold && c.g + c.b < gb_threshold ){
					list += c + "  bg: " + bc + "  diff:" + diff;

					var nc = c;
					nc.g += gb_addition;
					nc.b += gb_addition;
					$el.css('color', nc );

					list += " -> " + nc.toRGB() + " " + $el.css('color') + "\n";
				}
			}
		}

		$el.children().each( function( i, el ){
			search( $(el), bc );
		});
	}

	var b = $('body');
	search( b, new RGBAColor( b.css('background-color') ) );

//	alert(list);
})