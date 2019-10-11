Highcharts.chart('container', {
  chart: {
    type: 'bar'
  },
  title: {
    text: 'Fulltime Men Admitted Per Year'
  },
  subtitle: {
    text: ''
  },
  xAxis: {
    categories: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],
    title: {
      text: null
    }
  },
  yAxis: {
    min: 0,
    title: {
      text: 'Number of Fulltime Men Who Were Admitted',
      align: 'high'
    },
    labels: {
      overflow: 'justify'
    }
  },
  tooltip: {
    valueSuffix: ''
  },
  plotOptions: {
    bar: {
      dataLabels: {
        enabled: true
      }
    }
  },
  legend: {
    layout: 'vertical',
    align: 'right',
    verticalAlign: 'top',
    x: -40,
    y: 80,
    floating: true,
    borderWidth: 1,
    backgroundColor:
      Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
    shadow: true
  },
  credits: {
    enabled: false
  },
  series: [{
    name: 'fulltime_men_admitted',
    data: [7580, 9210, 8419, 8517, 7816, 8365,8707,10917,11866,11758,12748,14103,13981,13781]
  }]
});