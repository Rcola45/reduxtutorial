import { FETCH_POSTS, NEW_POST } from "./types";

export const fetchPosts = () => dispatch => {
  // dispatch is like resolve in a promise
  fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => dispatch({
        // dispatch fetch_posts to the reducer
        type: FETCH_POSTS,
        payload: posts
      }));
};

export const createPost = (postData) => dispatch => {
  // dispatch is like resolve in a promise
  fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(postData)
  })
      .then(response => response.json())
      .then(post => dispatch({
        type: NEW_POST,
        payload: post,
      }));
};