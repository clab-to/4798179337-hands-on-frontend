import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h2>商品在庫管理</h2>
      <p>商品在庫の一覧を表示する</p>
      <Link href={'/inventory/products'}>商品一覧ページへ</Link>
      <Link href={'/login'}>ログイン画面へ</Link>
    </div>
  );
}
