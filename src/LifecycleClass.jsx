import React, { Component } from 'react'

export default class LifecycleClass extends Component {
    constructor(props) {
        super(props)
        console.log("constructor calling...")
        this.state = {
            color: 'red'
        }
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                color: 'yellow'
            })
        }, 5000)

        console.log('component did mount called...');
    }
    static getDerivedStateFromProps(props, state) {
        //static let name="darshan"
        //let name="darshan"
        //In memory-single copy
        //without object call
        console.log("Props value " + props.color);
        console.log("getDerivedStateFromProps called..." + state.color);
        return state
        // return null
    }
    shouldComponentUpdate() {
        console.log('should component update called...');
        return true
    }
    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("get Snapshot before update called...");
        console.log("Prev color is " + prevState.color);
        return null
    }
    componentDidUpdate() {
        console.log('finally component updated...');
    }
    componentWillUnmount() {
        console.log('Lifecycle completed..');
    }
    render() {
        console.log('render calling...');
        console.log(this.state.color);
        return (
            <div>
                Color name is:{this.state.color}
            </div>
        )
    }
}

