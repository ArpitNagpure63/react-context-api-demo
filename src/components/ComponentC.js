import { useContext } from "react";
import { MyContext } from "../App";

const ComponentC = () => {
    const { counter } = useContext(MyContext);

    return <div>
        <br />
        <div>Component C</div>
        <div>Counter: {counter}</div>
    </div>
};

export default ComponentC;