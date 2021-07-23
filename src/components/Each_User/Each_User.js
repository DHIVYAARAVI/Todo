import React, {useEffect, useState} from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import './each_user.css'

export default function Each_User({match}) {
    const[each_user, setEachUser] = useState([]);
    const[posts, setPosts] = useState([]);
    useEffect(()=>{
        axios.get(`https://gorest.co.in/public/v1/users/${match.params.userid}`).then(
            response => setEachUser(response.data.data)
        )
        axios.get(`https://gorest.co.in/public/v1/posts/${match.params.userid}`).then(
            response => setPosts(response.data.data)
        )
    },[])
    return (
        <div className="full">
            <div className="topic_e">
                <h1 className="topic_h1_e">Todo App</h1>
            </div>
            <div className="card1" key={each_user.id}>
                <div>{each_user.name}</div>
                <div>{each_user.email}</div>
                <div>{each_user.gender}</div>
                <div>{each_user.status}</div>
            </div>
            
            <div className="card2" key={posts.id}>
                <div>{ posts.id?posts.title:"Post not found"}</div>
                <div>{posts.body}</div>
            </div>
            
           <div className="postdiv">
                <Link to ={`/createpost/${match.params.userid}`} className="postButton" >Create Post</Link>
           </div>
            <br></br><br></br>
        </div>
    )
}
