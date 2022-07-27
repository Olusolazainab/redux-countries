import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPost } from './features/slices/CountriesSlices';
import './index.css';

function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(fetchPost());
  },[]);

  const post = useSelector(state => state.post);
  const {postsList, loading} = post
  console.log({postsList, loading})
  return (
    <div className="App">
   <h1>hi</h1>
   <hr/>
   {loading? <h2>Loading...</h2> :  postsList?.map((post, index) => (
     <div key={index}>
      <img src={post.flags.png} alt='flag' />
      <p>{post.name.common}</p>
          <p>Official Name:{post.name.official}</p>
          <p>Continent: {post.continents}</p>
          <p>Populatio:{post.population}</p>
      <hr/>
     </div>
   ))}
    </div>
  );
}

export default App;
