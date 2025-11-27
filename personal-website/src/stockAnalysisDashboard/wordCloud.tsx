import React from 'react';
import styled from 'styled-components';

const WordCloudContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  box-sizing: border-box;
  overflow: hidden;
  background: transparent;
`;

const WordCloudImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

interface WordCloudProps {
  wordCloudImage: string;
}

const WordCloud: React.FC<WordCloudProps> = ({ wordCloudImage }) => {
  return (
    <WordCloudContainer>
      <WordCloudImage 
        src={`data:image/png;base64,${wordCloudImage}`} 
        alt="Word Cloud"
      />
    </WordCloudContainer>
  );
};

export default WordCloud;