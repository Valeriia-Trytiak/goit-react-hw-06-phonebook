import styled from 'styled-components';
import { Form, ErrorMessage, Field } from 'formik';
import { CiUser, CiPhone } from 'react-icons/ci';

export const StyledForm = styled(Form)`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(5)};
  max-width: 50%;
`;

export const Error = styled(ErrorMessage)`
  color: ${p => p.theme.colors.error};
  font-size: 14px;
  display: block;
`;

export const StyledInput = styled(Field)`
  position: relative;
  font-size: 16px;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(1)}
    ${p => p.theme.spacing(2)} ${p => p.theme.spacing(7)};
  border: 2px solid ${p => p.theme.colors.accent};
  outline: none;
  border-radius: ${p => p.theme.spacing(2)};
  transition: background-color 0.2s;

  &:focus,
  :hover {
    background-color: ${p => p.theme.colors.bgInput};
  }
`;

export const AddContactButton = styled.button`
  text-decoration: none;
  display: inline-block;
  width: 150px;
  height: 40px;
  border-radius: ${p => p.theme.spacing(5)};
  font-family: inherit;
  font-size: 11px;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 3px;
  font-weight: 600;
  border-color: ${p => p.theme.colors.accent};
  background: transparent;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.1);
  transition: 0.3s;
  cursor: pointer;

  &:focus,
  &:hover {
    background-color: ${p => p.theme.colors.accent};
    box-shadow: 0 15px 20px rgba(0, 128, 128, 0.4);
    color: white;
    transform: translateY(-7px);
  }
`;

export const UserIcon = styled(CiUser)`
  position: absolute;
  top: 28px;
  left: 5px;
  font-size: 20px;
  color: ${p => p.theme.colors.grey};
  z-index: 100;

  @media only screen and (min-width: 768px) {
    top: 10px;
    left: 50px;
  }
`;

export const UserPhone = styled(CiPhone)`
  position: absolute;
  top: 103px;
  left: 5px;
  font-size: 20px;
  color: ${p => p.theme.colors.grey};
  z-index: 100;

  @media only screen and (min-width: 768px) {
    top: 68px;
    left: 65px;
  }
`;
