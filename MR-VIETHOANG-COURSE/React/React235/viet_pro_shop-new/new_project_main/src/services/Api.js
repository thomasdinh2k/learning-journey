import { BASE_URL } from "../shared/constants/app";
import Http from "./Http";

function getProducts(config) {
    return Http.get("/products", config)
}

// Hàm lấy đường dẫn ảnh dựa vào tên ảnh
function getImage(imageName) {
    return `${BASE_URL}/assets/uploads/products/${imageName}`;
}

// http://thaygiaoquocdan.vn:3000/assets/uploads/products/Nokia-1-red.png

export  {
    
    getProducts,
    getImage,

}
