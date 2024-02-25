import React from 'react';
import { useDispatch } from 'react-redux';
import { updateNameThunk, updateAvatarThunk } from '../../../services/fetchUpdate';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton, Label, Input, Button } from './UserInfoModal.styled';
import { FaTimes } from 'react-icons/fa';
import { Formik, Form, Field } from 'formik';

const UserProfileModal = ({ closeModal, handleNameUpdate }) => {
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
        {/* <AvatarPreview src={} alt="Avatar Preview" /> */}
        <Formik
          initialValues={{ name: '', avatar: null }}
          onSubmit={handleSubmit}
        >
          {({ setFieldValue, isSubmitting }) => (
            <Form>
              <Label htmlFor="avatar">New Avatar:</Label>
              <Input
                type="file"
                id="avatar"
                onChange={(event) => {
                  setFieldValue("avatar", event.currentTarget.files[0]);
                }}
                accept="image/*"
              />
              <Label htmlFor="name">New Name:</Label>
              <Field
                type="text"
                id="name"
                name="name"
                as={Input}
              />

              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? 'Updating...' : 'Save changes'}
              </Button>
            </Form>
          )}
        </Formik>
      </ModalContent>
    </ModalOverlay>
  );
};

export default UserProfileModal;
