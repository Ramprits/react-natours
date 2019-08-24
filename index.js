import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import './style.css';

const App = () => {
  const [counte, setCounter] = useState(0);
  const [posts, setPosts] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  useEffect(() => {
    getPosts(search);
  }, [query])

  const getPosts = async (search) => {
    if (search !== "") {
      const res = await fetch(`https://jsonplaceholder.typicode.com/posts?title=${search}`)
      const data = await res.json();
      setPosts(data)
    }

  }

  const updateSerach = e => {
    setSearch(e.target.value)
  }

  const onSubmit = (e) => {
    e.preventDefault();
    setQuery(search)

  }



  return (
    <div className="box">
      <form onSubmit={onSubmit}>

        <div className="field">
          <p className="control">
            <input className="input"
              value={search} name="search" type="text" placeholder="Enter your serach" onChange={updateSerach} />
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">
              Search
    </button>
          </p>
        </div>
      </form>
      <br />
      <div className="box">
        <ui>
          {posts.map((item) => {
            return (
              <li key={item.id}>
                {item.title}
              </li>
            )
          })}
        </ui>

      </div>
    </div>
  );
}

render(<App />, document.getElementById('root'));
