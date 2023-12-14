// import { faFontAwesome } from '@fortawesome/free-brands-svg-icons';
function Contact() {
    return (
        <section id="ContactMe">
            <h2>If you would like to contact me about collaborating reach out below</h2>
            <div className="container">
            <div className="call">
                    <a href="https://github.com/RedactdName"> Github
                    {/* <i className="fa-brands fa-github"></i> */}
                    </a>
                    <a> mslisaeimicke@gmail.com</a>
                    <a href="https://www.linkedin.com/in/lisa-eimicke/"> LinkedIn</a>
       </div>
            </div>
        </section >
        )
    }
    export default Contact;
    // __________________________________________________________________________________
    
    // Future implementation of contact form
// import React from 'react';
// import axios from 'axios';
// class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       name: '',
//       email: '',
//       message: ''
//     }
//   }
//   handleSubmit(e){
//     e.preventDefault();
//     axios({
//       method: "POST",
//       url:"http://localhost:3002/send",
//       data:  this.state
//     }).then((response)=>{
//       if (response.data.status === 'success') {
//         alert("Message Sent.");
//         this.resetForm()
//       } else if (response.data.status === 'fail') {
//         alert("Message failed to send.")
//       }
//     })
//   }
//   resetForm(){
//     this.setState({name: "", email: "", message: ""})
//   }
//   render() {
//     return(
//       <div className="App">
//         <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//           <div className="form-group">
//               <label htmlFor="name">Name</label>
//               <input type="text" className="form-control" id="name" value={this.state.name} onChange={this.onNameChange.bind(this)} />
//           </div>
//           <div className="form-group">
//               <label htmlFor="exampleInputEmail1">Email address</label>
//               <input type="email" className="form-control" id="email" aria-describedby="emailHelp" value={this.state.email} onChange={this.onEmailChange.bind(this)} />
//           </div>
//           <div className="form-group">
//               <label htmlFor="message">Message</label>
//               <textarea className="form-control" rows="5" id="message" value={this.state.message} onChange={this.onMessageChange.bind(this)} />
//           </div>
//           <button type="submit" className="btn btn-primary">Submit</button>
//         </form>
//       </div>
//     );
//   }
//   onNameChange(event) {
// 	  this.setState({name: event.target.value})
//   }
//   onEmailChange(event) {
// 	  this.setState({email: event.target.value})
//   }
//   onMessageChange(event) {
// 	  this.setState({message: event.target.value})
//   }
// }
// export default App;
// const Contact = () => {
//     return (
// <form id="contact-form" onSubmit={this.handleSubmit.bind(this)} method="POST">
//     <div className="form-group">
//         <label htmlFor="name">Name</label>
//         <input type="text" className="form-control" />
//     </div>
//     <div className="form-group">
//         <label htmlFor="exampleInputEmail1">Email address</label>
//         <input type="email" className="form-control" aria-describedby="emailHelp" />
//     </div>
//     <div className="form-group">
//         <label htmlFor="message">Message</label>
//         <textarea className="form-control" rows="5"></textarea>
//     </div>
//     <button type="submit" className="btn btn-primary">Submit</button>
// </form>
//     )};

    