import React from 'react';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store/store';

import {Provider} from 'react-redux';
import {AppStack} from './src/navigation';

import Modal from './src/components/modal';
console.disableYellowBox = true;

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AppStack />
        <Modal pointerEvents="box-none" onLayout={() => {}} />
      </PersistGate>
    </Provider>
  );
};

export default App;
