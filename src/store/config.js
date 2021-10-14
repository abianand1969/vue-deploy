const config = {
    // apiUri: 'http://localhost:4000',
    apiUri: 'https://powerful-lake-79033.herokuapp.com',
    state: {
        apiUri: 'https://powerful-lake-79033.herokuapp.com'
            //apiUri: 'http://localhost:4000'
    },
    getters: {
        getUri(state) {
            return state.apiUri
        }
    }
}
export default config