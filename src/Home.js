import React, { Component } from "react";
import styled from "styled-components";


const Paragraph = styled.p`
  font-size: 15px;
  text-align: center;
`;



const Title = styled.h1`
  font-size: 30px;
  text-align: center;

`;

/*by using styled-components, we create components (here the component's name is SecondTityle) 
by using styled.(whatever html tag you need). The name of your component MUST by capitalized. 
*/
const SecondTitle = styled.h1`
  font-size: 20px;
  text-align: center;
`;


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <React.Fragment>
        <Title> Metro Bike Sharing in Los Angeles</Title>
        <SecondTitle>Created by Brandon Yuan</SecondTitle>
        <Paragraph>
          Bike shares are becoming increasingly common in cities in the United
          States. Commuters have been using bike sharing as a method of
          transportation for the flexibility, cost savings, exercise, and a
          myriad of other benefits. While being quite successful, many bike
          shares are still relatively new and have room for optimization. This
          website is dedicated to analyzing and visualizing bike share data from
          the city of Los Angeles.
        </Paragraph>
      </React.Fragment>
    );
  }
}

export default Home;
