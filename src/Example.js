import React, { useState } from 'react';

function Example() {
    let [count, setCount] = useState(10);
    const [todos, setTodos] = useState(["learn hooks"]);

    

    return (
        <div>
            <p>You clicked {count} times.</p>
            <button onClick={() => setCount(count+1)}>
                Click me
            </button>
            <button onClick={() => setCount(count = 0)}>
                Reset counter
            </button>
            <ul>
                {todos.map((task, index) => (
                    <li key={index}>
                        {task}
                    </li>
                ))}
            </ul>
            <input onChange={e => setTodos([...todos, e.target.value])}/>
        </div>
    )
}

export default Example;