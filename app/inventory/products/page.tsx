'use client';

import productsData from '@/app/inventory/products/sample/dummy_products.json';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

type ProductData = {
  id: number;
  name: string;
  price: number;
  description: string;
};

type InputData = {
  id: string;
  name: string;
  price: string;
  description: string;
};

export default function Page() {
  // データ入力
  const [data, setData] = useState<Array<ProductData>>([]);
  useEffect(() => {
    setData(productsData);
  }, []);

  // 入力
  const [input, setInput] = useState<InputData>({
    id: '',
    name: '',
    price: '',
    description: '',
  });
  const handleInput = (event: React.ChangeEvent<HTMLElement>) => {
    const { value, name } = event.target;
    setInput({ ...input, [name]: value });
  };

  // フォーム表示
  const [shownNewRow, setShownNewRow] = useState(false);
  const handleShowNewRow = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShownNewRow(true);
  };
  const handleAddCancel = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShownNewRow(false);
  };
  const handleAdd = (event: React.MouseEvent<HTMLElement>) => {
    event.preventDefault();
    setShownNewRow(false);
  };

  // 登録済み列操作
  const [editingRow, setEditingRow] = useState(0);
  const handleEditRow: any = (id: number) => {
    setShownNewRow(false);
    setEditingRow(id);
    const selectedProduct: ProductData = data.find((v) => v.id === id) as ProductData;
    setInput({
      id: id.toString(),
      name: selectedProduct.name,
      price: selectedProduct.price.toString(),
      description: selectedProduct.description,
    });
  };

  const handleEditCancel: any = (id: number) => {
    setEditingRow(0);
  };
  const handleEdit: any = (id: number) => {
    setEditingRow(0);
  };
  const handleDelete: any = (id: number) => {
    setEditingRow(0);
  };

  return (
    <>
      <h2>商品一覧</h2>
      <p>商品の一覧を表示</p>
      <button onClick={handleShowNewRow}>商品を追加する</button>

      {/* head */}
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

        {/* 商品追加フォーム */}
        <tbody>
          {shownNewRow ? (
            <tr>
              <td></td>
              <td>
                <input type="text" name="name" onChange={handleInput} />
              </td>
              <td>
                <input type="number" name="price" onChange={handleInput} />
              </td>
              <td>
                <input type="text" name="description" onChange={handleInput} />
              </td>
              <td></td>
              <td>
                <button onClick={(event) => handleAddCancel(event)}>キャンセル</button>
                <button onClick={(event) => handleAdd(event)}>登録する</button>
              </td>
            </tr>
          ) : (
            ''
          )}

          {/* 商品 */}
          {data.map((data: ProductData) =>
            editingRow === data.id ? (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>
                  <input
                    type="text"
                    value={input.name}
                    defaultValue={data.name}
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="number"
                    value={input.price}
                    defaultValue={data.price}
                    onChange={handleInput}
                  />
                </td>
                <td>
                  <input
                    type="text"
                    value={input.description}
                    defaultValue={data.description}
                    onChange={handleInput}
                  />
                </td>
                <td></td>
                <td>
                  <button onClick={() => handleEditCancel(data.id)}>キャンセル</button>
                  <button onClick={() => handleEdit(data.id)}>更新する</button>
                  <button onClick={() => handleDelete(data.id)}>削除する</button>
                </td>
              </tr>
            ) : (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.name}</td>
                <td>{data.price}</td>
                <td>{data.description}</td>
                <td>
                  <Link href={`/inventory/products/${data.id}`}>在庫処理</Link>
                </td>
                <td>
                  <button onClick={() => handleEditRow(data.id)}>更新/削除</button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </table>
    </>
  );
}
