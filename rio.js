


	

function clock(){
	var hr = document.getElementById("hours")
	var date = new Date();
   var hours=date.getHours();
   
   
 
 
    var min=document.getElementById("minutes")
   let minutes=date.getMinutes();
      	
	  if(minutes<=9){
		
		
		min.innerHTML="0"+minutes
	  }
	else{
		min.innerHTML=minutes
	}
	var sec = document.getElementById("seconds")
   let seconds=date.getSeconds(); 
   if(seconds<=9){
		
		
		sec.innerHTML="0"+seconds
	  }
	else{
		sec.innerHTML=seconds
	}
   	
	var pm = document.getElementById("am")
	if(hours>=12){
		  	am.innerHTML="PM"
	}
	else{
		  	am.innerHTML="AM"
	}
	

	
	var day = document.getElementById("date")
   let days=date.getDate();   
	
	if(days<=9){
		
		
		day.innerHTML="0"+days
	  }
	else{
		day.innerHTML=days
	}
	

	var month = document.getElementById("months")
   let months=date.getMonth();   
	month.innerHTML=months
	if(months<=9){
		
		
		month.innerHTML="0"+months
	  }
	else{
		month.innerHTML=months
	}
	

var yrs = document.getElementById("years")
   let years=date.getFullYear();   
	yrs.innerHTML=years
    
	if(hours<=9){
		hr.inner="0"+hours
		
	}
		
  else if(hours>12){
	  c=hours-12;
	  hr.innerHTML=c
	      }
     else{
		 
		hr.innerHTML=hours
 
	 }
	 
}
clock()
setInterval(clock,1000)

