import { HashRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import ReactDOM from 'react-dom/client';
import App from './App';
import store from "./store/store";
import 'react-toastify/dist/ReactToastify.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <HashRouter>
    <Provider store={store}>
      <App />
      <ToastContainer />
    </Provider>
  </HashRouter>
);