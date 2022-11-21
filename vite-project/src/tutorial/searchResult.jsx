import Style from './searchResult.module.css';
import img01 from './Imgs/searchResualt01.jpeg';
import img02 from './Imgs/searchResult02.jpg';
import {Link} from 'react-router-dom';

function SearchResult() {
    // display img02 instead of img01 after 3 seconds



    return (
        <div className={Style.searchResult}>
            <img src={img01} alt="searchResult" className={Style.searchResultImg} />
            <Link to ='./NaturaHouse'>
                <img src={img02} alt="searchResult" className={Style.searchResultImg } />
            </Link>
            {/* move to next page */}
        </div>
    );
}

export default SearchResult;
