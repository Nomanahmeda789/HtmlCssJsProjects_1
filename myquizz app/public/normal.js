alert("Please select all the options then click the submit button")
     
   
     function myFunction() {
         var count=0;

           
         var x = [document.getElementById("q1").checked,document.getElementById("q2").checked,document.getElementById("q3").checked,document.getElementById("q4").checked,document.getElementById("q5").checked];   
     var ans=["true","1num","10","7","alert"];
     
     
    for(var i=0;i<x.length;i++){
        if(x[i]==true){
            count++;
        }
    } 
    var per =(count/5)*100;

    document.getElementById("demo").innerText =count;
    document.getElementById("demo1").innerText =per +"%";  
    }