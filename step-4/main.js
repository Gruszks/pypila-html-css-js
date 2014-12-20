(function() {

    function ToDo(selector) {
        this.selector = selector;
        this.init();
    };

    ToDo.prototype = {
        /**
         * Initialize the ToDo functionality.
         */
        init: function() {
            var self = this;
            this.parent = document.querySelector(this.selector);
            if (!this.parent) {
                alert('Element doesn\'t exist');
                return false;
            }
            this.form = this.parent.querySelector('form');
            this.formTextArea = this.form.querySelector('textarea');
            this.toDoList = this.parent.querySelector('#todo');
            this.doneList = this.parent.querySelector('#done');

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
         * @param {DOM Element} doneList DOM element with done list.
         */
        bindElementEvents: function(element, doneList) {
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

    window.ToDo = ToDo;
})();

/**
 * When document object model will loaded we have to bind events on the
 * HTML form for adding new elements into our ToDO List.
 */
document.addEventListener('DOMContentLoaded', function() {
    var todo1 = new ToDo('div.page-1'),
        todo2 = new ToDo('div.page-2');
}, false);
