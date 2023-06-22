import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import AddtaskScreen from '../AddTaskScreen/addtaskScreen';
import { v4 as uuidv4 } from 'uuid';
import Header from '../../components/taskHeader';
import TaskScreen from './taskScreen';
import NavBar from '../../components/Nav';

const TaskHome = () => {
    const [tasks, setTasks] = useState([]); // Task State
    const [showAddTask, setShowAddTask] = useState(false); // To reveal add task form


    const getTasks = JSON.parse(localStorage.getItem("taskAdded"));

    useEffect(() => {
        if (getTasks == null) {
            setTasks([])
        } else {
            setTasks(getTasks);
        }
       
    }, [])
    const addTask = (task) => {
        const id = uuidv4();
        const newTask = { id, ...task }

        setTasks([...tasks, newTask]);

        localStorage.setItem("taskAdded", JSON.stringify([...tasks, newTask]));
    }
    // Delete Task
    const deleteTask = (id) => {
        const deleteTask = tasks.filter((task) => task.id !== id);

        setTasks(deleteTask);

        localStorage.setItem("taskAdded", JSON.stringify(deleteTask));
    }
    // Edit Task
    const editTask = (id) => {

        const text = prompt("Task Name");
        const day = prompt("Day and Time");
        let data = JSON.parse(localStorage.getItem('taskAdded'));

        const taskData = data.map(tsk => {
            if (tsk.id === id) {
                return {
                    ...tsk,
                    text: text,
                    day: day,
                    id: uuidv4()
                }
            }
            return tsk;
        })

        localStorage.setItem("taskAdded", JSON.stringify(taskData));
        window.location.reload();
    }
    return (
        <>
        <NavBar/>
            <div>TaskHome</div>
            <Header showForm={() => setShowAddTask(!showAddTask)} changeTextAndColor={showAddTask} />
            <h3>Number of Tasks: {tasks.length}</h3>
            {showAddTask && <AddtaskScreen onSave={addTask} />}

            {
                tasks.length > 0
                    ?
                    (<TaskScreen tasks={tasks} onDelete={deleteTask} onEdit={editTask} />)
                    :
                    ('No Task Found!')
            }
        </>

    )
}

export default TaskHome