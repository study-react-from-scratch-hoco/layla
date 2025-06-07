// This will our main app file.
// ---- Library ---
const React = {
    createElement: (tag, props, ...children) => {
        const el = {
            tag,
            props,
            children,
        };
        console.log(el);
        return el;
    },
};
// ---- Application ---
const App = (React.createElement("div", { draggable: true },
    React.createElement("h2", null, "Hello React!"),
    React.createElement("p", null, "I am a pargraph"),
    React.createElement("input", { type: "text" })));
