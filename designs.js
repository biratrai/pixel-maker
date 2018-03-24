// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

$( "#sizePicker" ).submit(function( event ) {
  var height = $('#inputHeight').val();
  var weight = $('#inputWeight').val();
  makeGrid(height, weight);
  event.preventDefault();
});

function makeGrid(height, weight) {
	$('#pixelCanvas').empty();
	for(i = 0; i < height; i++){
		str = '<tr>';
		for (w = 0; w < weight; w++) {
			str += '<td></td>';
		}
		str += '</tr>';	
		$('#pixelCanvas').append( str );
	}
	
}

$('#pixelCanvas').on("click", " td", function(event) {
	var x = $(this).css('backgroundColor');
	console.log(x);
	color = $('#colorPicker').val();
	if(x === 'rgba(0, 0, 0, 0)'){
		$(this).css({backgroundColor: color});	
	} else {
		$(this).css({backgroundColor: 'rgba(0, 0, 0, 0)'});	
	}
    
});

