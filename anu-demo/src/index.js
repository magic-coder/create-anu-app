import React, { Compoent } from "react";
import ReactDOM from "react-dom";
import { Loading } from "./Loading";


class Child extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props.value);
        return this.props.value;
    }
}

function Wrapper(props) {
    return (<div><Loading /><Child {...props} ref={props.forwardedRef} /></div>)
}

const RefForwardingComponent = React.forwardRef((props, ref) => (
    <Wrapper {...props} forwardedRef={ref} />
));

let setRefCount = 0;
let ref;

const setRef = r => {
    setRefCount++;
    ref = r;
};

window.onload = function(){
    var container = document.querySelector("#app")
    ReactDOM.render(<RefForwardingComponent ref={setRef} value={"欢迎使用anujs"} />, container);
    console.log(ref)
}

