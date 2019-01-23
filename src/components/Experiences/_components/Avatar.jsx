/*
 * @Author: duanlinlin 
 * @Date: 2019-01-23 16:05:00 
 * @Last Modified by:   duanlinlin 
 * @Last Modified time: 2019-01-23 16:05:00 
 */
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
