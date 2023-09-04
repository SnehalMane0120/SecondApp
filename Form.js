import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props)
        this.state = {
            UserName: '',
            comment: '',
            graduation: 'BE'
        }
        handleUserName = (event) => {
            this.setState({
                UserName: event.target.value
            })
        }
        handleComment = (event) => {
            this.setState({
                comment: event.target.value
            })
        }
        handleGrade = (event) => {
            this.setState({
                graduation: event.target.value
            })
        }
        handleSubmit = (event) => {
            alert(`${this.state.UserName}.${this.state.comment}.${this.state.graduation}`)
        }
        event.preventDefault()

    }
    render() {
        return (
            <>
                <form onsumbit={this.handleSubmit}>
                    <div>form</div>
                    <div>
                        <label>UserName:</label>
                        <input type='text' value={this.state.UserName} onchange={this.handleUserName}></input>

                    </div><br></br>
                    <div>
                        <label>Comment:</label>
                        <input type='text' value={this.state.comment} onchange={this.handleComment}></input>


                    </div>
                    <div>
                        <label>Graduation:</label>
                        <select value = {this.state.graduation} onchange = {this.handleGrade}>
                            <option value="BE">BE</option>
                            <option value="BTech">BTech</option>
                            <option value="MCA">MCA</option>
                            <option value="BCA">BCA</option>


                        </select>


                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>ol
                </form>
            </>
        )
    }
}
