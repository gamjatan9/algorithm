const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const k = Number(input[0]); // 상근이가 방문한 빌딩 수
const num = input[1].split(' ').map(Number); // 빌딩 방문 순서
const answer = [];
for (let i = 0; i < k; i++) {
   answer.push([]);
}

function makeTree(arr, level) {
   // 배열 길이 1인 경우 바로 종료
   if (arr.length === 1) {
      answer[level].push(arr[0]);
      return;
   }

   // 배열의 중앙값 찾아서 트리의 루트 노드로 설정
   const center = Math.floor(arr.length / 2); 
   // center을 기준으로 좌측 배역, 우측 배열 분리
   const leftArr = arr.slice(0, center); 
   const rightArr = arr.slice(center + 1, arr.length);

   // answer 배열에 중앙값을 추가
   answer[level].push(arr[center]);
   
   // 좌우 배열에 대해 재귀적으로 함수 호출하여 각각의 배열에 대해서도 트리를 구성
   // 자식으로 이동하면 level 하나 증가
   makeTree(leftArr, level + 1);
   makeTree(rightArr, level + 1);
   return;
}

makeTree(num, 0);
console.log(answer.map(v => v.join(' ')).join('\n'));