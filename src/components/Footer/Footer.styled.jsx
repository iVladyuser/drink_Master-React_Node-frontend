import { styled } from 'styled-components';
import footerMob1x from '../../images/footer/mobile/footer.jpg';
import footerMob2x from '../../images/footer/mobile/footer@2x.jpg';

import footerTab1x from '../../images/footer/tablet/footer.jpg';
import footerTab2x from '../../images/footer/tablet/footer@2x.jpg';

import footerDesk1x from '../../images/footer/computer/footer.jpg';
import footerDesk2x from '../../images/footer/computer/footer@2x.jpg';

export const FooterContainer = styled.footer`
  margin: 0 auto;
  padding: 40px 20px 18px 20px;
  min-width: 320px;
  

  @media (min-width: 768px) {
    min-width: 768px;
    padding: 80px 32px 24px 32px;
  }

  @media (min-width: 1440px) {
    min-width: 1440px;
    padding: 80px 100px 24px 100px;
  }
`;
export const FooterSection = styled.section`
 



  background-image:  url(${footerMob1x});
background-repeat: no-repeat;
margin: 0 auto;
background-size: cover;



@media screen and (min-device-pixel-ratio: 2) and (min-width: 320px),
screen and (min-resolution: 192dpi) and (min-width: 320px),
screen and (min-resolution: 2dppx) and (min-width: 320px) {
        background-image:  url(${footerMob2x});
        
}

@media screen and (min-width:768px) {
        background-image:url(${footerTab1x});
        height: 428px;
}

@media screen and (min-device-pixel-ratio: 2) and (min-width: 768px),
screen and (min-resolution: 192dpi) and (min-width: 768px),
screen and (min-resolution: 2dppx) and (min-width: 768px) {
        background-image: url(${footerTab2x});
}
@media screen and (min-width:1440px) {
    background-image: url(${footerDesk1x});
}

@media screen and (min-device-pixel-ratio: 2) and (min-width: 1440px),
screen and (min-resolution: 192dpi) and (min-width: 1440px),
screen and (min-resolution: 2dppx) and (min-width: 1440px) {
    background-image:url(${footerDesk2x});
}

`;
export const FooterDiv = styled.div`
 
display: flex;

justify-content: flex-start;
flex-direction: column;







`;


export const FooterDivTwo = styled.div`
 
display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: row;


@media (min-width: 375px) {

  
}

@media (min-width: 768px) and (max-width: 1439px) {
  display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
gap: 40px;

}

@media (min-width: 1440px) {
  
}


`;

export const FooterDivOne = styled.div`
 
display: flex;
align-items: flex-start;
justify-content: flex-start;
flex-direction: column;
gap: 20px;

@media (min-width: 768px) {
  gap: 28px;
}

@media (min-width: 1440px) {
  gap: 40px;
}


`;

export const FooterDivDesk = styled.div`
 
display: none;

@media (min-width: 768px) {
  
}

@media (min-width: 1440px) {
  display: block;
}
`;


export const FooterDivTab = styled.div`
 


display: flex;
align-items: flex-start;
justify-content: space-between;
flex-direction: row;




@media (max-width: 767px) {
  margin: 0 auto;
}

@media (min-width: 1440px) {
  display: none;
}
`;

export const FooterDivMob = styled.div`
 
@media screen and (min-width: 320px) and (max-width: 767px) {

  display: flex;
  
  justify-content: flex-start;
  flex-direction: column;
  gap: 40px;

}
@media screen and (min-width: 768px) and (max-width: 1439px) {

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;

}

`;