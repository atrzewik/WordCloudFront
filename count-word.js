
document.getElementById('count').addEventListener('click', getWordCalculation);

document.getElementById('back').addEventListener('click', backToSendingFile);


document.getElementById('word').addEventListener('keydown', function(event) {
    if(event.key === "Enter") {
        event.preventDefault();
        getWordCalculation();
    }
    else if(event.ctrlKey && event.key === "Backspace") {
      event.preventDefault();
      backToSendingFile();
    }
  }
);

function getWordCalculation()
    {
      let xmlHttp = new XMLHttpRequest();
      let word  = document.getElementById('word').value;

      xmlHttp.open("GET","http://127.0.0.1:9091/wordCloud/word?searchWord="
      +word,true);

      xmlHttp.onload = function(){
          if (xmlHttp.status === 200 && xmlHttp.readyState == XMLHttpRequest.DONE) {
            document.getElementById("calculation").textContent = JSON.parse(xmlHttp.responseText)["number of words"];
          } 
          else {
            alert('There was a problem with the request.');
          }
    }
      xmlHttp.send();

    }

function backToSendingFile()
    {
        window.location.href = "http://localhost:8000/word-cloud.html";

    }