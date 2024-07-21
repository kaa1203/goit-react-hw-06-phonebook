import css from "./Search.module.css";
import { searchValue } from "../../redux/searchSlice";
import { useDispatch } from "react-redux";

export const Search = () => {
   const dispatch = useDispatch();

   const handleOnChange = e => dispatch(searchValue(e.target.value));

   return (
      <div className={css.searchWrapper}>
         <input
            className={css.searchInput}
            type="text"
            name="searchBar"
            placeholder="Search here..."
            onChange={handleOnChange}
            autoComplete="off"
         />
      </div>
   );
}