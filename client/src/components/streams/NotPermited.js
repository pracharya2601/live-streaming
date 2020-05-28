import React from 'react';

const NotPermited = () => {
    return(
        <div class="ui segment">
            <div class="ui active dimmer">
                <div class="ui massive text loader">You cannot access to this page</div>
            </div>
            <div style={{height: '80vh'}}></div>
    </div>
    )
}

export default NotPermited;