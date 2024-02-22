import { FavBtn } from './AddToFavBtn.styled';

const AddToFavoriteBtn = ({ btnName, onClick }) => {
  return <FavBtn onClick={onClick}>{btnName}</FavBtn>;
};

export default AddToFavoriteBtn;
