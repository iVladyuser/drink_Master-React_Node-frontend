import SvgGeneratorSvgSelector from 'components/SvgComponents/SvgComponents';
import { FavBtn, SVGwithTextWrp } from './AddToFavBtn.styled';

const AddToFavoriteBtn = ({ btnText, onClick, bgсolor, textcolor }) => {
  const buttonStyle = {
    backgroundColor: bgсolor,
    color: textcolor,
  };

  return (
    <FavBtn onClick={onClick} style={buttonStyle}>
      {btnText}
    </FavBtn>
  );
};

export const SVGwithText = () => (
  <SVGwithTextWrp>
    <SvgGeneratorSvgSelector id="check" />
    <span>Added to favorites</span>
  </SVGwithTextWrp>
);

export default AddToFavoriteBtn;
