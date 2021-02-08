import {  useState } from 'react'
import styles from '../styles/Todo.module.css'

console.log('My first todo:')
// console.log(window.location)

// useEffect( () => {
//     console.log(window.location)
// ,[]})

const Todo = ({ login, avatar_url }) => {
   
    const [tasks, setTasks] = useState([
        { id: 1, name: 'Do homework' },
        { id: 2, name: 'Read book' }])

    const [task, setTask] = useState('')
    const [idEdit, setIdEdit] = useState(0)

    const renderTask = () => {

        if (tasks != null) {
            
            return tasks.map((task, index) => (
                <li key={index} className={styles.card}>
                    <div className={styles.name}>
                        {index + 1})
                        {(idEdit !== task.id) ? task.name :
                            (<input
                                className={styles.input}
                                type="text"
                                name="name"
                                value={task.name}
                                onChange={(e) => updateTask(idEdit, e.target.value)}
                            />)}
                    </div>
                    <div className={styles.button}>
                        <button className={styles.buttonEdit} onClick={() => editTask(task.id)}> Edit </button>
                        <button className={styles.buttonDelete} onClick={() => deleteTask(task.id)}> Delete </button>
                    </div>

                </li>
            ))
        }
    }

    const updateTask = (id, newtask) => {
        let newTasks = tasks.map((task) => {
            if (+task.id === +id)
                task.name = newtask
            return task
        })
        console.log(newTasks)
        setTasks(newTasks)
    }

    const editTask = (id) => setIdEdit((idEdit === 0) ? id : 0)


    const deleteTask = (id) => {
        console.log('id: ', id)
        setTasks(tasks.filter(task => +id !== +task.id))
    }

    const addTask = (name) => {
        console.log('add Task')

        let id = (tasks.length === 0) ? 1 : tasks[tasks.length - 1].id + 1

        let task = { id, name }
        setTasks([...tasks, task])
        console.log('done: ', tasks)
    }

    const handleChange = (e) => {
        setTask(e.target.value)
    }



    return (
        < div className={styles.container}>
            <h1 onClick={() => alert('click')}><img src={avatar_url} width="80" /> Todo  for <span>{login} </span></h1>

            <div className="addContainer">
                <input className={styles.input}
                    type="text"
                    name="name"
                    onChange={handleChange} />
                <button className={styles.buttonAdd}
                    onClick={(e) => addTask(task)}>
                    Add Task
                </button>

            </div>


            <ul className={styles.list}>{renderTask()}</ul>

        </div >
        
    )
}

Todo.getInitialProps = async (ctx) => {
    
    const res = await fetch('https://api.github.com/users/wwarodom')
    const json = await res.json()
    return { login: json.login, avatar_url: json.avatar_url }
}

export default Todo