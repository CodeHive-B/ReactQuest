import { useState, useEffect } from 'react';

function FetchUser() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then(response => response.json())
      .then(userData => setData(userData));
  }, []);

  return (
    <div>
      <h1>Fetch User Component</h1>
      {data ? <p>User: {data.name}</p> : <p>Loading...</p>}
    </div>
  );
}

export default FetchUser;