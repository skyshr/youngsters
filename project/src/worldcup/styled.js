import styled from 'styled-components';

export const FlexBox = styled.div`
    display: flex;
    flex-wrap: wrap;
    /* height: 100vh; */
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
        /* overflow: hidden; */
        background-color: #ffd9fe;
        position: relative;
        margin: 10px;
        margin-top: 60px;
    }
    .imgs {
        /* padding-top: 18%; */
        display: block; 
        /* margin: 0px auto; */
        /* text-align: center; */
        width: auto;
        height: 60%;
        transition: 0.5s;
        cursor: pointer;
    }
    .imgs:hover{
        transform: scale(1.1);
        opacity: 0.8;
    }
    #postCode_btn{
        position: absolute;
        top: 0%;
        right: -9%
    }
    .winner{
        /* margin: auto; */
        /* margin-top: 60px; */
        width: 380px;
        height: 450px;
        margin: auto;
    }
    button{
        justify-content: center;
        margin-top: 10px;
        width: 190px
    }
`;