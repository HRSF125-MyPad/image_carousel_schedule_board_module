import React from 'react'
import {CarouselEntry, CarouselImage} from './carouselEntry.jsx'
import styled from 'styled-components';


const Container = styled.div`
  display: flex;
  width: 630px;
  flex-direction: row;
  position: absolute;
  top:510px;
  background-color: gray;
  outline: 5px solid gray;
  left: 175px;
  overflow: hidden;

`
const Trigger = styled.div`
  display: flex;
&:active ${CarouselImage} {
    transform: translateX(-600px);
`

class Carousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(
        <div>
            <Container>
                <Trigger>
                {this.props.images.map((image,i) => <CarouselEntry image={image} key={i} 
            currentIndex={this.props.currentIndex} images={this.props.images}
            />)}
                
                </Trigger>
          
            </Container>
        </div>
          
        )
    }
}

export default Carousel