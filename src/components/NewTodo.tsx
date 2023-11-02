import { useRef } from "react";
import classes from './NewTodo.module.css';

const NewTodo: React.FC<{ AddTodo: (text: string) => void }> = (props) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const todoSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const inputText = inputRef.current!.value;
    if (inputText.trim().length === 0) {
      return;
    }
    props.AddTodo(inputText);
  };
  return (
    <form onSubmit={todoSubmitHandler}className={classes.form}>
      <label htmlFor="text"> Todo Text </label>
      <input type="text" id="text" ref={inputRef} />
      <button> Add ToDo</button>
    </form>
  );
};
export default NewTodo;
