import React from 'react';
import Channel from "./Channel.jsx";
import mui from 'material-ui';
import connectToStores from 'alt/utils/connectToStores';
import ChatStore from '../stores/ChatStore';

var {Card, List, CircularProgress} = mui;

@connectToStores
class ChannelList extends React.Component {

    constructor(props){
        super(props);

    }

    componentDidMount(){
        this.selectedChannel = this.props.params.channel; //from router
        ChatStore.getChannels(this.selectedChannel);
    }

    componentWillReceiveProps(nextProps){
        if(this.selectedChannel != nextProps.params.channel){
            this.selectedChannel = nextProps.params.channel;
            ChatStore.getChannels(this.selectedChannel);
        }
    }

    static getStores(){
        return [ChatStore];
    }

    static getPropsFromStores(){
        return ChatStore.getState();
    }


    render(){

        if(!this.props.channels){
            return (
                <Card style={{
                    flexGrow: 1
                    }}>

                    <CircularProgress
                        mode="indeterminate"
                        style={{
                            paddingTop: "20px",
                            paddingBottom: "20px",
                            margin: '0 auto',
                            display: 'block',
                            width: '60px'
                        }}>

                    </CircularProgress>
                </Card>
            )
        }
        var channelNodes = _(this.props.channels)
            .keys()
            .map((k)=> {
                let channel = this.props.channels[k];
                return (
                    <Channel channel={channel} />
                );
            })
            .value();

        return (
            <Card style={{
                flexGrow: 1
            }}>
                <List>
                    {channelNodes}
                </List>

            </Card>
        );
    }
}

export default ChannelList;