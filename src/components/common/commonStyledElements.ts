import styled from 'styled-components/native';

import config from '../../../config';

export const pageTitle = styled.Text`
  font-size: 30px;
  color: ${config.colors.defaultText};
  margin-bottom: 50px;
`;

export const input = styled.TextInput`
  font-size: 16px;
  border: 2px solid #4c4c52;
  padding: 10px 15px;
  border-radius: 8px;
  margin: 8px 0 20px;
`;

export const button = styled.TouchableOpacity`
  border-radius: 8px;
  border: 2px solid ${config.colors.defaultText};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;

export const buttonText = styled.Text`
  color: ${config.colors.defaultText};
  font-size: 18px;
`;

export const inputLabel = styled.Text`
  color: ${config.colors.defaultText};
  font-size: 14px;
`;
