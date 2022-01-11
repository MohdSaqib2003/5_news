import React, { useEffect } from "react";
import FetchNews from "./action";
import { connect } from "react-redux";
import Header from "./Header";
import Card from "./Card";

const App = (props) => {

  useEffect(() => {
    props.FetchNews("general");
  }, []);

  // FetchNews('',{
  //   params:{
  //     // q:'virat kohli',
  //     // country: 'in',
  //     category: 'sport',
  //     // apiKey: "4dbc17e007ab436fb66416009dfb59a8"
  //     apiKey: "3f8018ecb1774be7bca797aaa91da8f6"
  //   }
  // }).then(resp=>{
  //   console.log(resp);
  // }).catch(err=>console.log(err))

  const onClickHandler = (val) => {
    props.FetchNews(val);
  }

  // console.log(props.data);
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