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

const FollowUs = () => {
return (
    <FollowUsWrapper>
    <FollowUsTitle>Follow Us</FollowUsTitle>
    <FollowUsSocialsUl>
        <FollowUsSocialLi>
        <FollowUsSocialLinkF href="https://www.facebook.com/goITclub/" target="_blank">
            <FaFacebookF />
        </FollowUsSocialLinkF>
        </FollowUsSocialLi>
        <FollowUsSocialLi>
        <FollowUsSocialLink href="https://www.instagram.com/goitclub/" target="_blank">
            <RiInstagramFill size="24px" />
        </FollowUsSocialLink>
        </FollowUsSocialLi>
        <FollowUsSocialLi>
        <FollowUsSocialLink href="https://www.youtube.com/c/GoIT" target="_blank">
            <FaYoutube size="24px" />
        </FollowUsSocialLink>
        </FollowUsSocialLi>
    </FollowUsSocialsUl>
    </FollowUsWrapper>
);
};
      
    export default FollowUs;