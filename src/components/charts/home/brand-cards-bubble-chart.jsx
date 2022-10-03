import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
am4core.addLicense("ch-custom-attribution");




const BrandCardsBubbleChart = ({ id }) => {
  const loadChart = () => {
    // Themes end
    
    // Create chart instance
    let chart = am4core.create(id, am4charts.XYChart);
    
    // Add data
    chart.data = [{
      "date": "2015-01-01",
      "ay": 6.5,
      "by": 2.2,
      "aValue": 15,
      "bValue": 10
    }, {
      "date": "2015-01-02",
      "ay": 12.3,
      "by": 4.9,
      "aValue": 8,
      "bValue": 3
    }, {
      "date": "2015-01-03",
      "ay": 12.3,
      "by": 5.1,
      "aValue": 16,
      "bValue": 4
    }, {
      "date": "2015-01-04",
      "ay": 2.8,
      "by": 13.3,
      "aValue": 9,
      "bValue": 13
    }, {
      "date": "2015-01-05",
      "ay": 3.5,
      "by": 6.1,
      "aValue": 5,
      "bValue": 2
    }, {
      "date": "2015-01-06",
      "ay": 5.1,
      "by": 8.3,
      "aValue": 10,
      "bValue": 17
    }, {
      "date": "2015-01-07",
      "ay": 6.7,
      "by": 10.5,
      "aValue": 3,
      "bValue": 10
    }, {
      "date": "2015-01-08",
      "ay": 8,
      "by": 12.3,
      "aValue": 5,
      "bValue": 13
    }, {
      "date": "2015-01-09",
      "ay": 8.9,
      "by": 4.5,
      "aValue": 8,
      "bValue": 11
    }, {
      "date": "2015-01-10",
      "ay": 9.7,
      "by": 15,
      "aValue": 15,
      "bValue": 10
    }, {
      "date": "2015-01-11",
      "ay": 10.4,
      "by": 10.8,
      "aValue": 1,
      "bValue": 11
    }, {
      "date": "2015-01-12",
      "ay": 1.7,
      "by": 19,
      "aValue": 12,
      "bValue": 3
    }];
    
    // Create axes
    let xAxis = chart.xAxes.push(new am4charts.DateAxis());
    xAxis.dataFields.category = "category";
    xAxis.renderer.grid.template.location = 0;
    //xAxis.renderer.minGridDistance = 30;
    
    let yAxis = chart.yAxes.push(new am4charts.ValueAxis());
    
    // Create series
    let series1 = chart.series.push(new am4charts.LineSeries());
    series1.dataFields.valueY = "ay";
    series1.dataFields.dateX = "date";
    series1.dataFields.value = "aValue";
    series1.strokeOpacity = 0;
    series1.cursorTooltipEnabled = false;
    
    let bullet1 = series1.bullets.push(new am4charts.CircleBullet());
    bullet1.tooltipText = "x:{valueX} y:{valueY}";
    series1.heatRules.push({
      target: bullet1.circle,
      min: 10,
      max: 20,
      property: "radius"
    });
    
    let series2 = chart.series.push(new am4charts.LineSeries());
    series2.dataFields.valueY = "by";
    series2.dataFields.dateX = "date";
    series2.dataFields.value = "bValue";
    series2.strokeOpacity = 0;
    series2.cursorTooltipEnabled = false;
    
    let bullet2 = series2.bullets.push(new am4charts.Bullet());
    bullet2.tooltipText = "x:{valueX} y:{valueY}";
    

  };

  useEffect(() => {
    loadChart();
  }, []);

  return (
    <div>
      <div id={id} style={{ height: "280px", width: "100%" }}></div>
    </div>
  );
};

export default BrandCardsBubbleChart;
