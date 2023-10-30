import React from "react"
import useState from "react"
import Thumbnail from "./components/Thumbnail"
import Title from "./components/Title"
import Description from "./components/Description"

function App() {

    const [sttTitle, setSttTitle] = React.useState(true)
    // const [txtTitle, setTxtTitle] = React.useState("What is Lorem Ipsum?");
    const [txtTitle, setTxtTitle] = React.useState("Loading...")

    const [sttDescription, setSttDescription] = React.useState(true)
    const [txtDescription, setTxtDescription] = React.useState("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.")
    
    React.useEffect(() => {
        setTimeout(() => {
            setTxtTitle("What is Lorem Ipsum?");
        }, 1500);

    }, []);

    const changeSttTitle = () => {
        return setSttTitle(!sttTitle)
    }
    const changeSttDescription = () => {
        return setSttDescription(!sttDescription)
    }

    return (
        <div id="main">
            <div className="content-item">
                <Thumbnail />
                <Title
                    txtTitle={txtTitle}
                    changeSttTitle={changeSttTitle}
                    sttTitle={sttTitle} />
                <Description
                    txtDescription={txtDescription}
                    changeSttDescription={changeSttDescription}
                    sttDescription={sttDescription} />
            </div>
        </div>

    )
}

export default App