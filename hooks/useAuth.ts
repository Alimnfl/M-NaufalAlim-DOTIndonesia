import { loginApi } from "@/services/AuthApi";
import toast from "react-hot-toast";
import { create } from "zustand";

const useAuthStore = create<authProps>((set) => ({
  user: null,
  token: null,
  error: null,
  status: "idle",

  reqQueryLogin: {
    username: "",
    password: "",
  },

  setReqQueryLogin: (data) => {
    set((state) => ({
      reqQueryLogin: { ...state.reqQueryLogin, ...data },
    }));
  },

  login: async (credential: credentialProps, router: any) => {
    set({ status: "loading" });
    try {
      const response = await loginApi(credential);
      if (response.status !== 200) {
        throw new Error("Unauthorized");
      }
      set({
        user: credential?.username,
        token: response.token,
        error: null,
        status: "success",
      });
      localStorage.setItem("token", response.token);
      toast.success("Login berhasil!");
      if (response.status === 200) {
        router.push("/");
      }
    } catch (error: any) {
      set({
        status: "failed",
      });
      toast.error("Username atau password salah, login tidak berhasil!");
      set({ error: error });
    }
  },

  logout: () => {
    set({ user: null, token: null });
    localStorage.removeItem("token");
  },
}));

export default useAuthStore;
