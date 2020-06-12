/* eslint-disable jsx-a11y/alt-text */
import React from "react";

class About extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="aboutbody">
          <h1>Who am I?</h1>
          <img src="https://scontent-jnb1-1.xx.fbcdn.net/v/t1.0-9/p960x960/32687938_1057431251074265_1562992629702983680_o.jpg?_nc_cat=106&_nc_sid=7aed08&_nc_eui2=AeHf1VW-CkBcSf1SefOkWmRCHIy-rD6jddUcjL6sPqN11QXhZPbYNbfmcbGRgH7yPQp_YIO8nOOxxGCI5_gNVi1R&_nc_ohc=AFFcErBvrb0AX84Wki_&_nc_ht=scontent-jnb1-1.xx&_nc_tp=6&oh=f45801feb7f7c9d70287c60c41be5f56&oe=5EE925BB"></img>
          <br></br>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Description</th>
                <th scope="col">Info</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>Name and Surname</td>
                <td>Anton Ferreira</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>Location</td>
                <td>Tzaneen</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>Nationality</td>
                <td>South African</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>Occupation</td>
                <td>Web developer</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>Education</td>
                <td>
                  Javascript, HTML, CSS, React, Bootstrap, Express, Node.js,
                  EJS, Rest, jQuery, MongoDB, Mongoose, MySQL
                </td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>Other Qualifications</td>
                <td>
                  National Diploma Electronics, Basic Networking and Networking
                  fundamentals.
                </td>
              </tr>
            </tbody>
          </table>
          <br />
          <p>
            I am a dedicated, loyal and hard working person. I believe in
            honesty and enjoy new challanges. I love to keep growing and
            bettering myself in my work as well as in person. I am self taught,
            which should be an indication of my commitment. I will be an asset
            to any company.
          </p>
        </div>
      </div>
    );
  }
}

export default About;
