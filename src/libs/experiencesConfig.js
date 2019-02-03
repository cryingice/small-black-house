/*
 * @Author: duanlinlin 
 * @Date: 2019-01-14 17:00:50 
 * @Last Modified by: duanlinlin
 * @Last Modified time: 2019-01-28 00:49:04
 */
// config of expreices(resume)
export default {
    CN: {
        titles: {
            basisInfo: '基本信息',
            contact: '联系方式',
            connect: '社交方式'
        },
        aside: {
            basisInfo: [{
                    category: '姓名',
                    val: 'cryingice'
                },
                {
                    category: '年龄',
                    val: '26'
                },
                {
                    category: '性别',
                    val: '男'
                },
                {
                    category: '毕业院校',
                    val: '南京航空航天大学'
                },
                {
                    category: '学历',
                    val: '本科'
                },
                {
                    category: '专业',
                    val: '飞行器环境与生命保障工程'
                },
                {
                    category: '当前所在地',
                    val: '上海 - 长宁'
                },
                {
                    category: '所在公司',
                    val: '京东-上海设计部-前端开发组'
                },
                {
                    category: '英语',
                    val: 'CET-4'
                },
                {
                    category: '期望薪资',
                    val: '面议'
                },
                {
                    category: '工作经验',
                    val: '3年'
                },
                {
                    category: '爱好',
                    val: '骑行 徒步 旅游 吹陶笛 动漫 游戏'
                }
            ],
            contact: [{
                    category: '联系方式',
                    val: '18701961690'
                },
                {
                    category: '邮箱',
                    val: '18701961690@163.com'
                },
            ],
            connect: [{
                    category: '微信',
                    val: 'dllskystream'
                },
                {
                    category: 'github',
                    val: 'https://github.com/cryingice'
                }
            ]
        },
        header: {
            headerInfo: {
                name: "Cryingice",
                job: '京东商城 - 上海设计部 - 前端工程师',
                contact: [{
                        class: 'mobile-phone',
                        type: 'mobile',
                        val: '18701961690'
                    },
                    {
                        class: 'e-mail',
                        type: 'mail',
                        val: '18701961690@163.com'
                    },
                ]
            }
        },
        main: [{
                skill: {
                    title: '技能点',
                    titleColor: '#0c2850',
                    content: [{
                            percentInfo: {
                                percentText: 'HTML/CSS',
                                rateNum: 80
                            },
                            singleSkillContentInfo: [
                                'a.精通 div+css布局精确的还原设计图进行页面布局;',
                                'b.熟悉HTML5.CSS3的新特性，对前端性能优化有一定认识;',
                                'c.熟练使用flex+百分比/rem+百分比/vw/vh来进行移动端页面布局.'
                            ]

                        },
                        {
                            percentInfo: {
                                percentText: 'javascript',
                                rateNum: 75
                            },
                            singleSkillContentInfo: [
                                'a.掌握原生JavaScript操作DOM，BOM元素;',
                                'b.对前后端架构分离有着一定的理解，能使用AJAX、JSONP、和CORS等技术进行项目前后端分离开发;',
                                'c.熟练使用ES6的大部分新特性;',
                                'd.对于JS中面向对象、继承、原型链、闭包等面向对象的知识有一定的掌握与了解.'
                            ]

                        },
                        {
                            percentInfo: {
                                percentText: '框架/库',
                                rateNum: 80
                            },
                            singleSkillContentInfo: [
                                'a.熟练使用jQuery、Zepto等库;',
                                'b.有较好的文档查看能力，能熟练使用如swiper/iscroll的常用插件;',
                                'c.熟练应用vue + iview +webpack搭建项目并进行开发;',
                                'd.熟练应用react + antd + redux + react-router + webpack搭建项目;',
                                'e.对ts有一定了解;',
                                'f.了解node express框架以及常用工具'
                            ]
                        },
                        {
                            percentInfo: {
                                percentText: '工具',
                                rateNum: 80
                            },
                            singleSkillContentInfo: [
                                'a.掌握PS、FW等工具的使用;',
                                'b.掌握使用git/gulp/webpack等主流研发流程工具;',
                                'c.掌握visual studio code/sublime编码工;',
                                'd.熟练应用vconsole、mac Safari调试工具调试移动端页面;',
                            ]
                        }
                    ],
                },
                currentPageKeyWord: {
                    title: '下一页关键词',
                    titleColor: '#0c2850',
                    triggleText: '下一页',
                    content: [
                        '工作经历',
                        '项目经验',
                        'Vue',
                        'React',
                        '后台管理系统',
                        '京东双十一活动'
                    ],
                    colorArea: ['#001529', '#0f4980', '#dd9120', '#8c20dd', '#607d8b']
                }
            },
            {
                company: {
                    title: '工作经历',
                    titleColor: '#0c2850',
                    content: [{
                        type:'company1',
                        dotMsg: {
                        },
                        textMsg: [
                            '上海力晨信息技术有限公司',
                            '前端工程师',
                            '2015.07入职'
                        ]
                    }, {
                        type:'project-healthy',
                        dotMsg: {
                            color:'green',
                        },
                        textMsg: [
                            '养生食疗Vue项目',
                            '2017.04至2017.07',
                        ]
                    },
                    {
                        type:'company2',
                        dotMsg: {
                            fontSize: '16px'
                        },
                        textMsg: [
                            '京东商城上海设计部',
                            '前端工程师',
                            '2017.12入职'
                        ]
                    }, 
                    {
                        type:'project-double-eleven',
                        dotMsg: {
                            color:'green',
                        },
                        textMsg: [
                            '双十一京东plus活动专场5期',
                            '2017.09至2017.11'
                        ]
                    },
                    {
                        type:'project-myself',
                        dotMsg: {
                            color:'green',
                            type: 'clock-circle-o',
                            fontSize: '16px'
                        },
                        textMsg: [
                            'react + redux + scss + es6 + react-router + antd + webpack项目实战(当前项目)',
                            '2017.11至今'
                        ]
                    },
                    {
                        type:'project-management',
                        dotMsg: {
                            color:'green',
                            type: 'clock-circle-o',
                            fontSize: '16px'
                        },
                        textMsg: [
                            '京东营销后台提报系统',
                            '2017.12 至今'
                        ]
                    },
                ],
                },
            }
        ]

    },
    EN: {

    }

}