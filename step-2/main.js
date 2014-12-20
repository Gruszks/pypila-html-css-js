/**
 * Create a ToDo element.
 *
 * @param {string} text Text of the ToDo element.
 */
function createToDoElement(text) {
    // TODO
};

/**
 * Bind events of newly created ToDo element.
 * When user click on:
 *   check box - element should be moved to Done list and removed from ToDo list.
 *   remove link - element should be removed from ToDo list
 *
 * @param {DOM Element} element ToDo item.
 * @param {DOM Element} doneList DOM element with done list.
 */
function bindElementEvents(element, doneList) {
    // TODO
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
        bindElementEvents(newElement, doneList);
        toDoList.appendChild(newElement);
        formTextArea.value = '';
    }, false);
}, false);
