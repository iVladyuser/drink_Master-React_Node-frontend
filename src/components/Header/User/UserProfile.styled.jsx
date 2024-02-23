import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const UserName = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #f3f3f3;
  cursor: pointer;
  text-align: center;
`;

export const UserProfileMenu = styled.div`
  position: absolute;
  top: 175%;
  right: 0;
  background: #161f37;
  border-radius: 8px;
  width: 177px;
  height: 134px;
  padding: 10px;
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
