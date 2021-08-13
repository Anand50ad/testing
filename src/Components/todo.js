import React from 'react'

function Todo(todo) {
   const {id,title,status}=todo;
   const h1 = <h1>{title}</h1>
   const text = status ? <strike>{h1}</strike> :h1;
   return (
        <div data-testid={`todo-${id}`}>
            <h1>hello world</h1>
        </div>
    )
}

export default Todo
