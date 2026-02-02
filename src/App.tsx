import './App.css'
import { BlockCat, BlockIcons1, BlockIcons2, BlockIcons3, BlockIcons4, BlockWithAnimal, ButtonBlock, ButtonNo, ButtonYes, Container, IconsContainer, MainBlock, Message, TextMain } from './styled'
import Heart1 from './assets/Group-82.svg'
import Heart2 from './assets/Group 83.svg'
import Heart3 from './assets/Group 84.svg'
import Heart4 from './assets/Group 85.svg'
import Animal from './assets/Group 86.svg'
import MessageImg from './assets/Group 89.svg'
import { useEffect, useRef, useState } from 'react'

function App() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [scaleCount, setScaleCount] = useState(0);
  const [moveCount, setMoveCount] = useState(0);
  const [showVictoryBlock, setShowVictoryBlock] = useState(false);
  const [showCat, setShowCat] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const yesButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const yesButton = yesButtonRef.current;
    if (yesButton) {
      const rect = yesButton.getBoundingClientRect();
      setPosition({ 
        x: rect.right + 90, 
        y: rect.top 
      });
    }
  }, []);

  useEffect(() => {
    if (moveCount >= 10) {
      setShowVictoryBlock(true);
    }
  }, [moveCount]);

  const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
    setMoveCount(prev => prev + 1);
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
          <Heart1 />
          <Heart2 />
        </BlockIcons1>
        <BlockIcons2>
          <Heart3 />
          <Heart4 />
        </BlockIcons2>
      </IconsContainer>
      <Container>
          {!showCat ? (
          <MainBlock>
            <BlockWithAnimal>
              {showVictoryBlock && (
                <Message>
                  <MessageImg/>
                </Message>
              )}
              <Animal/>
            </BlockWithAnimal>
            <TextMain>will you be my valentine?</TextMain>
            <ButtonBlock>
              <ButtonYes
                ref={yesButtonRef}
                scaleCount={scaleCount}
                onClick={handleClickYes}
              >
                Yes
              </ButtonYes>
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
            </ButtonBlock>
          </MainBlock>
          ) : (
            <BlockCat>
              <div className="tenor-gif-embed" data-postid="23625303" data-share-method="host" data-aspect-ratio="1" data-width="100%"><a href="https://tenor.com/view/cat-jump-happy-jumping-for-joy-jumping-gif-23625303">Cat Jump Sticker</a>from <a href="https://tenor.com/search/cat-stickers">Cat Stickers</a></div> <script type="text/javascript" async src="https://tenor.com/embed.js"></script>
            </BlockCat>
          )}
      </Container>
      <IconsContainer>
        <BlockIcons3>
          <Heart1 />
          <Heart2 />
        </BlockIcons3>
        <BlockIcons4>
          <Heart3 />
          <Heart4 />
        </BlockIcons4>
      </IconsContainer>
    </>
  )
}

export default App