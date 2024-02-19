import React from 'react';

import {SocialNovUl, SocialNovLi} from './SocialNov.styled';
import { Instagram } from 'images/footer/svg/Instagram';
import { Facebook } from 'images/footer/svg/Facebook';
import { YouTube } from 'images/footer/svg/YouTube';

export const SocialNov = () => {
    return (
        <div >
          <SocialNovUl>
            <SocialNovLi >
              <a
                href="https://www.facebook.com/goITclub/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Facebook/>
              </a>
            </SocialNovLi>
            <SocialNovLi >
              <a
                href="https://www.instagram.com/goitclub/"
                rel="noreferrer noopener"
                target="_blank"
              >
                <Instagram/>
              </a>
            </SocialNovLi>
            <SocialNovLi >
              <a
                href="https://www.youtube.com/c/GoIT"
                rel="noreferrer noopener"
                target="_blank"
              >
                <YouTube/>
              </a>
            </SocialNovLi>
           
          </SocialNovUl>
        </div>
    );
};

export default SocialNov;