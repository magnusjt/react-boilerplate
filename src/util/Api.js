export default class Api{
    constructor(crossOriginRegexes = []){
        this._crossOrigins = crossOriginRegexes
    }

    async request(method, url, headers = {}, data = {}){
        let credentials = 'same-origin' // Send cookie for same origin
        if(this._crossOrigins.find(originRegex => originRegex.test(url))){
            credentials = 'include' // Send cookie for cross origin
        }

        let opts = {
            method: method,
            headers: {
                'Accept': 'application/json',
                ...headers
            },
            credentials
        }

        if(method !== 'GET'){
            opts.body = JSON.stringify(data)
            opts.headers['Content-Type'] = 'application/json'
        }

        let res
        try{
            res = await fetch(url, opts)
        }catch(err){
            err.name = 'FetchError'
            err.message = 'Could not fetch data from server'
            throw err
        }

        let body = await res.text()

        let shouldParseJson = (headers.accept !== 'image/*')
        if(shouldParseJson){
            try{
                body = body ? JSON.parse(body) : {}
            }catch(err){
                err.message = 'Bad response from server'
                throw err
            }
        }

        if(res.status < 200 || res.status >= 300){
            let msg = res.statusText

            if(body.error){
                msg = body.error
            }

            let err = new Error(msg)
            err.name = 'ApiError'
            err.status = res.status
            err.userError = res.status >= 400 && res.status < 500
            err.forbidden = res.status === 403
            err.notAuthorized = res.status === 401
            err.reason = res.statusText
            throw err
        }

        return body
    }
}