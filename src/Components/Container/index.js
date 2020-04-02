import styled, { keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: rotate(0deg);
    }

    to {
        transform: rotate(360deg);
    }
`;

const Container = styled.div`
    padding: 20px;
    margin: 20px auto;
    max-width: 400px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background:#fff;
    border-radius: 30px;
    
    justify-items: center;

    
    h1 {
        font-size: 20px;
        display: flex;
        flex-direction: row;
       
        
        svg {
            margin-left: 5px;
            margin-right: 15px;
            animation : ${rotate} 2s linear infinite
        }
    }
`;

export default Container;