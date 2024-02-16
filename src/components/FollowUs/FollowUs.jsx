import {
FollowUsWrapper,
FollowUsSocialsUl,
FollowUsSocialLi,
FollowUsSocialLinkF,
FollowUsSocialLink,
FollowUsTitle,
} from './FollowUs.styled';
import { FaFacebookF } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';
import { RiInstagramFill } from 'react-icons/ri';

export const FollowUs = () => {
return (
    <FollowUsWrapper>
    <FollowUsTitle>Follow Us</FollowUsTitle>
    <FollowUsSocialsUl>
        <FollowUsSocialLi>
        <FollowUsSocialLinkF href="https://www.facebook.com/goITclub/">
            <FaFacebookF />
        </FollowUsSocialLinkF>
        </FollowUsSocialLi>
        <FollowUsSocialLi>
        <FollowUsSocialLink href="https://www.instagram.com/goitclub/">
            <RiInstagramFill size="24px" />
        </FollowUsSocialLink>
        </FollowUsSocialLi>
        <FollowUsSocialLi>
        <FollowUsSocialLink href="https://www.youtube.com/c/GoIT">
            <FaYoutube size="24px" />
        </FollowUsSocialLink>
        </FollowUsSocialLi>
    </FollowUsSocialsUl>
    </FollowUsWrapper>
);
};
  