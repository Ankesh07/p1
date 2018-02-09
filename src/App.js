import React from 'react';
import Paper from 'material-ui/Paper';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import FlatButton from 'material-ui/FlatButton';
const style = {
  width: "100%",
  textAlign: 'center',
  display: 'inline-block',
    padding:10
  };

const buttonstyle={
	fontSize:20,color:'#00838F',padding:10,fontFamily: 'Josefin Sans'
};

class Navbar extends React.Component {
  render() {
    return (
	<MuiThemeProvider>
	<div>
      <Paper style={style} zDepth={1} >
	  <span style={{fontFamily: 'Berkshire Swash',color:'#00838F',fontSize:50}}>Easye-learning</span>
	  <FlatButton label="Home" hoverColor='#fff'  labelStyle={buttonstyle} style={{marginLeft:60}}/>
	  <FlatButton label="Answer" hoverColor='#fff'  labelStyle={buttonstyle} style={{marginLeft:15}}/>
	  <FlatButton label="Notification" hoverColor='#fff'  labelStyle={buttonstyle} style={{marginLeft:15}}/>
      <input type="text" placeholder="Search.." name="search" style={{fontSize:25,marginLeft:350}}/>
	  <FlatButton label="Login" hoverColor='#fff'  labelStyle={buttonstyle} style={{marginLeft:15}}/>
	  <FlatButton label="SignUp" hoverColor='#fff'  labelStyle={buttonstyle} style={{marginLeft:15}}/>
      
	  </Paper>
    </div>
	</MuiThemeProvider>);
  }
}

export default Navbar;
