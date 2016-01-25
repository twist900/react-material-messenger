import React from 'react';
import mui from 'material-ui';

var {ListItem, Avatar} = mui;

class Message extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
            <ListItem
                leftAvatar={<Avatar src="http://www.gravatar.com/avatar/3b3be63a4c2a439b013787725dfce802?d=identicon" />}>
                {this.props.message}
            </ListItem>
        );
    }
}

export default Message;