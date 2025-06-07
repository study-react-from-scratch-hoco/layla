// This will our main app file.
// ---- Library ---
const React = {
    createElement: (tag, props, ...children) => {
        if (typeof tag === 'function') {
            return tag(props, ...children);
        }
        const el = {
            tag,
            props,
            children,
        };
        return el;
    },
};
const render = (el, container) => {
    console.log(el);
    console.log(container);
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

// ---- Application ---
const App = () => {
    return (
        <div draggable>
            <h2>Hello React!</h2>
            <p>I am a pargraph</p>
            <input type="text" />
        </div>
    );
};
render(<App />, document.getElementById("myapp"));