
import { createRoot } from 'react-dom/client'

import "./sass/_variables.scss"
import App from './App';

import { BrowserRouter } from 'react-router-dom';
import { LayOut } from './Layout/LayOut';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <LayOut>
    <App />
    </LayOut>
  </BrowserRouter>,
)
