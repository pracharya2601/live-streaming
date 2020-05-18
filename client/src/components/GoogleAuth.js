import React from 'react';

class GoogleAuth extends React.Component {
    state = {
        isSignedIn: null
    };

    componentDidMount() {
        window.gapi.load("client:auth2", () => {
            window.gapi.client.init({
                clientId:'993609564715-hq7drp8ltb8uvbldnbo42s98m1j00mv1.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.setState({isSignIn: this.auth.isSignedIn.get()})
            })
        });
    }
    renderAuthButton() {
        if(this.state.isSignedIn === null) {
            return <div>Its null which mean dont know</div>
        } else if(this.state.isSignedIn) {
            return <div>Signin done</div>
        } else {
            return<div>Not sign in</div>
        }
    }

    render() {

        return(
            <div>
                {this.renderAuthButton()}
            </div>
        )
    }
};

export default GoogleAuth;