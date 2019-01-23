import React from 'react';
import Cover from './Cover';
import  '../scss/PicItem.scss';

//picture component in photos frame
export default (params) => {
    return (
        <div className={`${params.cla} pic`}>
            <img src={params.picUrl} />
            <div className="s_icon"><i className={`iconfont ${params.iconClass}`}></i></div>
            <Cover title={params.coverTitle} sub={params.coverSub}/>
        </div>
    )
};
