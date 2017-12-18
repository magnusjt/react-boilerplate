import React from 'react';
import Spinner from './Spinner'

export default (authAction) => ({logout}) => (
    <div>
        <button onClick={authAction.logout.bind(authAction)} disabled={logout === 'LOGOUT_ATTEMPT'} className="btn btn-default">
            Log out
            {logout === 'LOGOUT_ATTEMPT' && <Spinner />}
        </button>

        {logout === 'LOGOUT_FAILURE' && <div>Dammit! Logout fail</div>}
    </div>
)