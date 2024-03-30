function getRandomInt(max) {
    return Math.floor(Math.random() * max)+1;
  }
let randInt = getRandomInt(9);
document.getElementById("RandNum").innerHTML = "Student Count :"+randInt;


for(var i =0;i<randInt;i++){
    var eleName = document.createElement("input");
    eleName.setAttribute("id","name"+i);
    eleName.setAttribute("type","text");
    var eleAge = document.createElement("input");
    eleAge.setAttribute("id","student"+i);
    eleAge.setAttribute("type","number");

    var eleText = document.createElement("text");
    eleText.innerHTML = "Student "+(i+1) +" Name:";
    var eleText1 = document.createElement("text");
    eleText1.innerHTML = "Student "+(i+1) +" Age:";
    var ele1 = document.createElement("div");
    ele1.appendChild(eleText);
    ele1.appendChild(eleName);
    ele1.appendChild(eleText1);
    ele1.appendChild(eleAge);

    document.getElementById("friend").appendChild(ele1);
}

function calAgeSum(){
    console.log(1);
    var sum = 0 ;
    for(var i=0;i<randInt;i++){
        if(document.getElementById("student"+i).value==null|| document.getElementById("student"+i).value == ""){
            alert("Please fill the age in number "+(i+1)+" box.");
            return 0;
        }else if(document.getElementById("name"+i).value==null|| document.getElementById("name"+i).value == ""){
            alert("Please fill the name in number "+(i+1)+" box.");
            return 0;
        }else{
            sum+=parseInt(document.getElementById("student"+i).value);
        }
    }
    document.getElementById("ans").innerHTML=sum;
}

function calAvgAge(){
    var sum = 0 ;
    for(var i=0;i<randInt;i++){
        if(document.getElementById("student"+i).value==null|| document.getElementById("student"+i).value == ""){
            alert("Please fill the age in number "+(i+1)+" box.");
            return 0;
        }else if(document.getElementById("name"+i).value==null|| document.getElementById("name"+i).value == ""){
            alert("Please fill the name in number "+(i+1)+" box.");
            return 0;
        }else{
            sum+=parseInt(document.getElementById("student"+i).value);
        }
    }
    document.getElementById("ans").innerHTML=(parseFloat(sum)/(randInt));
}

function findMin(){
    var min = parseInt(document.getElementById("student0").value);
    var s =[];
    for(var i=0;i<randInt;i++){
        if(document.getElementById("student"+i).value==null|| document.getElementById("student"+i).value == ""){
            alert("Please fill the age in number "+(i+1)+" box.");
            return 0;
        }else if(document.getElementById("name"+i).value==null|| document.getElementById("name"+i).value == ""){
            alert("Please fill the name in number "+(i+1)+" box.");
            return 0;
        }else{
            var value = parseInt(document.getElementById("student"+i).value);
            console.log(min);
            console.log(value);
            if( value < min){
                min = value;
                s = [];
            }
            if(value==min){
                s.push(document.getElementById("name"+i).value);
                console.log(s);
            }
        }
    }
    document.getElementById("ans").innerHTML=s;
}

function findMax(){
    var max = 0;
    var s =[];
    for(var i=0;i<randInt;i++){
        if(document.getElementById("student"+i).value==null|| document.getElementById("student"+i).value == ""){
            alert("Please fill the age in number "+(i+1)+" box.");
            return 0;
        }else if(document.getElementById("name"+i).value==null|| document.getElementById("name"+i).value == ""){
            alert("Please fill the name in number "+(i+1)+" box.");
            return 0;
        }else{
            var value = parseInt(document.getElementById("student"+i).value);
            console.log(max);
            console.log(value);
            if( value > max){
                max = value;
                s = [];
            }
            if(value==max){
                s.push(document.getElementById("name"+i).value);
                console.log(s);
            }
        }
    }
    document.getElementById("ans").innerHTML=s;
}

function reset(){
    randInt = getRandomInt(9);
    document.getElementById("RandNum").innerHTML = "Student Count :"+randInt;
    document.getElementById("friend").innerHTML="";
    document.getElementById("ans").innerHTML="";
    for(var i =0;i<randInt;i++){
        var eleName = document.createElement("input");
        eleName.setAttribute("id","name"+i);
        eleName.setAttribute("type","text");
        var eleAge = document.createElement("input");
        eleAge.setAttribute("id","student"+i);
        eleAge.setAttribute("type","number");
    
        var eleText = document.createElement("text");
        eleText.innerHTML = "Student "+(i+1) +" Name:";
        var eleText1 = document.createElement("text");
        eleText1.innerHTML = "Student "+(i+1) +" Age:";
        var ele1 = document.createElement("div");
        ele1.appendChild(eleText);
        ele1.appendChild(eleName);
        ele1.appendChild(eleText1);
        ele1.appendChild(eleAge);
    
        document.getElementById("friend").appendChild(ele1);
    }

}
document.getElementById("calSum").addEventListener("click",calAgeSum);
document.getElementById("calAvg").addEventListener("click",calAvgAge);
document.getElementById("findLow").addEventListener("click",findMin);
document.getElementById("findHigh").addEventListener("click",findMax);
document.getElementById("reset").addEventListener("click",reset);