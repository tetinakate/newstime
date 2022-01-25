import React, { useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import isEmpty from "lodash/isEmpty";

import { Layout } from "../../../containers/layout";
import { useAxios } from "../../../hooks";
import { getData } from '../../../service';
import { API } from "../../../constants";

import "./author.css";

export const Author = () => {
    const { id: authorId  }  = useParams();
    const {data: authors, isLoading } = useAxios({ url: API.users() });
    const {data: postsRes, } = useAxios({ url: API.posts() });

    //const [posts, setPosts] = useState(postsRes)
    //const [users, setUsers] = useState(author)
    //const [formatUser, setFormatUser] = useState({})

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


    return(
        <Layout data={authors} isLoading={isLoading}>
            <div>
                <h1>Пост {authors
                                    .filter(user => user.id === Number(authorId))
                                    .map(user => user.name)
                              }
                </h1>
                <ul className='news-list'>
                {
                    postsRes
                    .filter(post => post.userId === Number(authorId))
                    .map(item => {
                        return(
                            <li key={item.id}>
                                <p><Link to={`/posts/${item.id}`}>{item.title}</Link></p>
                                <p>{item.body}</p>
                            </li>
                        )
                    })
                }
                </ul>
            </div>
        </Layout>
    );
}