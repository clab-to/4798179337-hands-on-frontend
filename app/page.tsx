import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Link href={'/inventory/products/1'}>商品在庫管理へ</Link>
      <Link href={'/inventory/products'}>商品一覧ページへ</Link>
      <Link href={'/login'}>ログイン画面へ</Link>
    </main>
  );
}
