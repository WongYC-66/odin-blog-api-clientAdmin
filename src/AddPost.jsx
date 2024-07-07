import { useState } from "react"
import Editor from 'react-simple-wysiwyg';

import { API_URL } from './api_url.js'

export default function AddPost({setShowPage}) {

    const [post, setPost] = useState({})
    const [errData, setErrData] = useState('')

    const [html, setHtml] = useState('my <b>HTML</b>');

    function onChange(e) {
        setHtml(e.target.value);
    }

    return (
        <div className="">
            <h1>Add New Post : {post.title}</h1>
            <p>{post._id}</p>

            <Editor value={html} onChange={onChange} />

            {errData && <li className='text-danger'>{errData}</li>}

        </div>
    )

}