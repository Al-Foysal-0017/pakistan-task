import axios from "axios";

const url = "https://calm-tor-08687.herokuapp.com/";
const urlLogin = "https://calm-tor-08687.herokuapp.com/login";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(urlLogin, newPost);
