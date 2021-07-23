import React, {useState} from 'react'
import axios from 'axios'
import './createpost.css'

export default function CreatePost({match}) {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    
    const handleChange = (e) =>{
        const{name, value} = e.target
        if(name==="title")
            setTitle(value)
        if(name==="body")
            setBody(value)

    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        axios.post(`https://gorest.co.in/public/v1/users/${match.params.postid}/posts`,{title:title,body:body},{headers:{
            Authorization : 'Bearer ' + "0f598aa04ee1cc06e209e4c948cb114c3e0517b3d5b6a2bb6c2918c2127be0e5"
        }}).then((res)=>{
            alert("Posted successfully")
        }).catch((error)=>{
            console.log(error)
            alert("Error Found")
        })
    }
    
    return (
        <div className="postbody">
            <div className="create">
                <h1 className="post_title">Create Post</h1>
            </div>
            
            <form>
                <div className="form-group">
                    <label className="topics">Title</label>
                    <input type="text"  className="form-control title" name="title" value={title} onChange={handleChange} 
                    placeholder="Enter the Title"/>
                </div><br></br>
                <div className="form-group">
                    <label className="topics">Body</label>
                    <textarea type="text" rows="5" cols="5" name="body" value={body} onChange={handleChange}
                     className="form-control title" placeholder="Enter the Body"></textarea>
                </div><br></br>
                <button type="submit" onClick={(e)=> handleSubmit(e)} className="submitbutton">Submit</button>
            </form>
        </div>
    )
}
