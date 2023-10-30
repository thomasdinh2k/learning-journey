import React from "react"
import useState from "react"

function Small(props) {

    const [imageUrl, setImageUrl] = React.useState([
        "images/img-1.jpg",
        "images/img-2.jpg",
        "images/img-3.jpg"
    ])

    const setStateImageUrl = (val)=>{

        props.setStateImageUrl(val)
    }

    const imagesUrl = imageUrl.map((val, index) => {

        return <img
            onClick={()=>setStateImageUrl(val)}
            class={val===props.imageUrl? "active": ""}
            src={val} />
    })

    return (
        <div id="small">
            {imagesUrl}
        </div>
    )
}

export default Small