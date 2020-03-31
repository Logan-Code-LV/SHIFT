import React, { useState } from "react"
import { useAuth } from "react-auth"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import {
  Button,
  Form,
  Grid,
  Header,
  Image,
  Message,
  Segment
} from "semantic-ui-react"

import "semantic-ui-css/semantic.min.css"

export default props => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  const { signin } = useAuth()

  function handleLogin(e) {
    e.preventDefault()

    signin(username, password).then(resp => {
      props.history.push("/viewjobs")
    })
  }

  return (
    <div className="wrapper">
      <Grid
        textAlign="center"
        style={{ height: "100vh" }}
        verticalAlign="middle"
      >
        <Grid.Column style={{ maxWidth: 450 }}>
          <Header as="h2" color="teal" textAlign="center">
            <Image src="/logo.png" /> Log-in to your account
          </Header>
          <Form size="large" onsubmit={handleLogin}>
            <Segment stacked>
              <form onSubmit={handleLogin}>
                <Form.Input
                  fluid
                  icon="user"
                  iconPosition="left"
                  type="text"
                  value={username}
                  onChange={e => setUsername(e.target.value)}
                  placeholder="Username"
                />
                <Form.Input
                  fluid
                  icon="lock"
                  iconPosition="left"
                  type="password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                  placeholder="Password"
                  type="Password"
                />

                <Button type="submit" color="teal" fluid size="large">
                  Login
                </Button>
              </form>
            </Segment>
          </Form>
          <Message>
            New to us? <Link to="/restregister">Sign Up</Link>
          </Message>
        </Grid.Column>
      </Grid>
    </div>
  )
}
