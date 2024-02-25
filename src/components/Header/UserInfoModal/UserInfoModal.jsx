import React from 'react';
import { useDispatch } from 'react-redux';
import { updateNameThunk, updateAvatarThunk } from '../../../services/fetchUpdate';

import { ModalOverlay, ModalContent, ModalTitle, CloseButton, FormWrapper, InputAvatarStyled, Label, Input, Button, ChangeNameWrapper } from './UserInfoModal.styled';

import { FaTimes } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';

const UserProfileModal = ({ closeModal, handleNameUpdate, userName }) => {
  const dispatch = useDispatch();

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
                <Label htmlFor="avatar"></Label>
                <InputAvatarStyled
                  type="file"
                  id="avatar"
                  onChange={(event) => {
                    setFieldValue("avatar", event.currentTarget.files[0]);
                  }}
                  accept="image/*"
                />
                <ChangeNameWrapper>
                  <Label htmlFor="name"></Label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    as={Input}
                    placeholder={{userName}}
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
