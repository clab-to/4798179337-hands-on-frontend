'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';
import productsData from './sample/dummy_products.json';
type ProductData = {
  id: number;
  name: string;
  price: number;
  description: string;
};

export default function Page() {
  // 過去データを保持
  const [data, setData] = useState<Array<ProductData>>([]);
  useEffect(() => {
    setData(productsData);
  }, []);

  return (
    <>
      <h2>商品一覧</h2>
      <button>商品を追加する</button>
      <table>
        <thead>
          <tr>
            <th>商品ID</th>
            <th>商品名</th>
            <th>単価</th>
            <th>説明</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        {data.map((data: any) => (
          <tr key={data.id}>
            <td>{data.id}</td>
            <td>{data.name}</td>
            <td>{data.price}</td>
            <td>{data.description}</td>
            <td>
              <Link href={`/inventory/products/${data.id}`}>在庫処理</Link>
            </td>
            <td>
              <button>更新・削除</button>
            </td>
          </tr>
        ))}
        <tbody></tbody>
      </table>
      <Link href={'/inventory/products/1'}>商品在庫管理へ</Link>
      <Link href={'/login'}>ログイン画面へ</Link>
    </>
  );
}
