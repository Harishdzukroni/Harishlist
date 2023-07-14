const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if (inputBox.value === '') {
        alert("Kamu harus menulis sesuatu!");
    } else {
        let li = document.createElement("li");
        li.textContent = inputBox.value;
        
        let span = document.createElement("span");
        span.textContent = "\u00d7";
        li.appendChild(span);
        
        listContainer.appendChild(li);
    }
    
    inputBox.value = "";
    saveData();
}

function toggleTask(event) {
    const target = event.target;
    
    if (target.tagName === "LI") {
        target.classList.toggle("checked");
    } else if (target.tagName === "SPAN") {
        target.parentElement.remove();
    }
    
    saveData();
}

function saveData() {
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}

listContainer.addEventListener("click", toggleTask, false);

showTask();
