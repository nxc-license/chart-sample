import React from "react";
import "./TidyTree.css";
import Tree from "react-d3-tree";

const data = {
  // name: '시각장애 점자 문해력 향상 프로젝트',
  // attributes: {
  //   funds: 5506000
  // },
  // children: [
  // {
  name: "SK하이닉스",
  attributes: {
    funds: 5506000,
  },
  children: [
    {
      name: "HIMS",
      attributes: {
        funds: 1300000,
      },
      children: [
        {
          name: "김민*",
          attributes: {
            funds: 650000,
          },
        },
        {
          name: "박중*",
          attributes: {
            funds: 650000,
          },
        },
      ],
    },
    {
      name: "네오엑세스",
      attributes: {
        funds: 400000,
      },
      children: [
        {
          name: "김민*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "박중*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "정경*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "유재*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "신형*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "문수*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "김다*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "공지*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "김명*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "홀길*",
          attributes: {
            funds: 40000,
          },
        },
      ],
    },
    {
      name: "도서출판점자",
      attributes: {
        funds: 501000,
      },
      children: [
        {
          name: "김다*",
          attributes: {
            funds: 41000,
          },
        },
        {
          name: "공지*",
          attributes: {
            funds: 41000,
          },
        },
        {
          name: "김명*",
          attributes: {
            funds: 41000,
          },
        },
        {
          name: "홀길*",
          attributes: {
            funds: 41000,
          },
        },
        {
          name: "정경*",
          attributes: {
            funds: 41000,
          },
        },
        {
          name: "유재*",
          attributes: {
            funds: 41000,
          },
        },
        {
          name: "김민*",
          attributes: {
            funds: 35000,
          },
        },
        {
          name: "정경*",
          attributes: {
            funds: 35000,
          },
        },
        {
          name: "유재*",
          attributes: {
            funds: 35000,
          },
        },
        {
          name: "김다*",
          attributes: {
            funds: 35000,
          },
        },
        {
          name: "공지*",
          attributes: {
            funds: 35000,
          },
        },
        {
          name: "신형*",
          attributes: {
            funds: 40000,
          },
        },
        {
          name: "박중*",
          attributes: {
            funds: 40000,
          },
        },
      ],
    },
    {
      name: "어니스트비전",
      attributes: {
        funds: 1060000,
      },
      children: [
        {
          name: "문수*",
          attributes: {
            funds: 530000,
          },
        },
        {
          name: "홀길*",
          attributes: {
            funds: 530000,
          },
        },
      ],
    },
    {
      name: "오버플로우",
      attributes: {
        funds: 825000,
      },
      children: [
        {
          name: "정경*",
          attributes: {
            funds: 165000,
          },
        },
        {
          name: "유재*",
          attributes: {
            funds: 165000,
          },
        },
        {
          name: "신형*",
          attributes: {
            funds: 165000,
          },
        },
        {
          name: "김다*",
          attributes: {
            funds: 165000,
          },
        },
        {
          name: "공지*",
          attributes: {
            funds: 165000,
          },
        },
      ],
    },
    {
      name: "오파테크",
      attributes: {
        funds: 510000,
      },
      children: [
        {
          name: "김민*",
          attributes: {
            funds: 100000,
          },
        },
        {
          name: "박중*",
          attributes: {
            funds: 100000,
          },
        },
        {
          name: "정경*",
          attributes: {
            funds: 100000,
          },
        },
        {
          name: "문수*",
          attributes: {
            funds: 105000,
          },
        },
        {
          name: "홀길*",
          attributes: {
            funds: 105000,
          },
        },
      ],
    },
    {
      name: "한국점자도서관",
      attributes: {
        funds: 910000,
      },
      children: [
        {
          name: "김민*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "박중*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "정경*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "유재*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "신형*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "문수*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "김다*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "공지*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "김명*",
          attributes: {
            funds: 91000,
          },
        },
        {
          name: "홀길*",
          attributes: {
            funds: 91000,
          },
        },
      ],
    },
  ],
  // }
  // ]
};

const TidyTree = () => {
  return (
    <div className="tidy-tree-container">
      <Tree
        data={data}
        orientation="horizontal"
        translate={{
          x: 50,
          y: 500,
        }}
        initialDepth={4}
        depthFactor={350}
        separation={{
          nonSiblings: 0.3,
          siblings: 0.3,
        }}
        zoom={0.5}
        transitionDuration={500}
        rootNodeClassName="node__root"
        branchNodeClassName="node__branch"
        leafNodeClassName="node__leaf"
      />
      <ol>
        <li>
          <h3>링크</h3>
          <a
            href="https://bkrem.github.io/react-d3-tree/"
            target="_blank"
            rel="noreferrer"
          >
            https://bkrem.github.io/react-d3-tree/
          </a>
        </li>
        <li>
          <h3>가격</h3>
          <p>무료</p>
        </li>
        <li>
          <h3>스타일</h3>
          <p>- orientation : 수직, 수평변경</p>
          <p>- size : 전체 area의 width, height 변경가능, 줌인아웃 가능</p>
          <p>- node : 색, 크기, radius 변경가능</p>
          <p>- label : 커스텀 엘리먼트로 가능!</p>
          <p>- link : 곡선or직선, depth 조정 가능, 클릭으로 hidden/show 가능</p>
        </li>
      </ol>
    </div>
  );
};

export default TidyTree;
