const postBtn = document.getElementById('post-btn');


const sendHttpRequest = (method, url, data) => {
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

const sendData = () => {
	sendHttpRequest('POST','https://qrztmj5dq8.execute-api.us-east-2.amazonaws.com/formdev/formpost',[{
		Stakeholder: document.getElementById('Stakeholder').value,
		Pracno: document.getElementById('Pracno').value,
		Discipline: document.getElementById('Discipline').value,
		Name: document.getElementById('Name').value,
		Email: document.getElementById('Email').value,	
		Phone: document.getElementById('Phone').value,	
		Typesub: document.getElementById('Typesub').value	
    }]).then(responseData => {
        console.log(responseData);
		
		var Errors = [];
        if (document.getElementById('Stakeholder').value == ''){
			Errors.push('Stakeholder is empty');
		}if (document.getElementById('Discipline').value == ''){
			Errors.push('Discipline is empty');
		}if (document.getElementById('Name').value == ''){
			Errors.push('Name is empty');
		}if (document.getElementById('Typesub').value == ''){
			Errors.push('Type of submission is empty');
		}if (document.getElementById('Phone').value == ''){
			Errors.push('Phone number is empty');
		}if (document.getElementById('Email').value == ''){
			Errors.push('Email is empty');
		}if (document.getElementById('Pracno').value == '' && document.getElementById('Stakeholder').value == 'Stakeholder'){
			Errors.push('Practice number is empty');	
		}if (responseData.email == 'Invalid email'){
			Errors.push('Invalid email');
		}if (responseData.phone == 'Invalid Number'){
			Errors.push('Invalid phone');
		
		}if(Errors.toString() ===""){
			
			if (document.getElementById('Typesub').value == 'Coding'){
					alert('Post was successful');
					window.location.href = "Coding.html";
			}		
			if (document.getElementById('Typesub').value == 'Appeal'){
					alert('Post was successful');
					window.location.href = "Appeal.html"
					
			}if (document.getElementById('Typesub').value == 'Inflation'){
					alert('Post was successful');
					window.location.href = "Inflation.html"
					
			}
			
		}else{
				alert(Errors.join("\n"));
		}
			
			
    });
};

postBtn.addEventListener('click', sendData);



