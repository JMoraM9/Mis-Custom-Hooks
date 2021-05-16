import { useEffect, useRef, useState } from "react"

export const useFetch = ( url ) => {
    
    const IsMounted = useRef(true);

    const [state, setState] = useState({ data: null, loading: true, error: null })

    useEffect(() => {
        
        return ()  => {
            IsMounted.current = false
        }

    }, [])

    useEffect(() => {
        

        setState({ data: null, loading:true, error: null})

        fetch( url )
            .then( resp => resp.json() ) 
            .then( data => {
                
                if (IsMounted.current) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                } 
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error:'No se encontrol el API'
                });
            });

    }, [ url ])


    return state
}
