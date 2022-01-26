import { VFC } from 'react';
import './App.css';
import { resetUser, SelectedUser, setUser, User } from './slice/userSlice';
import { useAppDispatch, useAppSelector } from './app/hooks';
import { Provider } from 'react-redux';
import { store } from './app/store';
import { Users } from './components/Users';
import { Todos } from './components/Todos';

const App: VFC  = () => {
  return (
    <Provider store={store}>
        <div className="App">
          <header className="baseStyle">
            <div className="gridStyle">
              <Users />
              <Todos />
            </div>
          </header>
        </div>
    </Provider>
  );
}

export default App;
