import { eventWrapper, getValue } from "@testing-library/user-event/dist/utils";
import React from "react";

{/*function App() {
  function printdata() {
    alert('printdata called');
  }
  return(
    <>
    Button Click Function Example
    <button onClick={printdata}>Click me</button></>
  )
} */}
 
{/*function App() {
  return(<>
  <h1>
    Event example</h1>
    <button onClick={() => alert('Event Demo')}>Click Me</button></>);
} */}

{/*function App() {
  const printvalue = () =>{
    alert('Hello');
  }
  return (<>
  <h1>printvalue Example</h1>
  <button onClick={printvalue}>Click Me</button></>)
}
*/}

{/* function App() {
  const printvalue = (a) => {
    alert('Hello ' + a);
  }
  return(<>
  <h1>Value pass Example</h1>
  <button onClick={()=>printvalue("jigar patel")}>Click Me</button></>)
} */}

{/* class App extends React.Component {
  printData() {
    alert('printdata called with class component');
  }
  render() {
    return(
      <>
      Button Click Class With Class Component
      <button onClick={this.printData.bind(this)}>Click Me</button></>
    );
  }
} */}

{/* function App() {
  function printdata(Event) {
    console.log(Event);
    console.warn("type: " + Event.type);
    console.warn("Name: " + Event.target.name);
    console.warn("Value: " + Event.target.value);
  }
  return(
    <>
    Button Click Function 
    <button onClick={printdata} value="I am Button" name="btn1">Click Me</button></>
  );
} */}

{/* function App() {
  const printvalue = (Event) => {
    console.warn("type: " + Event.type);
    console.warn("Name: " + Event.target.name);
    console.warn("Value: " + Event.target.value);
  }
  return(
    <>
    <h1>
      Event Example using Aero function</h1>
      <button onClick={printvalue} name="text1" value="I am aero function">Click Me</button></>
  );
} */}

{/* function App() {
  const printvalue = (Event) => {
    console.warn("type: " + Event.type);
    console.warn("Name: " +Event.target.name);
    console.warn("textbox Value: " + Event.target.txt1.value);
    Event.preventDefault();
  }
  return(
    <>
    <h2>Form Submit Example with event.</h2>
    <form onSubmit={printvalue}name="myform">
    <input type="text" name="txt1"/>
    <input type="submit" />
    </form>
    </>
  )
} */}

{/* class App extends React.Component{
  printData(event) {
    alert('class component with submit form')
    console.log(event);
    console.warn("type: " + event.type);
    event.preventDefault();
  }
  render(){
    return(
    <>
    <form onSubmit={this.printData.bind(this)}>
      Name: <input type="text" name="txt1"/>
      <input type="submit" />
      </form>
      </>
    );
  }
} */}

{/* function App() {
  function Demo(e) {
    var a = e.target.txt1.value;
    if(a % 2 == 0) {
      alert("Even Number");
    }else{
      alert("Odd Number")
    }
    e.preventDefault();
  }
  return (<>
  <form onSubmit={Demo}>
    No 1 : <input type="text" name="txt1" />
    <input type="submit "/>

    No 2 : <input type="text" name="txt2" />
<input type="submit" />
    </form>
    </>);
} */}

{/* function App() {
  const frmsubmit = (e) => {
    var a = e.target.txt1.value;
    var b = e.target.txt2.value;
    var c = parseInt(a) + parseInt(b);
    alert('sum is ' + c);
    e.preventDefault();
}
return(
  <>
  <h2>Sum Example</h2>
    <form onSubmit={frmsubmit} name="frm1">
      No1<input type="text" name="txt1"></input><br/>
      No2<input type="text" name="txt2"></input><br/>
      <input type="submit" ></input>
      </form>
      </>
);
} */}

{/* class App extends React.Component {
  Checkyear(e) {
    var a = e.target.txt1.value;
    if(a % 4 == 0) {
      alert("Leap Year");
    }else{
      alert("Not a leap year");
    }
    e.preventDefault();
  }
  render() {
    return (<>
    <form onSubmit={this.Checkyear.bind(this)}>
    <input type="text" name="txt1 "/>
    <input type="submit" value="check"/>
    </form>
    </>);
  }
} */}

{/* class App extends React.Component {
  doSum(e) {
    var a = e.target.txt1.value;
    var b = e.target.txt2.value;
    var c = parseInt(a) + parseInt(b);
    alert('sum is '+ c);
    e.preventDeafault();
  }
  render() {
    return (
      <>
      <form onSubmit={this.doSum.bind(this)}>
        No1 <input type="text" name="txt1" />
        No2 <input type="text" name="txt2"/>
        <input type="submit" value="sum"/>
        </form>
        </>
    );
  }
} */}

{/* function App() {
  const printvalue = (Event) => {
    console.warn("type: "+ Event.type);
    console.warn("name: "+ Event.target.name);
    console.warn("textbox value: "+ Event.target.Value);
  }
  return(
    <>
    <h2>
    Event Example</h2>
    <input type="text" name="txt1" onChange={printvalue}/>
  </>
  );
} */}

{/* function App() {
  const textchange = (e) => {
    console.log("Event value:" + e.target.value);
  }
return(
  <>
  <h3>Text onchnage example
    </h3>
    <input type="text" onChange={textchange} name="txt1"/>
    </>
)
} */}

{/* class App extends React.Component{
  printData(event) {
    console.log("type: "+ event.type);
    console.log("name: "+ event.target.name);
    console.log("value: "+ event.target.value);
  }
  render() {
    return(
      <>
      name : <input type="text" onChange={this.printData.bind(this)} name="txt1"/>
      number : <input type="text" onChange={this.printData.bind(this)} name="txt2"/>
      </>
    );
  }
} */}

class App extends React.Component {
  getData(e) {
    console.log(e.type);
    console.log(e.target.name);
    console.log(e.target.value);
    e.preventdefault();
  }
  render() {
    
    return(
      <>
      <input type="button" name="btn1" value="button" onClick={this.getData.bind(this)} />
      <input type="text" name="txt1" onChange={this.getData.bind(this)}/>
      <form name="frm" onSubmit={this.getData.bind(this)}/>
      <input type="submit"/>
      </>
    );
  }
}


export default App;