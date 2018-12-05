This document was editor by duanlinlin to update component named ruleModal

# 图片尺寸字段

## 一、系统推荐模板

### 1.商品
| code  |名称| styleid       |  图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: |
|  SYSTEM_WARE_TEMPLATE   |商品模板|  ''        |   有    | 无 |''
|  SYSTEM_CUSTOMIZED_WARE   |自定义商品组模板|  用户自定义        |   有    | 无|''
|SYSTEM_TOTALPRICE_PROMO_TEMPLATE|总价促销商品模板|''|有|无|''|

### 2.广告(通天塔专用)

#### 1).通天塔广告模板

>   oneInputStyleId -- 多个radio,每个radio用户自定义设置高度

>   radioStyleId_single  -- 多个radio,每个radio一组宽高 宽*高

>   specialStyleId -- 特殊模板下面的特殊样式,选中该样式下拉框下面不展示用户设置选项(除通天塔店铺模板)

>   shop_specialStyleId -- 通天塔店铺模板下面的特殊样式,选中该样式下拉框下面不展示用户设置选项

>   group_radioStyleId_double -- 多个radio,每个radio两组宽高 `宽高、 宽高`(通天塔组合样式)

| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_BABEL_AD_TEMPLATE   |通天塔广告模板|  15  |oneInputStyleId |  无    | 有 |'1'
|  SYSTEM_BABEL_AD_TEMPLATE   |通天塔广告模板|  5-13/14/44/37/39/23-30/41/40/42/68/48/117/118/121/1010 |radioStyleId_single |  有   | 无 |'1'
|  SYSTEM_BABEL_AD_TEMPLATE   |通天塔广告模板|  45/71/119/1040/1041/1042  |specialStyleId |  有    | 无 |'1'

#### 2).通天塔组合样式模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_BABEL_GROUP_TEMPLATE   |通天塔组合样式模板| 1-4/34-36  |group_radioStyleId_double |  有   | 无 |'50'

#### 3).通天塔广告 商品模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_BABEL_GROUP_TEMPLATE   |通天塔广告 商品模板| 52 |specialStyleId |  有   | 无 |'52'
|  SYSTEM_BABEL_GROUP_TEMPLATE   |通天塔广告 商品模板| 116 |oneInputStyleId |  无   | 有 |'52'


#### 4).通天塔店铺模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_BABEL_SHOP_TEMPLATE   |通天塔店铺模板| 50/51/57/115/ |shop_specialStyleId |  有   | 无 |'51'
|  SYSTEM_BABEL_SHOP_TEMPLATE   |通天塔店铺模板| 5-13 |radioStyleId_single |  有   | 无 |'51'

#### 5).通天塔PC广告模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_PC_BABEL_MAIN_AD_TEMPLATE   |通天塔PC广告模板| 98 |oneInputStyleId |  无   | 有 |'53'

#### 6).试用广告模板(表单无图片字段)
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_TRY_AD_TEMPLATE   |试用广告模板| 46 |oneInputStyleId |   无  | 无 |'101'

### 3.广告(非通天塔专用)
none -- 没有样式下拉框的模板
#### 1).无样式下拉框的模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_AD_TEMPLATE   |普通广告模板| none |none |  有   | 无 |''|
|  SYSTEM_GROUP_TEMPLATE   |组合样式模板| none |`多尺寸选一` |  有   | 无 |''|


#### 2).app首页广告模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_APP_MAIN_AD_TEMPLATE   |app首页广告模板| 67/75/76/85/1003/1022 | specialStyleId |  有   | 无 |'5'|

#### 3).PC首页入口图
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_PC_MAIN_AD_ENTRY_TEMPLATE   |PC首页入口图| 5 | specialStyleId |  有   | 无 |'4'|

#### 4).PC首页广告模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_PC_MAIN_AD_TEMPLATE   |PC首页广告模板| 58-60/65/87/1001/1002 | specialStyleId |  有   | 无 |'3'|

### 4.促销
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_PROMO_TEMPLATE   |促销模板| '' |none |  有   | 无 |''|
|  SYSTEM_CUSTOMIZED_PROMO   |自定义商品（收促销）| '' |none |  有   | 无 |''|

### 5.优惠券
#### 1).优惠券
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_COUPON_TEMPLATE   |优惠券| 72/82/1005 | specialStyleId |  有   | 无 |'6'|

#### 2).金融券
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_FINANCE_COUPON_TEMPLATE   |金融券| 1004 | specialStyleId |  有   | 无 |'104'|

### 6.拼购

| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_BUY_TOGETHER_TEMPLATE   |拼购模板（WQ拼购频道专用）| '' |none |  有   | 无 |''|
|  SYSTEM_BUY_TOGETHER_UNWEIXIN_TEMPLATE   |拼购模板（通天塔使用）| '' |none |  有   | 无 |''|

### 7.自建促销

| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_DIRECT_PROMO_TEMPLATE   |促销模版(普通直降)| '' |none |  有   | 无 |''|
|  SYSTEM_LIMIT_BUY_PROMO_TEMPLATE   |促销模版(限时抢购)| '' |none |  有   | 无 |''|

### 8.WQ业务

| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_BRAND_SALE_TEMPLATE   |品牌特卖模板| 1002 | specialStyleId |  有   | 无 |'107'|


## 二、系统定制模板

### 1.广告
#### 1)无样式下拉框的模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_FULL_AMOUNT_TEMPLATE   |图书促销-全额承担模板| none |none |  有   | 无 |''|
|  SYSTEM_MIX_AMOUNT_TEMPLATE   |图书促销-混合承担模板| none |none |  有   | 无 |''|
|  SYSTEM_FULL_MONTH_TEMPLATE   |全月返征集模板| none |none |  有   | 无 |''|
|  SYSTEM_COMMERCIALIZATION_INVESTMENT   |商业化-招商模板| none |none|  有   | 无 |''|
|  SYSTEM_BRANDS_SPIKE_TEMPLATE   |品牌秒杀| none | none |  有   | 无 |''|
|  SYSTEM_CATEGORY_SPIKE_TEMPLATE   |品类秒杀| none | none |  有   | 无 |''|
|  SYSTEM_ACE_STARTER   |品类秒杀| none | none |  有   | 无 |''|
|  SYSTEM_ATMOSPHERE_FLOOR_ONE   |氛围楼层1| none | none |  有   | 无 |''|
|  SYSTEM_BANNER_IMAGE_MANAGE   |banner图管理| none | none |  有   | 无 |''|
|  SYSTEM_ATMOSPHERE_FLOOR_TWO   |氛围楼层2| none | none |  有   | 无 |''|
|  SYSTEM_MAIN_HEAD_TEMPLATE   |首页头部位置| none | none |  有   | 无 |''|
|  SYSTEM_NEWCOME_CONTENT_TEMPLATE   |精选/穿搭/家居| none | none |  有   | 无 |''|
|  SYSTEM_ONE_SHOP_SUPER_BRAND_TEMPLATE   |1号店超级品牌| none | none |  有   | 无 |''|
|  SYSTEM_ONE_SHOP_SUPER_CATEGORY_TEMPLATE   |1号店超级品类| none | none |  有   | 无 |''|
|  SYSTEM_THEME_TEMPLATE   |东家小院场景页面| none | none |  有   | 无 |''|
|  SYSTEM_THEME_TEMPLATE   |东家小院场景页面| none | none |  有   | 无 |''|

#### 2)倍数样式
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_HORSE_RACE_SPECIAL   |倍数样式| 5-13 | specialStyleId |  有   | 无 |'102'|

#### 3)京豆计划
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_SHOP_TEMPLATE   |京豆计划| 1006 | specialStyleId |  有   | 无 |'105'|

#### 4)赛马倍数样式店铺组
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_SHOP_TEMPLATE   |京豆计划| 5-13 | specialStyleId |  有   | 无 |'106'|

#### 5)PLUS广告模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_PLUS_AD_TEMPLATE   |PLUS广告模板| 1022 | specialStyleId |  有   | 无 |'108'|

### 2.大促
#### 1)无样式下拉框的模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_VENUE_LINK_TEMPLATE   |会场链接模板| none |none |  `宽 高都不展示`   | 无 |''|
|  SYSTEM_PRE_SELECT_TEMPLATE   |预选商家模板| none |none |  有   | 无 |''|

#### 2)倒计时红包雨
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_COUNTDOWN_RED_ENVELOPE_TEMPLATE   |倒计时红包雨| 1028 |specialStyleId |  有   | 无 |'109'|

### 3.优惠券
#### 1)无样式下拉框的模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_COUPON_CENTER_TEMPLATE   |优惠券（仅领券中心）模板| none |none |  有   | 无 |''|

## 三、系统定制模板
| code  |名称| styleid       | 类型| 图片高    | 图片最大高|styletype|      
| :----: |:----: | :----: | :----: | :----: | :----: | :----: |
|  SYSTEM_CUSTOM_TEMPLATE   |自定义模板| none |none |  有   | 无 |''|

