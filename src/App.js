import React from 'react';
import styled, { css } from 'styled-components';

const mainColor = 'darkcyan';
const secondaryColor = 'palevioletred';

const Button = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: ${props => (props.primary ? mainColor : secondaryColor)};
    border: ${props => (props.primary ? `2px solid ${mainColor}` : `2px solid ${secondaryColor}`)}
    border: 2px solid palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    &:hover {
        background-color: ${props => 
            props.primary ? mainColor : secondaryColor};
        color: white;
    }
`;

const GreenButton = styled(Button)`
    background-color: white;
    color: green;
    border-color: green;
`;

const completeMixin = css`
    color: ${props => (props.whiteColor ? 'white' : 'black')};
`;

const StyledComp = styled.div`
    ${props => (props.complex ? completeMixin : 'color:blue')};
`;

const NButton = styled.button`
    cursor: pointer;
    background: transparent;
    font-size: 16px;
    border-radius: 3px;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
    transition: 0.5s all ease-out;

    ${props => props.primary &&
        css`
        background-color: white;
          color: green;
          border-color: green;
      `};
`;

export const App = () => {
    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happend!</h2>
            <Button primary>I am a Button</Button>
            <Button>I am another Button</Button>
            <GreenButton primary>I am a Primary Button</GreenButton>
            <NButton primary>I am a primary NButton</NButton>
            <NButton>I am a NButton</NButton>
            <StyledComp complex whiteColor={true}>I should be white</StyledComp>
            <StyledComp complex> I should be black</StyledComp>
            <StyledComp> I should be blue</StyledComp>
        </div>
    )
}