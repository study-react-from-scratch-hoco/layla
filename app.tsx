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

//let myAppState;
const myAppState = [];
let myAppStateCursor = 0;

const useState = (initialState) => {// get the cursor for this useState
    const stateCursor = myAppStateCursor;
    myAppState[stateCursor] = myAppState[stateCursor] || initialState;
    console.log(
        `useState is initialized at cursor ${stateCursor} with value:`,
        myAppState
    );
    const setState = (newState) => {
        console.log(
            `setState is called at cursor ${stateCursor} with newState value:`,
            newState
        );
        myAppState[stateCursor] = newState;
        reRender();
    };
    myAppStateCursor++;
    console.log(`stateDump`, myAppState);
    return [myAppState[stateCursor], setState];
};

const render = (el, container) => {
    console.log(el);
    console.log(container);
    if (typeof el === 'string' || typeof el === 'number') {
        const textNode = document.createTextNode(String(el));
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

    const reRender = () => {
        console.log('reRender-ing :)');
        const rootNode = document.getElementById('myapp');
        rootNode.innerHTML = '';
        myAppStateCursor = 0;
        render(<App />, rootNode);
    };


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
            <h2>Counter value: {count} </h2>
            <button onclick={() => setCount(count + 1)}>+1</button>
            <button onclick={() => setCount(count - 1)}>-1</button>
        </div>
    );
};
render(<App />, document.getElementById("myapp"));