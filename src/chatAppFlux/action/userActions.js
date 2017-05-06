import alt from "../alt.js"
import http from "superagent"

class UserActions {

    registerUser(payload) {
        return (dispatch) => {
            http
                .post('/api/users/register')
                .set('Content-Type', 'application/json')
                .query(payload)
                .send(payload)
                .end((err, res) => this.handleResponse(err, res, dispatch));
        }
    }

    loginUser(payload){
        return (dispatch) => {
            http
                .post('/api/users/login')
                .set('Content-Type', 'application/json')
                .query(payload)
                .send(payload)
                .end((err, res) => this.handleResponse(err, res, dispatch));
        }
    }

    handleResponse(error, result, dispatch) {
        console.log('in handle response');
        console.log(result);
        if (error) {
            console.log('An error occurred:', error);
            alert('An error occurred: ', error);
            return;
        }
        dispatch({
            data: result.text
        });
    }
}

export default alt.createActions(UserActions);
