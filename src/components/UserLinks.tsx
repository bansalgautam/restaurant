"use client";

import { signOut, useSession } from "next-auth/react";
import Link from "next/link";

const UserLinks = () => {
  const { status } = useSession();
  return (
    <>
      {status === "unauthenticated" ? (
        <Link href="/login">Login</Link>
      ) : (
        <>
          <Link href="/orders">Orders</Link>
          <span onClick={() => signOut()} className="cursor-pointer">
            Logout
          </span>
        </>
      )}
    </>
  );
};

export default UserLinks;
