class Card extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <div className="mainContainer">
                <h2> Class Components</h2>
            </div>
        )
    }
}

class Parent extends React.Component {
    state = { messageDisplayed: false };
    componentDidMount() {
      this.setState({ messageDisplayed: true });
    }
    render() {
      console.log("Parent is getting rendered");
      return (
        <div className="App">
          <Message />
        </div>
      );
    }
    }
    class Message extends React.Component {
    constructor(props) {
      super(props);
      this.state = { message: "Hello, this is vivek" };
    }  
    render() {
      console.log("Message is getting rendered");
      return (
        <div>
          <p>{this.state.message}</p>
        </div>
      );
    }
    }


    class Components extends React.component {
        constructor(props) {
            super(props);
            this.state = {message : "Hi"}
        }

        render() {
            console.log("Message is rendered");
            return (
                <div>
                    <p></p>
                </div>
            )
        }
    }