/**
 * Created by happy on 3/15/18.
 */
function $(id) {return document.getElementById(id)}

new Vue({
  el: '#main_content',
  data: {
    expList: [
      {
        date: '2018/02',
        title: '经验总结标题-经验总结标题-经验总结标题-',
        exps: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis',
          '经验总结小结-经验总结小结-经验总结小结-经验总结小结-经验总结小结-经验总结小结-经验总结小结-'
        ]
      },
      {
        date: '2017/01~2018/01',
        title: '经验总结标题-经验总结标题-经验总结标题-',
        exps: [
          'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio ea necessitatibus quo velit natus cupiditate qui alias possimus ab praesentium nostrum quidem obcaecati nesciunt! Molestiae officiis',
          '经验总结小结-经验总结小结-经验总结小结-经验总结小结-经验总结小结-经验总结小结-经验总结小结-'
        ]
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
