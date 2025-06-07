// This will our main app file.
// ---- Library ---
const React = {
    createElement: (...args) => {
        console.log(args);
    },
};
// ---- Application ---
const App = (React.createElement("div", { draggable: true },
    React.createElement("h2", null, "Hello React!"),
    React.createElement("p", null, "I am a pargraph"),
    React.createElement("input", { type: "text" })));
