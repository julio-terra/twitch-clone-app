import React, { Children } from 'react';  
import { Text } from 'react-native';

import { Container, HeaddingText } from './styles';


const Heading: React.FC = ({ children }) => {
  return (
    <Container>
      <HeaddingText>{children}</HeaddingText>
    </Container>
  )
}

export default Heading;