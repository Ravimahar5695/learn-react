import React from "react";
import { useEffect } from "react";
import { useState } from "react";

export const Home = () => {

    const [work, setWork] = useState("");

    const handleChange = (event) => {
        setWork(event.target.value);
    }

    let [workList, setWorkList] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setWorkList([...workList, work]);
        setWork("");
    }

    const toDoForm = () => {
        return (
            <form>
                <input type="text" value={work} onChange={handleChange}/>
                <button onClick={handleSubmit}>Add</button>
            </form>
        );
    }

    return (
        <div>
            {toDoForm()}
            <ul>
                {
                    workList.map((value, index) => {
                        return <li key={index}>{value}</li>
                    })
                }
            </ul>
        </div>
    );
}