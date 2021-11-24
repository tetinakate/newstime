import React, { useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import { getData } from '../../../service';
import { API } from "../../../constants";

import "./author.css";

export const Author = () => {
    const { id: authorId  }  = useParams();

    const [isLoading, setLoadingStatus] = useState(true)
    const [posts, setPosts] = useState([])
    const [users, setUsers] = useState([])
    //const [formatUser, setFormatUser] = useState({})

    const getAuthorsPosts = async () => {
        const postsFetch = await getData(API.posts())
        const usersFetch = await getData(API.users())

        setPosts(postsFetch)
        setUsers(usersFetch)

        setLoadingStatus(false)
    }

    useEffect(() => {
        getAuthorsPosts()  
    }, [])

    // const findUser = (id) => users.filter((user) => user.id === id)[0]

    // const getAuthorsName = (id) => {

    //     if (formatUser[id]) {
    //         return formatUser[id]?.name
    //     }

    //     setFormatUser({
    //         ...formatUser,
    //         [id]: findUser(id)
    //     })

    //     return formatUser[id]?.name
    // }

    if(isLoading) {
        return <p>Loading...</p>;
    }

    if(isEmpty(posts)) {
        return <p>News not found</p>;
    }

    return(
        <div>
            <h1>Posts by {users
                                    .filter(user => user.id === Number(authorId))
                                    .map(user => user.name)
                                }</h1>
            <ul className='news-list'>
            {
                posts
                .filter(post => post.userId === Number(authorId))
                .map(item => {
                    return(
                        <li key={item.id}>
                            <p>{item.title}</p>
                            <p>{item.body}</p>
                        </li>
                    )
                })
            }
            </ul>
        </div>
    );
}