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
  border: 1px solid ${({ theme }) => theme.borderColor};
  cursor: pointer;

  &:focus,
  &:hover {
    border: 1px solid ${({ theme }) => theme.fieldColor};
    transition: 0.3s ease-out;
  }
`;

export const FollowUsSocialLinkF = styled.a`
  height: 20px;
  color: ${({ theme }) => theme.fieldColorFocus};
  font-size: 20px;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.fieldColorFocus};
    transition: 0.3s ease-out;
  }
`;

export const FollowUsSocialLink = styled.a`
  height: 24px;
  color: ${({ theme }) => theme.fieldColorFocus};
  font-size: 24px;

  &:focus,
  &:hover {
    color: ${({ theme }) => theme.fieldColorFocus};
    transition: 0.3s ease-out;
  }
`;

export const FollowUsTitle = styled.h3`
  margin: 0 0 20px 0;
  font-family: 'Manrope', sans-serif;
  font-size: 18px;
  line-height: 24px;
  font-weight: 500;
  color: ${({ theme }) => theme.bodyBgc};
`;
