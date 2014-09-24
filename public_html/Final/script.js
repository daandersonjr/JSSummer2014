  //Declare the array
  var data = [];
  
  
  //When the button Save Data is clicked this runs
function saveForm(){

   //Grabbing information from the form and storing it in variables
    var fullname = document.getElementById("fullname");
    var fullnameErr = document.getElementById("fullname_err");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("email_err");
    var description = document.getElementById("description");
    var descriptionErr = document.getElementById("description_err");
    var phone = document.getElementById("phone");
    var phoneErr = document.getElementById("phone_err");
    var hasErrors = false;
   
       
    //Running the validations for fullname
    if ( !fullname.value.length ) {
                hasErrors = true;
                fullname.classList.remove('good');
                fullname.classList.add('bad');
                fullnameErr.innerHTML = "Please enter First name ";
        } 
        
        else if ( SpaceAlphaValidate( fullname.value ) === false ) {
                hasErrors = true;
                fullname.classList.remove('good');
                fullname.classList.add('bad');
                fullnameErr.innerHTML = "First name needs Alpha characters";
        } 
        else {
                fullname.classList.remove('bad');
                fullname.classList.add('good');
                fullnameErr.innerHTML = "";
        }

        //Running the validations for email
    if ( !email.value.length ) {
                hasErrors = true;
                email.classList.remove('good');
                email.classList.add('bad');       
                emailErr.innerHTML = 'Please Enter E-mail';
        
    } 
    
            else if ( EmailValidate (email.value) === false) {
                hasErrors = true;
                email.classList.remove('good');
                email.classList.add('bad');
                emailErr.innerHTML = "Email must start with characters, have a @ symbol, have another set of characters have a period and end in 3 characters";
    }
    
            else {
                email.classList.remove('bad');
                email.classList.add('good');
                emailErr.innerHTML = "";
        
    }
    //Running the validations for phone
      if ( !phone.value.length ) {
                hasErrors = true;
                phone.classList.remove('good');
                phone.classList.add('bad');       
                phoneErr.innerHTML = 'Please Enter Phone Number';
        
    } 
    
            else if ( phoneValidate (phone.value) === false) {
                hasErrors = true;
                phone.classList.remove('good');
                phone.classList.add('bad');
                phoneErr.innerHTML = "Phone must be in format xxx-xxx-xxxx";
    }
    
            else {
                phone.classList.remove('bad');
                phone.classList.add('good');
                phoneErr.innerHTML = "";
        
    }
            
    description.value = strip_HTML(description.value);
  //Running the validations for description
  if ( description.value.length < 1 || description.value.length > 150 ) {
                    
                    hasErrors = true;
                    description.classList.remove('good');
                    description.classList.add('bad');       
                    descriptionErr.innerHTML = "Comments are not valid"; 
        } 
        
    
            else {
                  description.classList.remove('bad');
                  description.classList.add('good');        
                  descriptionErr.innerHTML = '';
                  
    }  
       
          if (hasErrors === false){
        
        data.push({"fullname":fullname.value, "description":description.value,"email":email.value,"phone":phone.value} );
       
           //puts info into string
        var dataString = JSON.stringify(data);
        
            
           //stores the info
            localStorage.setItem('test', dataString);
            
            var form = document.getElementById("mainform");
          //clearing form
            form.reset();
            writeTable();
        
    
       
  }
  }
  
        
    
    
    //Taking stored info and writing it into table
       function writeTable (){
        var tableShow = document.getElementById("tableData");
        var printText = "";
         
       
        
        var localData = localStorage.getItem('test');
            
         var objData = JSON.parse(localData);
         
           //Printing array
         for(var i = 0; i < objData.length; i++){
             printText = printText + "<tr><td>" + i + "</td><td>" + objData[i].fullname + "</td><td>" + objData[i].email + "</td><td>" + objData[i].phone + "</td><td>" + objData[i].description + "</tr></td";                                       
         }
         tableShow.innerHTML = printText;
  }
    
    
    
    
    //clearing array and local storage
    function clearData(){
        
        localStorage.clear();
        
        data = [];
        
        var tableShow = document.getElementById("tableData");
        
        tableShow.innerHTML = "";
        
        writeTable();
    
    }
    //deleting last row
    function deleteRow(){
        //deleting last row of array
        data.pop();
       
       //restoring data in array
        var dataString = JSON.stringify(data);
        
            
           //stores the info
            localStorage.setItem('test', dataString);
            
           //re-writing table
            writeTable();
        
    }
    
    
    function unload(){
        
        data = localStorage.getItem('test');
            
        data = JSON.parse(data);
        
        writeTable();
        
    }
    
    unload();
    
    
    //validating name
 function SpaceAlphaValidate( str ) {
        var alphaRegex = /^[a-zA-Z ]+$/;
        return alphaRegex.test(str);			
}
//validating email
function EmailValidate ( str ) {
        
        var emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}
//validating phone
 function phoneValidate (str) {
        var phoneRegex = /^[2-9]\d{2}-\d{3}-\d{4}/;
        return phoneRegex.test(str);
 }