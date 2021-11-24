import { useState, useEffect } from "react"
import { getData } from "../service";
// import isArray from "lodash/isArray";

export const useAxios = (props) => {
    const [data, setData] = useState([]);
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        const loadData = async (url) => {
            const res = await getData(url)

            setData(res)
            setLoading(false);
        }

        loadData(props.url);
    }, [props.url])
    
    // if(isArray(data)) {
    //     const deletPost = (id) => {
    //         const newArr = [data[0].filter(elem => elem.id !== id), data[1]]
    //         setData(newArr);
    //     }

    //     return { data, isLoading, deletPost }
    // }

    return { data, isLoading }

}