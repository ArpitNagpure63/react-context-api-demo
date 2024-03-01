import { useContext } from "react";
import { MyContext } from "../App";

const ComponentB =() => {
    const { setCounter } = useContext(MyContext);

    const handleClick = () => {
        setCounter(counter => counter - 1);
    };

    return <div>
        <br />
        <div>Component B</div>
        <button onClick={handleClick}>Decrease Counter</button>
        <br />
    </div>
};

export default ComponentB;