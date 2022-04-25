import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer';
import { useForm } from '../../hooks/useForm';
const initailState = [{
    id: Date(),
    todo: 'Learn React',
    isCompleted: false
}];

export const TodoApp = () => {
    const [todos, dispach] = useReducer(todoReducer, initailState);
    const [{newtodo}, setValues, reset] = useForm({
        newtodo: '',
    });

    const handleNewtodo = (e) => {
        e.preventDefault();
        const newtodos = {
            id: Date.now(),
            todo: newtodo
        }
        const actions = {
            type: 'ADD_TODO',
            payload: newtodos
        }
        
        dispach(actions);
        reset();
    }

    const handleRemoveTodo = (e) => {
        console.log(e.target);
    }
    
  return (
    <div className='container mt-3'>
        <h1>Todo App {todos.length}</h1>
        <hr/>
        <div className='row'>
            <div className='col-md'>
            <ul className='list-group list-group-flush' >
                {todos.map((todo, i) => (
                    <li key={todo.id} className='list-group-item d-flex flex-row justify-content-between'>
                        <p className='text-center p-2 m-0'>{i+1} {todo.todo}</p>
                        <button className='btn btn-danger btn-sm float-right p-2' onClick={ handleRemoveTodo } >Eliminar</button>
                    </li>
                ))}
            </ul>
            </div>

            <div className='col-md'>
                <span className="badge badge-pill badge-primary"> Nuevas tareas</span>
                <hr/>
                <form className='form-group' onSubmit={handleNewtodo}>
                    <input type='text' name='newtodo' autoComplete='off' className='form-control' placeholder='Nueva tarea' onChange={setValues} value= {newtodo} />
                    <button className='btn btn-primary btn-block mt-2' type='submit' >Agregar</button>
                </form>
            </div>
        </div>
    </div>
  )
}
