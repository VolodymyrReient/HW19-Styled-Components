import styled from "styled-components";

const Wrapper = styled.div`
    margin: 0 auto;
    height: 603px;
    width: 544px;
`;

const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const LockLogo = styled.div`
  margin-top: 70px;
  background: #f590b2;
  height: 45px;
  width: 45px;
  border-radius: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const P = styled.p`
    margin: 0;
    color: #cbcbcb;
`;

const Img = styled.img `
    height: 25px;
    width: 25px;
`;

const H2 = styled.h2`
    color: #ffffff;
`;  

const Input = styled.input`
    background: #121212;
    display: block;
    width: 395px;
    height: 55px;
    border-radius: 5px;
    border: 1px solid #494949;
    color: rgba(71%, 71%, 71%, 0.5);
    font-size: 15px;
    &:focus {
        outline: 1px solid #ffffff;
    }
    &.bottom-input {
        margin-top: 25px;
    }input {
        margin-top: 25px;
    }
    &.remember {
        background: none;
        border: 3px solid #494949;
        width: 20px;
        height: 20px;
    }
`;

const RememberWrapper = styled.div`
    margin-bottom: 35px;
    margin-top: 20px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    align-items: center;
`;

const Label = styled.label`
    color: #cbcbcb;
    margin-left: 11px;
    p + p {
        margin-top: 15px;
    }
`;

const Button = styled.button`
    font-size: 15px;
    text-transform: uppercase;
    width: 395px;
    height: 35px;
    background: #8fc9f7;
    border: none;
    outline: none;
    border-radius: 5px;
`;

const Navigation = styled.div`
    width: 395px;
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
    a {
        color: #80b3dc;
      }
`;

const Names = styled.div`
    display: flex;
    margin-bottom: 25px;
    input {
        margin: 0;
        width: 190px;
        align-items: center;
    }
    input + input {
        margin-left: 9px;
    }
`;

export {Wrapper, FormWrapper, LockLogo, P, Img, H2, Input, RememberWrapper, Label, Button, Navigation, Names};





