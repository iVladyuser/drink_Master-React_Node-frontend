import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Select = styled.select`
  appearance: none;
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  width: 200px;
  outline: none;

  &:focus {
    border-color: #007bff;
  }
`;

export const SelectContainer = styled.div`
  position: relative;
  display: inline-block;
`;

export const Arrow = styled.div`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%) ${({ isRotated }) => isRotated ? 'rotate(180deg)' : 'rotate(0)'};
  cursor: pointer;
  transition: transform 0.3s ease;
font-size: 20px;
  &:hover {
    color: #007bff;
  }
  pointer-events: none; /* Добавьте эту строку, чтобы стрелка не перехватывала события клика */
`;
export const OpenSelect = styled(Select)`
  border-color: #007bff;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
`;
export const Wraper = styled.div`
display: flex;
`;