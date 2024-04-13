import { useState } from "react";

export const CompWithProps = () => {
    const [texto, setTexto] = useState("");

    const updateText = (text) => {
        setTexto(text.target.value);
    };

    return (
        <div>
            <input type="text" value={texto} onChange={updateText} />
            <div>
                <p><b>User: </b>{texto}</p>
            </div>
        </div>
    )
}


