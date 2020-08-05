import styled from 'styled-components';

// styles and wrappers
const ImgWrapper = styled.a`
  display: block;
  margin: 0 auto;
  width: 90%;
`;
const ImgStyle = styled.img`
  height: 70%;
  width: 70%;
  max-width: 300px;
`;
// W3 Modal

// export main component
export default function Modal({ trigger, img, alt }) {
  return (
    <ImgWrapper>
      <ImgStyle loading="lazy" id={trigger} src={img} alt={alt}/>
    </ImgWrapper>
  )
};
