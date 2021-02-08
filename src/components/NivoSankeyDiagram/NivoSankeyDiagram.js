import React from "react";
import { ResponsiveSankey } from "@nivo/sankey";
// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const data = {
  nodes: [
    {
      id: "SK하이닉스",
      color: "hsl(226, 70%, 50%)",
    },
    {
      id: "오파테크",
      color: "hsl(303, 70%, 50%)",
    },
    {
      id: "HIMS",
      color: "hsl(20, 70%, 50%)",
    },
    {
      id: "어니스트비전",
      color: "hsl(120, 70%, 50%)",
    },
    {
      id: "한국점자도서관",
      color: "hsl(220, 70%, 50%)",
    },
    {
      id: "네오엑세스",
      color: "hsl(2, 70%, 50%)",
    },
    {
      id: "도서출판점자",
      color: "hsl(999, 70%, 50%)",
    },
    {
      id: "오버플로우",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "김민*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "박중*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "정경*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "유재*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "신형*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "문수*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "김다*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "공지*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "김명*",
      color: "hsl(784, 70%, 50%)",
    },
    {
      id: "홀길*",
      color: "hsl(784, 70%, 50%)",
    },
  ],
  links: [
    {
      source: "SK하이닉스",
      target: "HIMS",
      value: 100,
    },
    {
      source: "SK하이닉스",
      target: "오파테크",
      value: 760,
    },
    {
      source: "SK하이닉스",
      target: "어니스트비전",
      value: 480,
    },
    {
      source: "SK하이닉스",
      target: "한국점자도서관",
      value: 3120,
    },
    {
      source: "SK하이닉스",
      target: "네오엑세스",
      value: 1850,
    },
    {
      source: "SK하이닉스",
      target: "도서출판점자",
      value: 2200,
    },
    {
      source: "SK하이닉스",
      target: "오버플로우",
      value: 1600,
    },
    {
      source: "HIMS",
      target: "김민*",
      value: 100,
    },
    {
      source: "HIMS",
      target: "박중*",
      value: 10,
    },
    {
      source: "네오엑세스",
      target: "박중*",
      value: 10,
    },
    {
      source: "네오엑세스",
      target: "정경*",
      value: 150,
    },
    {
      source: "네오엑세스",
      target: "유재*",
      value: 300,
    },
    {
      source: "네오엑세스",
      target: "신형*",
      value: 120,
    },
    {
      source: "네오엑세스",
      target: "문수*",
      value: 100,
    },
    {
      source: "네오엑세스",
      target: "김다*",
      value: 100,
    },
    {
      source: "네오엑세스",
      target: "공지*",
      value: 620,
    },
    {
      source: "네오엑세스",
      target: "김명*",
      value: 50,
    },
    {
      source: "네오엑세스",
      target: "홀길*",
      value: 400,
    },
    {
      source: "도서출판점자",
      target: "김다*",
      value: 200,
    },
    {
      source: "도서출판점자",
      target: "공지*",
      value: 100,
    },
    {
      source: "도서출판점자",
      target: "김명*",
      value: 250,
    },
    {
      source: "도서출판점자",
      target: "정경*",
      value: 450,
    },
    {
      source: "도서출판점자",
      target: "유재*",
      value: 20,
    },
    {
      source: "도서출판점자",
      target: "신형*",
      value: 200,
    },
    {
      source: "도서출판점자",
      target: "박중*",
      value: 100,
    },
    {
      source: "도서출판점자",
      target: "문수*",
      value: 700,
    },
    {
      source: "도서출판점자",
      target: "홀길*",
      value: 200,
    },
    {
      source: "어니스트비전",
      target: "문수*",
      value: 240,
    },
    {
      source: "어니스트비전",
      target: "홀길*",
      value: 240,
    },
    {
      source: "오버플로우",
      target: "유재*",
      value: 50,
    },
    {
      source: "오버플로우",
      target: "신형*",
      value: 150,
    },
    {
      source: "오버플로우",
      target: "김다*",
      value: 200,
    },
    {
      source: "오버플로우",
      target: "공지*",
      value: 300,
    },
    {
      source: "오파테크",
      target: "김민*",
      value: 500,
    },
    {
      source: "오파테크",
      target: "박중*",
      value: 100,
    },
    {
      source: "오파테크",
      target: "문수*",
      value: 160,
    },
    {
      source: "오버플로우",
      target: "박중*",
      value: 200,
    },
    {
      source: "오버플로우",
      target: "정경*",
      value: 100,
    },
    {
      source: "오버플로우",
      target: "문수*",
      value: 160,
    },
    {
      source: "오버플로우",
      target: "홀길*",
      value: 460,
    },
    {
      source: "한국점자도서관",
      target: "박중*",
      value: 160,
    },
    {
      source: "한국점자도서관",
      target: "정경*",
      value: 500,
    },
    {
      source: "한국점자도서관",
      target: "유재*",
      value: 240,
    },
    {
      source: "한국점자도서관",
      target: "신형*",
      value: 200,
    },
    {
      source: "한국점자도서관",
      target: "김민*",
      value: 260,
    },
    {
      source: "한국점자도서관",
      target: "문수*",
      value: 270,
    },
    {
      source: "한국점자도서관",
      target: "김다*",
      value: 180,
    },
    {
      source: "한국점자도서관",
      target: "공지*",
      value: 260,
    },
    {
      source: "한국점자도서관",
      target: "김명*",
      value: 480,
    },
    {
      source: "한국점자도서관",
      target: "홀길*",
      value: 600,
    },
  ],
};
const NivoSankeyDiagram = () => {
  return (
    <div style={{ height: `1200px` }}>
      <ResponsiveSankey
        data={data}
        margin={{ top: 40, right: 160, bottom: 40, left: 50 }}
        align="justify"
        colors={{ scheme: "paired" }}
        nodeOpacity={1}
        nodeThickness={18}
        nodeInnerPadding={3}
        nodeSpacing={50}
        nodeBorderWidth={0}
        nodeBorderColor={{ from: "color", modifiers: [["darker", 0.8]] }}
        linkOpacity={0.5}
        linkHoverOthersOpacity={0.1}
        enableLinkGradient={true}
        labelPosition="inside"
        labelOrientation="horizontal"
        labelPadding={16}
        labelTextColor={{ from: "color", modifiers: [["darker", 1]] }}
        // onClick={(node) => {
        //   console.log(node);
        // }}
        legends={[
          {
            anchor: "bottom-right",
            direction: "column",
            translateX: 130,
            itemWidth: 100,
            itemHeight: 14,
            itemDirection: "right-to-left",
            itemsSpacing: 4,
            itemTextColor: "#999",
            symbolSize: 24,
            effects: [
              {
                on: "hover",
                style: {
                  itemTextColor: "#000",
                },
              },
            ],
          },
        ]}
        // nodeTooltip={(node) => <span>Custom tooltip for node: {node.id}</span>}
        // linkTooltip={(node) => (
        //   <span>
        //     Custom tooltip for link: {node.source.label} to {node.target.label}
        //   </span>
        // )}
      />
      <ol>
        <li>
          <h3>링크</h3>
          <a href="https://nivo.rocks/sankey" target="_blank" rel="noreferrer">
            https://nivo.rocks/sankey
          </a>
        </li>
        <li>
          <h3>가격</h3>
          <p>무료</p>
        </li>
        <li>
          <h3>스타일</h3>
          <p>
            - 테마선택가능 : 노드, 링크에 대한 색깔 ✨링크 :
            <a
              href="https://nivo.rocks/guides/colors"
              target="_blank"
              rel="noreferrer"
            >
              https://nivo.rocks/guides/colors
            </a>
          </p>
          <p>- node : 투명도, 굵기, 패딩, 간격, 보더스타일 변경가능</p>
          <p>- label : 라벨의 위치, 패딩, 수평/수직, 폰트 변경가능</p>
          <p>
            - link : 투명도, 마우스 오버시 투명도, 그라디언트(on/off) 변경 가능
          </p>
          <p>- tooltip : node와 link에 대한 툴팁으로 스타일 커스텀가능</p>
          <p>- legends : 위치, 간격, 너비, 높이</p>
          <p>- events : 클릭이벤트 가능</p>
        </li>
      </ol>
    </div>
  );
};

export default NivoSankeyDiagram;
