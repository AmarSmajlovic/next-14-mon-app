"use client";

import { useLogout } from "@/hooks/auth";
import Link from "next/link";

const Header = () => {
  const { handleLogout } = useLogout();
  return (
    <div className="flex justify-between">
      <div className="flex gap-4">
        <Link href="/">DASHBOARD</Link>
        <Link href="/products">PRODUCTS</Link>
      </div>

      <div className="flex gap-4">
        <span>username</span>
        <span>id</span>
        <button onClick={handleLogout}>logout</button>
      </div>
    </div>
  );
};

export default Header;
