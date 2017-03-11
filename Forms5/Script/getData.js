var data = {
    userName: "userName",
    passWord: "password",
    yourCar: [],
    gender: "male",
    comments: "Comments"
}

window.onload = function () {
    var myForm = document.getElementById("myForm");
    document.getElementById("myForm").addEventListener("submit",
        function (event) {
            if (event.target.checkValidity() == true) {
                main(event);
            }
            else
            {
                formError(event);
            }
        });


}

function formError(event) {
    event.preventDefault();
    var all = event.target.querySelectorAll('[required]');
    for (var i = 0; i < all.length; i++) {
        all[i].style.backgroundColor = "red";
        }
}


function getSelected(element) {
    var selected = [];
    for (var i = 0; i < element.options.length; i++) {
        if (element.options[i].selected === true) {
            selected.push({
                value: element.options[i].value,
                text: element.options[i].text

            });
        }
    }
    return selected;
}


function main(event) {
    event.preventDefault();
    data.userName = event.target.elements.namedItem("userName").value;
    data.passWord = event.target.elements.namedItem("passWord").value;
    data.comments = event.target.elements.namedItem("Comments").value;
    data.gender = document.querySelector('input[name="gender"]:checked').value;
    data.yourCar = getSelected(event.target.elements.namedItem("cars"));
    alert(JSON.stringify(data));
}