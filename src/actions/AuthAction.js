import CONSTANTS from '../actionTypes';

export default class AuthAction{
    /**
     * @param run
     * @param {Api} api
     */
    constructor(run, api){
        this._run = run;
        this._api = api;
    }

    async login(data){
        this._run(CONSTANTS.LOGIN_ATTEMPT);

        try{
            let profile = await this._api.request('POST', '/api/login', data);
            this._run(CONSTANTS.LOGIN_SUCCESS, {profile});
            this._run(CONSTANTS.ROUTE_DASHBOARD);
        }catch(err){
            this._run(CONSTANTS.LOGIN_FAILURE, {err});
        }
    }

    async logout(){
        this._run(CONSTANTS.LOGOUT_ATTEMPT);

        let delay = time => new Promise(resolve => setTimeout(resolve, time))
        await delay(500)

        this._run(CONSTANTS.LOGOUT_SUCCESS);
    }
}