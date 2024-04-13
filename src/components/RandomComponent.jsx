
export const RandomComponent = (props) => {
    const { name, age, occupation, imageUrl } = props;
    return(
        <div style={styles.container}>
            <div >
                <img style={styles.image} src={imageUrl} alt={`Foto de ${name}`}/>
            </div>
            <div style={styles.dates}>
                <h2>{name}</h2>
                <p>Age: {age}</p>
                <p>Occupation: {occupation}</p>
                <button style={styles.boton}>Add</button>
            </div>  
        </div>
    )
}
const styles = {
    container:{
        display: "flex",
        width: "500px",
        margin: "20px 20px",
    },

    dates:{
        margin: "20px 20px",
        textalign: "center",
    },

    image:{
        borderRadius: "100%",
        maxWidth: "200px",
    },

    boton:{
        backgroundColor: "skyblue",
        fontWeight: "700",
        width: "100px",
    }
}

