import Img from './not-found-img/asr_blue_iced_tea_1.png';
import { Container, Card, Text } from './NoImg.style';

export const NoImg = ({ text }) => {
  return (
    <Container>
      <Card src={Img} alt="blue iced tea" />
      <Text> {text}</Text>
    </Container>
  );
};
