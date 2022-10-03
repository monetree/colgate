import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
am4core.addLicense("ch-custom-attribution");




const ComplainVolumeUpsidedownBarChart = ({ id }) => {
  const loadChart = () => {
    var chart = am4core.create(id, am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this makes initial fade in effect

    chart.data = [
      {
        country: "One",
        value: 3025,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"

      },
      {
        country: "Two",
        value: 1882,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"

      },
      {
        country: "Three",
        value: -1809,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"

      },
      {
        country: "Four",
        value: -1322,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"

      },
      {
        country: "Five",
        value: 1122,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"

      },
      {
        country: "Six",
        value: -1114,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"

      },
    ];

    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 10;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 50;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.fontSize = 8;
    categoryAxis.renderer.labels.template.dx = 20;

    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 5;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.labelsEnabled = false;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.fontSize = 8;

    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "value";
    series.tooltipText = "{valueY.value}";
    series.columns.template.strokeOpacity = 0;
    series.columns.template.fillOpacity = 0.75;
    series.columns.template.column.cornerRadiusTopLeft = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;

    let title = chart.titles.create();
    title.html = `
    <div style="text-align:center;">
        <span style="font-size: 8px;">Complain Volume Extremly Low Sentiments (%Change)</span><br/>
        <span style="font-size: 15px;font-weight: bold;">19,136</span>
    </div>
    `;

    var hoverState = series.columns.template.states.create("hover");
    hoverState.properties.fillOpacity = 1;
    hoverState.properties.tension = 0.8;

    // Add distinctive colors for each column using adapter
    series.columns.template.adapter.add("fill", function (fill, target) {
      return am4core.color("#000066");
    });

    let bullet = series.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.width = 10
    image.dy = 20;
    image.y = am4core.percent(10);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());



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

export default ComplainVolumeUpsidedownBarChart;
