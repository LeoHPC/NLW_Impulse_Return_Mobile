import React from 'react';
import { ActivityIndicator, Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import { theme } from '../../theme';
import { styles } from './styles';

interface Props extends TouchableOpacityProps {
  isLoading: boolean;
  comment: string
}

export function Button({ isLoading, comment, ...rest }: Props) {
  return (
    <TouchableOpacity
      disabled={comment === ''}
      style={comment === '' ? styles.containerDisabled : styles.container}
      {...rest}
    >
      {
        isLoading ? (
          <ActivityIndicator
            color={theme.colors.text_on_brand_color}
          />
        ) : (
          <Text style={styles.title} >Enviar Feedback</Text>
        )
      }
    </TouchableOpacity>
  );
}