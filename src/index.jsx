import React from "react"
import ReactDOM from "react-dom/client"
import Main from "../components/main.jsx"


console.log('index.jsx loaded');


function Root() {
    return(
        <div>
            <p>root test</p>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById("root")).render(<Main />);
