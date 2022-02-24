import axios from "axios";

const url = "http://localhost:5000";
const urlLogin = "http://localhost:5000/login";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(urlLogin, newPost);
