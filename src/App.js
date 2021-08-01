import React from 'react'
import './styles/app.scss'
import CreateContact from "./components/CreateContact";
import ContactsList from "./components/ContactsList";

function App() {
  return (
    <div className="container">
        <h1>Контакты</h1>
      <div className="content">
        <CreateContact/>
          <div className={'contactsWrapper'}>
              <ContactsList/>
          </div>
      </div>
    </div>
  );
}

export default App;
