function submitForm(){
        let Useremail = document.getElementById("usermail").value;
        let Password = document.getElementById("password").value;



        if(Useremail == ""){
            document.getElementById("msg3").innerHTML ="Kindly Enter Email";
            return false;
        }else{
            document.getElementById("msg3").innerHTML="";
            
        }

        if (Password == "") {
        document.getElementById("msg4").innerHTML = "Kindly Enter Password";
        return false;
        } 
        else if (Password.length < 6) {
        document.getElementById("msg4").innerHTML = "Password must be at least 6 characters";
        return false;
        } 
        else {
        document.getElementById("msg4").innerHTML = "";
        }


        alert("form Submitted")
        return true;

        
        
    }