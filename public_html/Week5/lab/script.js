function SpaceAlphaValidate( str ) {
        var alphaRegex = /[a-zA-Z ]+/;
        return alphaRegex.test(str);			
}

function EmailValidate ( str ) {
        
        var emailRegex = /^[a-zA-Z]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
        return emailRegex.test(str);
}

function strip_HTML(str) {
        var findHtml = /<(.|\n)*?>/gi;
        return str.replace(findHtml,"");
}

function hide() {
                div.style.display = 'none';
            }
            
function show() {
                div.style.display = 'block';
            }
          
document.getElementById('hide').addEventListener('click', hide);
document.getElementById('show').addEventListener('click', show);
    

function submitForm() {
    
    var fname = document.getElementById("fname");
    var lname = document.getElementById("lname");
    var fnameErr = document.getElementById("err_fname");
    var lnameErr = document.getElementById("err_lname");
    var email = document.getElementById("email");
    var emailErr = document.getElementById("err_email");
    var comments = document.getElementById("comments");
    var commentsErr = document.getElementById("err_comments");
    
    
        if ( !fname.value.length ) {
                fnameErr.innerHTML = "Please enter First name ";
        } 
        
        else if ( SpaceAlphaValidate( fname.value ) === false ) {
                fnameErr.innerHTML = "First name needs Alpha characters";
        } 
        else {
                fnameErr.innerHTML = "First name is good";
        }

        if ( !lname.value.length ) {
                lnameErr.innerHTML = "Please enter Last name ";
        } 
        else if ( SpaceAlphaValidate( lname.value ) === false ) {
                lnameErr.innerHTML = "Last name needs Alpha characters";
        } 
        else {
                lnameErr.innerHTML = "Last name is good";
        }   

        
        if ( !email.value.length ) {
                
        emailErr.innerHTML = 'Please Enter E-mail';
        
    } 
    
    else if ( EmailValidate (email.value) === false) {
        emailErr.innerHTML = "Email must start with characters, have a @ symbol, have another set of characters have a period and end in 3 characters";
    }
    
    else {
        emailErr.innerHTML = "Email is good";
        
    }
            
    
  
     if ( comments.value.length < 1 || comments.value.length > 150 ) {
        comments.classList.remove('good');
        comments.classList.add('bad');       
        commentsErr.innerHTML = "<p>Comments are not valid.</p>"; 
        
    } else {
        hasErrors = true;
         
        comments.classList.remove('bad');
        comments.classList.add('good');        
        commentsErr.innerHTML = '';
    }  
    
    
    }