import axios from 'axios';

const state = {
    post: {},
    posts: {},
    status: '',
    error: null
};

const getters = {
    post: state => state.post,
    posts: state => state.posts,
    postStatus: state => state.status,
    postError: state => state.error
};

const actions = {
    // action for creating post
    async post({ commit }, [post, id]) {
        commit('createPostRequest');
        try {
            let res = await axios.post(`http://localhost:5000/${id}/post`, post);
            if(res.data.success !== undefined) {
                const post = res.data.post;
                commit('createPostSuccess', post);
            }
            return res;
        } catch(err) {
            commit('createPostError', err);
        }
    },

    // action for getting all posts
    async getAllPosts({ commit }) {
        try {
            commit('getPostsRequest');
            let res = await axios.get('http://localhost:5000/Post');
            const posts = res.data.posts;
            commit('getPostsInfo', posts);
            return res;
        } catch(err) {
            commit('getPostsError', err);
        }
    },

    // action for getting one post
    async getSinglePost({ commit }, post) {
        try {
            commit("getSinglePostRequest");
            let res = await axios.get("http://localhost:5000/post/id", post)
            commit("getSinglePostInfo", res.data.posts);
            return res;
        } catch(err) {
            commit("getSinglePostError", err);
        }
    }
};

// mutations
const mutations = {
    // get single post
    getSinglePostRequest(state) {
        state.status = "Loading";
    },

    getSinglePostInfo(state, post) {
        state.post = post;
    },

    getSinglePostError(state, error) {
        // state.error = error.response.data.msg
        state.error = error
    },

    // get all posts
    getPostsRequest(state) {
        state.status = 'Loading'
    },
    getPostsInfo(state, posts) {
        state.posts = posts
    },
    getPostsError(state, error) {
        state.error = error.response.data.msg
    },

    // create post
    createPostRequest(state) {
        state.error = null
        state.status = 'Loading'
    },
    createPostSuccess(state) {
        state.error = null
        state.status = 'Post successfully added'
    },
    createPostError(state, error) {
        state.error = error.response.data.msg
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};