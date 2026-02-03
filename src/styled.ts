import styled, { css } from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    /* min-height: 100vh; */
    padding: 2rem 1rem;
`;

export const MainBlock = styled.div`
    display: grid;
    height: 460px;
    width: 900px;
    max-width: 90vw;
    background-color: white;
    border-radius: 30px;
    margin: 0 auto;
    
    @media (max-width: 1600px) {
        height: 400px;
        width: 800px;
    }
    @media (max-width: 1366px) {
        height: 350px;
        width: 700px;
        border-radius: 25px;
    }
    @media (max-width: 1200px) {
        height: 300px;
        width: 600px;
        border-radius: 20px;
    }
`;

export const BlockCat = styled.div`
    display: flex;
    margin: 0 auto;
    height: 400px;
    width: 525px;
    max-width: 90vw;
    
    @media (max-width: 1600px) {
        height: 350px;
        width: 450px;
    }
    @media (max-width: 1366px) {
        height: 300px;
        width: 400px;
    }
    @media (max-width: 1200px) {
        height: 250px;
        width: 350px;
    }
`;

export const TextMain = styled.p`
    display: flex;
    color: black;
    height: 20px;
    justify-content: center;
    margin-top: -87px;
    margin-left: 20px;
    font-size: 36px;
    font-weight: 600;
    
    @media (max-width: 1600px) {
        font-size: 30px;
        margin-top: -60px;
    }
    @media (max-width: 1366px) {
        font-size: 26px;
        margin-top: -55px;
    }
    @media (max-width: 1200px) {
        font-size: 22px;
        margin-top: -60px;
    }
`;

export const ButtonBlock = styled.div<{ margin: boolean }>`
    display: flex;
    height: 40px;
    position: relative;
    justify-content: center;
    gap: 150px;
    
    @media (max-width: 1600px) {
        gap: 120px;
        height: 35px;
    }
    @media (max-width: 1366px) {
        gap: 100px;
        height: 30px;
    }
    @media (max-width: 1200px) {
        gap: 80px;
        height: 28px;
    }
    
    ${({ margin }) => margin && css`
        margin-left: 140px;
        
        @media (max-width: 1600px) {
            margin-left: 110px;
        }
        @media (max-width: 1366px) {
            margin-left: 90px;
        }
        @media (max-width: 1200px) {
            margin-left: 70px;
        }
    `}
`;

export const ButtonYes = styled.button<{ scaleCount?: number; anotherStyle: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #ff3d5a;
    padding: 26px;
    border-radius: 50px;
    margin-right: 144px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    font-size: 16px;
    
    @media (max-width: 1600px) {
        padding: 22px;
        margin-right: 120px;
        font-size: 14px;
    }
    @media (max-width: 1366px) {
        padding: 18px;
        margin-right: 100px;
        font-size: 13px;
        border-radius: 45px;
    }
    @media (max-width: 1200px) {
        padding: 16px;
        margin-right: 80px;
        font-size: 12px;
        border-radius: 40px;
    }
    
    transform: ${props => {
        const baseScale = 1;
        const increment = 0.5;
        return `scale(${baseScale + (props.scaleCount || 0) * increment})`;
    }};
    box-shadow: ${props => {
        const intensity = (props.scaleCount || 0) * 0.1;
        return `0 8px 25px rgba(255, 61, 90, ${0.3 + intensity})`;
    }};
    
    ${({ anotherStyle }) => anotherStyle && css`
        transform: scale(7.5);
    `}

    &:hover {
        border: none;
        transform: ${props => {
            const baseScale = 1.1;
            const increment = 0.05;
            return `scale(${baseScale + (props.scaleCount || 0) * increment})`;
        }};
        box-shadow: ${props => {
            const intensity = (props.scaleCount || 0) * 0.15;
            return `0 10px 30px rgba(255, 61, 90, ${0.4 + intensity})`;
        }};
    }
`;

export const ButtonNo = styled.button`
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 16px;
    width: 80px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    z-index: 1000;
    background-color: #b3b3b3;
    font-size: 16px;
    
    @media (max-width: 1600px) {
        padding: 12px;
        margin-right: 120px;
        font-size: 14px;
        width: 60px;
    }
    @media (max-width: 1366px) {
        padding: 9px;
        margin-right: 100px;
        font-size: 13px;
        border-radius: 45px;
        width: 65px;
    }
    @media (max-width: 1200px) {
        padding: 8px;
        margin-right: 80px;
        font-size: 12px;
        border-radius: 40px;
        width: 60px;
    }
    
    &:hover {
        transform: scale(1.05);
    }
`;

export const BlockWithAnimal = styled.div`
    display: flex;
    margin: auto;
    margin-top: -8px;
    /* margin-right: 231px; */
    
    & svg {
        width: 400px;
        height: auto;
        max-width: 100%;
    }
    
    @media (max-width: 1600px) {
        margin-right: 195px;
        margin-top: -6px;
        
        & svg {
            width: 350px;
            margin-right: 25px;
        }
    }
    @media (max-width: 1366px) {
        margin-right: 160px;
        margin-top: -5px;
        
        & svg {
            width: 320px;
            margin-right: 25px;
        }
    }
    @media (max-width: 1200px) {
        margin-right: 100px;
        margin-top: -4px;
        
        & svg {
            width: 300px;
            margin-right: 35px;
        }
    }
`;

