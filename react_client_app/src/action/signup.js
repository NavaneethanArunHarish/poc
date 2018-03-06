import axios from 'axios';

export default (form,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: "http://localhost:3000/api/user/signup",
              data: form,
              headers: {
                'Content-Type': "application/json",
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "SIGNUP_SUCCESS",
                  signup: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "SIGNUP_REJECTED" , signup: error.response.data });
              });
          }

        
}


