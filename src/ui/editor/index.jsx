import React from "react";
import camelCase from "lodash/camelCase";
import Card from "./components/card";
import "./index.css";

function format(dataString) {
  const items = dataString
    .replace(/(\s|\n)+/g, "")
    .split(";")
    .filter((item) => !!item);
  const json = items.reduce((data, item) => {
    const [key, value] = item.split(":");
    if (key && value) data[camelCase(key)] = value;
    return data;
  }, {});
  return JSON.stringify(json, null, 2);
}

function App() {
  const [input, setInput] = React.useState("");

  const output = React.useMemo(() => {
    if (!input) return "";
    return format(input);
  }, [input]);

  return (
    <div className="page">
      <h1>CSS Theme Editor</h1>
      <Card>
        <h3>CSS 变量：</h3>
        <textarea
          rows="10"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
      </Card>
      <Card>
        <h3>Output：</h3>
        <textarea rows="20" value={output} readOnly />
      </Card>
    </div>
  );
}

export default App;
