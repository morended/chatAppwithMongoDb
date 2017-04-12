import alt from "../alt.js"
import http from "superagent"



class chatActions {
	


	updateMessages(payload) {
    console.log('hello');
    console.log(payload);
    return (dispatch) => {
      http
        .post('/api/chats/sendMessage')
        .set('Content-Type', 'application/json')
         .query(payload)
        .send(payload)
        
        .end((err, res) => {
          const error = err || res.error ? ServerError(res) : null;
          
            dispatch({
            error: error,
            data: res.body,
            
          });

          if (error) ChatActions.error({ message: error.message });
        });
    }
  };
}
console.log(alt);
export default alt.createActions(chatActions);