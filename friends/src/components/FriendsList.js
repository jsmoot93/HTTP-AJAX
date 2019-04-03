import React from 'react'
import FriendCard from './FriendCard';
import { withRouter } from 'react-router-dom';

export default function (props){

    if (!props.friends) return <h3>Loading Friends...</h3>

    const FriendCardWithRouter = withRouter(FriendCard);

    return (
        <>
            {props.friends.map(friend => (
                <FriendCardWithRouter 
                    key={friend.id}
                    friend={friend}
                    deleteFriend={event => props.deleteFriend(event, friend.id)}
                />
            )).reverse()}
        </>
    )
}