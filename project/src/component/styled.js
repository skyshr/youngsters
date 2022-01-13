
import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    height: 100vh;
    .title {
        position: absolute;
        z-index: 2;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        padding: 0px 30px;
        padding-bottom: 10px;
        text-transform: uppercase;
    }
    .flex-1 {
        flex: 1;
        overflow: hidden;
        background-color: #ffd9fe;
        position: relative;
    }
    .imgs {
        padding-top: 18%;
        display: block; 
        margin: 0px auto;
        text-align: center;
        width: 45%;
        height: 79%;
        transition: 0.5s;
        cursor: pointer;
    }
    .imgs:hover{
        transform: scale(1.1);
        opacity: 0.8;
    }
`;