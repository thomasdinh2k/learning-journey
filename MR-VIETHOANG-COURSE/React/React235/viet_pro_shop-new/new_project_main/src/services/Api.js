import { BASE_URL } from "../shared/constants/app";
import Http from "./Http";

function getProducts(config) {
    return Http.get("/products", config)
}

function getProductsByCategory(catId,config) {
    return Http.get(`/categories/${catId}/products`, config)
}

// Hàm lấy đường dẫn ảnh dựa vào tên ảnh
function getImage(imageName) {
    return `${BASE_URL}/assets/uploads/products/${imageName}`;
}

// http://thaygiaoquocdan.vn:3000/assets/uploads/products/Nokia-1-red.png

function getProductDescription(productId ,config) {
    return Http.get(`/products/${productId}`, config)
}
//http://thaygiaoquocdan.vn:3000/api/v1 /products/614717c9271a0400ee8ec9ea


function getCategories(config) {
    return Http.get("/categories", config)
}


//thaygiaoquocdan.vn:3000/api/v1/products/614717c9271a0400ee8ec9ea/comments
function getProductComments(id, config) {
    return Http.get(`/products/${id}/comments`, config)
}


const createCommentProduct = (id, data, config) => {
	return Http.post(`/products/${id}/comments`, data, config);
};


export  {
    getProducts,
    getProductsByCategory,
    getImage,
    getCategories,
    getProductDescription,
    getProductComments,
    createCommentProduct
}
