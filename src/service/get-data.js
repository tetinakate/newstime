import axios from "axios";
import isArray from "lodash/isArray";

export const loadData = async (url) => {
    const data = await getData(url)

    return {
        data,
        isLoading: false 
    }
}

export const getData = async (url) => {
    try {
        if (isArray(url)) {
            const result = await Promise.all(url.map((u) => axios(u)));

            return result.map((res) => res?.data)
        }

        const result = await axios(url)

        if (result?.status === 200) {
            return result?.data
        }

        return null
    } catch (error) {
        console.error(error)
    }
}