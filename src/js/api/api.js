import xhttp from 'xhttp';

class Api {
    static get(url){
        return xhttp({
            url: url,
            method: 'get'
        });
    }
}


function composeAbsoluteUrl(url){
    return url;
}

export default Api;
