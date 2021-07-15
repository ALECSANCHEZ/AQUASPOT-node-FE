import {useEffect, useState} from 'react';

export default function UseInfo(ruta){
    const [Info, setInfo] = useState([])

    useEffect(() => {
                fetch(ruta)
        .then(response => response.json())
        .then(data => setInfo(data))
        .catch(error=> console.log( "Hubo un error "+error))
    }, [] )
    return (Info);
}
