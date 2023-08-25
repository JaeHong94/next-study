import Image from 'next/image'

export default function Home() {
  const name = 'min';
  return (
    <main>
      <h1 className="title">Hello, Next.js!</h1>
      <p className="title-sub">by dev {name}</p>
    </main>
  )
}
