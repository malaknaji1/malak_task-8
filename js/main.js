let count_alert=document.getElementById("name");
function openAlert(){
    count_alert.classList.add("open-alert");
    
    var str = document.getElementById("name").value;
            
    var ctr=0;
    
    for(var i=0 ;i<str.length;i++){
        if(str[i] != " "){
            ctr+=1;
        }
        document.getElementById("counter").innerHTML = "The text you entered consists of :  " ;
        document.getElementById("charCounter").innerHTML = ctr +"    characters";
        
        }
    }
    function closeAlert(){
      count_alert.classList.remove("open-alert");
    }
function clear_text(){
document.getElementById("input_text").value = "";
}