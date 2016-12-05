
var http = new XMLHttpRequest();

// this must point to YOUR web service
var coreUrl = "http://task2final.azurewebsites.net/api/";

var buUrl = coreUrl + "BusinessUnit";

var staffListUrl = coreUrl + "Staff/BusinessUnit/";

var staffDetailUrl = coreUrl+ "Staff/";


//do the following at the start
function start() {

    hideStaffList();
    http.onreadystatechange = GetBuList;
    http.open("GET", buUrl);
    http.send();
}

function GetBuList() {
    if (http.readyState == 4 && http.status == 200) {
        var buisinessUnits = JSON.parse(http.responseText);
        if (buisinessUnits != null) {
            displayItemsInBuList(buisinessUnits);
        } else {
            hideAll();
        }
    }
}
//business units
function displayItemsInBuList(arr) {
        

    // grab hold of the table object
    var table = document.getElementById("buList");
    // Empty the table tag
    table.innerHTML = "";
    // walk down the LIST array
    for (var i = 0; i < arr.length; i++) {
        // insert a row in the next space available
        var row = table.insertRow(0);
        // insert td within that row
        var cell1 = row.insertCell(0);
        // insert another td withing the same row
        var cell2 = row.insertCell(1);
        cell1.innerHTML = arr[i].title;
        // populate the first td with data from the array
        var id = arr[i].businessUnitCode;
        // populate the second row with a link
        cell2.innerHTML = "&nbsp&nbsp&nbsp&nbsp<a href='#'     id='" + id + "' " + " >List Staff</a>";
        // bind this new link to a delete method
        document.getElementById(id).onclick = getStaff;
    }
}


function getStaff(e) {

    var detailUrl = staffListUrl + e.target.id;
    http.onreadystatechange = requestDetail;
    http.open("GET", detailUrl);
    http.send();

}

function requestDetail() {
    if (http.readyState == 4 && http.status == 200) {
        var staffList = JSON.parse(http.responseText);
        if (staffList != null) {
            displayStaffList(staffList);
        } else {
            hideStaffList();
        }
    }
}
//staff list
function displayStaffList(arr) {
    // grab hold of the table object
    document.getElementById("staffListHeader").style.visibility = "visible";
    document.getElementById("Staffdetail").style.visibility = "hidden";
    var table = document.getElementById("staffList");
    table.style.visibility = "visible";

    if (arr != null)
    {

        // Empty the table tag
        table.innerHTML = "";
        // walk down the LIST array
        for (var i = 0; i < arr.length; i++) {
            // insert a row in the next space available
            var row = table.insertRow(0);
            // insert td within that row
            var cell1 = row.insertCell(0);
            // insert another td withing the same row
            var cell2 = row.insertCell(1);

            // populate the first td with data from the array
            cell1.innerHTML = arr[i].fullName;
            //binds id to the staff id
            var id = arr[i].staffCode;
            // populate the second row with a link
            cell2.innerHTML = "&nbsp&nbsp&nbsp&nbsp<a href='#'     id='" + id + "' " + " >Staff Detail</a>";
            // bind this new link to a delete method
            document.getElementById(id).onclick = getStaffDetails;
        }
    }
}

function getStaffDetails(e) {
    var detailUrl = staffDetailUrl + e.target.id;
    http.onreadystatechange = requestStaffDetail;
    http.open("GET", detailUrl);
    http.send();

}
function requestStaffDetail() {
    if (http.readyState == 4 && http.status == 200) {
        var staffList = JSON.parse(http.responseText);
        if (staffList != null) {
            displayStaffDetail(staffList);
        } else {
            hideStaffDetail();
        }
    }
}
        
function displayStaffDetail(arr) {
        
    document.getElementById("Staffdetail").style.visibility = "visible";
            
    document.getElementById("staffCode").innerHTML = "Staff Code : " + arr.staffCode;
            
    document.getElementById("staffFirstName").innerHTML = "Name : " + arr.firstName;
            
    document.getElementById("staffMiddleName").innerHTML = "Email : " + arr.emailAddress;
           
    document.getElementById("staffLastName").innerHTML = "Profile : " + arr.profile;
            
    document.getElementById("staffEmail").innerHTML = "Middle Name : " + arr.middleName;
            
            
    document.getElementById("staffProfile").innerHTML = "Profile : " + arr.profile;
           
    document.getElementById("staffStartDate").innerHTML = "Start Date : " + arr.startDate;

    document.getElementById("staffDOB").innerHTML = "D.O.B : " + arr.dob;
}

function hideAll() {
    document.getElementById("buList").style.visibility = "hidden";
    hideStaffList();
}

function hideStaffList() {
    document.getElementById("staffListHeader").style.visibility = "hidden";
    document.getElementById("staffList").style.visibility = "hidden";
    document.getElementById("Staffdetail").style.visibility = "hidden";
            
}

function hideStaffDetail() {
    document.getElementById("Staffdetail").style.visibility = "hidden";
}

window.onload = start;
