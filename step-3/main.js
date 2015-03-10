/**
 * Create a ToDo element.
 *
 * @param {string} text Text of the ToDo element.
 */
function createToDoElement(text) {
    if (text === '') {
        alert('Nie możesz dodać pustego wpisu');
        return false;
    }
    var element = document.createElement('li');
    element.innerHTML = '<input type="checkbox" /> ' + text + ' <a href="#">Usuń</a>';
    return element;
};

/**
 * Bind events of newly created ToDo element.
 * When user click on:
 *   check box - element should be moved to Done list and removed from ToDo list.
 *   remove link - element should be removed from ToDo list
 *
 * @param {DOM Element} element ToDo item.
 * @param {DOM Element} toDoList ToDo list DOM.
 * @param {DOM Element} doneList DOM element with done list.
 */
function bindElementEvents(element, toDoList, doneList) {
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

/**
 * When document object model will loaded we have to bind events on the
 * HTML form for adding new elements into our ToDO List.
 */
document.addEventListener('DOMContentLoaded', function() {
    var form = document.getElementsByTagName('form')[0],
        formTextArea = form.getElementsByTagName('textarea')[0],
        toDoList = document.getElementById('todo'),
        doneList = document.getElementById('done');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        var newElement = createToDoElement(formTextArea.value);
        bindElementEvents(newElement, toDoList, doneList);
        toDoList.appendChild(newElement);
        formTextArea.value = '';
    }, false);
}, false);
