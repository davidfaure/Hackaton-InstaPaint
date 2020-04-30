import React, {Component} from 'react';
import axios from 'axios';
import Imagepaint from './Imagepaint'
import Loader from './Loader'
import './Instapaint.css'
import './Instapaint.scss'

class Instapaint extends Component {

    state = {
        webcam : [],
        category : '',
        country: '',
        isLoading: false
    }

    getCategory = (event) => {
        const { value } = event.target
        this.setState({category : value})
    }

    getCountry = (event) => {
        const { value } = event.target
        this.setState({country : value})
    }
    

    getBeach = () => {
        const {category, country} = this.state
        this.setState({isLoading: true})
        const url = `https://api.windy.com/api/webcams/v2/list/country=${country}/category=${category}/orderby=popularity/limit=12?show=webcams:location,image,player`
        axios.get(url,
            {
                headers: {
                  "x-windy-key": "Iq8ZZVkRsCxyt9cELqys4AnX4k614Q9F"
                }
              }
            )
        .then(response => response.data)
        .then(data => this.setState({webcam : data.result.webcams, 
                                    isLoading: false}))
        .catch(error => console.log(error))
    }

    render(){
        const {webcam, category, country} = this.state;
        const enabled = category.length > 0 &&
                        country.length > 0;
        return (
            <React.Fragment>
            <div className="containerglobal">
                <div className="choices">
                    <div className="choicesinput">
                        <label htmlFor="category"> Choix catégorie:</label>
                        <div className="select">
                            <select name="category" id="category" onChange={this.getCategory}>
                                <option value="" selected disabled>Catégorie</option>
                                <option value="beach">Beach</option>
                                <option value="coast">Coast</option>
                                <option value="forest">Forest</option>
                                <option value="lake">Lake</option>
                                <option value="island">Island</option>
                                <option value="mountain">Mountain/Canyon</option>
                                <option value="landscape">Landscape</option>
                                <option value="traffic">Traffic</option>
                                <option value="water">Water</option>
                                <option value="city">City</option>
                                <option value="bay">Bay</option>
                            </select>
                        </div>
                    </div>
                    <div className="choicesinput">
                        <label htmlFor="country"> Choix pays</label>
                        <div className="select">
                            <select name="country" id="country" onChange={this.getCountry}>
                                <option value="" selected disabled>Pays</option>
                                <option value="FR">France</option>
                                <option value="GR">Greece</option>
                                <option value="UK">UK</option>
                                <option value="US">USA</option>
                                <option value="IN">India</option>
                                <option value="CN">China</option>
                                <option value="JP">Japan</option>
                                <option value="AE">United Arab Emirates</option>
                                <option value="AQ">Antarctica</option>
                                <option value="AR">Argentina</option>
                                <option value="AU">Australia</option>
                                <option value="BR">Brazil</option>
                                <option value="CA">Canada</option>
                                <option value="CH">Switzerland</option>
                                <option value="DE">Germany</option>
                                <option value="ES">Spain</option>
                                <option value="ID">Indonesia</option>
                                <option value="IT">Italy</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="Buttondiv">
                    <button disabled={!enabled} onClick={this.getBeach}>FAITES MOI VOYAGER</button>
                </div>
            </div>
            {
                this.state.isLoading
                ? <Loader />
                : null   
            }
            <div>
                <div className="Result">
                    {webcam.map(element =>
                        <Imagepaint 
                        title={element.title}
                        region={element.location.region}
                        image={element.image.daylight.preview}
                        player={element.player.year.embed}
                        wikipedia={element.location.wikipedia}
                        country={element.location.country}
                        city={element.location.city}
                        webcamState={webcam}
                        />
                        )}
                </div>
            </div>
            </React.Fragment>
        );
    }
}



export default Instapaint;