document.querySelector("#myForm").addEventListener("submit" , function(e){
    e.preventDefault();
    let totalNumber = document.querySelector("#nun").value;
    let obtainNumber = document.querySelector("#nun2").value;
    let percentage = obtainNumber*100/totalNumber ;
    if(percentage>=80){
        document.querySelector("#per").innerHTML = `Percentage : ${percentage}`
        document.querySelector("#grade").innerHTML = "Your Grade is A+"
      
    }else if (percentage>=70 && percentage<80){
        document.querySelector("#per").innerHTML = `Percentage : ${percentage}`
        document.querySelector("#grade").innerHTML = "Your Grade is A"
     
    }
    else if (percentage>=60 && percentage<70){
        document.querySelector("#per").innerHTML = `Percentage : ${percentage}`
        document.querySelector("#grade").innerHTML = "Your Grade is B"
       
    }else if(percentage>=50 && percentage<60){
        document.querySelector("#per").innerHTML = `Percentage : ${percentage}`
        document.querySelector("#grade").innerHTML = "Your Grade is C"
       
    }else if( percentage<50){
        document.querySelector("#per").innerHTML = `Percentage : ${percentage}`
        document.querySelector("#grade").innerHTML = "Your Grade is F"
    }else{
        document.querySelector("#err").innerHTML = "Something Went Wrong"
        console.log("something went wrong")
    }

    console.log("Total Number :" ,totalNumber);
    console.log("obtain Number :" ,obtainNumber);
    console.log(percentage)
})
