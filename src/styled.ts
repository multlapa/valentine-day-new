import styled from "styled-components";

export const Container = styled.div`
    /* display: flex; */
`;

export const MainBlock = styled.div`
    display: grid;
    height: 460px;
    width: 900px;
    background-color: white;
    border-radius: 30px;
`;

export const BlockCat = styled.div`
    display: flex;
    margin-left: 24px;
    height: 400px;
    width: 525px;
`;

export const TextMain = styled.p`
    display: flex;
    color: black;
    height: 20px;
    justify-content: center;
    margin-top: -47px;
    font-size: 36px;
    font-weight: 600;
`;

export const ButtonBlock = styled.div`
    display: flex;
    height: 40px;
    position: relative;
    justify-content: center;
    gap: 150px;
`;

// export const ButtonYes = styled.button`
//     display: flex;
//     align-items: center;
//     background-color: #ff3d5a;
//     padding: 26px;
//     border-radius: 50px;
//     font-weight: 600;
//     cursor: pointer;
//     margin-right: 132px;
// `;

export const ButtonYes = styled.button<{ scaleCount?: number }>`
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
    transform: ${props => {
      const baseScale = 1;
      const increment = 0.50;
      return `scale(${baseScale + (props.scaleCount || 0) * increment})`;
    }};
    box-shadow: ${props => {
      const intensity = (props.scaleCount || 0) * 0.1;
      return `0 8px 25px rgba(255, 61, 90, ${0.3 + intensity})`;
    }};

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
    width: 90px;
    border-radius: 50px;
    font-weight: 600;
    cursor: pointer;
    transition: transform 0.2s;
    z-index: 1000;
    background-color: #b3b3b3;
    &:hover {
        transform: scale(1.05);
    }
`;

export const BlockWithAnimal = styled.div`
    display: flex;
    margin: auto;
    margin-top: -8px;
    margin-right: 231px;
`;

export const Message = styled.div`
    display: flex;
`;

export const BlockIcons1 = styled.div`
    display: flex;
    padding-bottom: 68px;
    margin-left: -148px;
    transform: rotate(-16deg);
    gap: 110px;
`;

export const BlockIcons2 = styled.div`
    display: flex;
    margin-right: -234px;
    transform: rotate(13deg);
    gap: 110px;
`;

export const BlockIcons3 = styled.div`
    display: flex;
    padding-bottom: 68px;
    margin-left: -148px;
    transform: rotate(21deg);
    gap: 110px;
`;

export const BlockIcons4 = styled.div`
    display: flex;
    margin-right: -234px;
    transform: rotate(-21deg);
    gap: 110px;
`;

export const IconsContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;