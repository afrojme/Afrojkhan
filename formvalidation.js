<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <form action="" onsubmit="return vlidaForm()">

       <label for="fname">FirstName</label><br>
       <input type="text" name="fname" id="fname" onkeyup="fnameValidate()">
       <span id="fnameMsg"></span>
       <br>

       <label for="lname">LasttName</label><br>
       <input type="text" name="lname" id="lname" onkeyup="lnameValidate()">
       <span id="lnameMsg"></span>
       <br>

       <label for="email">email</label><br>
       <input type="text" name="email" id="email" onkeyup="emailValidate()">
       <span id="emailMsg"></span>
       <br>

       <label for="password">Password</label><br>
       <input type="password" name="pass" id="email" onkeyup="passwordValidate()">
       <span id="passMsg"></span>
       <br>

       <input type="submit" name="submit" value="Register">

       <script>"formvalidation.js"</script>

    </form>

   
        
function fnameValidate(){
    
    let first_name=document.getElementById('fname').value;
    if(first_name==""){

        //call the function
        displayMsg("firstname is required","fnameMsg","red")
        return false;
    }
    else if(first_name.length<3){
        displayMsg("firstname must be more than two characters","fnameMsg","red")
        return false;

    }
    else if(!first_name.match(/^([a-zA-Z])+$/)){
      //^->it check from the start
      //$->it check from the last
      displayMsg("firstname only contain alphabets","fnameMsg","red")
     return false;



    }
    else{
        displayMsg("valid firstname","fnameMsg","green")
        return true
    }

}

function lnameValidate(){
let last_name=document.getElementById('lname').value;
    if(last_name==""){
        //call the function
        displayMsg("lastname is required","lnameMsg","red")
        return false;
    }
    else if(last_name.length<3){
        displayMsg("lastname must be more than two characters","lnameMsg","red")
        return false;
    }
        else if(!last_name.match(/^([a-zA-Z])+$/)){
        //^->it check from the start
       //$->it check from the last
       displayMsg("lastname only contain alphabets","lnameMsg","red")
     return false;
    }

    else{
        displayMsg("valid lastname","lnameMsg","green")
        return true
    }
}

    function emailValidate(){
    let email_name=document.getElementById('email').value;
        if(email==""){
            //call the function
            displayMsg("email is required","emailMsg","red")
            return false;
        }
        else if(email_name.length<3){
        displayMsg("email must be more than two characters","emailMsg","red")
        return false;
    }
       
        else if(! email_name.match(/^([a-zA-z])([a-z0-9\_]+\#+\.)+([com])+$/)){
        //ram23@gmail.com
        displayMsg("invalid email","emailMsg","red")
        return false;

        }

        else{
            displayMsg("valid email","emailMsg","green")
            return true
        }
    }

    function passwordValidate(){
    let pass_name=document.getElementById('password').value;
        if(pass==""){
            //call the function
            displayMsg("password is required","passMsg","red")
            return false;
        }
        else if(pass_name.length<3){
        displayMsg("lastname must be more than two characters","passMsg","red")
        return false;
    }


        else if(!pass_name.match(/^(?=.*[0-9])(?=.*[A-Z])(?=.*[a-z])(?=.*[@$!%*#?&]).{8,40}$/)){
            //=? matches the required expression but doesnot depend on their position
            // ie matches anywhere in the string position doesnot matter
            //. matches single character 
            //* matches preceding character
        displayMsg("must contain 8 characters,One Uppercase,one lowercase,one digit and one special character"
        ,"passMsg","red")
        return false;

        }

        else{
            displayMsg("valid password","passMsg","green")
            return true
        }
    }




function displayMsg(msg,id,color){
    document.getElementById(id).innerHTML=msg
    document.getElementById(id).style.color=color

} 
    function validation(){
        if(fnameValidate) && lnameValidate() && passwordValidate(){
            return true;
        }
        else{
            return false;
        }
    }    



</body>
</html>