export const BlockWith2Img = styled.div`
    display: flex;
    margin: auto;
    margin-right: -190px;
    
    & svg {
        width: 400px;
        height: auto;
        max-width: 100%;
    }
    
    @media (max-width: 1600px) {
        margin-right: 180px;
        margin-top: -6px;
        
        & svg {
            width: 350px;
            margin-right: 25px;
        }
    }
    @media (max-width: 1366px) {
        margin-right: 150px;
        margin-top: -5px;
        
        & svg {
            width: 320px;
            margin-right: 25px;
        }
    }
    @media (max-width: 1200px) {
        margin-right: 120px;
        margin-top: -4px;
        
        & svg {
            width: 300px;
            margin-right: 35px;
        }
    }
`;

export const BlockWithImg = styled.div`
    /* margin-right: -10px; */
    
    & svg {
        width: 400px;
        height: auto;
        max-width: 100%;
    }
    
    @media (max-width: 1600px) {
        /* margin-right: 180px; */
        margin-top: -6px;
        
        & svg {
            width: 350px;
            margin-right: 25px;
        }
    }
    @media (max-width: 1366px) {
        /* margin-right: 150px; */
        margin-top: -5px;
        
        & svg {
            width: 320px;
            margin-right: 25px;
        }
    }
    @media (max-width: 1200px) {
        /* margin-right: 120px; */
        margin-top: -4px;
        
        & svg {
            width: 300px;
            margin-right: 35px;
        }
    }
`;

export const BlockIcons1 = styled.div`
    display: flex;
    padding-bottom: 68px;
    margin-left: -148px;
    transform: rotate(-16deg);
    gap: 110px;
    
    @media (max-width: 1600px) {
        padding-bottom: 55px;
        margin-left: -120px;
        gap: 90px;
    }
    @media (max-width: 1366px) {
        padding-bottom: 45px;
        margin-left: -100px;
        gap: 75px;
        transform: rotate(-14deg);
    }
    @media (max-width: 1200px) {
        padding-bottom: 35px;
        margin-left: -80px;
        gap: 60px;
        transform: rotate(-12deg);
    }
`;

export const BlockIcons2 = styled.div`
    display: flex;
    margin-right: -234px;
    transform: rotate(13deg);
    gap: 110px;
    
    @media (max-width: 1600px) {
        margin-right: -190px;
        gap: 90px;
    }
    @media (max-width: 1366px) {
        margin-right: -160px;
        gap: 75px;
        transform: rotate(11deg);
    }
    @media (max-width: 1200px) {
        margin-right: -130px;
        gap: 60px;
        transform: rotate(9deg);
    }
`;

export const BlockIcons3 = styled.div`
    display: flex;
    padding-bottom: 68px;
    margin-left: -148px;
    transform: rotate(21deg);
    gap: 110px;
    
    @media (max-width: 1600px) {
        padding-bottom: 55px;
        margin-left: -120px;
        gap: 90px;
    }
    @media (max-width: 1366px) {
        padding-bottom: 45px;
        margin-left: -100px;
        gap: 75px;
        transform: rotate(18deg);
    }
    @media (max-width: 1200px) {
        padding-bottom: 35px;
        margin-left: -80px;
        gap: 60px;
        transform: rotate(15deg);
    }
`;

export const BlockIcons4 = styled.div`
    display: flex;
    margin-right: -234px;
    transform: rotate(-21deg);
    gap: 110px;
    
    @media (max-width: 1600px) {
        margin-right: -190px;
        gap: 90px;
    }
    @media (max-width: 1366px) {
        margin-right: -160px;
        gap: 75px;
        transform: rotate(-18deg);
    }
    @media (max-width: 1200px) {
        margin-right: -130px;
        gap: 60px;
        transform: rotate(-15deg);
    }
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    height: 50px;
    @media (max-width: 1600px) {
        max-width: 1200px;
    }
    @media (max-width: 1366px) {
        max-width: 1000px;
    }
    @media (max-width: 1200px) {
        max-width: 800px;
    }
`;

export const IconsContainer2 = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 1400px;
    height: 50px;
    margin-top: -50px;
    @media (max-width: 1600px) {
        max-width: 1200px;
    }
    @media (max-width: 1366px) {
        max-width: 1000px;
    }
    @media (max-width: 1200px) {
        max-width: 800px;
    }
`;

export const ContainerIcon = styled.div`
    & svg {
        width: 60px;
    }
    @media (max-width: 1600px) {
        & svg {
            width: 50px;
        }
    }
    @media (max-width: 1366px) {
        & svg {
            width: 40px;
        }
    }
    @media (max-width: 1200px) {
        & svg {
            width: 40px;
        }
    }
`;