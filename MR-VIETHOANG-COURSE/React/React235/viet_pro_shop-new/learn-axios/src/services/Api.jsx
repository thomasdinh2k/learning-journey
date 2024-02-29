import Http from "./Http";

export const getUsers = (config) => Http.get("users", config)
export const getPosts = (config) => Http.get("posts", config)

// export const Api = async (route, action) => {
//     let data = await Http.get(route, {}).then(data);
    

//     // Http.get( route, {}).then(data = data.data);

//     return data
// };

// export default Api
