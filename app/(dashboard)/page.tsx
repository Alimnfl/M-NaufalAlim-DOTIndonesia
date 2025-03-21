"use client";

import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import ContentManage from "./_section/ContentManage";

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/login");
    }
  }, []);

  return (
    <React.Fragment>
      <ContentManage />
    </React.Fragment>
  );
}
