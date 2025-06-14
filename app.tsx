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

let myAppState;

const useState = (initialState: any) => {
    myAppState = myAppState || initialState;
    console.log('useState is initialized with value: ', myAppState);
    let state: any = initialState;
    const setState = (newState: any) => {
        console.log('setState is called with newState value: ', newState);
        myAppState = newState;
        // 상태 변경시 UI 리렌더링
        reRender();
    }
    return [myAppState, setState];
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

const reRender = () =>{
    console.log('reRender-ing :)');
        render(<App/>, document.getElementById('myapp'));
}

// ---- Application ---
const App = () => {
    const [name, setName] = useState('layla');
    const [count, setCount] = useState(0);
    return (
        <div draggable>
            <h2>Hello {name}!</h2>
            <p>Im hungry 🤤</p>
            <input
                type="text"
                value={name}
                onchange={(e) => setName(e.target.value)}/>
            <h2>Counter value: {count}</h2>
            <button onClick={() => setCount(count + 1)}>+1</button>
            <button onClick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};
render(<App />, document.getElementById("myapp"));