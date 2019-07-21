import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent) {
    const Auth = (props) => {
        useEffect(() => {
            if(!props.auth){
                props.history.push('/')
            }
        }, [])

        useEffect(() => {
            if(!props.auth){
                props.history.push('/')
            }
        }, [props.auth])

        return (
            <WrappedComponent {...props} />
        )
    }

    const mapStateToProps = (state) => {
        return{
            auth: state.user.auth
        }
    }
    return connect(mapStateToProps)(Auth);
}
