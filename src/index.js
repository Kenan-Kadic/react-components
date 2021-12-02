import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import faker from 'faker';
import Approvalcard from "./Approvalcard";

if (module.hot) {
  module.hot.accept();
}

const App = () => {
  return (
    <div className="ui container comments">
        <Approvalcard>
            <div>
            <h4>Warning!</h4>
            Are you sure you want to do this?
            </div>
        </Approvalcard>

        <Approvalcard>
            <CommentDetail author= "Kenan" timeAgo="Today at 4.45pm" blogText="I love your post" imageProp = {faker.image.image()} />
        </Approvalcard>

        <Approvalcard>
            <CommentDetail author= "Alex" timeAgo="Today at 2pm" blogText="I like it a lot too" imageProp= {faker.image.image()} /> 
        </Approvalcard>

        <Approvalcard>
            <CommentDetail author= "Jane" timeAgo="Yesterday at 5pm" blogText="You can't say no to that" imageProp= {faker.image.image()}/>
        </Approvalcard>

    </div>
  );
};

ReactDOM.render(<App />, document.querySelector("#root"));