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
