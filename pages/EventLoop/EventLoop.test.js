import React from 'react';
import {Alert} from 'react-native';
import {render, fireEvent} from '@testing-library/react-native';
import {EventLoop} from './EventLoop';

it('renders correctly', async () => {
  Alert.alert = jest.fn();
  const {getByText} = render(<EventLoop />);

  const alertButton = getByText('increment with alert');
  fireEvent.press(alertButton);

  expect(Alert.alert).toHaveBeenCalledWith('count pressed', 'total: 1');
});
