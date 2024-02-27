import {
  InfoContainer,
  InfoContPriv,
  InfoUl,
  InfoLi,
  InfoText,
} from './Info.styled';

export const Info = () => {
  return (
    <InfoContainer>
      <InfoText>©2023 Drink Master. All rights reserved.</InfoText>
      <InfoContPriv>
        <InfoUl>
          <InfoLi>
            <a
              href="https://goit.global/ph/privacy-policy/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Privacy Policy
            </a>
          </InfoLi>
          <InfoLi>
            <a
              href="https://goit.global/ph/terms-of-use/"
              rel="noreferrer noopener"
              target="_blank"
            >
              Terms of Service
            </a>
          </InfoLi>
        </InfoUl>
      </InfoContPriv>
    </InfoContainer>
  );
};
export default Info;
