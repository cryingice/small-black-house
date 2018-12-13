export default {
    logoSrc: 'https://t.alipayobjects.com/images/rmsweb/T1B9hfXcdvXXXXXXXX.svg',
    logoText: 'ANTD ADMIN',
    home: {
        title: ['项目前言','项目上手','访问','项目说明'],
        introduction: {
            star: {
                text: '⭐️star一下,您的支持是我的动力',
                link: 'https://github.com/cryingice/react-learn-management'
            },
            content: '本工程主要基于react + redux + scss + es6 + react-router + antd(v3.10.5) + webpack实现,是用来练手的项目,为业余时间所做。基于create-react-app快节奏搭建。'
        },
        install:{
            steps: [{
                title: '下载',
                content: '<p>$&nbsp;&nbsp;&nbsp;git clone</p><p>$&nbsp;&nbsp;&nbsp;git clone https://github.com/sosout/react-antd.git</p><p>$&nbsp;&nbsp;&nbsp;cd react-antd</p>',
            }, {
                title: '安装',
                content: '<p>// 安装前请先确保已安装node和npm</p><p>// 安装成功后,再安装依赖，如果之前有用npm安装过，请先删掉node_modules</p><p>$&nbsp;&nbsp;&nbsp;yarn install</p>',
            }, {
                title: '运行',
                content: '<p>$&nbsp;&nbsp;&nbsp;yarn run dev （正常编译模式，注意：index.html里必须手动引用app.css，<link href="/antd/dist/app.css" rel="stylesheet" />，否则没有样式）</p><p>$&nbsp;&nbsp;&nbsp;yarn run hot （热替换编译模式，注意：热替换模式下index.html里去掉引用app.css）</p><p>$&nbsp;&nbsp;&nbsp;yarn run dist （发布生产版本，对代码进行混淆压缩，提取公共代码，分离css文件）</p>',
            }]
        }
        
    }

}