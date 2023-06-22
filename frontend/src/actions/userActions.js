import axios from 'axios'
import { USER_LOGIN_FAIL, USER_LOGIN_REQUEST, USER_LOGIN_SUCCESS, USER_LOGOUT } from '../constants/userConstants'

export const login = (username, password) => async (dispatch) => {
    try {
          dispatch({
                type: USER_LOGIN_REQUEST
          })

          const config = {
                headres: {
                      'Content-Type': 'application/json',
                },
          }
          const { data } = await axios.post('http://148.251.225.118:3200/api/login', { username, password }, config)

          dispatch({
                type: USER_LOGIN_SUCCESS,
                payload: data
          })

          localStorage.setItem('userInfo', JSON.stringify(data))


    } catch (error) {

          dispatch({
                type: USER_LOGIN_FAIL,
                payload:
                      error.response && error.response.data.message
                            ? error.response.data.message
                            : error.message,
          })

    }
}
