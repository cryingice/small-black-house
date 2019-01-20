import React from 'react';
import '../scss/Avatar.scss';
import avatar from 'Assets/experiences_avatar1.jpeg';

export default (params) => {
    return (
        <div className="resumer-avatar">
            <img src={avatar} />
        </div>
    )
}
