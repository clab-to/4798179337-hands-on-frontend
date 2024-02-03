'use client';

import inventoriesData from '@/app/inventory/products/sample/dummy_inventories.json';
import productsData from '@/app/inventory/products/sample/dummy_products.json';
import { useEffect, useState } from 'react';

type ProductData = {
  id: number;
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
  console.log(params);
  const [product, setProduct] = useState<ProductData>({
    id: 0,
    name: '',
    price: 0,
    description: '',
  });
  const [data, setData] = useState<Array<InventoryData>>([]);
  useEffect(() => {
    const defaultValue = { id: 0, name: '', price: 0, description: '' };
    const selectedProduct: ProductData =
      productsData.find((v) => v.id === parseInt(params.id)) ?? defaultValue;
    console.log(selectedProduct);
    setProduct(selectedProduct);
    setData(inventoriesData);
  }, []);

  return (
    <>
      <h2>商品在庫管理</h2>
      <h3>在庫処理</h3>

      {/* form */}
      <form>
        <div>
          <label>商品名</label>
          <span>{product.name}</span>
        </div>
        <div>
          <label>数量:</label>
          <input type="text" />
        </div>
        <button>商品を仕入れる</button>
        <button>商品を卸す</button>
      </form>

      {/* table */}
      <h3>在庫履歴</h3>
      <table>
        {/* header */}
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

        {/* body */}
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
    </>
  );
}
