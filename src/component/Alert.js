import React from 'react'

function Alert(props) {
    const capitalize = (word) => {
        const lower = word.toLowerCase();
        return lower.charAt(0).toUpperCase() + lower.slice(1);
    }

    return (
        props.alert && <div>
            <div className="alert alert-success" role="alert">
                <strong>{capitalize(props.alert.typ)}</strong>: {props.alert.msg}
            </div>
        </div>
    )
}

export default Alert