
        // love section count 
        let  loveCount = document.getElementById("love-countJs").innerHTML
        let love = 1 ;
        function lovecount(){
            let sum = love++
            console.log(sum);
            document.getElementById("love-countJs").innerHTML= sum
        }


        const callImg = document.getElementById("callimg")
        function callAlart(a,b){       
        const callName = a.innerHTML
        const callnumber = b.innerHTML
        alert(callName +" "+ callnumber + "....")  
        }
        
