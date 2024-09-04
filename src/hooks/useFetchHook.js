import {
  useEffect,
  useState,
} from 'react';

const localCache = {}


export const useFetch = (url) => {

    const [state, setState] = useState({
        data: null,
        isLoad: true,
        hasError: false,
        error: null
    })

    const { data, isLoad, hasError } = state

    useEffect(() => {
        fetchApi()
    }, [url])
    const setLoadingState = () => {
        setState({
            data: null,
            isLoad: true,
            hasError: false,
            error: null
        })
    }

    const fetchApi = async () => {

        if(localCache[url]) {
            console.log('using cache')
            setState({
                data: localCache[url],
                isLoad: false,
                hasError: false,
                error: null
            })
            return
        }

        try {
            setLoadingState()
            const res = await fetch(url)
            await new Promise(resolve => setTimeout(resolve, 1500))

            if (!res.ok) {
                setState({
                    data: null,
                    isLoad: false,
                    hasError: true,
                    error: `Something went wrong, and this is the status of fetch, status: ${res.status}`,
                })
            }
            const data = await res.json()
            setState({
                data: data,
                isLoad: false,
                hasError: false,
                error: null
            })
            localCache[url] = data
        } catch (error) {
            setState({
                data: null,
                isLoad: false,
                hasError: true,
                error: error.message || 'Something went wrong',
            });
        }

    }

    return {
        data,
        isLoad,
        hasError,
localCache,
    }
}