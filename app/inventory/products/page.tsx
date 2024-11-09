import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h2>商品一覧</h2>
      <p>商品の一覧を表示</p>
      <Link href={'/inventory/products/1'}>商品在庫管理へ</Link>
      <Link href={'/login'}>ログイン画面へ</Link>
    </div>
  );
}
