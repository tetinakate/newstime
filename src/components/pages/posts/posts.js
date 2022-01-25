import React, { useCallback, useState } from "react";
import { Link } from "react-router-dom";

import { API } from "../../../constants";
import { useAxios } from '../../../hooks'
import { crud } from "../../../service";

import { Layout } from "../../../containers/layout";

import './posts.css';
import { useEffect } from "react/cjs/react.development";

export const Posts = () => {
    const { data, isLoading } = useAxios({ url: API.posts() })
    const [posts, setPosts] = useState(data)

    useEffect(() => {
        setPosts(data)
    }, [data])

    // const { data: users } = useAxios({ url: API.users() })
    // console.log(posts);
    // const [formatUser, setFormatUser] = useState({})

    // const posts = data[0]
    // const users = data[1]

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
    const handleClick = useCallback((event) => {
        const { id } = event.target.dataset
        const newPosts = crud.deleteFunc(posts, id)
        setPosts(newPosts)
    }, [posts])


    return(
        <Layout isLoading={isLoading} data={posts}>
            <h1>Posts</h1>
            <ul className='posts-list'>
            {
                posts.map(item => {
                    return(
                        <li key={item.id}>
                            {/* <p><Link to={`/authors/${item.userId}`}>{getAuthorsName(item.userId)}</Link></p> */}
                            <p><Link to={`/posts/${item.id}`}>{item.title}</Link></p>
                            <p>{item.body}</p>
                            <p>
                                <button onClick={handleClick} data-id={item.id}>
                                    <i className="fas fa-trash-alt" style={{ pointerEvents: 'none' }}></i>
                                </button>
                            </p>
                        </li>
                    )
                })
            }
            </ul>
        </Layout>
    );
}


// export default class NewsList extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             error: null,
//             isLoading: false,
//             items: [],

//         }
//     }

//     async getNewsList() {
//         const url = 'https://jsonplaceholder.typicode.com/posts';
//         const res = await axios(url)

//         return res?.data;
//     }

//     async componentDidMount() {
//         this.setState({
//             isLoading: true,
//         });

//         try {
//             const result = await this.getNewsList();
//             this.setState({
//                 isLoading: false,
//                 items: result,
//             });
//         } catch (error) {
//             this.setState({
//                 isLoading: false,
//                 error
//             })
//         }
       
//         // fetch('https://jsonplaceholder.typicode.com/posts')
//         // .then(res => res.json())
//         // .then((result) => {
//         //     this.setState({
//         //         isLoading: true,
//         //         items: result,
//         //     });
//         // })
//         // .catch((error) => {
//         //     this.setState({
//         //         isLoading: true,
//         //         error,
//         //     });
//         // })
//     }
    
//     render() {
//         const { isLoading, error, items } = this.state;

//         if(error){
//             return <p>Error message</p>;
//         }
        
//         if(isLoading) {
//             return <p>Loading...</p>;
//         }

//         return(
//             <ul className='news-list'>
//             {
//                 items.map(item => {
//                     return(
//                         <li key={uniqueId}>
//                             <p>{item.title}</p>
//                             <p>{item.body}</p>
//                         </li>
//                     )
//                 })
//             }
//             </ul>
//         );
//     }
// }