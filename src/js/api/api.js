class Api {
    static get(url){
        return fetch(url).then(function(response) {
            return response.json()
        });
    }
}


function composeAbsoluteUrl(url){
    return url;
}

export default Api;
