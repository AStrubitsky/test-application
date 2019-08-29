import react from 'react';
import styled from 'styled-components/native';
import config from '../../../config';

export const navLogoutButton = styled.TouchableOpacity`
  display: flex;
  background-color: ${config.colors.ligthRed};
  border: 2px solid ${config.colors.lightGreen};
  border-radius: 8px;
  padding: 3px 10px;
`;

export const navLoginButton = styled.TouchableOpacity`
  display: flex;
  background-color: ${config.colors.lightGreen};
  border: 2px solid ${config.colors.ligthRed};
  border-radius: 8px;
  padding: 3px 10px;
`;

export const textButton = styled.Text`
  font-size: 16px;
  color: ${config.colors.defaultText};
`;

export const root = styled.View`
  display: flex;
  position: absolute;
  z-index: 100;
  height: 50px;
  top: 0;
  left: 0;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  padding: 10px 20px;
`;

export const navLable = styled.Text`
  display: flex;
  font-size: 18px;
  color: ${config.colors.defaultText};
`;
