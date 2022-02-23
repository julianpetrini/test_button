function validation() {

    var firstName=document.getElementById("fname").value
    var lastName=document.getElementById("lname").value
    var age=document.getElementById("age").value
    
    if ( firstName=="" || lastName ==""|| age=="")
        {alert("You need to enter your info bitte")}

    else 

    {
        onSubmitted()
        
        //window.location.replace("action_page.html");
        
        //
        //
    }

}


function onSubmitted () {



    sessionStorage.setItem("firstName", document.getElementById("fname").value);
    sessionStorage.setItem("lastName", document.getElementById("lname").value);
    sessionStorage.setItem("age",document.getElementById("age").value);
    sessionStorage.setItem("food",document.getElementById("food").value);

    

    alert("Now you will be redirected");
    window.open('action_page.html');
    
    //window.history.pushState('action_page.html');
   // document.location.href = "action_page.html";
}


function newPage (){
    
        
    var firstname = sessionStorage.getItem("firstName");
    var lastname = sessionStorage.getItem("lastName");
    var age=sessionStorage.getItem("age");
    var food=sessionStorage.getItem("food");

  

    if(food=="meat") 
    {
        document.getElementById("result").innerHTML = "Want a burger?"
    }

    else if (food=="soap")
    {
        document.getElementById("result").innerHTML = "hot soap for winter"
    }

    else if(food=="pasta") 
    {
        document.getElementById("result").innerHTML = "Are you italian?"
    } else {

    document.getElementById("result").innerHTML ="Your first name is "+(firstname)+"<br>" +" Your last name is " +(lastname)+"<br>"
     + " You are "+(age)+" wise in life." + "<br>"+"And you like to eat " +(food);
    }

}





//INTERESTING CODES


 /* if (cond1) {
        // do something
    } else if (cond2) {
        // do something else
    } else if (cond3) {
        // do something else
    } else {
        // this happens if none of the conditions above match
    }
    */

    /*switch(food) {
        case "meat":
            // do something
            break;
        case "soap":
            // do something
            break;            
        default:
            // default action
    }*/


//const firstNameInput=document.getElementById("fname").value; //Here i just take the info of the ID, then i decide what to do
//const lastNameInput=document.getElementById("lname").value; //SAME

//const firstNameInput=sessionStorage.getItem("fname");
//const lastNameInput=sessionStorage.getItem("lname");