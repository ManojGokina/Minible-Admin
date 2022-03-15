import PropTypes from 'prop-types'
import React, { useEffect } from "react"

import { Row, Col, Alert, Container ,CardBody,Card} from "reactstrap"

// Redux
import { connect } from "react-redux"
import { withRouter, Link } from "react-router-dom"

// availity-reactstrap-validation
import { AvForm, AvField } from "availity-reactstrap-validation"
// import images
import logo from "../../assets/images/logo-dark.png"
import logolight from "../../assets/images/logo-light.png";
import Main from '../dataFe/main'

const Login = (props) => {
 fetch("http://localhost:6767/getdata", {  
  }).then(function(response) {
    return response.json();
  }).then(data => {
    console.log(data.data);
  });
  return (
    <React.Fragment>
      <div className="home-btn d-none d-sm-block">
        <Link to="/" className="text-dark">
          <i className="mdi mdi-home-variant h2"></i>
        </Link>
      </div>
      <div className="account-pages my-5 pt-sm-5">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="text-center">
                <Link to="/" className="mb-5 d-block auth-logo">
                  <img src={logo} alt="" height="22" className="logo logo-dark" />
                  <img src={logolight} alt="" height="22" className="logo logo-light" />
                </Link>
              </div>
            </Col>
          </Row>
          <Row className="align-items-center justify-content-center">
            <Col md={8} lg={6} xl={5}>
              <Card>

                <CardBody className="p-4">
                  <div className="text-center mt-2">
                    <h5 className="text-primary">Welcome Back !</h5>
                    <p className="text-muted">Sign in to continue to Minible.</p>
                  </div>
                  <div className="p-2 mt-4">
                    <AvForm
                      className="form-horizontal"
                      onValidSubmit={(e, v) => {
                        handleValidSubmit(e, v)
                      }}
                    >
                      {props.error && typeof props.error === "string" ? (
                        <Alert color="danger">{props.error}</Alert>
                      ) : null}

                      <div className="mb-3">
                        <AvField
                          name="email"
                          label="Email"
                          value="admin@themesbrand.com"
                          className="form-control"
                          placeholder="Enter email"
                          type="email"
                          required
                        />
                      </div>

                      <div className="mb-3">
                      <div className="float-end">
                          <Link to="/forgot-password" className="text-muted">Forgot password?</Link>
                        </div>
                        <AvField
                          name="password"
                          label="Password"
                          value="123456"
                          type="password"
                          required
                          placeholder="Enter Password"
                        />
                      </div>

                      <div className="form-check">
                        <input
                          type="checkbox"
                          className="form-check-input"
                          id="customControlInline"
                        />
                        <label
                          className="form-check-label"
                          htmlFor="customControlInline"
                        >
                          Remember me
                        </label>
                      </div>

                      <div className="mt-3">
                        <button
                          className="btn btn-primary w-100 waves-effect waves-light"
                          type="submit"
                        >
                          Log In
                        </button>
                      </div>

                     

                      <div className="mt-4 text-center">
                        <p className="mb-0">Don't have an account ? <a href="/register" className="fw-medium text-primary"> Signup now </a> </p>
                      </div>

                    </AvForm>

                  </div>
                </CardBody>
              </Card>
              <div className="mt-5 text-center">
                <p>© {new Date().getFullYear()} Minible. Crafted with <i
                  className="mdi mdi-heart text-danger"></i> by Themesbrand
                        </p>
              </div>
            </Col>
          </Row>
          <Main/>

        </Container>
      </div>
    </React.Fragment>
  )
}

const mapStateToProps = state => {
  const { error } = state.Login
  return { error }
}

export default withRouter(
  connect(mapStateToProps)(Login)
)

// Login.propTypes = {
//   error: PropTypes.any,
//   history: PropTypes.object,
//   loginUser: PropTypes.func,
//   socialLogin: PropTypes.func
// }