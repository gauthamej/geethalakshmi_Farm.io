import logo from './logo.svg';
import './App.css';
import React from 'react';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      motor1:false,
      motor2:false,
      motor3:false,
      motor4:false,
      motor5:false,
      motor6:false,
      motor7:false,
      motor8:false
    }
  }

  componentDidMount = () => {
    var currentPageTabId = this.defineTabID();
    var motor1 = localStorage.getItem('motor1');
    motor1=JSON.parse(motor1)
    var motor2 = localStorage.getItem('motor2');
    motor2=JSON.parse(motor2)
    var motor3 = localStorage.getItem('motor3');
    motor3=JSON.parse(motor3)
    var motor4 = localStorage.getItem('motor4');
    motor4=JSON.parse(motor4)
    var motor5 = localStorage.getItem('motor5');
    motor5=JSON.parse(motor5)
    var motor6 = localStorage.getItem('motor6');
    motor6=JSON.parse(motor6)
    var motor7 = localStorage.getItem('motor7');
    motor7=JSON.parse(motor7)
    var motor8 = localStorage.getItem('motor8');
    motor8=JSON.parse(motor8)
    this.setState({
       motor1: motor1,
       motor2: motor2,
       motor3: motor3,
       motor4: motor4,
       motor5: motor5,
       motor6: motor6,
       motor7: motor7,
       motor8: motor8
       });
  }


  defineTabID = () => {
    var pageTabId = sessionStorage.getItem("tabID");
    // if it is the first time that this page is loaded
    if (pageTabId == null) {
      var localTabId = localStorage.getItem("tabID");
      // if tabID is not yet defined in localStorage it is initialized to 1
      // else tabId counter is increment by 1
      var pageTabId = (localTabId == null) ? 1 : Number(localTabId) + 1;
      // new computed value are saved in localStorage and in sessionStorage
      localStorage.setItem("tabID", pageTabId);
      sessionStorage.setItem("tabID", pageTabId);
    }
    console.log("pageTabId" + pageTabId);
    this.setState({ currentPageTabId: pageTabId });
    return pageTabId
  }

motor1=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field1=20"
  if(e.target.checked){
    localStorage.setItem('motor1', true);
    console.log(localStorage.getItem('motor1'));
    this.setState({
      motor1:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor1', false);
    this.setState({
      motor1:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}


motor2=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field2=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field2=20"
  if(e.target.checked){
    localStorage.setItem('motor2', true);
    console.log(localStorage.getItem('motor2'));
    this.setState({
      motor2:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor2', false);
    this.setState({
      motor2:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}


motor3=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field3=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field3=20"
  if(e.target.checked){
    localStorage.setItem('motor3', true);
    console.log(localStorage.getItem('motor3'));
    this.setState({
      motor3:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor3', false);
    this.setState({
      motor3:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor4=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field4=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field4=20"
  if(e.target.checked){
    localStorage.setItem('motor4', true);
    console.log(localStorage.getItem('motor4'));
    this.setState({
      motor4:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor4', false);
    this.setState({
      motor4:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor5=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field5=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field5=20"
  if(e.target.checked){
    localStorage.setItem('motor5', true);
    console.log(localStorage.getItem('motor5'));
    this.setState({
      motor5:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor5', false);
    this.setState({
      motor5:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor6=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field6=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field6=20"
  if(e.target.checked){
    localStorage.setItem('motor6', true);
    console.log(localStorage.getItem('motor6'));
    this.setState({
      motor6:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor6', false);
    this.setState({
      motor6:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor7=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field7=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field7=20"
  if(e.target.checked){
    localStorage.setItem('motor7', true);
    console.log(localStorage.getItem('motor7'));
    this.setState({
      motor7:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor7', false);
    this.setState({
      motor7:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}
motor8=(e)=>{
  var url="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field8=10"
  var url2="https://api.thingspeak.com/update?api_key=ECX0KGWN67M9TUHM&field8=20"
  if(e.target.checked){
    localStorage.setItem('motor8', true);
    console.log(localStorage.getItem('motor8'));
    this.setState({
      motor8:true
    })
    fetch(url)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
  }
  else{
    localStorage.setItem('motor8', false);
    this.setState({
      motor8:false
    })
    fetch(url2)
    .then(res => res.json())
    .then(details => {
      console.log(details)
    },
   (error) => { this.setState({ IsError: true }) })
    .catch(error => { console.log(error) });
    console.log("noo")
  }
}

  render(){
  return (
    <div className="App">
      <div><img src="img.png" /></div> 
      <div className="mt-4">
     FILTER MOTOR VALVE  : &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor1}  onChange={this.motor1} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
      OXYGEN MOTOR VALVE   :&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor2}  onChange={this.motor2}/>
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     FILTER MOTOR  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1"checked={this.state.motor3}  onChange={this.motor3} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     NOT USE  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor4} onChange={this.motor4}/>
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
    NOT USE  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1"  checked={this.state.motor5} onChange={this.motor5} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
    NOT USE  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor6} onChange={this.motor6} />
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     OXYGEN MOTOR  :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor7}  onChange={this.motor7}/>
  <span class="slider round"></span>
    </label>
    </div>
    <div className="mt-3">
     OXYGEN DRIVER :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<label class="switch">
  <input type="checkbox" id="myCheck1" checked={this.state.motor8}  onChange={this.motor8} />
  <span class="slider round"></span>
    </label>
    </div>
    </div>
  );
}}

export default App;
