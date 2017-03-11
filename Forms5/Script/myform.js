window.onload = function () {
    // grab the form
    var myForm = document.getElementById("myForm");
    // when submit is selected if you want to initilise stuff do it here
    document.getElementById("myForm").addEventListener("submit",
        function (event) {
            // wire up the password field to listen out for any invalid events
            event.target.elements.namedItem("passWord").addEventListener('invalid',passwordError, false);
            main(event);
        });
    
}

function passwordError()
{
    var pw = document.getElementById("myForm").elements.namedItem("passWord");
    pw.setCustomValidity("Password you fool");
    
}




function main(event)
{
    // turn of the default behaviou of the form
    event.preventDefault();
    var myform = event.target;
    var pw = myform.elements.namedItem("passWord");
    var pwState = pw.checkValidity();
    var unState = myform.elements.namedItem("userName").validity.valid;
   // var pwState = myform.elements.namedItem("passWord").checkValidity();
    if (unState && pwState)
    {
        
        // warning !!! 
        // if you have an input element with name submit, 
        // the form's own submit method is overwritten. 
        // so DO NOT HAVE ANY ELEMENT NAMED SUBMIT
        myform.submit();
        alert("gona submit");
    }
    else {
        alert(pw.validationMessage);
    }  
}