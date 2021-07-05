import {Component} from "react";
import Header from "../components/common/Header/Header";
import Input from "../components/Home/Input";

class Home extends Component {
    state = {  }
    render() { 
        return (
          <>
            <Header />
            <div className="container">
              <section>
                <div className="swabox">
                  <Input />

                  <br />
                  <br />

                  <Input />

                  <br />
                  <br />
                  <div className="btn">SWAP</div>
                </div>
              </section>
            </div>
          </>
        );
    }
}
 
export default Home;