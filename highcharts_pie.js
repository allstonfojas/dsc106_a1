Highcharts.chart('container', {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: 'pie'
  },
  title: {
    text: 'Fulltime Men Applied Per Year'
  },
  tooltip: {
    pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
  },
  plotOptions: {
    pie: {
      allowPointSelect: true,
      cursor: 'pointer',
      dataLabels: {
        enabled: true,
        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
      }
    }
  },
  series: [{
    name: 'Fulltime Men Applied',
    colorByPoint: true,
    data: [{
      name: '2005',
      y: 4.4
    }, {
      name: '2006',
      y: 4.9
    }, {
      name: '2007',
      y: 5.0
    }, {
      name: '2008',
      y: 5.3
    }, {
      name: '2009',
      y: 5.3
    }, {
      name: '2010',
      y: 5.5
    }, {
      name: '2011',
      y: 6.1
    }, {
      name: '2012',
      y: 7.0
    }, {
      name: '2013',
      y: 7.8
    }, {
      name: '2014',
      y: 8.5
    }, {
      name: '2015',
      y: 9.1
    }, {
      name: '2016',
      y: 9.7
    }, {
      name: '2017',
      y: 10.2
    }, {
      name: '2018',
      y: 11.2
    }]
  }]
});