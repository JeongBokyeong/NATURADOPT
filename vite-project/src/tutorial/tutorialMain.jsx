import Style from './tutorialMain.module.css';
import Search__01 from './Imgs/tutorial_01_serch.jpeg';
import search from '../components/search/search';
import { Link } from "react-router-dom"
import { useState } from "react"
import Search__02 from './Imgs/search2nd.jpeg'

function TutorialMain() {
    // erase header
    // document.getElementById('header').style.display = 'none';
    const [state, setstate] = useState({
        query: '',
        list: []
      })
        const handleChange = (e) => {
          const results = posts.filter(post => {
              if (e.target.value === "") return posts
              return post.title.toLowerCase().includes(e.target.value.toLowerCase())
          })
          setstate({
              query: e.target.value,
              list: results
          })
      }
         const posts = [
          {  
            url: '',
            tags: ['왕관앵무', '갈라 코카투'],
            title: '코카투 앵무새',
            link: "/adopt/kokatoo"
          },
          {  
            url: '',
            tags: ['초록색 도마뱀', '예쁜 도마뱀'],
            title: '도마뱀',
            link: "/adopt/lizard"
          }
          // more data here
        ]


    return (
        <div className={Style.tutorialMain}> 
            <img src={Search__02} alt="tutorialMain" className={Style.Search__01}/>
            <div className={Style.searchCon}>
                <div className={Style.search}>
                <div className={Style.SearchContainer}>
                <input
                type="search"
                placeholder="간편하게 분양하자!"
                value={state.query}
                onChange={handleChange}
                className={Style.SearchInput}
                />
                 </div>
                <div className={Style.SearchResult}>
                {(state.query === '' ? "" : !state.list.length ? "결과 없음" : state.list.map(post => {
                return (
                     <Link to='./result'  ><li key={post.title}>{post.title}</li></Link>
                 )
                }))}
            </div>
        </div>
        </div>

        </div>
    );
}


export default TutorialMain;