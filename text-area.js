
function changeTextArea(select_obj) {
    let textArea = document.getElementById('content');
    textArea.value = select_obj.value;
    if (select_obj.options[select_obj.selectedIndex].text !== "..."){
        if (select_obj.value !== "") {
            document.getElementById('content-label').innerHTML = "Write file path: ";
        }
        else {
            document.getElementById('content-label').innerHTML = "Write text: ";
        }
    }
    else {
        document.getElementById('content-label').innerHTML = " ";
    }
}
