import { render } from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
render(<App cols={50} rows={50} tick={1000} />, rootElement);
