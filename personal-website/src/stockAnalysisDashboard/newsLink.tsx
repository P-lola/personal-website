import React from 'react';
import styled from 'styled-components';
import { PrimaryColor } from './stockAnalysisDashboard'

interface NewsLink {
  title: string;
  link: string;
}

interface NewsLinksProps {
  newsLinks: NewsLink[];
}

const NewsLinksContainer = styled.div`
  width: 100%;
`

const StickyHeader = styled.div`
  position: sticky;
  top: 0;
  z-index: 10;
  padding-bottom: 8px;
`

const HeaderText = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  padding: 8px;
  border-radius: 5px;
  display: inline-block;
`

const ScrollableContent = styled.div`
  overflow-y: auto;
  flex: 1;
`

const NewsLinkItem = styled.div`
  margin-bottom: 8px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const NewsLinkAnchor = styled.a`
  color: ${PrimaryColor};
  text-decoration: none;
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 12px;

  &:hover {
    text-decoration: underline;
  }
`

const NewsLinks: React.FC<NewsLinksProps> = ({ newsLinks }) => {
  return (
    <NewsLinksContainer>
      <StickyHeader>
        <HeaderText>In The News</HeaderText>
      </StickyHeader>
      <ScrollableContent>
        {newsLinks.map((newsLink, index) => (
          <NewsLinkItem key={index}>
            <NewsLinkAnchor
              href={newsLink.link}
              target="_blank"
              rel="noopener noreferrer"
              title={newsLink.title}
            >
              {newsLink.title}
            </NewsLinkAnchor>
          </NewsLinkItem>
        ))}
      </ScrollableContent>
    </NewsLinksContainer>
  );
};

export default NewsLinks