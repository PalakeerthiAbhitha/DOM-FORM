let button=document.createElement("div");
button.setAttribute("id","butnregister");
document.body.append(button);

function check() 
{  
    let a= document.getElementById("Username").value;
    let b=document.getElementById("password").value;
    let d=document.getElementById("confirm").value;

      if(b==d){
     
        console.log("submitted");
        document.getElementById("butnregister")
      }
    else{

        console.log("not submitted");
        document.getElementById("butnregister")
    }


}


