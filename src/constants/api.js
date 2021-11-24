export const API = {
    base: () => 'https://jsonplaceholder.typicode.com',

    posts: () => `${API.base()}/posts`,
    post: (id) => `${API.posts()}/${id}`,

    users: () => `${API.base()}/users`,
    user: (id) => `${API.users()}/${id}`,

    comments: () => `${API.base()}/comments`,
}