import axios from "axios";

export const fetchPosts = async () => {
  return axios.get("https://jsonplaceholder.typicode.com/posts");
};

export const savePosts = async (data) => {
  return axios.post("https://jsonplaceholder.typicode.com/posts", data);
};

export const fetchPostDetails = async (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
};

export const fetchPostComments = async (id) => {
  return axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`);
};
