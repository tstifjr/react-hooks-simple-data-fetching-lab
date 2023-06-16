// create your App component here
import React, { useState, useEffect } from "react";

function App() {
    const [image, setImage] = useState('')
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
            .then(r => r.json())
            .then(data => setImage(data.message))
    }, [])
    const renderDisplay = (image === "") ? <p>Loading...</p> : <img src={image} alt="A Random Dog" />
    console.log(image);
    return (
        <div>
            {renderDisplay}
        </div>
    )
}

export default App;