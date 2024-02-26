import ReactPaginate from 'react-paginate';
import styled from 'styled-components';
import { RxChevronLeft, RxChevronRight } from 'react-icons/rx';

export const Previous = styled(RxChevronLeft)`
  width: 27px;
  height: 27px;
  fill: ${({ theme }) => theme.button.buttonBg};
  transition: fill 200ms linear;
  stroke-width: 1.2;

  &:hover,
  &:focus,
  &:active {
    fill: ${({ theme }) => theme.selectBgc};
  }
`;

export const Next = styled(RxChevronRight)`
  width: 27px;
  height: 27px;
  fill: ${({ theme }) => theme.button.buttonBg};
  transition: fill 200ms linear;
  stroke-width: 1.2;

  &:hover,
  &:focus,
  &:active {
    fill: ${({ theme }) => theme.selectBgc};
  }
`;

export const Paginate = styled(ReactPaginate).attrs({
  activeClassName: 'active',
})`
  padding: 14px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;

  @media screen and (min-width: 768px) {
    padding: 14px 24px;
    margin-top: 80px;
  }

  li {
    width: 27px;
    height: 27px;
    &:not(:nth-child(-n + 2)) {
      margin-left: 24px;
    }
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    font-size: 20px;
    font-weight: 500;
    line-height: 1.33;
    color: ${({ theme }) => theme.fieldColorFocus};
    cursor: pointer;
  }

  li.previous {
    margin-right: 48px;

    @media screen and (min-width: 768px) {
      margin-right: 40px;
    }
  }

  li.next {
    margin-left: 48px;

    @media screen and (min-width: 768px) {
      margin-left: 40px;
    }
  }

  li.previous a,
  li.next a,
  li.break a {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  li.active a {
    background-color: #4070cd;
    color: #f3f3f3;
  }

  li.disabled a {
    color: grey;
  }

  li.disable,
  li.disabled a {
    cursor: default;
  }

  li.disabled a svg {
    &:hover,
    &:focus,
    &:active {
      fill: #f3f3f3;
    }
  }
`;

export const SvgWrap = styled.svg``;
