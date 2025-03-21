import React, { useState } from "react";
import DialogChoose from "../ui/dialog-choose";
import { LogOut, OctagonAlert } from "lucide-react";
import useAuthStore from "@/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function ModalLogout() {
  const [dialogChoose, setDialogChoose] = useState(false);
  const router = useRouter();
  const { logout } = useAuthStore();

  return (
    <div className="w-full text-end flex flex-row justify-end">
      <div
        className="flex flex-row gap-2 text-end bg-red-500 rounded-xl text-sm p-2 text-white items-center cursor-pointer"
        onClick={() => setDialogChoose(true)}
      >
        <LogOut size={14} />
        Logout
      </div>
      <DialogChoose
        visible={dialogChoose}
        onOpenChange={setDialogChoose}
        icon={<OctagonAlert size={100} />}
        iconColor="text-yellow-500"
        title="Melakukan Logout"
        detail="Apakah sudah yakin ingin logout?"
        titleButton1="Tidak"
        titleButton2="Iya"
        onPress1={() => setDialogChoose(false)}
        onPress2={() => {
          setDialogChoose(false);
          logout(router);
        }}
      />
    </div>
  );
}
