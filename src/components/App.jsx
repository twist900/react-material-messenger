import React from 'react';
import MessageList from './MessageList.jsx';
import ChannelList from './ChannelList.jsx';
import MessageBox from './MessageBox.jsx';
import Login from './Login.jsx';
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var ThemeManager = new mui.Styles.ThemeManager();
var Colors = mui.Styles.Colors;
var AppBar = mui.AppBar;

@connectToStores
class App extends React.Component {

    constructor(){
        super();

        ThemeManager.setPalette({
            primary1Color: Colors.blue500,
            primary2Color: Colors.blue700,
            primary3Color: Colors.blue100,
            accent1Color:  Colors.pink400
        });
    }


    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }

    static childContextTypes = {
        muiTheme: React.PropTypes.object
    }

    getChildContext(){
        return {
            muiTheme: ThemeManager.getCurrentTheme()
        };
    }

    render(){

        var view = <Login />

        if(this.props.user){
         view = <div>
             <div style={{
                display: 'flex',
                flexFlow: 'row wrap',
                maxWidth: 1200,
                width: '100%',
                margin: '30px auto 30px'
                }}>
                 <ChannelList />
                 <MessageList />

             </div>
             <MessageBox />
         </div>
        }

        return (

            <div>
                <AppBar title="Awesome Chat App" />
                {{view}}

            </div>
        );
    }


}

export default App;