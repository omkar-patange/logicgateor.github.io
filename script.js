		

		function check(){
			var valueof_A = document.getElementById('value_A').value;
			var valueof_B = document.getElementById('value_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_result').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_result').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_result').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_result').innerHTML = 1;
			}
		}

	function refresh(){
		document.getElementById('value_A').value = " ";
		document.getElementById('value_B').value = " ";
		document.getElementById('show_result').innerHTML = "";
	}

