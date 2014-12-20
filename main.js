document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementsByTagName('form')[0],
        formTextArea = form.getElementsByTagName('textarea')[0],
        toDoList = document.getElementById('todo'),
        doneList = document.getElementById('done'),
        createToDoElement = function(content) {
            if (content === '') {
                alert('Nie możesz dodać pustego wpisu');
                return false;
            }
            var element = document.createElement('li');
            element.innerHTML = '<input type="checkbox" /> ' + content + ' <a href="#">Usuń</a>';
            bindEvents(element);
            toDoList.appendChild(element);
        },
        bindEvents = function(element) {
            var checkbox = element.getElementsByTagName('input')[0],
                link = element.getElementsByTagName('a')[0];

            link.addEventListener('click', function(event) {
                event.preventDefault();
                toDoList.removeChild(element);
            }, false);

            checkbox.addEventListener('click', function() {
                doneList.appendChild(element);
                checkbox.remove();
                link.remove();
            }, false);
        };

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        createToDoElement(formTextArea.value);
        formTextArea.value = '';
    }, false);
}, false);
