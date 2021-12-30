import './list.css';
import { useSelector, useDispatch } from 'react-redux';
const List = () => {
    /*--------------------------------THE SUBSCRIPTION PROCESS-----------------------------------
    THIS WILL AUTOMATICALLY SET UP A SUBSCRIPTION TO THE REDUX STORE FOR THIS COMPONENT.
    SO OUR COMPONENT WILL BE UPDATED AND WILL RECEIVE THE LATEST STATE (Array of tasks in our case) 
    AUTOMATICALLY WHENEVER THAT DATA CHANGES IN THE REDUX STORE*/
    const tasks = useSelector( state => state );

    // DISPATCHING PROCESS WITH ACTION TYPE = 'delete-task' AND THE ID OF THE TASK AS A PAYLOAD
    const dispatch = useDispatch();
    const deleteHandler = event => {
        dispatch({type:'delete-task',id:event.target.value});
    }

    return (
        <ul>
            {tasks.map((task,id) => <li key={id}> <p>{task}</p> <button value={id} onClick={deleteHandler}>X</button> </li>)}
        </ul>
    )
}

export default List;