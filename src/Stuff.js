//Dan Cove dancov8145, 3/8/2024 CIS435
//3.2 Course Project: Single Page Application with Navigation

//Dim up the imports
import React, { Component } from "react";
import "./Stuff.css"; // Import CSS
import { Link } from "react-router-dom";

// Dim the images for displaying
import image1 from "./img/case1.jpg";
import image2 from "./img/case2.jpg";
import image3 from "./img/case3.jpg";
import image4 from "./img/case4.jpg";

class Stuff extends Component {
  render() {
    return (
      <div className="stuff-container">
        <h2>Our best sellers</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img src={image1} alt="Image 1" />
            <p>Purple Haze Case</p>
            <p>Purple Haze Computer Case. (n.d.). Retrieved from <a href="https://t3.ftcdn.net/jpg/05/44/71/62/240_F_544716203_PkX2ZAij0YWqvgDpd8P8bF32zTSxzO1K.jpg" className="url-link">APA Formatted source</a>.</p>
            {/* Modify Link to appear as a button */}
            <Link to="/Stuff3" className="request-quote-button">Request Quote</Link>
          </div>
          <div className="grid-item">
            <img src={image2} alt="Image 2" />
            <p>Blue Rock</p>
            <p>Blue Computer Case LED. (n.d.). Retrieved from <a href="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/e36b69a2-a218-4f43-97c0-dd316a21c699/dfw1f4p-b07be2de-0bc4-4c6a-bcc9-722aff4f521f.jpg/v1/fit/w_768,h_768,q_70,strp/futuristic_sci_fi_pc_case_by_pickgameru_dfw1f4p-414w-2x.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzY4IiwicGF0aCI6IlwvZlwvZTM2YjY5YTItYTIxOC00ZjQzLTk3YzAtZGQzMTZhMjFjNjk5XC9kZncxZjRwLWIwN2JlMmRlLTBiYzQtNGM2YS1iY2M5LTcyMmFmZjRmNTIxZi5qcGciLCJ3aWR0aCI6Ijw9NzY4In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.dgWN-ACAUJVX8cjIaYwwLcSRE0ZO_zq-CNjYpAGyS5E">APA Formatted source</a>.</p>
            {/* Modify Link to appear as a button */}
            <Link to="/Stuff3" className="request-quote-button">Request Quote</Link>
          </div>
          <div className="grid-item">
            <img src={image3} alt="Image 3" />
            <p>Teal Steel</p>
            <p>Teal Computer LED Case. (n.d.). Retrieved from <a href="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.deviantart.com%2Fpickgameru%2Fart%2FFuturistic-sci-fi-PC-case-960806617&psig=AOvVaw2AOLAjvKHUfLokk4wJY319&ust=1710049287439000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCJDMgM-85oQDFQAAAAAdAAAAABAD" className="url-link">APA Formatted source</a>.</p>
            {/* Modify Link to appear as a button */}
            <Link to="/Stuff3" className="request-quote-button">Request Quote</Link>
          </div>
          <div className="grid-item">
            <img src={image4} alt="Image 4" />
            <p>LED Heaven</p>
            <p>Gaming PC Case . (n.d.). Retrieved from <a href="https://t3.ftcdn.net/jpg/04/59/29/68/240_F_459296860_Ch9BSnbG3vwBhjkAc1Q6QWDf31Pu6CXI.jpg" className="url-link">APA Formatted source</a>.</p>
            {/* Modify Link to appear as a button */}
            <Link to="/Stuff3" className="request-quote-button">Request Quote</Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Stuff;
