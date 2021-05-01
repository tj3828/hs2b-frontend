import "./App.css";
import {Container} from "react-bootstrap";
import {Route} from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./components/Footer";

function App() {
  return (
  <div>
    <Header></Header>
    <Container>
      <Route path="/" exact={true} component={Home}/>
      <Route path="/home" exact={true} component={Home}/>
      <Route path="/board" exact={true} component=""/>
    </Container>
    <Footer></Footer>
  </div>
  );
}

export default App;
