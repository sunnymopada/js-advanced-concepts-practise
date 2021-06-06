const todoItems = []

const todoInput = document.getElementById('todo')
const todoList = document.getElementById('todo-list')

todoInput.addEventListener('keyup', (event) => {
  if (event.keyCode === 13) {
    const todoItem = {
      todoText: document.getElementById('todo').value,
      id: Math.random().toString(),
    }
    todoItems.push(todoItem)
    addTodItemInUI(todoItem)
  }
})

function addTodItemInUI(todoItem) {
  const todoElement = document.createElement('p')
  todoElement.textContent = todoItem.todoText
  todoElement.id = todoItem.id
  todoElement.onclick = (event) => {
    alert(todoItem.todoText)
  }
  todoElement.style.color = 'green'
  todoList.appendChild(todoElement)
}
