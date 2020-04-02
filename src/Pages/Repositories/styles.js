import styled from 'styled-components';

export const Owner = styled.div`

    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    border-radius: 5px;

    h1 {
        margin-top: 10px;
        color: #000000;
        font-weight: bold;
    
        
    }

    a {
        text-decoration: none;
    }

    img {
        width: 200px;
        margin-top: 20px;
        align-items: center;
        justify-content: center;
        border-radius: 10px;

    }

    p {
        margin-top: 5px;
        color: #000000;
        font-weight: bold;
    }

`;

export const IssueList = styled.div`

    max-height: auto;
    background: #fff;
    padding: 30px;
    margin: 20px 50px;
    border-radius: 30px;
    background: #fff;
    
    li {
        display: flex;
        padding: 15px 10px;
        border: 1px solid #000000;
        border-radius: 4px;

        & + li {
            margin-top: 10px;
        }

    }

    img {

        width: 120px;
        margin-top: 15px;
        margin-left: 15px;
        align-items: center;
        justify-content: center;
        border-radius: 100px;
        

    }

    & + img {
            margin-left: 40px;
        }

    strong {
        font-size: 30px;
        display: flex;
        flex-direction: row;
       
        a {
        
        text-decoration: none;
        color: #000000;
        font-weight: bold;
    }

    span {
        background:#000000;
        color: #fff;
        border-radius: 5px;
        font-size: 12px;
        font-weight: 600;
        height: 40px;
        padding: 3px 4px;
        margin-left: 10px;
        align-items: center;
        justify-content: center;


    }
        
    }
    
    div {
        flex: 1;
        margin-left: 100px;
    }

    p {
            margin-top: 5px;
            font-size: 15px;
            color: #708090;
        }

    
`;