import React from 'react';
import styled from 'styled-components';

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

export const App = () => {
    return (
        <div>
            <h1>Hello CodeSandbox</h1>
            <h2>Start editing to see some magic happend!</h2>
            <Button primary>I am a Button</Button>
            <Button>I am another Button</Button>
        </div>
    )
}