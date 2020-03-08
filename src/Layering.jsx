import React, { Component } from 'react';
import "./Layering.css"
class Layering extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "",
            selectedOption_2:""
        }
    }

    handleRadioChange= e => {
        this.setState({
            selectedOption: e.target.value,

        })

        console.log(this.state);

    }
    handleRadioChange2 = e => {
        this.setState({
            selectedOption_2 : e.target.value
        })
        console.log(this.state);

    }
    log = () => {
        if (this.state.selectedOption === ""){
            return ("hidden")
        }
    }

    render() {
        return (
            <div className="container">
                <div
                    className="profileImage"
                >
                  <img src="/img/DogLeg2.jpg" alt="" className= {`
                  ${this.state.selectedOption === "Front"? " image1" :"imageVisibility"}`}  />
                   <img src="/img/CowLegs2.jpg" alt=""className={`
                  ${this.state.selectedOption === "FrontCow" ? " image1" : "imageVisibility"}`}/>

                  <img src="/img/DogLegs.jpg" alt="" className={`
                  ${this.state.selectedOption_2 === "Legs" ? " image2" : "imageVisibility"}`}/>
                  <img src="/img/CowLegs.jpg" alt=""className={`
                  ${this.state.selectedOption_2 === "LegsCow" ? " image2" : "imageVisibility"}`}/>
                </div>
            <div className="row">
              <div className="col-sm-12">
                <form action="#" className="col s12 m6 l4">
                    <p>
                    <label>
                        <input name="group1" type="radio" value="FrontCow" onChange={this.handleRadioChange} onClick={this.log}/>
                        <span>Cow Legs</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group1" type="radio" value="Front" onChange={this.handleRadioChange}/>
                        <span>Dog Legs</span>
                    </label>
                    </p>
                </form>
                <form action="#">
                <div>
                    <p>
                    <label>
                        <input name="group2" type="radio" value="LegsCow" onChange={this.handleRadioChange2}/>
                        <span>Cow legs 2</span>
                    </label>
                    </p>
                    <p>
                    <label>
                        <input name="group2" type="radio" value="Legs" onChange ={this.handleRadioChange2} />
                        <span>Dog legs 2</span>
                    </label>
                    </p>
                    </div>
                </form>
              </div>
            </div>
          </div>
         );
    }
}

export default Layering;