import React from 'react';
import Spinner from './Spinner'

export default (authAction) => ({login}) => (
    <div>
        <button onClick={authAction.login.bind(authAction)} disabled={login === 'LOGIN_ATTEMPT'} className="btn btn-success">
            Log in
            {login === 'LOGIN_ATTEMPT' && <Spinner />}
        </button>

        {login === 'LOGIN_FAILURE' && <div>Dammit! Login fail</div>}
    </div>
)