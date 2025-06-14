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

const useState = (initialState: any) => {
    console.log('useState is initialized with value: ', initialState);
    let state: any = initialState;
    const setState = (newState: any) => {
        console.log('setState is called with newState value: ', newState);
        state = newState;
    }
    return [state, setState];
}

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

// ---- Application ---
const App = () => {
    const [name, setName] = useState('layla')
    return (
        <div draggable>
            <h2>Hello {name}!</h2>
            <p>Im hungry 🤤</p>
            <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}/>
        </div>
    );
};
render(<App />, document.getElementById("myapp"));