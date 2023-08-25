import Link from "next/link";
import Delete from "@/app/Delete";

export default async function List() {
  const rep = await fetch('http://localhost:8080/goods', {cache: 'no-store'});
  const product = await rep.json();
  return (
    <div>
      <h2 className="title">상품 목록</h2>
      <div className="cart-item">
        <p>상품명</p>
        <p>상품수</p>
        <p>수정</p>
        <p>삭제</p>
      </div>
      {product.map((item) => {
        return (
          <div className="cart-item" key={item.id}>
            <p>{item.name}</p>
            <p>{item.count}</p>
            <p><Link href={`/update/${item.id}`}>수정</Link></p>
            <p><Delete id={item.id} /></p>
          </div>
        )
      })}
    </div>
  );
}
