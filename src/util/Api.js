export default class Api{
    async request(method, url, data = {}){
        let opts = {
            method: method,
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            credentials: 'same-origin' // Send cookie
        };

        if(method !== 'GET'){
            opts.body = JSON.stringify(data);
        }

        let res = await fetch(url, opts);

        let body = await res.text();

        try{
            body = body ? JSON.parse(body) : {};
        }catch(err){
            err.message = 'Unexpected response from server';
            throw err;
        }

        if(res.status < 200 || res.status >= 300){
            let msg = res.statusText;

            if(body.error){
                msg = body.error;
            }

            let err = new Error(msg);
            err.status = res.status;
            err.userError = res.status >= 400 && res.status < 500;
            err.reason = res.statusText;
            err.needsLogin = res.status === 403;
            throw err;
        }

        return body;
    }
}