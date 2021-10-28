import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import CustomMarkdown from '../.';

const App = () => {
  return (
    <div>
      <CustomMarkdown>
        # This is a test
      </CustomMarkdown>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
