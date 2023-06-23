import { Route, Routes } from "react-router-dom";
import "./App.css";
import SignIn from "./Components/SignIn/SignIn";
import SignUp from "./Components/SignUp/SignUp";
import { Header } from "./Components/Header/Header";
import { UserContextProvider } from "./Context/userContext";
import ContactManager from "./Components/Contacts/ContactManager";
import { Provider } from "react-redux";
import store from "./Redux/store";
import { HomePage } from "./Components/HomePage/HomePage";
import { MoviesManager } from "./Components/Movies/MoviesManager";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <UserContextProvider>
          <Header />

          <Routes>
            <Route path="/" element={<SignIn />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/home/*" element={<ContactManager />}></Route>
            <Route path="/signup" element={<SignUp />} />
            <Route path="/movie/*" element={<MoviesManager />}></Route>
          </Routes>
          
        </UserContextProvider>
      </Provider>
    </div>
  );
}

export default App;
