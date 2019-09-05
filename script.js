function check(){
			var valueof_A = document.getElementById('value_A').value;
			var valueof_B = document.getElementById('value_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_result').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_result').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_result').innerHTML = 1;
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

	function checkand(){
			var valueof_A = document.getElementById('valueand_A').value;
			var valueof_B = document.getElementById('valueand_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultand').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultand').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultand').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultand').innerHTML = 1;
			}
		}

	function refreshand(){
		document.getElementById('valueand_A').value = " ";
		document.getElementById('valueand_B').value = " ";
		document.getElementById('show_resultand').innerHTML = "";
	}

	function checknor(){
			var valueof_A = document.getElementById('valuenor_A').value;
			var valueof_B = document.getElementById('valuenor_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultnor').innerHTML = 1;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultnor').innerHTML = 0;
			}
		}

	function refreshnor(){
		document.getElementById('valuenor_A').value = " ";
		document.getElementById('valuenor_B').value = " ";
		document.getElementById('show_resultnor').innerHTML = "";
	}

	function checknand(){
			var valueof_A = document.getElementById('valuenand_A').value;
			var valueof_B = document.getElementById('valuenand_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultnand').innerHTML = 1;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultnand').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultnand').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultnand').innerHTML = 0;
			}
		}

	function refreshnand(){
		document.getElementById('valuenand_A').value = " ";
		document.getElementById('valuenand_B').value = " ";
		document.getElementById('show_resultnand').innerHTML = "";
	}

	function checkexor(){
			var valueof_A = document.getElementById('valueexor_A').value;
			var valueof_B = document.getElementById('valueexor_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultexor').innerHTML = 0;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultexor').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultexor').innerHTML = 1;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultexor').innerHTML = 0;
			}
		}

	function refreshexor(){
		document.getElementById('valueexor_A').value = " ";
		document.getElementById('valueexor_B').value = " ";
		document.getElementById('show_resultexor').innerHTML = "";
	}

	function checkexnor(){
			var valueof_A = document.getElementById('valueexnor_A').value;
			var valueof_B = document.getElementById('valueexnor_B').value;

			if((valueof_A == 0) && (valueof_B == 0)){
				document.getElementById('show_resultexnor').innerHTML = 1;
			}
			else if((valueof_A == 0) && (valueof_B == 1)){
				document.getElementById('show_resultexnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 0)){
				document.getElementById('show_resultexnor').innerHTML = 0;
			}
			else if((valueof_A == 1) && (valueof_B == 1)){
				document.getElementById('show_resultexnor').innerHTML = 1;
			}
		}

	function refreshexnor(){
		document.getElementById('valueexnor_A').value = " ";
		document.getElementById('valueexnor_B').value = " ";
		document.getElementById('show_resultexnor').innerHTML = "";
	}