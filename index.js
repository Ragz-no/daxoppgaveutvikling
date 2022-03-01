// Set Item

localStorage.setItem("inputText", "demo");

// Retrieve

function daxOppgave() {
    document.getElementById("demo").innerHTML = localStorage.getItem("inputText");
    document.getElementById("demo").innerHTML = "velkommen, vi ønsker deg alt godt " 
    + document.getElementById("inputText").value + "!";
    document.getElementById("inputText").value="";
}






