import React, { useState, useEffect } from "react";
import { addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function CreatePost({ isAuth }) {

    const [title, setTitle] = useState("");
    const [postText, setPostText] = useState("");

    const postsCollectionRef = collection(db, "posts");
    let navigate = useNavigate();

    const createPost = async () => {
        await addDoc(postsCollectionRef, {
          title,
          postText,
          author: { name: auth.currentUser.displayName, id: auth.currentUser.uid },
        });
        navigate("/");
    };

    useEffect(() => {
    if (!isAuth) {
        navigate("/login");
    }
    }, []);

    return (
        <div className="container">
            <div className="post-wrapp">
                <h3>Create your post</h3>
                <div>
                    <label>Title  </label>
                    <input placeholder="Title.." onChange={(event) => {
                    setTitle(event.target.value); }}/>
                </div>
                <div>
                    <label>Post  </label>
                    <textarea placeholder="Post.." onChange={(event) => {
                    setPostText(event.target.value);
                    }} />
                </div>
                <button onClick={createPost} className="btn">Submit</button>
            </div>
        </div>
    );
}

export default CreatePost;