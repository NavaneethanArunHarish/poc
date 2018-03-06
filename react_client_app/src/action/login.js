import axios from 'axios';

export default (form,callback) => {
        return dispatch => {
            axios({
              method: 'post',
              url: "http://localhost:3000/api/user/login",
              data: form,
              headers: {
                'Content-Type': "application/json",
              }

            })
              .then(response => {
                var data = response;
                console.log("response while updating -- > ", data);
                dispatch({
                  type: "REGISTER_SUCCESS",
                  register: data
                });
              }).catch(error => {
                console.log("got error while updating---> ", JSON.stringify(error.response.data));
                dispatch({ type: "REGISTER_REJECTED" , register: error.response.data });
              });
          }

        
}


