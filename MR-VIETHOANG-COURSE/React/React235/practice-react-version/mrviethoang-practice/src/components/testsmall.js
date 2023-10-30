export default function TestSmall({imgArray, productsObject}){

    const imgUrl = [];
    for (const product of productsObject) {
        if (product.image) {
            imgUrl.push(product.image);
        }
    }

    console.log(imgUrl);


    return (
        <div id="small">

        {imgUrl.map((img)=>{
            return (
                <img src={img}/>
            );
        })}


    </div>
    );
}