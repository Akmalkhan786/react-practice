import React from 'react';

const Auth = (props) => {
    const pass = 'pass123'
    if (pass != 'pass1234') {
        return <h3>You are not authorized person</h3>
    } else {
        return props.children
    }
}

export default Auth;