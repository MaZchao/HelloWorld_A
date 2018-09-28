var option = {};
var dimensions = [
  'MonthFullName',
  'SumofStockVolume1',
  'SumofStockWeek1',
  'MonthSort'
];
var data = [
  {
    MonthFullName: 'Apr',
    SumofStockVolume1: 1145429033.0200002,
    SumofStockWeek1: 5.029721569289909,
    MonthSort: 7
  },
  {
    MonthFullName: 'Aug',
    SumofStockVolume1: 1228772858.13,
    SumofStockWeek1: 4.602661855391118,
    MonthSort: 11
  },
  {
    MonthFullName: 'Dec',
    SumofStockVolume1: 915518110.1299995,
    SumofStockWeek1: 3.312342362370725,
    MonthSort: 3
  },
  {
    MonthFullName: 'Feb',
    SumofStockVolume1: 1194991733.9700003,
    SumofStockWeek1: 5.377005816134584,
    MonthSort: 5
  },
  {
    MonthFullName: 'Jan',
    SumofStockVolume1: 1045315872.7899998,
    SumofStockWeek1: 3.9660986868845924,
    MonthSort: 4
  },
  {
    MonthFullName: 'Jul',
    SumofStockVolume1: 1230468759.6400008,
    SumofStockWeek1: 4.535953503914956,
    MonthSort: 10
  },
  {
    MonthFullName: 'Jun',
    SumofStockVolume1: 1163667398.5300002,
    SumofStockWeek1: 4.387154728946988,
    MonthSort: 9
  },
  {
    MonthFullName: 'Mar',
    SumofStockVolume1: 1152177478.5299995,
    SumofStockWeek1: 5.009479236362304,
    MonthSort: 6
  },
  {
    MonthFullName: 'May',
    SumofStockVolume1: 1133331864.64,
    SumofStockWeek1: 4.547322582383419,
    MonthSort: 8
  },
  {
    MonthFullName: 'Nov',
    SumofStockVolume1: 893411031.5500002,
    SumofStockWeek1: 3.2909203030476957,
    MonthSort: 2
  },
  {
    MonthFullName: 'Oct',
    SumofStockVolume1: 862732138.9699999,
    SumofStockWeek1: null,
    MonthSort: 1
  },
  {
    MonthFullName: 'Sep',
    SumofStockVolume1: 1171077639.0400012,
    SumofStockWeek1: null,
    MonthSort: 12
  }
];
var dataObj = {
  MonthFullName: [
    'Apr',
    'Aug',
    'Dec',
    'Feb',
    'Jan',
    'Jul',
    'Jun',
    'Mar',
    'May',
    'Nov',
    'Oct',
    'Sep'
  ],
  SumofStockVolume1: [
    1145429033.0200002,
    1228772858.13,
    915518110.1299995,
    1194991733.9700003,
    1045315872.7899998,
    1230468759.6400008,
    1163667398.5300002,
    1152177478.5299995,
    1133331864.64,
    893411031.5500002,
    862732138.9699999,
    1171077639.0400012
  ],
  SumofStockWeek1: [
    5.029721569289909,
    4.602661855391118,
    3.312342362370725,
    5.377005816134584,
    3.9660986868845924,
    4.535953503914956,
    4.387154728946988,
    5.009479236362304,
    4.547322582383419,
    3.2909203030476957,
    ,
  ],
  MonthSort: [7, 11, 3, 5, 4, 10, 9, 6, 8, 2, 1, 12]
};

var myChart = echarts.init(document.getElementById('chart'));

// 根据monthSort字段排序
data.sort(function(i, j) {
  var diff = i.MonthSort - j.MonthSort;
  return diff;
});

var MonthFullName = [];
var SumofStockVolume1 = [];
var SumofStockWeek1 = [];
var SumofOR1 = [];
var SumofTO1 = [];

for (var i = 0; i < data.length; i++) {
  var item = data[i];
  MonthFullName.push(item.MonthFullName);
  //C_Value.push((item.SumofValue2 / 1000000).toFixed(0)); // 接收值给变量
  SumofStockVolume1.push((item.SumofStockVolume1 / 1000000).toFixed(0));
  SumofStockWeek1.push(item.SumofStockWeek1 ? item.SumofStockWeek1.toFixed(2) : null);
  SumofOR1.push((item.SumofOR1 / 1000000).toFixed(0));
  SumofTO1.push((item.SumofTO1 / 1000000).toFixed(0));
}

option = {
  title: {
    subtext: '单位：百万',
    subtextStyle: {
      color: '#FD625E'
    }
  },
  // 鼠标移上去的提示
  tooltip: {
    trigger: 'axis'
  },
  legend: {
    data: ['库存', '库存周转率', 'OR', 'TO']
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: {
    type: 'category',
    data: MonthFullName
  },
  yAxis: [
    {
      type: 'value',
      name: 'MRMB',
      axisLabel: {
        formatter: '{value}'
      }
    },
    {
      type: 'value',
      name: 'StockWeek',
      axisLabel: {
        formatter: '{value}'
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: false
      }
    }
  ],
  series: [
    {
      name: '库存',
      data: SumofStockVolume1,
      type: 'line',
      color: '#267893'
    },
    {
      name: '库存周转率',
      data: SumofStockWeek1,
      yAxisIndex: 1,
      type: 'line',
      color: '#FD625E'
    },
    {
      name: 'OR',
      data: SumofOR1,
      type: 'line',
      color: '#01B8AA'
    },
    {
      name: 'TO',
      data: SumofTO1,
      type: 'line',
      color: '#F2C80F'
    }
  ]
};

// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
