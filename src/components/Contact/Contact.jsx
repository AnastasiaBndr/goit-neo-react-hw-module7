import css from "./Contact.module.css";
import { getRandomIcon } from "../../helpers";
import { useDispatch } from "react-redux";
import { FaPhoneAlt } from "react-icons/fa";
import { useMemo } from "react";
import { deleteContact } from "../../redux/contactsSlice";


export default function Contact({ contact }) {
  const randomIcon = useMemo(() => getRandomIcon(), []);
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(contact.id));
  return (
    <div className={css["contact-container"]}>
      <div className={css["name-number-container"]}>
        <div className={css["icon-name-container"]}>
          {randomIcon}
          <p>{contact.name}</p>
        </div>
        <div className={css["icon-name-container"]}>
          <FaPhoneAlt className={css.phone} size={14} />
          <p>{contact.number}</p>
        </div>
      </div>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}
