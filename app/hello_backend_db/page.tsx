'use client';

import axios from 'axios';
import { useEffect, useState } from 'react';

export default function Page() {
  const [data, setData] = useState({ message: '' });
  useEffect(() => {
    const apipath = 'api/hello_db/backend';
    axios
      .get(apipath)
      .then((res) => res.data)
      .then((data) => {
        setData(data);
      });
  }, []);
  return <div>hello, {data.message}</div>;
}
