import styled from 'styled-components';

export const UserProfileContainer = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

export const UserName = styled.h2`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color:${({ theme }) => theme.colorText};
  cursor: pointer;
  text-align: center;
`;

export const EditProfileButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  line-height: 129%;
  color: #f3f3f3;
  text-align: center;
  background: transparent;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 45px;
  outline: none;
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
  z-index: 1000;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 18px;

  @media (min-width: 768px) {
    width: 177px;
    height: 134px;
    padding: 18px;
  }

  @media (min-width: 1440px) {
    width: 177px;
    height: 134px;
    padding: 18px;
  }
`;

export const Avatar = styled.img`
  width: 44px;
  height: 44px;
  border-radius: 50%;
  object-fit: cover;
`;
