import React from 'react'
import styled from 'styled-components'
const StyledHeading = styled.h1`
fontsize:25px;
color:white;
font-family:sofachrome;
padding:30px;`
;
const StyledSection = styled.section`
border: 3px solid dodgerblue;

`;

const StyledP = styled.p`
font-family:Garamond;
height: 200px;
    background: red; /* For browsers that do not support gradients */
    background: -webkit-linear-gradient(left, orange , yellow, green, cyan, blue, violet); 
    background: -o-linear-gradient(right, orange, yellow, green, cyan, blue, violet); 
    background: -moz-linear-gradient(right, orange, yellow, green, cyan, blue, violet); 
    background: linear-gradient(to right, orange , yellow, green, cyan, blue, violet); 
    color:white;
    font-size:20px;
`;

const DataComponent = props => {
    return (
        <div>
           <StyledHeading>
               <h1>  {props.title}</h1>
             
           </StyledHeading>
           <StyledP>
           <p> {props.explanation}</p>
           </StyledP>
           <StyledSection>
    {props.type === 'video' ? <iframe src={props.url} allowFullScreen /> : <img src={props.url} alt="today's space pic" /> }
    </StyledSection>
        </div>
    )
}

export default DataComponent