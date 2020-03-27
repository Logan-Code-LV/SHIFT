import React, { Component } from "react"
import { Form } from "semantic-ui-react"
import "semantic-ui-css/semantic.min.css"
import { usePost } from "../hooks"

export default props => {
  const [restname, setRestname] = useState("")
  const [jobdesc, setJobdesc] = useState("")
  const [pay, setPay] = useState("")

  const { create } = usePost()

  function handleSubmit(e) {
    e.preventDefault()
    create({ restname, jobdesc, pay }).then(resp => {
      props.history.push("/Viewfreelancers")
    })
  }

  const options = [
    { key: "m", text: "Bartender", value: "Bartender" },
    { key: "f", text: "Server", value: "Server" },
    { key: "o", text: "Host", value: "Host" }
  ]

  class FormExampleSubcomponentControl extends Component {
    state = {}

    handleChange = (e, { value }) => this.setState({ value })

    render() {
      const { value } = this.state
      return (
        <Form>
          <Form.Group widths="equal">
            <Form.Input
              fluid
              label="Restaurant Name"
              placeholder="Restaurant Name"
              value={restname}
              onChange={e => setRestname(e.target.value)}
            />
            <Form.Select
              fluid
              label="Position"
              options={options}
              placeholder="Position"
            />
          </Form.Group>
          <Form.Group inline>
            <label>Setting</label>
            <Form.Radio
              label="Fine Dining"
              value="fd"
              checked={value === "fd"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Casual"
              value="cas"
              checked={value === "cas"}
              onChange={this.handleChange}
            />
            <Form.Radio
              label="Bar"
              value="bar"
              checked={value === "bar"}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.TextArea
            label="Job Description"
            placeholder="Tell us about the job..."
          />
          <Form.Checkbox label="I agree to the Terms and Conditions" />
          <Form.Button>Submit</Form.Button>
        </Form>
      )
    }
  }
}
