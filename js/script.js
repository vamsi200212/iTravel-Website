function onClickMenu(){
    if(document.getElementById("list").className==="list"){
        document.getElementById("list").className = "change";
    }else{
        document.getElementById("list").className = "list";
    }
}

function cityName(id){
    if(id=="hyd"){
       var city = "Hyderabad"
       localStorage.setItem("myCity",city);
    }else if(id=="bang"){
       var city = "Bangalore"
       localStorage.setItem("myCity",city);
    }else if(id=="mum"){
       var city = "Mumbai"
       localStorage.setItem("myCity",city);
    }else if(id=="del"){
       var city = "Delhi"
       localStorage.setItem("myCity",city);
    }else if(id=="pune"){
       var city = "Pune"
       localStorage.setItem("myCity",city);
    }else if(id=="chen"){
        var city = "Chennai"
        localStorage.setItem("myCity",city);
    }
 }