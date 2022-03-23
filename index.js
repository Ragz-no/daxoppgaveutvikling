//sjekk application for localstorage F12

// Store
var besøker = JSON.parse(localStorage.getItem("besøkliste") || "[]" )


// Retrieve

function daxOppgave() {
  // document.getElementById("velkomtekst").innerHTML = "Velkommen, vi ønsker deg alt godt " 
  // + document.getElementById("inputText").value + "!";

  besøker.push(document.getElementById("inputText").value)

  localStorage.setItem("besøkliste", JSON.stringify(besøker))

  document.getElementById("Velkommen").innerHTML = "Velkommen, vi ønsker deg alt godt " 
+ besøker.at(-1) + "!";

  takkeListe();
}

// for localstorage og websiden


 document.getElementById("inputText").addEventListener("keyup", function(event){
  if (event.key === "Enter") {
    event.preventDefault();
  }
 });
  
//for localstorage
function takkeListe() {
  document.getElementById("besøkliste").innerHTML = besøker.join("<br>");
}

takkeListe();

      // oppdateres seg hvert minutt med random tall
  
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
//     {document.getElementById("feilmelding_inputTekst").innerHTML = "Du må skrive over her"}
// }
