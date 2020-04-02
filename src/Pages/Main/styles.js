import styled from 'styled-components';


export const Form = styled.form`

    margin-top: 20px;
    margin-left: 10px;
    display: flex;
    flex-direction: row;
   

    input {
        flex: 1;
        padding: 10px 15px;
        border: 1px solid #eee;
        border-radius: 30px;
        font-size: 16px;
    }


`;

export const SubmitButton = styled.button.attrs(props =>({
    type:'submit',

}))`
    background: #0000CD;
    border-radius: 20px;
    border: 0;
    padding: 0 15px;
    margin-left: 5px;

    display: flex;
    justify-items: center;
    align-items: center;
    color: #fff;




`;

export const ContainerRepo = styled.div`
    min-width: 1080px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap:5px;
    

    background: #fff;
    border-radius: 10px;
    align-items: center;

    margin-left: 25px;
    margin-right: 25px;
    
   


    h2 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 30px;
        margin-top: 15px;
        margin-left: 40px;
        
        

    }

    img {
        width: 70px;
        margin-top: 15px;
        align-items: center;
        margin-left: 50px;
        border-radius: 10px;
    
        transition: all .2s;

        &:hover{
            border: 5px solid #4682B4;
            border-radius: 10%;
        }
        & + img {
            margin-left: 40px;
        }
    }

    button {
        background: transparent;
        border: 0;
        opacity: 0.2;
        transition: opacity 0.2s;

        &:hover {
            opacity: 1.0;
        }
    }

`;

export const Owner = styled.div`
    display: flex;
    flex-direction: column;


   
`;


