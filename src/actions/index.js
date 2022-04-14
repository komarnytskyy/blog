import jsonPlaceholder from "../apis/jsonPlaceholder";

export const FETCH_POSTS = 'FETCH_POSTS';

export const fetchPosts = () => {
    return async (dispatch) => {
        const response = await jsonPlaceholder.get('/posts');
        console.log(response)
        dispatch({
            type: FETCH_POSTS,
            payload: response
        })
    }
}
