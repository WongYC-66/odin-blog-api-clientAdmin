import { useEffect, useState } from "react"
import Editor from 'react-simple-wysiwyg';

import CommentCard from './CommentCard.jsx'
import { API_URL } from './api_url.js'

export default function EditPost(props) {

    const postId = props.postId
    const [post, setPost] = useState({})
    const [allComments, setAllComments] = useState([])
    const [errData, setErrData] = useState('')

    const [html, setHtml] = useState('my <b>HTML</b>');

    function onChange(e) {
        setHtml(e.target.value);
    }


    useEffect(() => {
        const fetchData = async (api_str) => {

            const myHeaders = new Headers();
            const token = localStorage.getItem("token");
            myHeaders.append("Content-Type", "application/json");
            myHeaders.append("Authorization", `Bearer ${token}`);

            const response = await fetch(`${API_URL}/v1/${api_str}/${postId}`, {
                method: "GET",
                headers: myHeaders,
            });

            let data = await response.json()
            console.log(data)

            if (api_str == 'posts') {
                if (data.post) {
                    setPost(data.post)
                }
            } else {
                // comments
                if (data.allComments) {
                    setAllComments(data.allComments)
                }
            }

            if (data.error) {
                setErrData(data.error)
            }
        }

        fetchData("posts")
        fetchData("comments")

    }, [])


    return (
        <div className="">
            <h1>Edit Post : {post.title}</h1>
            <p>{post._id}</p>

            <Editor value={html} onChange={onChange} />

            <hr></hr>
            <h2>Comments:</h2>
            {allComments.map(comment => <CommentCard key={comment._id} comment={comment} />)}

            {errData && <li className='text-danger'>{errData}</li>}

        </div>
    )

}