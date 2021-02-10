import React, { useRef, useLayoutEffect } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const TidyTree = () => {
  const chart = useRef(null);

  useLayoutEffect(() => {
    let chart = am4core.create("chartdiv", am4charts.SankeyDiagram);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    chart.data = [
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

    let hoverState = chart.links.template.states.create("hover");
    hoverState.properties.fillOpacity = 0.6;

    chart.dataFields.fromName = "from";
    chart.dataFields.toName = "to";
    chart.dataFields.value = "value";

    // for right-most label to fit
    chart.paddingRight = 30;

    // make nodes draggable
    // let nodeTemplate = chart.nodes.template;
    // nodeTemplate.inert = true;
    // nodeTemplate.readerTitle = "Drag me!";
    // nodeTemplate.showSystemTooltip = true;
    // nodeTemplate.width = 20;

    // make nodes draggable
    let nodeTemplate = chart.nodes.template;
    nodeTemplate.readerTitle = "Click to show/hide or drag to rearrange";
    nodeTemplate.showSystemTooltip = true;
    nodeTemplate.cursorOverStyle = am4core.MouseCursorStyle.pointer;

    return () => {
      chart.dispose();
    };
  }, []);

  return (
    <div>
      <div id="chartdiv" style={{ width: "1024px", height: "500px" }}></div>
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
          <p>- orientation : 수직, 수평변경</p>
          <p>
            - node : 드래그/클릭(show/off) 가능, 보더 굵기, 색, 폰트 굵기
            변경가능
          </p>
          <p>- label : 라벨의 위치, 패딩, 수평/수직, 폰트 변경가능</p>
          <p>- link : 투명도,너비, 그라디언트(on/off) 변경 가능</p>
          <p>- tooltip : 텍스트 수정 가능</p>
        </li>
      </ol>
    </div>
  );
};

export default TidyTree;
