import { useState } from "react";

export const CompWithProps = () => {
    const [texto, setTexto] = useState("");

    const updateWord = (word) => {
        setTexto(word.target.value);
    };

    return (
        <div>
            <input type="text" value={texto} onChange={updateWord} />
            <div>
                <p><b>User: </b>{texto}</p>
            </div>
        </div>
    )
}


