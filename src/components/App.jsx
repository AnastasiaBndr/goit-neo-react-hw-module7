import "./App.css";

import ContactForm from "./ContactForm";
import SearchBox from "./SearchBox";
import ContactList from "./ContactList";
import Loader from "./Loader";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectError, selectIsLoading } from "../redux/selectors";
import { useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm />
      <SearchBox />
      <ContactList />
      {loading && <Loader />}
      {error && (
        <div>
          <p>Error :(</p>
        </div>
      )}
    </>
  );
}

export default App;
