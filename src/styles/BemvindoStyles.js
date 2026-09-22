import styled from "styled-components";

export const Card = styled.div`
 background: #fff;
 border-radius: 10px;
 padding: 20px 30px;
 margin: 10px 0;
 width: 100%;
 max-width: 420px;
 text-align: center;
 box-shadow: 0 4px 12px rgba(0,0,0,0.08);
 transition: transform 0.2s ease, box-shadow 0.2s ease;

 &:hover{
    transform: translate(-2px);
    box-shadow: 0 6px 16px rgba(0,0,0,0.10);
 }
`;

export const GreetingText = styled.h2`
    color: #2c3e50;
    font-size: 1.3rem;
    font-weight: 600;
    margin-bottom: 15px;

    span{
        color: #3498db;
        font-weight: 700;
    }


`