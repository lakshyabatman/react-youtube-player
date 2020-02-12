import React, { Component } from 'react'

class AddVideo extends Component {
    constructor(props) {
        super(props)
        this.state= {
            search:''
        }
        this.onChange= this.onChange.bind(this)
        this.onClick = this.onClick.bind(this)
    }
    onChange(e){
        this.setState({search:e.target.value})
    }
    onClick(e) {
        this.props.onSearchTermChange(this.state.search);
        e.preventDefault()
    }
    render() {
        return (
            <form className="side-search-bar row" onSubmit={this.onClick}>
                <input value={this.state.search} onChange={this.onChange} placeholder="Add videos in queue" className="col-8"/>
                <button className="col-4" type="submit">Add</button>
            </form>
        )
    }
}
export default AddVideo