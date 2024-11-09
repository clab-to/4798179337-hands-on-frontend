'use client';

import Link from 'next/link';

import { useEffect, useState } from 'react';
import inventoriesData from '../sample/dummy_inventories.json';
import productsData from '../sample/dummy_products.json';

type ProductData = {
  id: number | null;
  name: string;
  price: number;
  description: string;
};

type InventoryData = {
  id: number;
  type: string;
  date: string;
  unit: number;
  quantity: number;
  price: number;
  inventory: number;
};

export default function Page({ params }: { params: { id: string } }) {
  const param = { id: Number(params.id) ?? 1 };
  const ProductDataDefault: ProductData = Object.freeze({
    id: 0,
    name: '',
    price: 0,
    description: '',
  });
  const [product, setProduct] = useState<ProductData>(ProductDataDefault);
  const [data, setData] = useState<Array<InventoryData>>([]);
  useEffect(() => {
    const selectedProduct: ProductData =
      productsData.find((v) => v.id === param.id) ?? ProductDataDefault;
    setProduct(selectedProduct);
    setData(inventoriesData);
  }, [param.id, ProductDataDefault]);

  return (
    <>
      <h2>商品在庫管理</h2>
      <h3>在庫処理</h3>
      <form>
        <div>
          <label>商品名:</label>
          <span>{product.name}</span>
        </div>
        <div>
          <label>数量:</label>
          <input type="text" />
        </div>
        <button>商品を仕入れる</button>
        <button>商品を卸す</button>
      </form>
      <h3>在庫履歴</h3>
      <table>
        <thead>
          <tr>
            <th>処理種別</th>
            <th>処理日時</th>
            <th>単価</th>
            <th>数量</th>
            <th>価格</th>
            <th>在庫数</th>
          </tr>
        </thead>
        <tbody>
          {data.map((data: InventoryData) => (
            <tr key={data.id}>
              <td>{data.type}</td>
              <td>{data.date}</td>
              <td>{data.unit}</td>
              <td>{data.quantity}</td>
              <td>{data.price}</td>
              <td>{data.inventory}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <Link href={'/inventory/products'}>商品一覧ページへ</Link>
      <Link href={'/login'}>ログイン画面へ</Link>
    </>
  );
}
