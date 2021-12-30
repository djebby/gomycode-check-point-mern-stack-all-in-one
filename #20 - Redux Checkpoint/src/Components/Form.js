import './form.css';
import {useRef} from 'react';
import { useDispatch } from 'react-redux';

const Form = () => {

   
    const dispatch = useDispatch();

    const inputRef = useRef();

    const submitHandler = (event) => {
        event.preventDefault();
        if(inputRef.current.value.trim() !== ''){
            // DISPATCHING PROCESS WITH ACTION TYPE = 'add-task' AND THE TEXT OF THE TASK AS A PAYLOAD
            dispatch({type:'add-task', text:inputRef.current.value});
        }

    }

    return (
        <form onSubmit={submitHandler}>
            <input type='text' ref={inputRef}/>
            <button>Add</button>
        </form>
    )
}

export default Form;
