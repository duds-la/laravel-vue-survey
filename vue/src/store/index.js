import {createStore} from "vuex";

const store = createStore({
    state: {
        user:{
            data: {
                name: 'Tom Cook',
                email: 'tom@example.com',
                imageUrl:
                'https://images7.alphacoders.com/683/683330.jpg',
            },
            token: 123,
        }
    },
    getters: {},
    actions: {},
    mutations: {
        logout: state => {
            state.user.data ={};
            state.user.token = null;
        }
    },
    modules: {}
});

export default store;