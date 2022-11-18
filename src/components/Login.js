import React from 'react'
import styled from 'styled-components'

function Login() {
    return (
        <Container>
            <Content>
                <Logo1 src="/images/cta-logo-one.svg" alt='image' />

                <SignUp>
                    GET ALL THERE
                </SignUp>
                <Description >
                    Get 12 months for 10 with an annual subscription. Savings when compared to cost of monthly subscription.

                </Description>
                <Logo2 src="/images/cta-logo-two.png" alt='image' />

            </Content>
        </Container>
    )
}

export default Login

const Container = styled.div`
position:relative;
height: calc(100vh - 70px);
display:flex;
align-items:top;
justify-content:center;


&:before{
    backgorund-position:top;
    background-size:cover;
    backgrounf-repeat: no-repeat;
    background-image: url("/images/login-background.jpg");
    content:"";
    position:absolute;
    top:0;
    bottom:0;
    right:0;
    left:0;
    opacity:0.7;
    z-index:-1;


}

`;

const Content = styled.div`
max-width:650px;
padding:80px 40px;
width:80%;
display:flex;
flex-direction:column;
margin-top:100px;
align-items:center;

`;


const Logo1 = styled.img`
`;


const SignUp = styled.a`
width:100%;
background-color:#0063e5;
font-weight:bold;
padding:17px 0;
color:#f9f9f9;
border-radius:4px;
text-align:center;
font-size:18px;
cursor:pointer
transition:all 250ms;
letter-spacing:1.5px;
margin-top:0px;
margin-bottom:12px;

&:hover{
    background:#0483ee
}
`;


const Description = styled.p`
font-size:11px;
letter-spacing:1.5px;
text-align:center;
line-height:1.5;

`;

const Logo2 = styled.img`
width:90%;
`;