import { BrowserRouter, Switch, Route } from 'react-router-dom';
import AboutPage from './page/AboutPage';
import ContactPage from './page/ContactPage';
import LandingPage from "./page/LandingPage";
import NewsPage from "./page/NewsPage";
import ProductPage from './page/ProductPage';
import RegisterPage from './page/RegisterPage';

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/about" component={AboutPage} />
      <Route exact path="/contact" component={ContactPage} />
      <Route exact path="/news" component={NewsPage} />
      <Route exact path="/product" component={ProductPage} />
      <Route exact path='/register' component={() => {
        window.location.href = 'https://dev.avesbox.com';
        return null;
      }} />
      <Route path="/" component={LandingPage} />
    </Switch>
  </BrowserRouter>
);


export default App;
