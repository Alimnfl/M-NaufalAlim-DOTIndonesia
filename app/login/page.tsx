"use client";

import React, { Suspense, useEffect, useState } from "react";
import FormLogin from "./_section/FormLogin";
import { useRouter } from "next/navigation";
import Header from "./_section/Header";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading) {
    return <Header loading={loading} />;
  }

  return (
    <React.Fragment>
      <Header loading={false} />
      <FormLogin />
    </React.Fragment>
  );
}
