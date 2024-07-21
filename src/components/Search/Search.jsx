import css from "./Search.module.css";
import { searchValue } from "../../redux/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import { getSearch } from "../../redux/selector";

export const Search = () => {
   const dispatch = useDispatch();
   const search = useSelector(getSearch);

   const handleOnChange = e => {
      // const searchValue = contacts.filter(contact => contact.name.toLowerCase().includes(search.toLowerCase()));
      // console.log(searchValue);
      dispatch(searchValue(e.target.value))
   }

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