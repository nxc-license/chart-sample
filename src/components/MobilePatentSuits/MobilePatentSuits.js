import React, { useEffect } from 'react';
import './MobilePatentSuits.css';

const d3 = window.d3;

const MobilePatentSuits = () => {
  // const Type = {
  //   PROJECT: 'project',
  //   DONOR: 'donor',
  //   SOLUTION: 'solution',
  //   TARGET: 'target'
  // };

  // const links = [
  //   {
  //     source: '시각장애 점자 문해력 향상 프로젝트',
  //     target: 'SK하이닉스',
  //     type: Type.DONOR
  //   },

  //   { source: 'SK하이닉스', target: 'HIMS', type: Type.SOLUTION },
  //   { source: 'SK하이닉스', target: '네오엑세스', type: Type.SOLUTION },
  //   { source: 'SK하이닉스', target: '도서출판점자', type: Type.SOLUTION },
  //   { source: 'SK하이닉스', target: '어니스트비전', type: Type.SOLUTION },
  //   { source: 'SK하이닉스', target: '오버플로우', type: Type.SOLUTION },
  //   { source: 'SK하이닉스', target: '오파테크', type: Type.SOLUTION },
  //   { source: 'SK하이닉스', target: '한국점자도서관', type: Type.SOLUTION },

  //   { source: 'HIMS', target: '김민*', type: Type.TARGET },
  //   { source: 'HIMS', target: '박중*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '김민*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '박중*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '정경*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '유재*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '신형*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '문수*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '김다*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '공지*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '김명*', type: Type.TARGET },
  //   { source: '네오엑세스', target: '홀길*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '김다*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '공지*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '김명*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '홀길*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '정경*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '유재*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '김민*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '정경*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '유재*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '김다*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '공지*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '신형*', type: Type.TARGET },
  //   { source: '도서출판점자', target: '박중*', type: Type.TARGET },
  //   { source: '어니스트비전', target: '문수*', type: Type.TARGET },
  //   { source: '어니스트비전', target: '홀길*', type: Type.TARGET },
  //   { source: '오버플로우', target: '정경*', type: Type.TARGET },
  //   { source: '오버플로우', target: '유재*', type: Type.TARGET },
  //   { source: '오버플로우', target: '신형*', type: Type.TARGET },
  //   { source: '오버플로우', target: '김다*', type: Type.TARGET },
  //   { source: '오버플로우', target: '공지*', type: Type.TARGET },
  //   { source: '오파테크', target: '김민*', type: Type.TARGET },
  //   { source: '오파테크', target: '박중*', type: Type.TARGET },
  //   { source: '오파테크', target: '정경*', type: Type.TARGET },
  //   { source: '오파테크', target: '문수*', type: Type.TARGET },
  //   { source: '오파테크', target: '홀길*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '김민*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '박중*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '정경*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '유재*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '신형*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '문수*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '김다*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '공지*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '김명*', type: Type.TARGET },
  //   { source: '한국점자도서관', target: '홀길*', type: Type.TARGET }
  // ];

  // const nodes = {};

  // // Compute the distinct nodes from the links.
  // links.forEach(function (link) {
  //   link.source =
  //     nodes[link.source] || (nodes[link.source] = { name: link.source });
  //   link.target =
  //     nodes[link.target] || (nodes[link.target] = { name: link.target });
  // });

  // const width = 1000,
  //   height = 600;

  // const force = d3.layout
  //   .force()
  //   .nodes(d3.values(nodes))
  //   .links(links)
  //   .size([width, height])
  //   .linkDistance(100)
  //   .charge(-2000)
  //   .on('tick', tick)
  //   .start();

  // let svg = d3
  //   .select('body')
  //   .append('svg')
  //   .attr('width', width)
  //   .attr('height', height);

  // // Per-type markers, as they don't inherit styles.
  // svg
  //   .append('defs')
  //   .selectAll('marker')
  //   .data([Type.PROJECT, Type.DONOR, Type.SOLUTION, Type.TARGET])
  //   .enter()
  //   .append('marker')
  //   .attr('id', function (d) {
  //     return d;
  //   })
  //   .attr('viewBox', '0 -5 10 10')
  //   .attr('refX', 15)
  //   .attr('refY', -1.5)
  //   .attr('markerWidth', 6)
  //   .attr('markerHeight', 6)
  //   .attr('orient', 'auto')
  //   .append('path')
  //   .attr('d', 'M0,-5L10,0L0,5');

  // const path = svg
  //   .append('g')
  //   .selectAll('path')
  //   .data(force.links())
  //   .enter()
  //   .append('path')
  //   .attr('class', function (d) {
  //     return 'link ' + d.type;
  //   })
  //   .attr('marker-end', function (d) {
  //     return 'url(#' + d.type + ')';
  //   });

  // const circle = svg
  //   .append('g')
  //   .selectAll('circle')
  //   .data(force.nodes())
  //   .enter()
  //   .append('circle')
  //   .attr('r', 8);
  // // .call(force.drag); // 에러발생으로 주석처리

  // const text = svg
  //   .append('g')
  //   .selectAll('text')
  //   .data(force.nodes())
  //   .enter()
  //   .append('text')
  //   .attr('x', 12)
  //   .attr('y', '.31em')
  //   .text(function (d) {
  //     return d.name;
  //   });

  // function tick() {
  //   path.attr('d', linkArc);
  //   circle.attr('transform', transform);
  //   text.attr('transform', transform);
  // }

  // function linkArc(d) {
  //   const dx = d.target.x - d.source.x,
  //     dy = d.target.y - d.source.y,
  //     dr = Math.sqrt(dx * dx + dy * dy);
  //   return (
  //     'M' +
  //     d.source.x +
  //     ',' +
  //     d.source.y +
  //     'A' +
  //     dr +
  //     ',' +
  //     dr +
  //     ' 0 0,1 ' +
  //     d.target.x +
  //     ',' +
  //     d.target.y
  //   );
  // }

  // function transform(d) {
  //   return 'translate(' + d.x + ',' + d.y + ')';
  // }

  // useEffect(() => {
  //   return () => {
  //     svg = null;
  //   };
  // }, []);

  return <div className="mobile-patent-suit" id="mps"></div>;
};

export default MobilePatentSuits;
