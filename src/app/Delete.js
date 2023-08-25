"use client";

import {useParams, useRouter} from "next/navigation";

export default function Delete(props) {
  const router = useRouter();
  return (
    <button onClick={() => {
      const options = {method: 'DELETE'};
      fetch(`http://localhost:8080/goods/${props.id}`, options)
        .then(rep => rep.json())
        .then(result => {
          router.refresh();
          router.push('/list');
        });
    }}>
      delete
    </button>
  )
}