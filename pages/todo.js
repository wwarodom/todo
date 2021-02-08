import { useState } from 'react'
<<<<<<< HEAD
import styles from '../styles/Todo.module.css'

console.log('My first todo:')
// console.log(window.location)

// useEffect( () => {
//     console.log(window.location)
// ,[]})

const Todo = ({ login, avatar_url }) => {
=======
import Link from 'next/link'
import styles from '../styles/Todo.module.css'

const Todo = ( {avatar_url, login}) => {
>>>>>>> be6db4ec482464277b494a761377574d5a0c2912

    const [tasks, setTasks] = useState([
        { id: 1, name: 'Do homework' },
        { id: 2, name: 'Read book' }])

<<<<<<< HEAD
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

=======
    const [name, setName] = useState('')

    const [idEdit, setIdEdit] = useState(0)

    const renderTasks = () => {
        if (tasks !== null)
            return tasks.map((task, index) => (
                <li key={index} className={styles.listItem}>
                    {task.id})
                    {(idEdit !== task.id) ?
                        task.name :
                        (<input
                            className={styles.text}
                            type="text"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />)
                    }
                    <div className={styles.buttonContainer}>
                        <button
                            className={`${styles.button} ${styles.btnEdit}`}
                            onClick={() => editTask(task.id)}>
                            Edit
                        </button>
                        <button
                            className={`${styles.button} ${styles.btnDelete}`}
                            onClick={() => deleteTask(task.id)}>
                            Delete
                        </button>
                    </div>
                </li>))
    }

    const editTask = (id) => {
        setIdEdit(id)
        let t = tasks.find((task) => +task.id === +id)
        setName(t.name)
        if (+idEdit === +id) { //Press Edit again
            let newTasks = tasks.map((task, index) => {
                if (+task.id === +id)
                    tasks[index].name = name
                return task
            })
            setTasks(newTasks)
            setIdEdit(0)
        }
    }

    const deleteTask = (id) => {
        console.log('delete id: ', id)
        let newTasks = tasks.filter((task) => task.id !== +id)
        setTasks(newTasks)
    }

    const addTask = (name) => {
        setTasks([...tasks, { id: tasks[tasks.length - 1].id + 1, name }])
        console.log(tasks)
    }

    return (
        <div className={styles.container}> 
            <div className={styles.topRight}> 
                 <Link href="/"><a>Home</a></Link>
            </div>
            <h1 className={styles.title}>

                <img src={avatar_url} width="80" />
                 Todo  for <span>{login} </span>
                
            </h1>

            <div className="addContainer">
                <input
                    className={styles.text}
                    type="text"
                    name="addTask"
                    onChange={(e) => (setName(e.target.value))}
                />
                <button
                    className={`${styles.button} ${styles.btnAdd}`}
                    onClick={() => addTask(name)}>Add</button>
            </div>
            <ul className={styles.list}>
                {renderTasks()}
            </ul>
        </div>
>>>>>>> be6db4ec482464277b494a761377574d5a0c2912
    )
}

Todo.getInitialProps = async (ctx) => {
<<<<<<< HEAD

=======
    
>>>>>>> be6db4ec482464277b494a761377574d5a0c2912
    const res = await fetch('https://api.github.com/users/wwarodom')
    const json = await res.json()
    return { login: json.login, avatar_url: json.avatar_url }
}

<<<<<<< HEAD
export default Todo
=======
export default Todo

>>>>>>> be6db4ec482464277b494a761377574d5a0c2912
