import axios from "axios";
import React from "react";

export default function UseAxiosFetch (dataUrl){
    const [data, setData] = React.useState([])
    const [fetchError, setFetchError] = React.useState(null)
    const [isLoading, setIsLoading] = React.useState(false)

    React.useEffect(() => {
        let isMounted = true
        const source = axios.CancelToken.source()

        async function fetchData (url){
            setIsLoading(true)
            try{
                const response = await axios.get(url, {
                    cancelToken: source.token
                })
                if (isMounted){
                    setData(response.data)
                    setFetchError(null)
                }
            }catch (err){
                if (isMounted){
                    setFetchError(err.message);
                    setData([]);
                }
            } finally{
                isMounted && setTimeout(() => setIsLoading(false), 2000);
            }
        }

        fetchData(dataUrl);

        function cleanUp (){
            isMounted = false;
            source.cancel();
        }

        return cleanUp;
    }, [dataUrl])

    return { data, fetchError, isLoading }
}