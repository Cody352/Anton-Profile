import React from "react";

class Contact extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="contactbody">
          <h2>Where to contact me.</h2>
          <br />
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Contact Type</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>E-Mail</td>
                <td>polokwane.anton@gmail.com</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Cell</td>
                <td>072 683 3268/ 073 000 5791</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>LinkedIn</td>
                <td>www.linkedin.com/in/anton-ferreira-5746401a4 </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Contact;
