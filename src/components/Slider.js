import React, {Component} from 'react';
import '../css/Slider.css';


class Slider extends Component {
  state = {
    x: 0,
    sliderArr: [
        {id:1, text: 'burher'},
        {id:2, text: 'frytki'},
        {id:3, text: 'pizza'}
    ]
  }

   goLeft = () => {
        let x = this.state.x;
        let sliderArr = this.state.sliderArr.length -1;
        x === 0 ? this.setState({x: (-100 * sliderArr),}) : this.setState({x: x + 100});
        
    }

    goRight = () => {
       let x = this.state.x;
        let sliderArr = this.state.sliderArr.length -1;

        x === -100 * sliderArr ? this.setState({x: 0}) : this.setState({x: x - 100});
    }
  
  render() {
      const slide = this.state.sliderArr.map(el=>{ return (
        <div className='slide' key={el.id} style={{transform: `translateX(${this.state.x}%)`}}>
          <h3>{el.text}</h3>
        </div>
      )})
    return(
      <div className='wrapSlider'>
          {slide}
        <button id='goLeft' className='btn-slider' onClick={this.goLeft}>left</button>
        <button id='goRight' className='btn-slider' onClick={this.goRight}>right</button>
      </div>
      
    );
  };
};

export default Slider;
