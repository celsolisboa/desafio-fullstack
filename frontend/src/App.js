import React, {Fragment} from "react";
import Routes from "./routes";
import GlobalStyle from './styles/global'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Fragment>
    <Routes />
    <GlobalStyle/>
  </Fragment>
);
export default App;