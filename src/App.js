import React from 'react';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';
import { SEO } from './components/SEO';
import { HelmetProvider } from 'react-helmet-async';
import './App.css';

const store = ConfigureStore();
function App() {
    return (
        <Provider store={store}>
            <BrowserRouter >
                <HelmetProvider>
                    <div className='App'>
                        <SEO title='Host A Healthcare Hero' description='description' content='Volunteer to give back to a healthcare hero.' />
                        <Main style={{maxWidth: '100vw', paddingX: '10'}} />
                    </div>
                </HelmetProvider>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
