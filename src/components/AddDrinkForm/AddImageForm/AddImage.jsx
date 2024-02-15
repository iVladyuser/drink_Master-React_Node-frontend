const AddImage = () => {
  return (
    <div>
      <input
        type="file"
        name="file"
        id="add-file"
        onChange={() => {}}
        accept="image/*"
      />
      <div>
        <label htmlFor="add-file">
          {/* <div>
            <img id="uploaded-file" src="file" />
          </div> */}
          <div></div>
        </label>
      </div>
    </div>
  );
};
export default AddImage;
