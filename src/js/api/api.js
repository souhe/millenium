import xhttp from 'xhttp';

class Api {
    static get(url){
        return xhttp({
            url: url,
            method: 'get'
        });

        // return fetch(url).then(function(response) {
        //     console.log('fetchewd', response);
        //     return response.json()
        // });
    }
}


function composeAbsoluteUrl(url){
    return url;
}

export default Api;
