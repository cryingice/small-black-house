/*
 * @Author: duanlinlin 
 * @Date: 2019-02-02 11:26:35 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-02-16 17:24:48
 */
import React from 'react'
// import {Icon} from 'antd'
import '../scss/SmallLazyCat.scss'
import icon from '../../../asset/icon.jpeg'
import firstPic from '../../../asset/0214_1.jpeg'
import secondPic from '../../../asset/0214_2.jpeg'
import thirdPic from '../../../asset/0214_3.jpeg'
import thirthPic from '../../../asset/0214_4.jpeg'
import fivthPic from '../../../asset/0214_5.jpeg'
import sixthPic from '../../../asset/0214_6.jpeg'

//single feature point in description before loging
export default (params) => {
    let currentImg = icon;
    switch (params.idx) {
        case 0:
            currentImg = firstPic;
            break;
        case 1:
            currentImg = secondPic;
            break;
        case 2:
            currentImg = thirdPic;
            break;
        case 3:
            currentImg = thirthPic;
            break;
        case 4:
            currentImg = fivthPic;
            break;
        case 5:
            currentImg = sixthPic;
            break;
        default:
            currentImg = sixthPic;
            break;
    }
    return (
        <div className="cat-pic">
            <div className="pic-area">
                <img src={currentImg} alt=""/>
            </div>
            <span className="cat-name">
                {params.title}
            </span>
        </div>
    )
};

