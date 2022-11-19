import React from "react";
import ReactDOM from "react-dom";

import "./index.scss";
import App from "./app/App";
import { Providers } from "./Providers";
import { init_i18n } from "./i18n";

init_i18n();

ReactDOM.render(
    <React.StrictMode>
        <Providers>
            <App />
        </Providers>
    </React.StrictMode>,
    document.getElementById("root")
);
