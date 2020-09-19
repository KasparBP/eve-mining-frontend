import axios        from 'axios';

export default {
    setupInterceptors: (store) => {

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            return response;
        }, function (error) {
            if ( error.response.status === 401 && window.location.href.indexOf('login') === -1) {
                return window.location.href = '/login'
            }
            return Promise.reject(error);
        });

    }
};