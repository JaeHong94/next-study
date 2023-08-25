"use client";

import {useRouter} from "next/navigation";

export default function Create() {
  const router = useRouter();
  return (
    <form onSubmit={(e) => {
      e.preventDefault();
      const name = e.target.name.value;
      const count = e.target.count.value;
      const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name, count})
      };
      fetch('http://localhost:8080/goods', options)
        .then(res => res.json())
        .then(result => {
          router.refresh();
          router.push('/list');
        })
    }}>
      <p>
        <input type="text" name="name" placeholder="name"/>
      </p>
      <p>
        <input type="number" name="count" placeholder="count"/>
      </p>
      <p>
        <input type="submit" value="상품 추가"/>
      </p>
    </form>
  );
}