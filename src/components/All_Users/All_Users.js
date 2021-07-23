import React, {useEffect, useState} from 'react'
import { useHistory } from 'react-router'
import './all_users.css'
import axios from "axios"
import img from "../../images/mail.jpg"

export default function All_Users() {

    const [todos, setTodos] = useState([]);
    const history = useHistory();

    useEffect(()=> {
        axios.get('https://gorest.co.in/public/v1/users').then((response) =>{
            setTodos(response.data.data);
        })
    },[])

    return (
        <div className="body">
            <div className="topic">
                <h1 className="topic_h1">Todo App</h1>
            </div>
            <div className="cards">
            {
                todos.map((obj) => {
                    return(
                        <div className="card" key={obj.id}>
                            <div className="center">{obj.name}</div>
                            <br></br>
                            <a href={`mailto: ${obj.email}`} className="a_icon" ><img src={img} width="50px" className="icon"/></a>     
                            <br></br>     
                            <button onClick={() => history.push(`/users/${obj.id}`)} className="view_btn">View</button>                  
                        </div>
                    )
                })
            }
            </div>
        </div>
    )
}
