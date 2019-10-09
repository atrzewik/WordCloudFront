

document.getElementById('form-file').addEventListener('submit', putFileIfProperType);


document.getElementById('content').addEventListener('keydown', function(event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("submitFile").click();
    }
});

function putFileIfProperType(){
    let fileType = document.getElementById('file-type');
    if (fileType.options[fileType.selectedIndex].text !== "...") {
        putFile(fileType);
    }
}

function putFile(fileType)
    {
        let xmlHttp = new XMLHttpRequest();
        let isPath = fileType.value !== "";
        let content = document.getElementById('content').value;

        const ob = {
            isPath: isPath,
            content: content
        };

        xmlHttp.open("PUT","http://127.0.0.1:9091/wordCloud/contentInfo");
        //   xmlHttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        xmlHttp.setRequestHeader('Content-Type','application/json; charset=utf-8');

        
        xmlHttp.onload = function(){
            console.log(xmlHttp.status);
            
            if (xmlHttp.status === 200) {
                window.location.href = "http://localhost:8000/word-calculation.html", true;
            } 
            else if (xmlHttp.status === 400) {
                alert('Wrong file path');
            }
            else {
                alert('There was a problem with the request.');
            }
        };
        xmlHttp.send(JSON.stringify(ob));
    }
