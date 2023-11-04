import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.spacing(3)};
  width: 50%;
  margin-bottom: ${p => p.theme.spacing(4)};
`;

export const SearchField = styled.input`
  position: relative;
  font-size: 16px;
  padding: ${p => p.theme.spacing(2)} ${p => p.theme.spacing(1)}
    ${p => p.theme.spacing(2)} ${p => p.theme.spacing(5)};
  border: 2px solid ${p => p.theme.colors.accent};
  outline: none;
  color: ${p => p.theme.colors.grey};
  border-radius: ${p => p.theme.spacing(2)};
  transition: background-color 0.2s;

  + svg {
    position: absolute;
    top: 40px;
    left: 4px;
    color: ${p => p.theme.colors.grey};
  }

  &:focus,
  :hover {
    background-color: ${p => p.theme.colors.bgInput};
  }

  &:focus + svg {
    color: ${p => p.theme.colors.accent};
  }
`;
