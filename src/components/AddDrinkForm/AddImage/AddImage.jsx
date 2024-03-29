import { RxPlus, RxUpdate } from 'react-icons/rx';

import {
  AddFileButton,
  BackgroundImg,
  Button,
  Icon,
  InputWrapper,
  StyledInput,
  ErrorText,
} from './AddImage.styled';
import { useState } from 'react';
import { useField } from 'formik';
import { toast } from 'react-toastify';

const AddImage = ({ setValue, fileRef }) => {
  const [fileUrl, setFileUrl] = useState('');

  const [, meta] = useField('drinkThumb');

  const onChangeFile = e => {
    const imgObject = e.currentTarget.files[0] ?? null;

    const fileUrl = imgObject ? URL.createObjectURL(imgObject) : null;

    if (fileUrl) {
      setFileUrl(fileUrl);
      setValue('drinkThumb', imgObject);
      toast.success('Great you added photo!');
    }
  };

  return (
    <InputWrapper>
      <StyledInput
        ref={fileRef}
        type="file"
        name="file"
        id="add-file"
        onChange={onChangeFile}
        accept="image/*"
      />
      <AddFileButton>
        <label htmlFor="add-file">
          {fileUrl && fileRef.current.value && (
            <BackgroundImg>
              <img id="uploaded-file" src={fileUrl} alt="file" />
            </BackgroundImg>
          )}
          <Button>
            <Icon>
              {fileUrl && fileRef.current.value ? (
                <RxUpdate size={28} />
              ) : (
                <RxPlus size={28} />
              )}
            </Icon>
            {fileUrl && fileRef.current.value ? 'Update file' : 'Add image'}
          </Button>
        </label>
      </AddFileButton>
      {meta.touched && meta.error ? <ErrorText>{meta.error}</ErrorText> : null}
    </InputWrapper>
  );
};
export default AddImage;
