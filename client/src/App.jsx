import React from "react";
import ReactDOM from "react-dom";
import 'bootstrap/dist/css/bootstrap.css'
import 'shards-ui/dist/css/shards.css'
import Chat from './Chat.jsx'

import "./index.css";




const App = () => <Chat/>;

ReactDOM.render(<App />, document.getElementById("app"));
