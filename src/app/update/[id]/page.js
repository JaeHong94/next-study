"use client"
import {useParams, useRouter} from "next/navigation";
import {useEffect, useState} from "react";

export default function Update() {
  const [name, setName] = useState('');
  const [count, setCount] = useState(0);
  const router = useRouter();
  const params = useParams();
  const id = params.id;
  useEffect(() => {
    fetch(`http://localhost:8080/goods/${id}`)
      .then(rep => rep.json())
      .then(result => {
        console.log(result);
        setName(result.name);
        setCount(result.count);
      });
  }, []);
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const count = e.target.count.value;
      const options = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, count})
      };
      fetch(`http://localhost:8080/goods/${id}`, options)
        .then(res => res.json())
        .then(result => {
          router.push('/list');
        })
    }}>
      <p>
        <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="name"/>
      </p>
      <p>
        <input type="number" name="count" value={count} onChange={(e) => setCount(e.target.value)} placeholder="count"/>
      </p>
      <p>
        <input type="submit" value="상품 수정"/>
      </p>
    </form>
  );
}