## 🎥 VirtualDOM and Renderer - 1주차
### 1주차 내용
> 개발 환경 설정 (TypeScript 및 JSX 지원)  
> JSX를 사용하여 컴포넌트 정의  
> 가상 DOM을 실제 DOM으로 변환하는 render 함수 구현  
> 텍스트 노드 처리 로직 추가
```ts
const render = (el, container) => {
    console.log(el);
    console.log(container);
    if (typeof el === 'string') {
        const textNode = document.createTextNode(el);
        container.appendChild(textNode);
        return;
    }
    // 1. DOM 요소 생성
    let domEl = document.createElement(el.tag);
    // 2. 속성 설정
    let elProps = el.props ? Object.keys(el.props) : null;
    if (elProps && elProps.length > 0) {
        elProps.forEach((prop) => (domEl[prop] = el.props[prop]));
    }
    // 3. 자식 요소 처리
    if (el.children && el.children.length > 0) {
        el.children.forEach((node) => render(node, domEl));
    }
    // 4. 생성된 요소를 컨테이너에 추가
    container.appendChild(domEl);
};
```
1. 가상 DOM 노드의 태그를 기반으로 실제 DOM 요소를 생성합니다.
2. 가상 DOM 노드의 속성을 실제 DOM 요소에 설정합니다.
3. 자식 노드가 있는 경우 재귀적으로 render 함수를 호출하여 자식 요소를 처리합니다.
4. 생성된 DOM 요소를 지정된 컨테이너에 추가합니다.

### 😆 느낀점
항상 쓰던 리액트를 구현하려하니 신기하네요 🧐  
너무 어렵지도 않고 눈으로 확인해가면서 따라해서 재밌었습니다.  

## 🎥 State Management and React Hooks - 2주차
### 2주차 내용
> useState 훅의 기본 구현  
> 상태 변경 시 렌더링 함수 (reRender) 연결  
> 상태 초기화 문제 해결 시도  
> 다중 useState 호출을 위한 인덱스 기반 상태 저장 구조  
> React Hooks 사용 규칙의 필요성 이해

진행하면서 숫자가 화면에 표시되지 않는 문제점을 겪었습니다.  
![image](https://github.com/user-attachments/assets/fc86fe8d-17f0-484c-951d-1c322b4cdbc6)

다행히 포스트에서 해당 사항을 댓글을 남겨주어 알아챌 수 있었는데요,  
알고보니 1주차를 진행할때 render 함수에서 문자일 경우에만 TextNode를 생성하게끔 만들었습니다.
```ts
if (typeof el === 'string') { ...
}
```
따라서 숫자도 문자열로 바꿔서 렌더링하는 조건을 추가해서 해결했습니다.
```ts
 if (typeof el === 'string' || typeof el === 'number') {
        const textNode = document.createTextNode(String(el));
        container.appendChild(textNode);
        return;
    }
```
### 😆 느낀점
onchange라고 써야하는데 onChange라고 써서 헤맸습니다😭  
미리 알려주셨는데도 까먹고 왜이러지?! 이랬습니다... (바보)  
이상한데서 좀 헤맸지만 이번 주차가 진짜 라이브러리 만든 기분이 들었던 것 같습니다😇😆
