import axios        from 'axios';

function redirectToLogin() {
    if (window.location.href.indexOf('login') === -1) {
        return window.location.href = '/login'
    }
}

export default {
    setupInterceptors: (store) => {

        // Add a response interceptor
        axios.interceptors.response.use(function (response) {
            if (response !== undefined &&
                response.request !== undefined &&
                response.request.responseURL !== undefined &&
                response.request.responseURL.includes("login.eve")) {
                redirectToLogin();
            }
            return response;
        }, function (error) {
            if (error.response.status === 401) {
                redirectToLogin();
            }
            return Promise.reject(error);
        });

    }
};