// const BASE_URL = "https://jsonplaceholder.typicode.com";
const BASE_URL = "http://localhost:4000";

export const api = {
  async getPosts(page: number = 1, limit: number = 10) {
    const response = await fetch(
      `${BASE_URL}/posts?_page=${page}&_limit=${limit}`
    );
    if (!response.ok) throw new Error("Failed to fetch posts");
    const posts = await response.json();
    const totalCount = response.headers.get("x-total-count") || "100";
    return { posts, totalCount: parseInt(totalCount) };
  },

  async getPost(id: number) {
    const response = await fetch(`${BASE_URL}/posts/${id}`);
    if (!response.ok) throw new Error("Failed to fetch post");
    return response.json();
  },

  async getComments(postId: number) {
    const response = await fetch(`${BASE_URL}/posts/${postId}/comments`);
    if (!response.ok) throw new Error("Failed to fetch comments");
    return response.json();
  },

  async getUser(id: number) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    if (!response.ok) throw new Error("Failed to fetch user");
    return response.json();
  },
};
