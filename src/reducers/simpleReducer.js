export default (state = {}, action) => {
    switch (action.type) {
        case 'FETCH_SUBREDIT':
            return {
                subreddits: action.payload
            }
        default:
            return state
    }
}