import React, { useEffect } from "react";
import FetchNews from "./action";
import { connect } from "react-redux";
import Header from "./Header";
import Card from "./Card";

const App = (props) => {

  useEffect(() => {
    props.FetchNews("general");
  }, []);

  const onClickHandler = (val) => {
    props.FetchNews(val);
  }

  return (<div className="ui container">
    <Header onClickHandler={onClickHandler} />
    <Card />
  </div>
  );
}

const mapStateToProps = (state) => {
  return { data: state.News }
}

export default connect(mapStateToProps, { FetchNews })(App);