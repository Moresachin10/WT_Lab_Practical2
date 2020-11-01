/*eslint-env browser*/ 
//var x = document.getElementById("form");
//x.addEventListener('submit',showdetails) ;

   
 
function showdetails(){
     
        var firstName = document.getElementById("fname").value;
        var lastName = document.getElementById("lname").value;
        var Email = document.getElementById("email").value;
        var Mobno = document.getElementById("mobile").value;
        var gen = document.getElementById("gender");   
        var sex = gen.value;
        var table = document.getElementById("regData");
        var row = table.insertRow();
        var firstNamecell = row.insertCell(0);
        var lastNamecell = row.insertCell(1);
        var Emailcell = row.insertCell(2);
        var Mobnocell = row.insertCell(3);
        var Sexcell = row.insertCell(4);

        firstNamecell.innerHTML = firstName;
        lastNamecell.innerHTML = lastName;
        Emailcell.innerHTML = Email;
        Mobnocell.innerHTML = Mobno;
        Sexcell.innerHTML = sex;

 }