export const fetchSubreddit = (filter) => dispatch => {

    const url = `https://www.reddit.com/r/reactjs/${filter}.json?limit=1000`;

    const request = fetch(url)
        .then(response => response.json())
        .then(json =>{
            
            dispatch({
                type: 'FETCH_SUBREDIT',
                payload: json.data.children
            })

            return json.data.children;
        })
        .catch(() => [])


    return request;
}