import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { ReactComponent as AddPhoto } from '../../../images/header/addphoto.svg';
import { updateNameThunk, updateAvatarThunk } from '../../../services/fetchUpdate';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton, FormWrapper, AvatarPreview, Label, InputAvatarStyled, Add, Input, Button, ChangeNameWrapper } from './UserInfoModal.styled';
import { FaTimes } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';

const UserProfileModal = ({ closeModal, handleNameUpdate, userName, userAvatar }) => {
  const dispatch = useDispatch();
  const [previewImage, setPreviewImage] = useState(userAvatar);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      if (values.name) {
        await dispatch(updateNameThunk({ name: values.name }));
        handleNameUpdate(values.name);
      }
      if (values.avatar) {
        await dispatch(updateAvatarThunk(values.avatar));
      }

      closeModal();
    } catch (error) {
      console.error('Error updating user:', error);
    }
    setSubmitting(false);
  };

  const handleImageChange = (event, setFieldValue) => {
    const file = event.currentTarget.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
      setFieldValue("avatar", file);
    } else {
      setPreviewImage(userAvatar);
      setFieldValue("avatar", null);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton onClick={closeModal}>
          <FaTimes />
        </CloseButton>
        <ModalTitle></ModalTitle>

        <Formik
          initialValues={{ name: userName, avatar: null }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <FormWrapper>
                {previewImage && (
                  <AvatarPreview src={previewImage} alt="Preview" />
                )}
                <label htmlFor="avatar" className="upload-button">
                  <InputAvatarStyled type="file" id="avatar" onChange={(event) => handleImageChange(event, setFieldValue)} accept="image/*" />
                <Add>  <AddPhoto /> </Add>
                </label>
                <ChangeNameWrapper>
                  <Label htmlFor="name"></Label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    as={Input}
                    placeholder={{ userName }}
                  />
                  <Button type="submit" disabled={isSubmitting}>
                    {isSubmitting ? 'Updating...' : 'Save changes'}
                  </Button>
                </ChangeNameWrapper>
              </FormWrapper>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserProfileModal;
