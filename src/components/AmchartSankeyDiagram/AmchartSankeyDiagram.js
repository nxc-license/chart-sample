import React, { useRef, useLayoutEffect, useState, useEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";
import sample1 from "./sample1";
import sample2 from "./sample2";
import sample3 from "./sample3";
import sample4 from "./sample4";
import sample5 from "./sample5";
/**
 * duration 옵션 관련 : https://www.amcharts.com/docs/v4/reference/dateaxis/
 * tootip 관련 : https://www.amcharts.com/docs/v4/tutorials/tooltips-with-rich-html-content/
 * animate 관련(sankey-diagram은 해당 안되는 것 같음) : https://www.amcharts.com/docs/v4/concepts/animations/#Advanced_usage
 * 연습가능 codepen :
 * - https://codepen.io/team/amcharts/pen/BYgeKe
 * - https://codepen.io/team/amcharts/pen/RBVgEO
 */
am4core.useTheme(am4themes_animated);

const TidyTree = () => {
  const chart = useRef(null);
  const [option, setOption] = useState("sample2");
  const [data, setData] = useState(sample2);

  useEffect(() => {
    /**
     * Sankey version of the chart
     */

    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
    chart.data = data.data;
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.padding(0, 100, 10, 0);

    // Add title
    //chart.titles.template.fontSize = 20;
    //chart.titles.create().text = "Shipment of devices by vendor, 2017";

    // Configure links
    let linkTemplate = chart.links.template;
    linkTemplate.colorMode = "gradient";
    // linkTemplate.tooltipText ="{fromName} → {toName}: [bold]{value}[/] Mio units\n{fromName} contribute [bold]{value3} %[/] in {toName} sales: \n{toName} contributes [bold]{value2} %[/] in {fromName} sales";
    linkTemplate.tooltipHTML = `<div style="font-family: 'Godo'">{fromName} → {toName}<div>`;
    //linkTemplate.tooltipText = `{fromName}→{toName}`;
    //linkTemplate.fontSize = "14px";
    // linkTemplate.fillOpacity = 0;
    // linkTemplate.middleLine.strokeOpacity = 0.3;
    // linkTemplate.middleLine.stroke = am4core.color("#555");
    // linkTemplate.middleLine.strokeWidth = 5;
    const hoverState = linkTemplate.states.create("hover");
    hoverState.properties.fillOpacity = 1;

    // Exporting
    chart.exporting.menu = new am4core.ExportMenu();

    // Configure nodes
    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.inert = true;
    nodeTemplate.readerTitle = "Drag me!";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.width = 20;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    nodeTemplate.nameLabel.label.strokeWidth = 0;
    //nodeTemplate.fontSize = "16px";
    nodeTemplate.fontFamily = "Godo";
    nodeTemplate.nameLabel.label.fill = am4core.color("#333");

    console.log(chart.nodes.template);
    chart.interpolationDuration = 500; // 시작에 뿌려지는 애니메이션속도
    //chart.parsingStepDuration = 1000; // 각 데이터 분석 단계의 기간(ms)
    //chart.rangeChangeDuration = 50; // API의 상호 작용에 의해 선택한 범위가 변경 될 때 속도
    //chart.tapTimeout = 50; // "활성"모드를 유지하는 시간
    //chart._heightAnimation.duration = 500;
    //chart._heightAnimation.easing = "bounceInOut";

    chart.fontFamily = "Godo";
    chart.horizontalCenter = "left";
    chart.verticalCenter = "top";

    return () => {
      chart.dispose();
    };
  }, [data]);

  return (
    <div>
      <div style={{ marginBottom: "20px" }}>
        <button
          style={option === "sample2" ? { background: "green" } : {}}
          onClick={() => {
            setOption("sample2");
            setData(sample2);
          }}
        >
          {sample2.title}
        </button>
        <button
          style={option === "sample3" ? { background: "green" } : {}}
          onClick={() => {
            setOption("sample3");
            setData(sample3);
          }}
        >
          {sample3.title}
        </button>
        <button
          style={option === "sample4" ? { background: "green" } : {}}
          onClick={() => {
            setOption("sample4");
            setData(sample4);
          }}
        >
          {sample4.title}
        </button>
        <button
          style={option === "sample5" ? { background: "green" } : {}}
          onClick={() => {
            setOption("sample5");
            setData(sample5);
          }}
        >
          {sample5.title}
        </button>
      </div>
      <div
        id="chartdiv"
        style={{ width: "1280px", height: "600px", border: "1px solid black" }}
      ></div>
      <ol>
        <li>
          <h3>링크</h3>
          <a
            href="https://www.amcharts.com/demos/sankey-diagram/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.amcharts.com/demos/sankey-diagram/
          </a>
        </li>
        <li>
          <h3>가격</h3>
          <p>
            무료/유료
            <a
              href="https://www.amcharts.com/online-store/"
              target="_blank"
              rel="noreferrer"
            >
              유료
            </a>
          </p>
        </li>
        <li>
          <h3>스타일</h3>
          <p>
            - 테마선택가능 : 노드, 링크에 대한 색깔 ✨링크 :
            <a
              href="https://www.amcharts.com/docs/v4/chart-types/sankey-diagram/#Using_themes"
              target="_blank"
              rel="noreferrer"
            >
              https://www.amcharts.com/docs/v4/chart-types/sankey-diagram/#Using_themes
            </a>
          </p>
          <p>- animate : 처음 뿌려지는 속도(ms) 조절 가능</p>
          <p>- orientation : 수직, 수평변경</p>
          <p>
            - node : 드래그/클릭(show/off) 가능, 보더 굵기, 색, 폰트 굵기
            변경가능
          </p>
          <p>- label : 라벨의 위치, 패딩, 수평/수직, 폰트 변경가능</p>
          <p>- link : 투명도,너비, 그라디언트(on/off) 변경 가능</p>
          <p>- tooltip : 텍스트 수정 가능, 엘리먼트 삽입가능</p>
          <p>
            - export : 데이터(json, csv, xlsx, html, pdf) 파일로 저장가능,
            이미지(png,jpg,svg,pdf)저장가능, 프린트가능
          </p>
        </li>
      </ol>
    </div>
  );
};

export default TidyTree;
