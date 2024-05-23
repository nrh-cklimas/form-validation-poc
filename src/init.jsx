import * as React from 'react';
import ReactDOM from 'react-dom';
import { NativeForm } from './NativeForm';
import { ReactHookForm } from './ReactHookForm';

ReactDOM.render(
  <React.StrictMode>
    <NativeForm />
  </React.StrictMode>,
  document.getElementById('native-form-root')
);

ReactDOM.render(
  <React.StrictMode>
    <ReactHookForm />
  </React.StrictMode>,
  document.getElementById('react-hook-form-root')
);
