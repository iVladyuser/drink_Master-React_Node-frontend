import { Title, ContainerError, Image } from './ErrorPage.style';
import image from './not-found-img/error_blue_iced_tea_1.png';

const ErrorPage = () => {
  return (
    <ContainerError>
      <Title>4</Title>
      <Image src={image} alt="404"></Image>
      <Title>4</Title>
    </ContainerError>
  );
};

export default ErrorPage;
