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
// ---- Application ---
const App = () => {
    return (React.createElement("div", { draggable: true },
        React.createElement("h2", null, "Hello React!"),
        React.createElement("p", null, "I am a pargraph"),
        React.createElement("input", { type: "text" })));
};
console.log(React.createElement(App, null));
