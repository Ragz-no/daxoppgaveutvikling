// Set Item

localStorage.setItem("inputText", "demo");

// Retrieve

function daxOppgave() {
    document.getElementById("demo").innerHTML = localStorage.getItem("inputText");
    document.getElementById("demo").innerHTML = "Velkommen, vi ønsker deg alt godt " 
    + document.getElementById("inputText").value + "!";
    document.getElementById("inputText").value="";
}

function takkeListe() {
   document.getElementById("besøkliste").innerText = "Takk til disse folka";
}

      // oppdateres seg hvert minutt 
    
      

     let lastMinute = new Date().getMinutes();
     let thisMinute = new Date().getMinutes();

     document.getElementById("seconds").innerText = "Dette er ditt lykketall dette minuttet: " + JSON.stringify(thisMinute);
      setInterval(_=>{ 
        thisMinute = new Date().getMinutes();
        if (thisMinute > lastMinute) {
            lastMinute = thisMinute
            console.log("A minute has passed "); 
        }
      }, 1000); 
    

    


    
    



    



// TODO: få dette til funke firebase


// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyCNKLiVQm1gLTrbvyh9usOlSi4_9AQpAiA",
//   authDomain: "daxoppgave1.firebaseapp.com",
//   projectId: "daxoppgave1",
//   storageBucket: "daxoppgave1.appspot.com",
//   messagingSenderId: "760117309580",
//   appId: "1:760117309580:web:683ad248b34c162db84ba9",
//   measurementId: "G-VYVLNXPWQH"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);




// function daxOppgave_1() {
//     if (document.getElementById("inputText").value == "")
//     {document.getElementById("feilmelding").innerHTML = "Du må skrive over her"}
// }



