
//Variables for arrays
   var Name1 = [];
   var phone1 = [];
   var gender1 = [];
   var email1 = [];
   var address1 = [];

   //Variables from user input
   var Name1Input = document.getElementById("name");
   var phone1Input = document.getElementById("phone");
   var gender1Input = document.getElementById("gender");
   var email1Input = document.getElementById("email");
   var address1Input = document.getElementById("address");

   //Variable for display 
   var display = document.getElementById("display");

   //Function to add user info to arrays
   function insert() {
       Name1.push(Name1Input.value);
       phone1.push(phone1Input.value);
       gender1.push(gender1Input.value);
       email1.push(email1Input.value);
       address1.push(address1Input.value);

       Show();
   }

   //Function to display info entered from array 
   function Show() {
       Name1Input.value = "";
       phone1Input.value = "";
       gender1Input.value = "";
       email1Input.value = "";
       address1Input.value = "";

       display.innerHTML = "";
       display.innerHTML = "Your Details" + "<br/>";
       display.innerHTML += "Name: " + Name1.join(", ") + "<br/>";
       display.innerHTML += "Phone Number: " + phone1.join(", ") + "<br/>";
       display.innerHTML += "Gender: " + gender1.join(", ") + "<br/>";
       display.innerHTML += "Email: " + email1.join(", ") + "<br/>";
       display.innerHTML += "Address: " + address1.join(", ") + "<br/>";
   }
