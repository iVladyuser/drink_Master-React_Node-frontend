import styled from 'styled-components';

export const FollowUsWrapper = styled.div`
    display: flex;
    flex-direction: column;
`;

export const FollowUsSocialsUl = styled.ul`
    margin: 0;
    padding-inline-start: 0px;
    list-style: none;
    display: flex;
    gap: 16px;
`;

export const FollowUsSocialLi = styled.li`
    width: 44px;
    height: 44px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid rgba(243, 243, 243, 0.2);
    cursor: pointer;

    &:focus,
    &:hover {
        border: 1px solid rgba(243, 243, 243, 0.5);
        transition: 0.3s ease-out;
    }
`;

export const FollowUsSocialLinkF = styled.a`
    height: 20px;
    color: rgba(243, 243, 243, 1);
    font-size: 20px;

    &:focus,
    &:hover {
        color: rgba(243, 243, 243, 1);
        transition: 0.3s ease-out;
    }
`;

export const FollowUsSocialLink = styled.a`
    height: 24px;
    color: rgba(243, 243, 243, 1);
    font-size: 24px;

    &:focus,
    &:hover {
        color: rgba(243, 243, 243, 1);
        transition: 0.3s ease-out;
    }
`;

export const FollowUsTitle = styled.h3`
    margin: 0 0 20px 0;
    font-family: "Manrope", sans-serif;  
    font-size: 18px; 
    line-height: 24px; 
    font-weight: 500; 
    color: #0A0A11;
`