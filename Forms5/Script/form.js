window.onload = function () {
    var myForm = document.getElementById("myForm");
    myForm.elements.namedItem("passWord").setCustomValidity("Password you fool");
    document.getElementById("myForm").addEventListener("submit",
        function (event) {
            event.target.elements.namedItem("passWord").addEventListener('invalid',passwordError, false);
            main(event);
        });
    

}

function passwordError()
{
    var pw = document.getElementById("myForm").elements.namedItem("passWord");
    alert(pw.validationMessage);
    
    alert(pw.validationMessage);

}

function main(event)
{
    event.preventDefault();
    var unState = event.target.elements.namedItem("userName").validity.valid;
    var pwState = event.target.elements.namedItem("passWord").checkValidity();
    alert(unState);
}