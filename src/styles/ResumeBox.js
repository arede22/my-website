// general imports
import styled from 'styled-components';
// styles
import theme from './theme';
const { colors, fontSizes } = theme;

const ResumeDrop = styled.div`
  width: 40%;
  border-radius: 12px;
  margin: 10px auto;
  background-color: ${colors.transparentSeaBlue};
  width: 60%;
  padding: 20px 20px 40px;

  @media (max-width: 600px) {
    width: 50%;
  }
`;
const ResumeButton = styled.a`
  width: 35%;
  border: 1px solid white;
  border-radius: 8px;
  padding: 7.5px;
  background-color: ${colors.moreSeaBlue};
  font-size: ${fontSizes.sm2};
  text-shadow: black .5px .5px;

  &:hover {
    color: ${colors.seaBlue};
  }
`;
const PStyle = styled.p`
  line-height: 1.5;
  font-size: ${fontSizes.sm1};
  text-shadow: black 1px 1px;
`;

export default function ResumeBox() {
  return (
    <ResumeDrop>
      <PStyle> Take a quick peek at my resumé! </PStyle>
      <ResumeButton href="resume.pdf" target="_blank"> Resumé </ResumeButton>
    </ResumeDrop>
  )
}
