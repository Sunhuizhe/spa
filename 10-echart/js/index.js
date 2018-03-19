function main() {
  var xarr = [];
  var yarr = [];
  
  // 精度处理函数封装
  function roundFun(x, n) {
    return Math.round(x * Math.pow(10, n)) / Math.pow(10, n);      
  }

  function fun(p) {
    if(p == 0){
      return 0;
    } else{
      return -1*p*Math.log2(p)-(1-p)*Math.log2(1-p);
    }
  }

  for(var i = 0; i <= 1; i += 0.1) {
    xarr.push(roundFun(i, 1));
    yarr.push(roundFun(fun(i), 2));         
  }

  var myChart = echarts.init($('.main').get(0));

  var option = {
    title: {
      text: '二进熵函数曲线'      
    },
    tooltip: {},
    legend: {
      data:['信息量']    
    },
    xAxis: {
      data: xarr
    },
    yAxis: {},
    series: [{
      name: '信息量',
      type: 'line',
      smooth: 'true',
      data: yarr                               
    }]
  
  };

  myChart.setOption(option);



}
main();
