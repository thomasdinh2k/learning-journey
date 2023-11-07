import Http from "./Http";

// export const getUsers = (config) => {
//   return Http.get("users", config);
// };

export const getUsers = (config) => Http.get("users", config);

export const getPosts = (config) => Http.get("posts", config);