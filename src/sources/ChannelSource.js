import Actions from '../actions';
import Firebase from 'firebase';

let firebaseRef = new Firebase('https://ohmyreactstack.firebaseio.com/channels');

let ChannelSource = {
    getChannels: {
        remote(state, selectedChannelkey){
            return new Promise((resolve, reject) => {
                firebaseRef.once("value", (dataSnapshot)=> {
                    var channels = dataSnapshot.val();
                    selectedChannelkey = selectedChannelkey || _.keys(channels)[0];
                    var selectedChannel = channels[selectedChannelkey];
                    if(selectedChannel){
                        selectedChannel.selected = true;
                    }
                    resolve(channels);
                });
            });
        },
        success: Actions.channelsReceived,
        error: Actions.channelsFailed
    }
}

export default ChannelSource;