
import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Message from '../../components/Message.js'
import Loader from '../../components/Loader.js'
import { useNavigate } from 'react-router-dom'
import { login } from '../../actions/userActions'
import "./login.css"

const LoginScreen = () => {
      const [username, setUsername] = useState('')
      const [password, setPassword] = useState('')

      const dispatch = useDispatch()
      const userLogin = useSelector(state => state.userLogin)
      const { loading, error, userInfo } = userLogin
      const navigate = useNavigate();

      useEffect(() => {
            if (userInfo) {
                  navigate("/report");
            }
      }, [userInfo])

      const submitHandler = (e) => {
            e.preventDefault()
            dispatch(login(username, password))

      }

      return (
            <>
                  <div className="maincontainer">
                        <div class="container-fluid">
                              <div class="row no-gutter">

                                    <div class="col-md-6 d-none d-md-flex bg-1"></div>

                                    <div class="col-md-6 bg-light">
                                          <div class="login d-flex align-items-center py-5">

                                                <div class="container">
                                                      <div class="row">
                                                            <div class="col-lg-10 col-xl-7 mx-auto">
                                                                  <h3 class="display-4">LOG IN!</h3>
                                                                  {error && <Message variant='danger'>Username or Password incorrect</Message>}
                                                                  {loading && <Loader />}
                                                                  <p class="text-muted mb-4">Create a login split page using Bootstrap 4.</p>
                                                                  <form onSubmit={submitHandler} >
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputEmail" type="text" placeholder="Email address" required="" autofocus="" value={username} onChange={(e) => setUsername(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4" />
                                                                        </div>
                                                                        <div class="form-group mb-3">
                                                                              <input id="inputPassword" type="password" placeholder="Password" required="" value={password} onChange={(e) => setPassword(e.target.value)} class="form-control rounded-pill border-0 shadow-sm px-4 text-primary" />
                                                                        </div>
                                                                        <div class="custom-control custom-checkbox mb-3">
                                                                              <input id="customCheck1" type="checkbox" checked class="custom-control-input" />
                                                                              <label for="customCheck1" class="custom-control-label">Remember password</label>
                                                                        </div>
                                                                        <button type="submit" class="btn btn-outline-warning btn-block text-uppercase mb-2 rounded-pill shadow-sm">Sign in</button>

                                                                  </form>
                                                            </div>
                                                      </div>
                                                </div>
                                          </div>
                                    </div>
                              </div>
                        </div>
                  </div>

            </>
      )
}

export default LoginScreen
