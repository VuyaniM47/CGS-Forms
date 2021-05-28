const postnoBtn = document.getElementById('post-btn-prac');

const sendHttpPostPracno = (method, url, data) => {
	return fetch(url, {
	method: method,
	body: JSON.stringify(data),
    headers:data ? {'Content-Type': 'application/json'} : {},
            
    /*toString: function() {
        return `${this.protocol}://${this.hostname}${this.path}`;
      }*/
}).then(response => {
    
        return response.json();
        
    });
};
 
//https://cors-anywhere.herokuapp.com/

const postData= () => {
	sendHttpPostPracno('POST', 'https://eb1vkiwjb9.execute-api.us-east-2.amazonaws.com/formpracno/submitpracno',{
		PracCd: document.getElementById('Pracno').value
    }).then(responseData => {
        //console.log(responseData.Results[0].Name);
		//console.log(responseData.PracCd);
		
		if(responseData.PracCd != 'not found'){
			if (responseData.Results.length > 0){
				$('#labelDiscipline').show();
				$('#Discipline').show();
				$('#labelName').show();
				$('#Name').show();
				$('#labelEmail').show();
				$('#Email').show();
				$('#labelPhone').show();
				$('#form-group').show();
				$('#Phone').show();
				$('#Phone').on('input', function() {
					// If value is not empty
					if ($.trim(this.value) != "") {
						$('#labelTypesub').show();
						$('#Typesub').show();	
						$('#Typesub').on('input', function() {
							// If value is not empty
							if ($.trim(this.value) != "") {
								$('#post-btn').show();
																	
							}else{
								$('#post-btn').hide();
							}
						}).keyup();				
					}else{
						//$('#post-btn').hide();
						$('#labelTypesub').hide();
						$('#Typesub').hide();
						$('#Typesub').val("");
					}
				}).keyup();
			

				document.getElementById("Discipline").value = responseData.Results[0].Discipline;
				document.getElementById("Name").value = responseData.Results[0].Name;
				document.getElementById("Email").value = responseData.Results[0].Email;
				$('#post-btn-prac').hide();
			}
			
			
		}else{
			alert('Practice Number Not Found Please fill in the rest of form')
			$('#labelDiscipline').show();
			$('#Discipline').show();
			$('#post-btn-prac').hide();
			
			$('#Discipline').on('input', function() {
				// If Discipline is not empty
				if ($.trim(this.value) != ""){
					$('#labelName').show();
					$('#Name').show();
					//////
					$('#Name').on('input', function() {
					// If Name is not empty
						if ($.trim(this.value) != "") {
							$('#labelEmail').show();
							$('#Email').show();
							//////
							$('#Email').on('input', function() {
							// If value is not empty
								if ($.trim(this.value) != "") {
									$('#form-group').show();
									$('#labelPhone').show();
									$('#Phone').show();
									
									//////
									$('#Phone').on('input', function() {
									// If value is not empty
										if ($.trim(this.value) != "") {
											$('#labelTypesub').show();
											$('#Typesub').show();
											$('#Typesub').on('input', function() {
											// If value is not empty
												if ($.trim(this.value) != "") {
													$('#post-btn').show();
													
												}else{
													$('#post-btn').hide();
												}
											}).keyup();
										}else{
											$('#labelTypesub').hide();
											$('#Typesub').hide();
											$('#Typesub').val("");
										}
									}).keyup();
								}else{
									$('#labelPhone').hide();
									$('#Phone').hide();
									$('#Phone').val("");
									$('#labelTypesub').hide();
									$('#Typesub').hide();
									$('#Typesub').val("");
									$('#post-btn').hide();
									$('#form-group').hide();
									$('#form-group').val("");
									
								}
							}).keyup();
						}else{
							$('#labelEmail').hide();
							$('#Email').hide();
							$('#Email').val("");
							$('#labelPhone').hide();
							$('#Phone').hide();
							$('#Phone').val("");
							$('#labelTypesub').hide();
							$('#Typesub').hide();
							$('#post-btn').hide();
							$('#form-group').hide();
							$('#form-group').val("");
							$('#Typesub').val("");
						}
					}).keyup();
				}else{
					$('#labelName').hide();
					$('#Name').hide();
					$('#Name').val("");
					$('#labelEmail').hide();
					$('#Email').hide();
					$('#Email').val("");
					$('#labelPhone').hide();
					$('#Phone').hide();
					$('#Phone').val("");
					$('#labelTypesub').hide();
					$('#Typesub').hide();
					$('#post-btn').hide();
					$('#form-group').hide();
					$('#form-group').val("");
					$('#Typesub').val("");
				}
			}).keyup();
				/*$('#labelEmail').show();
				$('#Email').show();
				$('#labelPhone').show();
				$('#Phone').show();
				$('#labelTypesub').show();
				$('#Typesub').show();
				$('#post-btn-prac').hide();*/
			}
		
    });
};

postnoBtn.addEventListener('click', postData);
