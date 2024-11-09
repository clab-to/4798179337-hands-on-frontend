import Link from 'next/link';

export default function Page() {
  return (
    <div>
      <h2>ログイン</h2>
      <p>ログインの入力項目を表示する</p>
      <Link href={'/inventory/products'}>商品一覧ページへ</Link>
      <Link href={'/inventory/products/1'}>商品在庫管理へ</Link>
    </div>
  );
}
