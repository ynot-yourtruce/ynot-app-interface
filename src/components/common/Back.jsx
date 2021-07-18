import { Component } from "react";
import { AiOutlineLeft } from "react-icons/ai";
import { Link } from "react-router-dom";

class Back extends Component {
  state = {};
  render() {
    return (
      <Link className="back" to="/">
        <AiOutlineLeft />
        BACK
      </Link>
    );
  }
}

export default Back;
