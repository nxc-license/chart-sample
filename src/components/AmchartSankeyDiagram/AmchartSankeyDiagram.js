import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_material from "@amcharts/amcharts4/themes/material";

am4core.useTheme(am4themes_animated);
am4core.useTheme(am4themes_material);

const TidyTree = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    const data = [
      { from: "SK하이닉스", to: "HIMS", value: 1300000 },
      { from: "SK하이닉스", to: "오파테크", value: 400000 },
      { from: "SK하이닉스", to: "어니스트비전", value: 501000 },
      { from: "SK하이닉스", to: "한국점자도서관", value: 1060000 },
      { from: "SK하이닉스", to: "네오엑세스", value: 825000 },
      { from: "SK하이닉스", to: "도서출판점자", value: 510000 },
      { from: "SK하이닉스", to: "오버플로우", value: 910000 },
      { from: "HIMS", to: "김민*", value: 650000 },
      { from: "HIMS", to: "박중*", value: 650000 },
      { from: "네오엑세스", to: "김민*", value: 40000 },
      { from: "네오엑세스", to: "박중*", value: 40000 },
      { from: "네오엑세스", to: "정경*", value: 40000 },
      { from: "네오엑세스", to: "유재*", value: 40000 },
      { from: "네오엑세스", to: "신형*", value: 40000 },
      { from: "네오엑세스", to: "문수*", value: 40000 },
      { from: "네오엑세스", to: "김다*", value: 40000 },
      { from: "네오엑세스", to: "공지*", value: 40000 },
      { from: "네오엑세스", to: "홀길*", value: 40000 },
      { from: "도서출판점자", to: "공지*", value: 41000 },
      { from: "도서출판점자", to: "김다*", value: 41000 },
      { from: "도서출판점자", to: "김명*", value: 41000 },
      { from: "도서출판점자", to: "홀길*", value: 41000 },
      { from: "도서출판점자", to: "정경*", value: 41000 },
      { from: "도서출판점자", to: "유재*", value: 41000 },
      { from: "도서출판점자", to: "김민*", value: 35000 },
      { from: "도서출판점자", to: "정경*", value: 35000 },
      { from: "도서출판점자", to: "유재*", value: 35000 },
      { from: "도서출판점자", to: "김다*", value: 35000 },
      { from: "도서출판점자", to: "공지*", value: 35000 },
      { from: "도서출판점자", to: "신형*", value: 40000 },
      { from: "도서출판점자", to: "박중*", value: 40000 },
      { from: "어니스트비전", to: "문수*", value: 530000 },
      { from: "어니스트비전", to: "홀길*", value: 530000 },
      { from: "오버플로우", to: "정경*", value: 165000 },
      { from: "오버플로우", to: "유재*", value: 165000 },
      { from: "오버플로우", to: "신형*", value: 165000 },
      { from: "오버플로우", to: "김다*", value: 165000 },
      { from: "오버플로우", to: "공지*", value: 165000 },
      { from: "오파테크", to: "김민*", value: 100000 },
      { from: "오파테크", to: "박중*", value: 100000 },
      { from: "오파테크", to: "정경*", value: 100000 },
      { from: "오파테크", to: "문수*", value: 105000 },
      { from: "오파테크", to: "홀길*", value: 105000 },
      { from: "한국점자도서관", to: "김민*", value: 91000 },
      { from: "한국점자도서관", to: "박중*", value: 91000 },
      { from: "한국점자도서관", to: "정경*", value: 91000 },
      { from: "한국점자도서관", to: "유재*", value: 91000 },
      { from: "한국점자도서관", to: "신형*", value: 91000 },
      { from: "한국점자도서관", to: "문수*", value: 91000 },
      { from: "한국점자도서관", to: "김다*", value: 91000 },
      { from: "한국점자도서관", to: "공지*", value: 91000 },
      { from: "한국점자도서관", to: "김명*", value: 91000 },
      { from: "한국점자도서관", to: "홀길*", value: 91000 },
    ];

    /**
     * Sankey version of the chart
     */

    // Create chart instance
    const chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
    chart.data = data;
    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";
    chart.padding(0, 100, 10, 0);

    // Add title
    chart.titles.template.fontSize = 20;
    chart.titles.create().text = "Shipment of devices by vendor, 2017";

    // Configure links
    chart.links.template.colorMode = "gradient";
    // chart.links.template.tooltipText ="{fromName} → {toName}: [bold]{value}[/] Mio units\n{fromName} contribute [bold]{value3} %[/] in {toName} sales: \n{toName} contributes [bold]{value2} %[/] in {fromName} sales";
    chart.links.template.tooltipHTML = `<div style="background-color:pink">{fromName} → {toName}<div>`;
    const hoverState = chart.links.template.states.create("hover");
    hoverState.properties.fillOpacity = 1;

    // Exporting
    chart.exporting.menu = new am4core.ExportMenu();

    // Configure nodes
    chart.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;
    chart.nodes.template.readerTitle =
      "Click to show/hide or drag to rearrange";
    chart.nodes.template.showSystemTooltip = true;

    chart.nodes.template.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    console.log(chart);
    chart.interpolationDuration = 500; // 시작에 뿌려지는 애니메이션속도
    //chart.parsingStepDuration = 1000; // 각 데이터 분석 단계의 기간(ms)
    //chart.rangeChangeDuration = 50; // API의 상호 작용에 의해 선택한 범위가 변경 될 때 속도
    //chart.tapTimeout = 50; // "활성"모드를 유지하는 시간
    //chart._heightAnimation.duration = 500;
    //chart._heightAnimation.easing = "bounceInOut";

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="chartdiv" style={{ width: "1280px", height: "500px" }}></div>
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
