/*
 * @Author: duanlinlin 
 * @Date: 2019-01-14 17:00:50 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-14 17:27:07
 */
import constant from './constant';
const { NEXT, PRE, COMPLETE } = constant;
export default {
    footText: 'Experience Depends On You',
    logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
    logoText: 'ANTD ADMIN',
    Mmenus: [{
            key: 'home',
            type: 'smile',
            link: '/home',
            text: '首页'
        },
        {
            key: 'introduction',
            type: 'laptop',
            link: '/introduction',
            text: '快速入门'
        },
        {
            key: 'charts',
            type: 'bar-chart',
            text: '百度图表',
            sub: [{
                key: 'line',
                type: 'line-chart',
                link: '/charts/line',
                text: '折线图'
            }]
        },
        {
            key: 'setting',
            type: 'setting',
            text: '基础组件',
            sub: [{
                key: 'button',
                type: 'editor',
                link: '/setting/button',
                text: '按钮'
            }, ]
        },
        {
            key: 'userManager',
            type: 'user',
            link: '/userManager',
            text: '用户管理'
        },
        {
            key: 'adver',
            type: 'notification',
            link: '/adver',
            text: '广告管理'
        }
    ],
    mBreadCrumb:{
        introduction:'快速入门',
        charts:'百度图表',
        line:'折线图',
        setting:'基础组件',
        button:'按钮',
        userManager:'用户管理',
        adver:'广告管理'
    },
    home: {
        title: ['项目前言', '项目上手', '访问', '项目说明'],
        introduction: {
            star: {
                text: '⭐️star一下,您的支持是我的动力',
                link: 'https://github.com/cryingice/react-learn-management'
            },
            content: '本工程主要基于react + redux + scss + es6 + react-router + antd(v3.10.5) + webpack实现,是用来练手的项目,为业余时间所做。基于create-react-app快节奏搭建。',
            accessLink: '<p>访问地址:<a href="http://localhost:4001" target="_blank">http://localhost:4001</a></p>',
        },
        install: {
            steps: [{
                title: '下载',
                content: '<p>$&nbsp;&nbsp;&nbsp;git clone</p><p>$&nbsp;&nbsp;&nbsp;git clone https://github.com/cryingice/react-learn-management</p><p>$&nbsp;&nbsp;&nbsp;cd react-antd</p>',
            }, {
                title: '安装',
                content: '<p>// 安装前请先确保已安装node和npm</p><p>// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules</p><p>$&nbsp;&nbsp;&nbsp;npm install</p>',
            }, {
                title: '运行',
                content: '<p>$&nbsp;&nbsp;&nbsp;npm run dev </p><p>$&nbsp;&nbsp;&nbsp;npm run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）</p>',
            }],
            //配置各个阶段按钮状态 type-按钮类型 key-索引 antdType- antd组件按钮type名 text-按钮名称 functional-功能函数名
            buttonStatus: {
                step1: [
                    { type: NEXT, key: 1, antdTpe: 'primary', text: '下一步', functional: NEXT },
                ],
                step2: [
                    { type: PRE, key: 2, antdTpe: '', text: '上一步', functional: PRE },
                    { type: NEXT, key: 3, antdTpe: 'primary', text: '下一步', functional: NEXT },
                ],
                step3: [
                    { type: PRE, key: 4, antdTpe: '', text: '上一步', functional: PRE },
                    { type: COMPLETE, key: 5, antdTpe: 'primary', text: '完成', functional: COMPLETE },
                ]
            }
        }

    }

}