import React, { Component } from 'react'

export default class CreateTodo extends Component{
    constructor(props){
        super(props)

        this.onChangeTodoDesc = this.onChangeTodoDesc.bind(this)
        this.onChangeTodoPrio = this.onChangeTodoPrio.bind(this)
        this.onChangeTodoResp = this.onChangeTodoResp.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            todo_desc: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        }
    }

    onChangeTodoDesc(e){
        this.setState({
            todo_desc: e.target.value
        })
    }

    onChangeTodoResp(e){
        this.setState({
            todo_responsible: e.target.value
        })
    }

    onChangeTodoPrio(e){
        this.setState({
            todo_priority: e.target.value
        })
    }

    onSubmit(e){
        e.preventDefault()
        console.log(`Form submitted`)
        console.log(`Todo Desc: ${this.state.todo_desc}`)
        console.log(`Todo Resp: ${this.state.todo_responsible}`)
        console.log(`Todo Prio: ${this.state.todo_priority}`)
        console.log(`Todo completed: ${this.state.todo_completed}`);
        
        //reset form fields
        this.setState({
            todo_desc: '',
            todo_responsible: '',
            todo_priority: '',
            todo_completed: false
        })
    }


    render(){
        return(
            <div style={{marginTop:20}}>
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description:</label>
                        <input type="text" className="form-control" value={this.state.todo_desc}
                        onChange={this.onChangeTodoDesc} />
                    </div>

                    <div className="form-group">
                        <label>Responsible:</label>
                        <input type="text" className="form-control" value={this.state.todo_responsile}
                        onChange={this.onChangeTodoResp} />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="priorityOption" id="priorityLow" value="Low" 
                            checked={this.state.todo_priority==='Low'} 
                            onChange={this.onChangeTodoPrio}  />
                            <label className="form-check-label">Low</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="priorityOption" id="priorityMedium" value="Medium" 
                            checked={this.state.todo_priority==='Medium'} 
                            onChange={this.onChangeTodoPrio}  />
                            <label className="form-check-label">Medium</label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input className="form-check-input" type="radio" name="priorityOption" id="priorityHigh" value="High" 
                            checked={this.state.todo_priority==='High'} 
                            onChange={this.onChangeTodoPrio}  />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}