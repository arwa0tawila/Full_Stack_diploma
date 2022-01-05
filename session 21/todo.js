


var all_tasks = [];

function add_task(){
  
var task = document.getElementById("task").value;
all_tasks.push(task);

view();



}

function view(){
 var res= '';
 for (var x=0; x < all_tasks.length; x++){
  
   res += "<div onclick = remove_task("+x+"); > Task: "+ all_tasks[x] + "</div>" ;
   document.getElementById("demo").innerHTML =res ;
 }

 document.getElementById("demo").style.backgroundColor =  "azure";

 document.getElementById("demo").style.border = "1px gray solid";

 document.getElementById("demo").style.margin= "30px";

}

function remove_task(x){

all_tasks.splice(x,1);

view();
  


  }