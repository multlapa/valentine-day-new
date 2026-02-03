import './App.css'
import { BlockCat, BlockIcons1, BlockIcons2, BlockIcons3, BlockIcons4, BlockWithAnimal, BlockWithImg, ButtonBlock, ButtonNo, ButtonYes, Container, ContainerIcon, IconsContainer, IconsContainer2, MainBlock, TextMain } from './styled'
import Heart1 from './assets/Group-82.svg'
import Heart2 from './assets/Group 83.svg'
import Heart3 from './assets/Group 84.svg'
import Heart4 from './assets/Group 85.svg'
import Animal from './assets/Animal.svg'
import Animal1 from './assets/Animal1.svg'
import Animal2 from './assets/Animal2.svg'
import Animal3 from './assets/Animal3.svg'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scaleCount, setScaleCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [moveCount2, setMoveCount2] = useState(0);
  const [moveCount3, setMoveCount3] = useState(0);
  const [showVictoryBlock, setShowVictoryBlock] = useState(false);
  const [showVictoryBlock2, setShowVictoryBlock2] = useState(false);
  const [showVictoryBlock3, setShowVictoryBlock3] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const yesButton = yesButtonRef.current;
    if (yesButton) {
      const rect = yesButton.getBoundingClientRect();
      
      let offset = 80;
      if (window.innerWidth <= 1200) {
        offset = 40;
      } else if (window.innerWidth <= 1366) {
        offset = 50;
      } else if (window.innerWidth <= 1600) {
        offset = 50;
      }
      
      setPosition({ 
        x: rect.right + offset, 
        y: rect.top 
      });
    }
  }, [window.innerWidth]);

  useEffect(() => {
    if (moveCount === 4) {
      setShowVictoryBlock(true);
    } else if (moveCount2 === 8) {
      setShowVictoryBlock(false);
      setShowVictoryBlock2(true);
    } else if (moveCount3 === 12) {
      setShowVictoryBlock(false);
      setShowVictoryBlock2(false);
      setShowVictoryBlock3(true);
    }
  }, [moveCount, moveCount2, moveCount3]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMoveCount(prev => prev + 1);
    setMoveCount2(prev => prev + 1);
    setMoveCount3(prev => prev + 1);
    setScaleCount(prev => prev < 4 ? prev + 1 : prev);
    
    const button = buttonRef.current;
    if (!button) return;

    const rect = button.getBoundingClientRect();
    
    const safeMargin = 200;
    
    const maxX = window.innerWidth - rect.width - safeMargin;
    const maxY = window.innerHeight - rect.height - safeMargin;
    const minX = safeMargin;
    const minY = safeMargin;

    const mouseX = e.clientX;
    const mouseY = e.clientY;
    
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const dx = centerX - mouseX;
    const dy = centerY - mouseY;

    const length = Math.sqrt(dx * dx + dy * dy) || 1;
    const normX = dx / length;
    const normY = dy / length;

    const distance = 150 + Math.random() * 100;
    let newX = centerX + normX * distance - rect.width / 2;
    let newY = centerY + normY * distance - rect.height / 2;

    newX = Math.max(minX, Math.min(newX, maxX));
    newY = Math.max(minY, Math.min(newY, maxY));

    const cornerSafeDistance = 300;

    const distToTopLeft = Math.sqrt(newX * newX + newY * newY);
    const distToTopRight = Math.sqrt((window.innerWidth - newX - rect.width) * (window.innerWidth - newX - rect.width) + newY * newY);
    const distToBottomLeft = Math.sqrt(newX * newX + (window.innerHeight - newY - rect.height) * (window.innerHeight - newY - rect.height));
    const distToBottomRight = Math.sqrt((window.innerWidth - newX - rect.width) * (window.innerWidth - newX - rect.width) + (window.innerHeight - newY - rect.height) * (window.innerHeight - newY - rect.height));

    if (distToTopLeft < cornerSafeDistance ||
        distToTopRight < cornerSafeDistance ||
        distToBottomLeft < cornerSafeDistance ||
        distToBottomRight < cornerSafeDistance) {
      newX = window.innerWidth / 2 - rect.width / 2;
      newY = window.innerHeight / 2 - rect.height / 2;
    }

    setPosition({ x: newX, y: newY });
  };

  const handleClickYes = () => {
    setShowCat(true);
  }

  return (
    <>
      <IconsContainer>
        <BlockIcons1>
          <ContainerIcon>
            <Heart1 />
          </ContainerIcon>
          <ContainerIcon>
            <Heart2 />
          </ContainerIcon>
        </BlockIcons1>
        <BlockIcons2>
          <ContainerIcon>
            <Heart3 />
          </ContainerIcon>
          <ContainerIcon>
            <Heart4 />
          </ContainerIcon>
        </BlockIcons2>
      </IconsContainer>
      <Container>
          {!showCat ? (
          <MainBlock>
            <BlockWithAnimal>
              {!showVictoryBlock && !showVictoryBlock2 && !showVictoryBlock3 && (
                <BlockWithImg>
                  <Animal/>
                </BlockWithImg>
              )}
              {showVictoryBlock && (
                <BlockWithImg>
                  <Animal1/>
                </BlockWithImg>
              )}
                {showVictoryBlock2 && (
                  <BlockWithImg>
                    <Animal2/>
                  </BlockWithImg>
                )}
              {showVictoryBlock3 && (
                <BlockWithImg>
                    <Animal3/>
                </BlockWithImg>
              )}
            </BlockWithAnimal>
            <TextMain>will you be my valentine?</TextMain>
            <ButtonBlock margin={showVictoryBlock3}>
              <ButtonYes
                anotherStyle={showVictoryBlock3}
                ref={yesButtonRef}
                scaleCount={scaleCount}
                onClick={handleClickYes}
              >
                Yes
              </ButtonYes>
              {!showVictoryBlock3 && (
                <ButtonNo 
                  ref={buttonRef}
                  style={{ 
                    left: `${position.x}px`, 
                    top: `${position.y}px` 
                  }}
                  onMouseEnter={handleMouseEnter}
                >
                  No
                </ButtonNo>
              ) }
            </ButtonBlock>
          </MainBlock>
          ) : (
            <BlockCat>
              <div className="tenor-gif-embed" data-postid="23625303" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/cat-jump-happy-jumping-for-joy-jumping-gif-23625303">Cat Jump Sticker</a>from <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </BlockCat>
          )}
      </Container>
      <IconsContainer2>
        <BlockIcons3>
          <ContainerIcon>
            <Heart1 />
          </ContainerIcon>
          <ContainerIcon>
            <Heart2 />
          </ContainerIcon>
        </BlockIcons3>
        <BlockIcons4>
          <ContainerIcon>
            <Heart3 />
          </ContainerIcon>
          <ContainerIcon>
            <Heart4 />
          </ContainerIcon>
        </BlockIcons4>
      </IconsContainer2>
    </>
  )
}

export default App