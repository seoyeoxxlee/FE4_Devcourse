import type { LoaderFunctionArgs } from "react-router";

export const fetchJsonPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const data = await response.json();
    return data;
}

export const fetchJsonPostsDetail = async ({params, request}: LoaderFunctionArgs) => {
    const url = new URL(request.url);
    const query = url.searchParams.get("lang")
    console.log(query);
    
    const response = await fetch("https://jsonplaceholder.typicode.com/posts/" + params.id)
    const data = await response.json();
    return { post: data, special: 'sucoding'};
}