"use client";

import React, { Suspense, useEffect, useState } from "react";
import FormLogin from "./_section/FormLogin";
import { useRouter } from "next/navigation";
import Header from "./_section/Header";

export default function LoginPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    setToken(token);
    if (token) {
      router.push("/");
    } else {
      setLoading(false);
    }
  }, [router]);

  if (loading && token) {
    return <Header loading={loading} />;
  }

  return (
    <React.Fragment>
      <Header loading={false} />
      <FormLogin />
    </React.Fragment>
  );
}
