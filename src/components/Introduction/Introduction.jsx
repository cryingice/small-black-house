import React, { Component } from 'react';
import PicItem from './_components/PicItem';
import travel from 'Assets/home_travel.png';
import reading from 'Assets/home_reading.jpeg';
import work from 'Assets/home_work.jpeg';
import music from 'Assets/home_music.jpeg';
import comic from 'Assets/home_comic.jpeg';
import game from 'Assets/home_game.jpeg';
import './Introduction.scss';
import 'Assets/icon/font_2vasqr8pgq2/iconfont.css';
import config from '../../libs/config';
const { photoStorage } = config.introduction;

export default class Introduction extends Component {
    render() {
        const picUrls = [travel, reading, work,music, comic, game];
        const PicComponents = photoStorage.content.map(((cp, idx) => {
            return (
                <PicItem cla={photoStorage.content[idx].cla}
                    picUrl={picUrls[idx]}
                    iconClass={photoStorage.content[idx].icon}
                    coverTitle={photoStorage.content[idx].title}
                    coverSub={photoStorage.content[idx].sub}
                ></PicItem>
            )
        }))
        return (
            <div className="introduction">
                <h1>{photoStorage.title}</h1>
                <div className="introduction-navigation-panel">
                    <div className="left">
                        {PicComponents[0]}
                    </div>
                    <div className="right">
                        <div className="right_top">
                            {PicComponents[1]}
                            {PicComponents[2]}
                            {PicComponents[3]}
                        </div>
                        <div className="right_foot">
                            {PicComponents[4]}
                            {PicComponents[5]}
                        </div>
                    </div>
                </div >
                <div className="description">
                    {photoStorage.footText}
                </div>
            </div>

        )
    }
}
