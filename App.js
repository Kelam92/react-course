import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child" }, [
        React.createElement("h1", { id: "gchild1" }, "This is React Course"),
        React.createElement("h2", { id: "gchild2" }, "by Santosh Kelam"),
    ]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("h1", { id: "gchild3" }, "I'm a h1 tag"),
        React.createElement("h2", { id: "gchild4" }, "I'm a h2 tag"),
    ]),
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);