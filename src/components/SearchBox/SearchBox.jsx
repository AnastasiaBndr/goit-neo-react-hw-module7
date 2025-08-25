import { useDispatch, useSelector } from "react-redux";
import css from "./SearchBox.module.css";
import { setFilter } from "../../redux/filtersSlice";
import { selectFilter } from "../../redux/selectors";

export default function SearchBox() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);
  const handleFilterChange = (filter) => {
    dispatch(setFilter(filter));
  };
  return (
    <div className={css["searchbox-container"]}>
      <label className={css.label} htmlFor="searchBox">
        Find contact by name
      </label>
      <input
        id="searchBox"
        type="text"
        value={filter}
        className={css.field}
        onChange={(e) => handleFilterChange(e.target.value)}
      ></input>
    </div>
  );
}
