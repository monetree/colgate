import React, { useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
am4core.addLicense("ch-custom-attribution");




const ComplainVolumeBarChart = ({ id }) => {
  const loadChart = () => {
    let chart = am4core.create(id, am4charts.XYChart);

    // Add data
    chart.data = [
      {
        country: "NOV",
        visits: 2025,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      },
      {
        country: "DEC",
        visits: 1882,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      },
      {
        country: "JAN",
        visits: 1809,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      },
      {
        country: "FEB",
        visits: 1322,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      },
      {
        country: "MAR",
        visits: 1122,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      },
      {
        country: "APR",
        visits: 1114,
        "bullet": "https://www.amcharts.com/lib/images/faces/A04.png"
      },
    ];

    // Create axes
    let categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.grid.template.location = 10;
    categoryAxis.renderer.minGridDistance = 0;
    categoryAxis.renderer.labels.template.horizontalCenter = "right";
    categoryAxis.renderer.labels.template.verticalCenter = "middle";
    // categoryAxis.renderer.labels.template.rotation = 270;
    categoryAxis.tooltip.disabled = true;
    categoryAxis.renderer.minHeight = 50;
    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.labels.template.fontSize = 8;
    categoryAxis.renderer.labels.template.dx = 20;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.renderer.minWidth = 5;
    valueAxis.renderer.labels.template.disabled = true;
    valueAxis.labelsEnabled = false;
    valueAxis.renderer.grid.template.disabled = true;
    valueAxis.renderer.labels.template.fontSize = 8;

    chart.maskBullets = false;



    let title = chart.titles.create();
    title.html = `
    <div style="text-align:center;">
        <span style="font-size: 8px;">Total Complain Volume</span><br/>
        <span style="font-size: 15px;font-weight: bold;">19,136</span>
    </div>
    `;

    // Create series
    let series = chart.series.push(new am4charts.ColumnSeries());
    series.sequencedInterpolation = true;
    series.dataFields.valueY = "visits";
    series.dataFields.categoryX = "country";
    series.tooltipText = "[{categoryX}: bold]{valueY}[/]";
    series.columns.template.strokeWidth = 0;
    series.tooltip.pointerOrientation = "vertical";

    series.columns.template.column.cornerRadiusTopLeft = 5;
    series.columns.template.column.cornerRadiusTopRight = 5;
    series.columns.template.column.fillOpacity = 0.8;

    // on hover, make corner radiuses bigger
    let hoverState = series.columns.template.column.states.create("hover");
    hoverState.properties.cornerRadiusTopLeft = 0;
    hoverState.properties.cornerRadiusTopRight = 0;
    hoverState.properties.fillOpacity = 1;

    series.columns.template.adapter.add("fill", function (fill, target) {
      return am4core.color("#000066");
    });

    let bullet = series.bullets.push(new am4charts.Bullet());
    let image = bullet.createChild(am4core.Image);
    image.horizontalCenter = "middle";
    image.verticalCenter = "bottom";
    image.width = 10
    image.dy = 30;
    image.y = am4core.percent(10);
    image.propertyFields.href = "bullet";
    image.tooltipText = series.columns.template.tooltipText;
    image.propertyFields.fill = "color";
    image.filters.push(new am4core.DropShadowFilter());


    // Cursor
    chart.cursor = new am4charts.XYCursor();
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

export default ComplainVolumeBarChart;
