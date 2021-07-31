import * as React from 'react';
import Container from './app/common/container/Container'
import { Provider } from "react-redux";
import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper';

import store from "./app/store";

const theme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#3498db',
    accent: '#f1c40f',
  },
};

export default function App() {

  return (
    <Provider store={store}>
    	<PaperProvider theme={theme}>
        	<Container />
    	</PaperProvider>
    </Provider>
  );
}
