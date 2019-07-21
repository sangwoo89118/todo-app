import React, { useEffect } from 'react';
import { connect } from 'react-redux';

export default function(WrappedComponent, path='/') {
    const Redirect = (props) => {
        useEffect(() => {
            if(props.auth){
                props.history.push(path)
            }
        }, [])

        useEffect(() =>{
            if(props.auth){
                props.history.push(path)
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
    return connect(mapStateToProps)(Redirect);
}
