class StateExample extends React.Component {

   constructor(props) {
      super(props);

      this.state = {
         header: 10,
         content: "Content Initial State"
     };
     	this._updateHeader=this._updateHeader.bind(this);
      this.changetext=this.changetext.bind(this);
   }

   _updateHeader(props){
       this.setState({
           header: this.state.header - 1
       });
   }
   
   changetext(props){
   	this.setState({
    	content: "madgb"
    });
   }

   render() {
      return (
         <div>
            <h1>{this.state.header}</h1>
            <h2>{this.state.content}</h2>
            <button onClick={this._updateHeader}>countdown</button>
            <button onClick={this.changetext}>change</button>
         </div>
      );
   }
}


ReactDOM.render(
  <StateExample />,
  document.getElementById('container')
);