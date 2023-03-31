import { useState, useEffect, useTransition } from 'react';
import { Comments } from './Comments';

const filterBySearch = (entities, search) =>
  entities.filter((item) => item.name.concat(item.body).includes(search));

function CommentsApp() {
  const [isPending, startTransition] = useTransition();
  const [comments, setComments] = useState([]);
  const [search, setSearch] = useState('');

  const handleSearch = (e) => {
    // помечаем вычисления внутри функции startTransition как не особо важные, тем самым наш инпут работает более быстро, а не ждет, пока там все вычислится и отфильтруется
    startTransition(() => {
      setSearch(e.target.value);
    });
    // setSearch(e.target.value);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/comments')
      .then((res) => res.json())
      .then(setComments);
  }, []);

  return (
    <div>
      <input style={{ marginTop: '400px' }} onChange={handleSearch} />
      {isPending && <h1>Rendering...</h1>}
      <Comments entities={filterBySearch(comments, search)} />
    </div>
  );
}

export default CommentsApp;
