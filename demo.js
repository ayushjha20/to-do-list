
document.getElementById('btn').addEventListener('click', function() {
    const txt = document.getElementById('todoInput').value.trim(); 
    if (txt !== '') { 
        const lists = document.getElementById('lists');
        const li = document.createElement("li");
        li.textContent = txt; 
        li.classList.add('task');
        lists.appendChild(li);
        document.getElementById('todoInput').value = ''; 
    }
});

document.getElementById('lists').addEventListener('click', function(event) {
    if (event.target && event.target.matches('li.task')) {
        event.target.remove(); 
    }
});

