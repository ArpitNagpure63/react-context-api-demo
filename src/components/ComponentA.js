import { useContext } from "react";
import { MyContext } from "../App";

const ComponentA = () => {
    const { setCounter } = useContext(MyContext);
    
    const handleClick = () => {
        setCounter(counter => counter + 1);
    };

    return <div>
        <div>Component A</div>
        <button onClick={handleClick}>Increase Counter</button>
    </div>
};

export default ComponentA;