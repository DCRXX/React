import Link from 'next/link';
import { ReactElement } from 'react';

export default function HomePage(): ReactElement {
  return (
    <div>
      <Link href="/src/page/home2">Добро пожаловать!</Link>
      <p>Это главная страница</p>
    </div>
  );
}