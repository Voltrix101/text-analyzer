import React from 'react'
import { Button } from 'react-bootstrap';

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }
    return (
        <div style={{ height: '50px' }}>
            {props.alert && <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
                <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
                <Button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={() => props.hideAlert()}></Button>
            </div>}
        </div>
    )
}

export default Alert