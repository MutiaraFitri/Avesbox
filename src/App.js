import Cover from './component/Cover'
import Intro from './component/Intro'
import Fitur from './component/Fitur'
import Regis from './component/Regis'
import Package from './component/Package'
import News from './component/News'
import Footer from './component/Footer'

const App = () => (
  <div className="App">

    <div className="cover" >
      <Cover />
    </div>
    <div className="content-intro">
      <Intro />
    </div>
    <div className="content-regis">
      <Regis />
    </div>
    <div className="content-fitur">
      <Fitur />
    </div>
    <div className="content-package">
      <Package />
    </div>
    <div className="content-news">
      <News />
    </div>
    <div className="content-footer">
      <Footer />
    </div>

  </div>
);


export default App;
