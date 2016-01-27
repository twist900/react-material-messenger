import alt from '../alt';
import Firebase from 'firebase';

class Actions {

    login(){
        return (dispatch) => {
            var firebaseRef = new Firebase('https://ohmyreactstack.firebaseio.com');
            firebaseRef.authWithOAuthPopup("google", (error, user) => {
                if(error){
                    return;
                }

                dispatch(user);
            });
        }
    }


}

export default alt.createActions(Actions);