import SvgGeneratorSvgSelector from 'components/SvgComponents/SvgComponents';
import { FavBtn, SVGwithTextWrp } from './AddToFavBtn.styled';

const AddToFavoriteBtn = ({ btnText, onClick }) => {
  return <FavBtn onClick={onClick}>{btnText}</FavBtn>;
};

export const SVGwithText = () => (
  <SVGwithTextWrp>
    <SvgGeneratorSvgSelector id="check" />
    <span>Added to favorites</span>
  </SVGwithTextWrp>
);

export default AddToFavoriteBtn;
