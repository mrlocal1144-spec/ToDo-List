import { FaRegTrashCan } from "react-icons/fa6";
import { MdOutlineEdit } from "react-icons/md";
import { useState } from "react";


const Main = ({ items, handleCheck, handleDelete }) => {
    const [filter, setFilter] = useState("All")

    const filteredItems = items.filter((item) => {
        if (filter === "Pending") return !item.checked;
        if (filter === "Completed") return item.checked;
        return true;
    });

    return (
        <div className="main">
            <div className="pag">
                <button onClick={() => setFilter("Active")}>All</button>
                <button onClick={() => setFilter("Pending")}>Pending</button>
                <button onClick={() => setFilter("Completed")}>Completed</button>
            </div>
            {
                filteredItems.map((item) => (
                    <li key={item.id}>
                        <input
                            type="checkbox"
                            checked={item.checked}
                            onChange={() => handleCheck(item.id)}
                        />
                        <label>{item.desc}</label>
                        <MdOutlineEdit />
                        <FaRegTrashCan onClick={() => handleDelete(item.id)} />
                    </li>
                ))
            }
        </div>
    );
};

export default Main;