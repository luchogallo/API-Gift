import { useEffect, useState } from "react";
import { GiftItem } from "./GiftItem";

export const MainApp = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        try {
            const obtenerImagenes = async() => {
                const url = 'https://api.giphy.com/v1/gifs/trending?api_key=qIZubcvthXWVpccBc4wNBz6Bi5W98QIY&limit=20';
                const respuesta = await fetch(url);

                const resultado = await respuesta.json();

                console.log(resultado.data);
                setData(resultado.data);
            }

            obtenerImagenes();
        } catch (error) {
            console.log(error);
        }
    }, []);

    return(
        <div className="card-grid">
            {
                data.map((gift) => (
                    <GiftItem
                        key={gift.id}
                        gift={gift}
                    />
                ))
            }
        </div>
    );
}