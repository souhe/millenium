import xhttp from 'xhttp';

class Api {
    static get(url){
        return new Promise((resolve, reject) => {
            xhttp({
                url: url,
                method: 'get'
            }).then(result => {
                if(typeof result === 'string'){
                    resolve(JSON.parse(result));
                }else{
                    resolve(result);
                }
            }).catch((error, xhr) => {
                reject(error, xhr);
            })
        });
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
