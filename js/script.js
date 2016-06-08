
$(document).ready(function(){


		//define variables
		var first_num = 0, second_num = 1, next_num, outputdiv;
      
		//get the value from textbox
		var limit = $( '#limit' ).val();
                 
		//set output div object to the variable 'outputdiv'
		outputdiv = $( '#output' );
                    
                   
		//clear the div
		outputdiv.html( '' );
		//print first two number 0 and 1
                     
 						
		$( '#getfibonacci' ).click( function(){
		//loop through the limit till it becomes 0 (zero)

		$('#container').append('<div class="cube"></div>');
	    $('#container').append('<div class="cube"></div>');           
                             
		//add the first value and second to get the next value
		next_num   = first_num + second_num;
	 
		//assign second value to first
		//next value to second to find the next series
		first_num  = second_num;
		second_num = next_num;
	 
		//print the next value
		// outputdiv.append( '<br>' + next_num);
		outputdiv.append('<div class="cube'+next_num+'"></div>');
		$(".cube"+next_num).css("width", next_num+"px")
		$(".cube"+next_num).css("height", next_num+"px")
	 
		//decrement the limit by one 
	                       
	                   
		$('#vitesse').append(next_num + '  ');


		function randomFromTo(from, to){
			return Math.floor(Math.random() * (to - from + 1) + from);
		}

		// $("#container").append('<div class="cube"></div>');

		function moveRandom(obj) {
			/* get container position and size
			 * -- access method : cPos.top and cPos.left */
			var cPos = $('#container').offset();
			var cHeight = $('#container').height();
			var cWidth = $('#container').width();
			
			// get box padding (assume all padding have same value)
			var pad = parseInt($('#container').css('padding-top').replace('px', ''));
			
			// get movable box size
			var bHeight = obj.height();
			var bWidth = obj.width();
			
			// set maximum position
			maxY = cPos.top + cHeight - bHeight - pad;
			maxX = cPos.left + cWidth - bWidth - pad;
			
			// set minimum position
			minY = cPos.top + pad;
			minX = cPos.left + pad;
			
			// set new position			
			newY = randomFromTo(minY, maxY);
			newX = randomFromTo(minX, maxX);
			
			obj.animate({
				top: newY,
				left: newX
				}, 1200, function() {
          moveRandom(obj);
			});
		}
	$('.cube').each(function() {
	moveRandom($(this));


	});




	});

});







