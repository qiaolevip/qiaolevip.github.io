/**
 * Created by happy on 3/15/18.
 */
function $(id) {return document.getElementById(id)}

new Vue({
  el: '#main_content',
  data: {
    expList: [
      {
        date: '2018年度',
        title: '微信小程序-直播答题（小程序）',
        exps: [
          '小程序整体技术架构：小程序(前端)+Nodejs(中间层)+Java(后端)，为了应对流行的小程序+直播答题拉新的势头，公司经过3周完成需求调研，产品定型，产品设计，开发测试完成，进入正式上线提交审核阶段。我在中间主要负责前后端资源协调，小程序架构管理，技术和产品功能需求跨部门沟通，公司账户和小程序绑定和提现功能开发。',
          '行业敏感词合规内部系统输入校验。'
        ]
      },
      {
        date: '2017年度回顾',
        title: '2017年度年度点评',
        exps: [
          '自评: 自我学习：除了自己负责的点融币系统、会员中心和兑换商城开发的技术储备知识外，空闲时间，学习新的前端框架并增强自有技术的能力。',
          'Lead评估意见: 能够快速响应需求，根据实际需求，快速的给出需求方的技术方案。在前端架构技术上，提升很快，社区的同构框架顺利完成，业务需求迭代也快，有责任心。做事严谨有条理。'
        ]
      },
      {
        date: '2017/12',
        title: 'React同构框架（React）',
        exps: [
          'React同构框架：为了应对多变和适应网站的更多需求，增强前端开发的技术储备量，在空闲时间段研究React同构框架，集成目前成熟的React插件和服务，结合目前线上运行项目的开发经验，开发适合点融前端业务的架构，便于后期开发一致性和易用性。目前框架处于demo研究状态，后期会应用到实际项目当中，提升业务开发的多功能性。'
        ]
      },
      {
        date: '2017/11',
        title: '运营活动（React）',
        exps: [
          '火眼金睛/猜拳游戏：通过趣味性的火眼金睛游戏，配合100%的中奖概率吸引用户进行参与活动当中，在年底即将清除去年的点融币的时候推出的一款消耗点融币的渠道，即增加了用户参与的乐趣又避免了用户的客诉，还能更好的维系用户的忠诚度。上线后配合猜拳游戏日均访问量到达45,000，日消耗4,900,000点融币。'
        ]
      },
      {
        date: '2017/10',
        title: '社区（React）',
        exps: [
          '社区好友券赠送：通过收集社区不断用户高频的反馈，获取到有些用户有券没钱投资，有些用户急需券用来投资，为了达成用户的这一心声，我协助社区team开发了好友赠送功能，通过赠送达到资源更好的利用率，进而促进投资者投资的意愿达成。通过上线用户的使用和反馈，这一便民功能还是很贴合用户的使用场景，为用户之间的交流增加了更好的友谊值，也极大程度避免了券的浪费现象。'
        ]
      },
      {
        date: '2017/08',
        title: '点融币系统（React）',
        exps: [
          '点融币系统：点融币系统的诞生是把之前分落在各处的点融币功能整合在一起，为了用户更佳便利的管理和赚取、消耗点融币。用户可以很方便的查询自己点融的记录，并可以通过各种渠道赚取点融币，通过参加各种活动花费点融币赚取丰厚的奖品，从而到达促进用户的忠诚度。'
        ]
      },
      {
        date: '2017/05',
        title: '会员中心系统（React）',
        exps: [
          '会员中心：为了达成用户促忠的目标，我们team开发了全新的会员中心，为不同投资额等级的会员带来更多的适用的优惠，通过每月领取的各种优惠券、加息券或生日礼包促进用户在主站进行再次投资。通过不同等级对应不同的额度，从而是用户为了获取更高的实惠而进行更高的投资。在此期间通过A/B Test对不同等级用户的领券测试，进而优化更佳的加息促投运营。通过全量用户的推广，每天达到约16,000人之多进入会员中心体验&领券。',
          '会员月度礼包：会员体系的核心功能，促进用户的投资额。'
        ]
      },
      {
        date: '2017/02',
        title: '投资商城系统（React）',
        exps: [
          '新老商城切换：年前商城从旧版在极短的时间内快速迁移到新版的商城，我们team设定第一季度要把商城完全迁移到新版平台上，避免多套系统交错使用导致不必要的错误，我在当中不断的和成都开发team进行新版商城整体功能联调测试，并提供新版商城迁移所需的信息。在我们新版商城上线后，页面加载速度大幅度提升，功能完善性也是100%还原，避免了用户有体验不一致的情况。在下半年业务调整前，依旧为点融带来近1700w的投资额。'
        ]
      },
      {
        date: '2016年度回顾',
        title: '2016年度年度点评',
        exps: [
          '自评: 通过对项目进度的把控过程中，学会了更好的团队合作和跨部门协调资源，最大力度的提高并保证项目的完成进度。通过半年来不同的促销场景和促销活动当中，为公司带来了超过4000w的商城商品投资额度。',
          'Lead评估意见: 乔乐的代码质量一直很高，年初快速的接手商城进行代码层面重构，让代码的模块部分结构更合理，工作态度和节奏都在慢慢进入互联网公司的节奏，能够承受高压，高压下同时能保证代码质量，在商城交给到成都，开发兼项目管理的角色令人眼前一亮。'
        ]
      },
      {
        date: '2016/12',
        title: '投资商城系统（React）- 整站迁移',
        exps: [
          '商城整站迁移：由于本次的商城整站迁移的时间特别紧张，从之前的3个月缩短到1个月，我在当中负责督促并保证新版商城的整体进度，在整体的开发过程中，通过每日统计项目进度到问题的分发，配合测试和前后端联调。',
          '前端框架优化：相对于之前的React开发框架，Gulp+Webpack的打包方式，经过调整后全部使用Webpack打包，大大提高了开发编译的过程，减少每次修改的等待时长，让开发变得更加有趣和快速。'
        ]
      },
      {
        date: '2016/06',
        title: '投资商城系统（React）- 功能迭代',
        exps: [
          '商城搜索功能：当商城商品日益增多不断壮大的情况下，为了用户有更好的选购体验，增加了商品搜索功能，让用户能够更好更快的直达他想要的商品，从而促进商品的投资。',
          '商城爱大牌促销模块：为了更好的为用户提供品牌商家提供高质量商品的同时，应景促生了爱大牌的滋生，通过商城主页强力入口引流进入爱大牌，让爱大牌当期和下期的商品有很好的展现形式，提供用户另一种投资商品体验。'
        ]
      },
      {
        date: '2016/05',
        title: '投资商城系统（React）- 促销活动',
        exps: [
          '商城投资用券：为了促销商城商品的销量，用户在领取到各种券后，可以在投资的时候选择相应的券进行投资。大大促进了用户的投资欲望和投资额度。',
          '清凉一夏活动：清凉一夏活动是在夏季增加的一个促进投资额的活动，通过3个时间段进行不同热门商品的促销和抢购各种券，促进用户的活跃度，增加用户的投资额，让用户在炎热的夏天有清凉的感觉。'
        ]
      },
      {
        date: '2016/03',
        title: '投资商城系统（React）- 整站改版V2',
        exps: [
          '商城整站改版：在整站改版的过程中，我负责整个项目的进度，配合UX视觉改版，推进后端提供功能，分配前端相关任务，本次改版包含了整站所有的内容。改版后用户交互及活跃度都有了很大的提升。',
          '商城商品多sku：相比之前商品单一的属性，远远不能满足用户投资商品的需求，通过对商品添加多种维度的属性后，把单一的sku变成多sku，让用户在选购的时候有更多的选择，提高了用户更好的体验场景。'
        ]
      },
      {
        date: '2015年度回顾',
        title: '2015年度年度点评',
        exps: [
          '自评: 在这一年中我学到怎么通过自己的技术提升在团队的影响力，带领指导新人融入工作氛围中，快速和跨部门和其他部门同事合作，在遇到问题，及时找相关人员反馈，汇报任务进度。紧跟新技术的步伐，在业余时间里学会了React技术，对未来工作有着重要性的铺垫。',
          'Lead评估意见：今年和去年相比进步巨大，不管从技术上说，还是在团队合作，以及跨部门合作上，进步大家有目共睹，在做商城的时候，通过每天对进度的不断跟进，协调相关开发人员资源。'
        ]
      },
      {
        date: '2015/11',
        title: '接手商城系统（React）',
        exps: [
          '商城增加加息券：商城开发的过程中，接触新的前端技术，在自学过程中并按时开发，及时与APP和后端同事沟通，提供需要的资源，进行多情况流程测试，保证加息券上线中的质量，提高用户使用过程中交互。'
        ]
      },
      {
        date: '2015/10',
        title: '社区（jQuery）- 点融币系统',
        exps: [
          '重构PC端和Mobile端vip等级和点融币，增强用户交互功能，提升加载速度和用户体验。'
        ]
      },
      {
        date: '2015/09',
        title: '点融H5主站（AngularJs）- 合作商户',
        exps: [
          '新增东方资产团：在做东方资产团的时候，时间比较紧凑，在这种情况下，积极与后端和产品沟通，快速开发进行多次测试并完成上线测试部署。',
          '商超电子券活动：此次资源的协调不仅对内市场部还需对外第三方商券公司，及时联系第三方进行调试，配合市场部与超市合作扫码送体验金流程，增加用户注册人数。'
        ]
      },
      {
        date: '2015/07',
        title: '点融H5主站（AngularJs）- 功能迭代',
        exps: [
          '利息复投：由于这是拆分之前团队重组新的团队，在开发过程中需要快速转变工作方式，为了推进利息复投用户快速上手，遵从设计原则并友好进行引导用户操作，完成开启功能，帮助用户赚取更多的利息。',
          '前端V2支付重构：后端api升级，前端紧跟步伐，我负责前端v2支付相关内容重构，保证操作流程正常的情况下，并检查交易过程中的安全问题，实现一个接口多方受用。'
        ]
      },
      {
        date: '2015/05',
        title: '交通银行整站定制化（AngularJs+NodeJs）',
        exps: [
          '在仅有的两周时间内，主要负责带头开发，任务分配，协调资源和部署环境，一个人当两人用，快速响应对方的需求，紧盯项目进度，及时汇报进度和问题并解决，协助交行成功上线。'
        ]
      },
      {
        date: '2015/04',
        title: '苏融银行定制开发交付（AngularJs+NodeJs）',
        exps: [
          '历经半年跟踪这个项目，一个人和多个团队协调资源，积极参与项目变更，提出修改合理性问题及建议，在最后冲刺阶段，协调资源和素材加班完成需要的设计，保证上线成功运行。'
        ]
      },
      {
        date: '2015/03',
        title: '点融H5主站（AngularJs）- H5充值提现升级',
        exps: [
          'H5充值提现升级：在完成上次支撑日交易量到达上千万的基础上，再次升级充值提现流程，开发过程中考虑充值多达10种以上的情况（含用户信息、卡号状态和账号类型）一一进行测试，确保充值这一关卡万无一失，为h5端充值提升大幅度交易额度，支撑日较量2000w。简化提现流程，方便快捷简易操作。'
        ]
      },
      {
        date: '2015/02',
        title: '点融PC主站（AngularJs）- Web取现功能重构',
        exps: [
          'Web取现功能重构：首次重构web取现功能，重构出易于再次开发和拓展的代码。有明显的用户引导标识，提升用户提现体验流程，实现快速提现操作。'
        ]
      },
      {
        date: '2014/08~12',
        title: '新公司业务快速融入（微信开发+AngularJs）',
        exps: [
          '第三方登录：实现微博和QQ登录点融网并成为会员。',
          '微信开发：自学NodeJs开发，开发公司公众号的微信服务。',
          'H5支付：协同ux和api组协同开发h5支付系统。',
          'web取现：手机快捷提现，告别繁琐流程。'
        ]
      },
      {
        date: '2014/05',
        title: '火车票在线购票系统（Java+ssh+jQuery）',
        exps: [
          '该项目终端界面通过Eclipse开发，使用Java语言开发，使用轻量级的Spring MVC框架搭建系统，使用Maven Lib库构建，使用Jetty作为本地Web服务器。开发过程中，通过Facade层从代理获取数据，然后传给Business层，缓存使用Memory Cache，通过Spring MVC控制器承载前端和后台跳转，前端开发主要使用Velocity和jQuery。 ',
          '开发终端界面流程，和代理调试并获取第三方数据缓存在本地，通过报文形式发送支付信息到前置系统，完成支付流程，调用打印机打印凭条信息。'
        ]
      },
      {
        date: '2014/02',
        title: '酒店预订系统（Java+ssh+jQuery）',
        exps: [
          '该项目终端界面通过Eclipse开发，使用Java语言开发，使用轻量级的Spring MVC框架搭建系统，使用Maven Lib库构建，使用Jetty作为本地Web服务器。开发过程中，通过Facade层从代理获取数据，然后传给Business层，缓存使用Memory Cache，通过Spring MVC控制器承载前端和后台跳转，前端开发主要使用Velocity和jQuery。 ',
          '开发终端界面流程，和代理调试并获取第三方数据缓存在本地，通过报文形式发送支付信息到前置系统，完成支付流程，调用打印机打印凭条信息。'
        ]
      },
      {
        date: '2013/10',
        title: '飞机票在线购票系统（Java+ssh+jQuery）',
        exps: [
          '该项目终端界面通过Eclipse开发，使用Java语言开发，使用轻量级的Spring MVC框架搭建系统，使用Maven Lib库构建，使用Jetty作为本地Web服务器。开发过程中，通过Facade层从代理获取数据，然后传给Business层，缓存使用Memory Cache，通过Spring MVC控制器承载前端和后台跳转，前端开发主要使用Velocity和jQuery。 ',
          '开发终端界面流程，和代理调试并获取第三方数据缓存在本地，通过报文形式发送支付信息到前置系统，完成支付流程，调用打印机打印凭条信息。'
        ]
      },
      {
        date: '2013/5',
        title: '电影票在线购票系统（Java+ssh+jQuery）',
        exps: [
          '该项目终端界面通过Eclipse开发，使用Java语言开发，使用轻量级的Spring MVC框架搭建系统，使用Maven Lib库构建，使用Jetty作为本地Web服务器。开发过程中，通过Facade层从代理获取数据，然后传给Business层，缓存使用Memory Cache，通过Spring MVC控制器承载前端和后台跳转，前端开发主要使用Velocity和jQuery。 ',
          '开发终端界面流程，和代理调试并获取第三方数据缓存在本地，通过报文形式发送支付信息到前置系统，完成支付流程，调用打印机打印凭条信息。'
        ]
      },
      {
        date: '...',
        title: '...'
      }
    ]
  }
});

