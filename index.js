const Notification = (props) => {
  //  Write your code here.
  const { content } = props;
  return <p>{content}</p>;
};

const element = (
  <div className="bg">
    <h1 className="heading">Notifications</h1>

    <div>
      <div className="info card">
        <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
        <Notification content="Information Message" />
      </div>
      <div className="suc card">
        <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
        <Notification content="Success Message" />
      </div>
      <div className="warn card">
        <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
        <Notification content="Warning Message" />
      </div>
      <div className="err card">
        <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
        <Notification content="Error Message" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
