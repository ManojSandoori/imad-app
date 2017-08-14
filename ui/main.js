//Counter code
var button = document.getElementById('counter');
var counter = 0;
button.onclick = function () {
    
    //make a request to counter endpoint
//capture the response and store it in a variable
//render the variable in correct span
counter = counter + 1;
var span = document.getElementById('counter');
span.innerHTML = counter.toString();
    };
    
    
    // Make the request
    request.open('GET','http://manojsandoori.imad.hasura-app.io/counter',true);
    request.send(null);
};

// Submit name

var submit = document.getElementById('submit_btn');
submit.onclick = function () {
    
    // Create a request object 
     var request = new XMLHttpRequest();
    
    // Capture the response and store it in a variable
    request.onreadystatechange = function () {
        if (request.readystate === XMLHttpRequest.DONE) {
            // Take some action
            if (request.status === 200) {
                
                 // Make a request to the server and send the name
    // Capture a list of names and and render it as a list
    var names = request.responseText;
    names = JSON.parse(names);
    var list = '';
    for (var i=0;i<name.length;i++)
    {
        list += '<li>' + names[i] + '</li>';
    }
    var ul = document.getElementById('namelist');
    ul.innerHTML = list;
                
            }
            
        }
            // Not done yet
    };
    
    var nameInput = document.getElementById('name');
    var name = nameInput.value;
    // Make the request
    request.open('GET','http://manojsandoori.imad.hasura-app.io/submit-name?name=' + name,true);
    request.send(null);
    
   
};