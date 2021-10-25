import style from "./Search.module.css";

function Search(props) {
    return (
    <div className={style.Search}>
        <input type="text" className={style.SearchInput}></input>
    </div>
    );
}

export default Search;