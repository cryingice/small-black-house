/*
 * @Author: duanlinlin 
 * @Date: 2019-01-14 17:00:50 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-02-02 19:41:09
 */
import constant from './constant';
import avatar from 'Assets/icon.jpeg';
const { NEXT, PRE, COMPLETE } = constant;
// configuration of component includes home and introduction
export default {
    footText: 'Experience Depends On You',
    logo: avatar,
    logoText: 'Cryingice',
    Mmenus: [{
            key: 'home',
            type: 'smile',
            link: '/home',
            text: '项目概况'
        },
        {
            key: 'introduction',
            type: 'laptop',
            link: '/introduction',
            text: '用户生活'
        },
        {
            key: 'experiences',
            type: 'snippets',
            link: '/experiences',
            text: '用户经历'
        },
        {
            key: 'creative',
            type: 'question',
            text: '个人创意',
            sub: [{
                key: 'Mcanvas',
                type: 'highlight',
                link: '/creative/Mcanvas',
                text: 'canvas'
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
    mBreadCrumb: {
        introduction: '用户生活',
        creative: '个人创意',
        experiences: '经历',
        Mcanvas: 'Mcanvas',
        setting: '基础组件',
        button: '按钮',
        userManager: '用户管理',
        adver: '广告管理'
    },
    home: {
        title: ['项目前言', '项目上手', '访问', '项目说明'],
        introduction: {
            star: {
                text: '⭐️star一下,您的支持是我的动力',
                link: 'https://github.com/cryingice/react-learn-management'
            },
            content: '本工程主要基于react + redux + scss + es6 + react-router + antd(v3.10.5) + webpack实现,是用来练手的项目,为业余时间所做。基于create-react-app快节奏搭建。',
            accessLink: '<p>访问地址:<a href="http://localhost:4008" target="_blank">http://localhost:4008</a></p>',
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

    },
    introduction: {
        photoStorage: {
            title: 'My Life',
            footText: 'You will get more things includes inspiration moving and satisfy when wiriting down the details around you.Try accepting life,try sharing life,try thinking everythings,being a great person',
            content: [{
                    cla: 'travel',
                    title: '游记',
                    sub: '上天给了我漆黑的眼睛,让我去发现世界的精彩',
                    icon: 'icon-lvhang'
                }, {
                    cla: 'reading',
                    title: '阅读',
                    sub: '心有猛虎 细嗅蔷薇',
                    icon: 'icon-yuedu'
                },
                {
                    cla: 'work',
                    title: '工作',
                    sub: '为钱? 为心安? 为成就感?还是...',
                    icon: 'icon-gongwenbao'
                },
                {
                    cla: 'music',
                    title: '音乐',
                    sub: '喜爱♪,喜爱吹陶笛,不解释',
                    icon: 'icon-iconset0163'
                },
                {
                    cla: 'comic',
                    title: '动漫',
                    sub: '动漫投影生活,映射幻想',
                    icon: 'icon-CN_bilibiliB'
                },
                {
                    cla: 'game',
                    title: '娱乐',
                    sub: '哥们,刀不?',
                    icon: 'icon-78'
                }
            ],
        }
    },
    entry: {
        loginInfo: {

        },
        descriptionInfo: {
            title:'Small Black House',
            content:'是一个个人空间项目,目前展示一些作者私人展示信息,作者希望以后能把它做成一个人人可定制的空间应用',
            feature:[
                {
                    iconType:'smile',
                    title:'项目概况',
                    detailContent:'技术栈:react + redux + scss + es6 + react-router + antd(v3.10.5) + webpack'
                },
                {
                    iconType:'appstore',
                    title:'生活记录',
                    detailContent:'记录自己生活的点点滴滴,希望能把自己喜欢的东西展示给你'
                },
                {
                    iconType:'file-text',
                    title:'简历',
                    detailContent:'我的简历,希望你能一眼了解我的工作'
                },
                {
                    iconType:'question-circle',
                    title:'创意小作品',
                    detailContent:'灵感凸现,记录下来'
                }
            ]
        }
    },
    valentine: {
        loveTextInfo: {
            loveTextMag: [
                {msg:'万千人海中让我遇到你,是缘是难。',color:'rgba(181,68,181,1)',_className:'1st'},
                {msg:'最喜欢你乌黑的大眼睛,见不得你哭、伤心,尽管我知道你内心的倔强。',color:'rgba(255,0,167,.7)',_className:'2st'},
                {msg:'伤心的时候,其实最想听到你的声音,却不想你被我的情绪所感染。',color:'rgba(255,153,0,.7)',_className:'3st'},
                {msg:'遇上你,是我的缘,我坚信你是我一直寻找的小懒猫,而我是那只小蜡烛。',color:'rgba(175,212,145,.7)',_className:'4st'},
                {msg:'遇上你,也是我的难,我们是否会像秒速五厘米一样?真命天子是我吗?',color:'rgba(3,32,80,1)',_className:'5st'},
                {msg:'不知道...我只想你能开心每一天,看看你胖胖的脸蛋。',color:'rgba(68,94,233,1)',_className:'6st'},
                {msg:'曾经,我让我最爱的母亲受伤,却永远失去了道歉的机会。',color:'rgba(255,234,198,.7)',_className:'7st'},
                {msg:'如今,我不想放弃,只想保护你,想看着你成为你心目中的成熟女性。',color:'rgba(212,191,0,.7)',_className:'8st'},
                {msg:'即使真正陪你走完一生的不是我..',color:'rgba(224,232,199,.7)',_className:'9th'},
                {msg:'我有个愿望:想带你去看一切的美好,去雪山感受白雪的飘然,深海的深邃,夕阳的余晖...',color:'rgba(205,212,241,.7)',_className:'10st'},
            ],
        },
        descriptionInfo: {
            title: 'To My Little Lazy Cat',
            content: '希望你能开心快乐每一天!!!',
            feature: [{
                    iconType: 'smile',
                    title: '我',
                    detailContent: '技术栈:react + redux + scss + es6 + react-router + antd(v3.10.5) + webpack'
                },
                {
                    iconType: 'appstore',
                    title: '是',
                    detailContent: '记录自己生活的点点滴滴,希望能把自己喜欢的东西展示给你'
                },
                {
                    iconType: 'file-text',
                    title: '一',
                    detailContent: '我的简历,希望你能一眼了解我的工作'
                },
                {
                    iconType: 'question-circle',
                    title: '只',
                    detailContent: '灵感凸现,记录下来'
                },
                {
                    iconType: 'question-circle',
                    title: '懒',
                    detailContent: '灵感凸现,记录下来'
                },
                {
                    iconType: 'question-circle',
                    title: '🐈',
                    detailContent: '灵感凸现,记录下来'
                }
            ]
        }
    }
}