var waterMarkText = 'qiaolevip';
var canvas = document.createElement('canvas');
var ctx = canvas.getContext('2d');
canvas.width = canvas.height = 150;
ctx.textAlign = 'center';
ctx.textBaseline = 'middle';
ctx.globalAlpha = 0.08;
ctx.font = '20px Microsoft Yahei';
ctx.translate(50, 50);
ctx.rotate(-Math.PI / 4);
//    ctx.fillText(waterMarkText, 0, 0);
ctx.strokeStyle = '#fff';
ctx.strokeText(waterMarkText, 10, 50);

var pieChart = echarts.init($('pieChart'));
pieChart.setOption({
  backgroundColor: {
    type: 'pattern',
    image: canvas,
    repeat: 'repeat'
  },
  title: {
    text: '个人特色',
    left: 'center',
    top: 20,
    textStyle: {
      color: '#ccc'
    }
  },
  /*tooltip : {
   trigger: 'item',
   // formatter: "{a} <br/>{b} : {c} ({d}%)"
   formatter: "{a} <br/>{b} : {d}%"
   },*/
  series : [
    {
      name: '个人特色',
      type: 'pie',
      radius: '55%',
      roseType: 'angle',
      itemStyle: {
        emphasis: {
          shadowBlur: 200,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      },

      animationType: 'scale',
      animationEasing: 'elasticOut',
      animationDelay: function (idx) {
        return Math.random() * 300;
      }
    }
  ]
});
pieChart.setOption({
  series: [
    {
      data: [
        {value:300, name:'前端架构'},
        {value:280, name:'跨部门沟通'},
        {value:335, name:'进度推进'},
        {value:380, name:'高效开发'},
        {value:400, name:'质量把控'}
      ]
    }
  ]
});

var lineChart = echarts.init($('lineChart'), 'dark');
lineChart.setOption({
  title: {
    text: '具备技能',
    left: 'center'
  },
  tooltip: {show: false},
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    axisLabel: {
      rotate: 25,
      margin: 12
    }
  },
  yAxis: {},
  series: {
    type: 'bar',
    name: '个人技术点',
    legendHoverLink: true
  }
});
lineChart.setOption({
  dataset: {
    dimensions: ['name', 'value'],
    source: [
      {name: 'React', value: 96},
      {name: 'H5', value: 98},
      {name: 'AngularJs', value: 95},
      {name: 'Vue', value: 86},
      {name: 'jQuery', value: 98},
      {name: 'Css3', value: 88},
      {name: 'NodeJs', value: 85},
      {name: 'MongoDB', value: 83},
      {name: 'Java', value: 80},
      {name: 'Mysql', value: 92},
      {name: 'Linux', value: 78},
      {name: 'PHP', value: 70},
      {name: 'Webpack', value: 88},
      {name: 'Wechat', value: 86},
      {name: 'More..', value: 90}
    ]
  }
});

var radarChart = echarts.init($('radarChart'), 'dark');
radarChart.setOption({
  title: {
    text: '个人综合能力雷达图',
    left: 'center'
  },
  tooltip: {show: false},
  radar: {
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        backgroundColor: '#999',
        borderRadius: 3,
        padding: [3, 5]
      }
    },
    indicator: [
      { name: '专业技能（Professional Skill）', max: 100},
      { name: '计划能力（Planning Ability）', max: 100},
      { name: '应变能力（Strain Capacity）', max: 100},
      { name: '沟通能力（Communication Skills）', max: 100},
      { name: '执行能力（Executive Ability）', max: 100},
      { name: '自我学习（Self Learning）', max: 100},
      { name: '领导能力（Leadership Ability）', max: 100}
    ]
  },
  series: [{
    name: '预算 vs 开销（Budget vs spending）',
    type: 'radar',
    // areaStyle: {normal: {}},
    data : [
      {
        value : [92, 85, 80, 76, 95, 80, 55],
        name : '综合能力（Comprehensive Ability）'
      }
    ]
  }]
});
