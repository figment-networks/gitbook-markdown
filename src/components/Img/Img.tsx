import React from 'react';
import {SRLWrapper} from 'simple-react-lightbox';

import {StyledImage, StyledImageContainer, StyledLabel} from "./Img.styles";

const lightboxOptions = {
  buttons: {
    showAutoplayButton: false,
    showCloseButton: true,
    showDownloadButton: true,
    showFullscreenButton: true,
    showNextButton: false,
    showPrevButton: false,
    showThumbnailsButton: false,
  },
  thumbnails: {
    showThumbnails: false,
  },
};

type ImgProps = {
  src: string;
  alt?: string;
  title?: string;
}

const Img = (props: ImgProps): JSX.Element => {
  const src = props.src as string;
  const alt = props.alt as string;

  const isRelativeGitbookUrl =
    src.includes('.gitbook') &&
    !src.includes('http') &&
    !src.includes('https');

  if (isRelativeGitbookUrl) {
    const prefix =
      'https://raw.githubusercontent.com/figment-networks/datahub-learn/master/';
    const absoluteSrc = `${prefix}${src.replace(/\.{1,2}\//g, '')}`;

    return (
      <SRLWrapper options={lightboxOptions}>
        <StyledImageContainer>
          <a href={absoluteSrc}>
            <StyledImage
              src={absoluteSrc}
              alt={alt}
            />
          </a>
          {alt && (
            <StyledLabel>{alt}</StyledLabel>
          )}
        </StyledImageContainer>
      </SRLWrapper>
    );
  } else {
    return (
      <SRLWrapper options={lightboxOptions}>
        <StyledImageContainer>
          <a href={src}>
            <StyledImage src={src} alt={alt} />
          </a>
          {alt && (
            <StyledLabel>{alt}</StyledLabel>
          )}
        </StyledImageContainer>
      </SRLWrapper>
    );
  }
};

export default Img;
