import React from 'react';
import TextField from '@material-ui/core/TextField';

export function renderInput({input, type, placeholder}){
    return (
        <div className="input-field">
            <TextField
                {...input}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                label={placeholder}
                type={type}
                autoFocus
            />
        </div>
    )
}
