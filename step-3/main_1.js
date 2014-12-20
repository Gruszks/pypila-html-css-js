(function() {
    var todo = {

        /**
         * Initialize the ToDo functionality.
         */
        init: function() {
            var self = this;
            this.form = document.getElementsByTagName('form')[0];
            this.formTextArea = this.form.getElementsByTagName('textarea')[0];
            this.toDoList = document.getElementById('todo');
            this.doneList = document.getElementById('done');

            this.form.addEventListener('submit', function(event) {
                event.preventDefault();
                var newElement = self.createToDoElement(self.formTextArea.value);
                if (newElement) {
                    self.bindElementEvents(newElement);
                    self.toDoList.appendChild(newElement);
                    self.formTextArea.value = '';
                }
            }, false);
        },

        /**
         * Create a ToDo element.
         *
         * @param {string} text Text of the ToDo element.
         */
        createToDoElement: function(text) {
            if (text === '') {
                alert('We cannot add empty element.');
                return false;
            }
            var element = document.createElement('li');
            element.innerHTML = '<input type="checkbox" /> ' + text + ' <a href="#">Usuń</a>';
            return element;
        },

        /**
         * Bind events of newly created ToDo element.
         * When user click on:
         *   check box - element should be moved to Done list and removed from ToDo list.
         *   remove link - element should be removed from ToDo list
         *
         * @param {DOM Element} element ToDo item.
         */
        bindElementEvents: function(element) {
            var self = this,
                checkbox = element.getElementsByTagName('input')[0],
                link = element.getElementsByTagName('a')[0];

            link.addEventListener('click', function(event) {
                event.preventDefault();
                self.toDoList.removeChild(element);
            }, false);

            checkbox.addEventListener('click', function() {
                self.doneList.appendChild(element);
                checkbox.remove();
                link.remove();
            }, false);
        }
    };

    window.todo = todo;
})();

/**
 * When document object model will loaded we have to bind events on the
 * HTML form for adding new elements into our ToDO List.
 */
document.addEventListener('DOMContentLoaded', function() {
    todo.init();
}, false);
