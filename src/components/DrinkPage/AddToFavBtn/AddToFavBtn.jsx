import {
  SVGwithTextWrp,
  AddedFavBtn,
  AddFavBtn,
  StyledSVG,
} from './AddToFavBtn.styled';

export const AddToFavoriteBtn = ({ onClick }) => {
  return <AddFavBtn onClick={onClick}>Add to favorite drinks</AddFavBtn>;
};

export const AddedToFavoriteBtn = ({ onClick }) => {
  return (
    <AddedFavBtn onClick={onClick}>
      <SVGwithTextWrp>
        <StyledSVG viewBox="0 0 18 18">
          <svg
            width="18"
            height="18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16 3L7.0625 13L3 8.45455"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </StyledSVG>
        <span>Added to favorites</span>
      </SVGwithTextWrp>
    </AddedFavBtn>
  );
};
