"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import useAuthStore from "@/hooks/useAuth";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { ChangeEvent, useState, KeyboardEvent, useEffect } from "react";
import FormLoginSkeleton from "../_component/FormLoginSkeleton";

export default function FormLogin() {
  const router = useRouter();
  const { login, reqQueryLogin, setReqQueryLogin, status } = useAuthStore();

  const [isPasswordTouched, setIsPasswordTouched] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 400);
    return () => clearTimeout(timer);
  }, []);

  const onChangeLoginForm = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setReqQueryLogin({
      [name]: value,
    });
  };

  const handleClickPostLogin = () => {
    login(reqQueryLogin, router);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClickPostLogin();
    }
  };

  if (loading) {
    return <FormLoginSkeleton />;
  }

  return (
    <div className="w-full sm:max-w-sm max-w-[340px] md:max-w-sm p-6 border mx-4 border-gray-100 min-h-[340px] rounded-xl shadow-md flex flex-col items-center bg-white justify-between">
      <div className="flex flex-col items-center">
        <h2 className="font-semibold text-lg">Login</h2>
        <span className="text-xs text-center">
          Anda harus login sebelum memakai Alimnfl Ongkir
        </span>
      </div>

      <div className="flex flex-col gap-4 w-full md:max-w-[360px] text-xs">
        <div className="flex flex-col">
          <h4>Username</h4>
          <Input
            type="text"
            name="username"
            onChange={onChangeLoginForm}
            value={reqQueryLogin?.username}
            onKeyDown={handleKeyDown}
          />
        </div>
        <div className="flex flex-col">
          <h4>Kata Sandi</h4>
          <Input
            type="password"
            name="password"
            onChange={onChangeLoginForm}
            onFocus={() => setIsPasswordTouched(true)}
            value={reqQueryLogin?.password}
            onKeyDown={handleKeyDown}
          />
          {isPasswordTouched && reqQueryLogin?.password?.length < 8 && (
            <span className="flex flex-row text-red-400 gap-1 pt-2 font-semibold items-center">
              <AlertCircle size={12} />
              {reqQueryLogin?.password?.length === 0
                ? "Kata sandi harus diisi untuk melakukan login"
                : "Kata sandi minimal 8 karakter"}
            </span>
          )}
        </div>
      </div>

      <div className="w-full max-w-[360px]">
        <Button
          onClick={handleClickPostLogin}
          disabled={
            reqQueryLogin?.password.length < 8 ||
            reqQueryLogin?.username?.length < 3 ||
            status === "loading"
          }
          className="w-full cursor-pointer bg-green-600 hover:bg-green-400 disabled:bg-green-300"
        >
          Login {status === "loading" && <span className="loader ml-2"></span>}
        </Button>
      </div>
    </div>
  );
}
