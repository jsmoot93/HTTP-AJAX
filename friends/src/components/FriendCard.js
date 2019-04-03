import React from 'react'

export default function (props){
    const {friend} = props;
    
    const pushToUpdate = (event) => {
        event.preventDefault();
        if (props.history) {
            props.history.push(`/update/${friend.id}`)
        }
    }

    return (
        <div>
            <h2>{friend.name}</h2>
            <p><strong>Age:</strong> {friend.age}</p>
            <p><strong>Email:</strong><br />{friend.email}</p>
            <button onClick={props.deleteFriend}>
                Delete
            </button>
            <button onClick={pushToUpdate}>
                Update
            </button>
        </div>
    )
}