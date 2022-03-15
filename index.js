// Set Item

localStorage.setItem("inputText", "velkomtekst");

// Retrieve

function daxOppgave() {
    document.getElementById("velkomtekst").innerHTML = localStorage.getItem("inputText");
    document.getElementById("velkomtekst").innerHTML = "Velkommen, vi ønsker deg alt godt " 
    + document.getElementById("inputText").value + "!";
    document.getElementById("inputText").value="";

}

function takkeListe() {
   document.getElementById("besøkliste").innerHTML = "Takk til disse folka";
}

      // oppdateres seg hvert minutt 
  
     let randomNumber = Math.ceil(Math.random() * 120);
     let lastMinute = new Date().getMinutes();
     let thisMinute = new Date().getMinutes();

     document.getElementById("minutes").innerText = "Dette er ditt lykketall dette minuttet: " + JSON.stringify(randomNumber);
      setInterval(_=>{ 
        thisMinute = new Date().getMinutes();
        if (thisMinute > lastMinute) {
            lastMinute = thisMinute
            console.log("A minute has passed "); 
            location.reload();
        }
      }, 1000); 
    

    


    
   




// function daxOppgave_1() {
//     if (document.getElementById("inputText").value == "")
//     {document.getElementById("feilmelding").innerHTML = "Du må skrive over her"}
// }
