import {
  getDomesticDestinationApi,
  getInternationalDestinationApi,
  postCalculateDomesticApi,
  postCalculateInternationalApi,
} from "@/services/ShippingCostApi";
import toast from "react-hot-toast";
import { create } from "zustand";
import { persist } from "zustand/middleware";

type ShippingCostProps = {
  reqQuerySearch: {
    search: string;
    limit: number;
    offset: number;
  };
  reqQueryCalculate: {
    origin: string;
    destination: string;
    weight: number;
    courir: string;
    price: string;
  };
  reqQueryTrack: {
    awb: string;
    courier: string;
  };

  // result data
  getDomesticDestination: object;
  getInternationalDestination: object;
  postCalculateDomestic: object;
  postCalculateInternational: object;
  postTrackingAirwayBill: object;

  // status & res
  hasSendRequest: boolean;
  statusGetDomesticDestination: string;
  statusGetInternationalDestination: string;
  statusPostCalculateDomestic: string;
  statusPostCalculateInternational: string;
  statusPostTrackingAirwayBill: string;

  //set State
  setReqQuerySearch: (data: object) => void;
  setReqQueryCalculate: (data: object) => void;
  setReqQueryTrack: (data: object) => void;
};

const useShippingCost = create<ShippingCostProps>()(
  persist(
    (set, get) => ({
      // Query
      reqQuerySearch: {
        search: "",
        offset: 1,
        limit: 10,
      },
      reqQueryCalculate: {
        origin: "",
        destination: "",
        weight: 0,
        courir: "",
        price: "",
      },
      reqQueryTrack: {
        awb: "",
        courier: "",
      },

      //   result
      getDomesticDestination: {},
      getInternationalDestination: {},
      postCalculateDomestic: {},
      postCalculateInternational: {},
      postTrackingAirwayBill: {},

      //   status & res
      hasSendRequest: false,
      statusGetDomesticDestination: "idle",
      statusGetInternationalDestination: "idle",
      statusPostCalculateDomestic: "idle",
      statusPostCalculateInternational: "idle",
      statusPostTrackingAirwayBill: "idle",

      // set state
      setReqQuerySearch: (data) =>
        set((state) => ({
          reqQuerySearch: { ...state.reqQuerySearch, ...data },
        })),
      setReqQueryCalculate: (data) =>
        set((state) => ({
          reqQueryCalculate: { ...state.reqQueryCalculate, ...data },
        })),
      setReqQueryTrack: (data) =>
        set((state) => ({
          reqQueryTrack: { ...state.reqQueryTrack, ...data },
        })),

      GetDomesticDestination: async (data: reqQuerySearchProps) => {
        const { getDomesticDestination, hasSendRequest } = get();
        if (getDomesticDestination && hasSendRequest) return;
        set({ statusGetDomesticDestination: "loading" });
        try {
          const response = await getDomesticDestinationApi(data);
          set({
            getDomesticDestination: response,
            statusGetDomesticDestination: "success",
          });
        } catch (error: any) {
          set({
            getDomesticDestination: error,
            statusGetDomesticDestination: "failed",
          });
        }
      },

      GetInternationalDestination: async (data: reqQuerySearchProps) => {
        const { getInternationalDestination, hasSendRequest } = get();
        if (getInternationalDestination && hasSendRequest) return;
        set({ statusGetInternationalDestination: "loading" });
        try {
          const response = await getInternationalDestinationApi(data);
          set({
            getInternationalDestination: response,
            statusGetInternationalDestination: "success",
          });
        } catch (error: any) {
          set({
            getInternationalDestination: error,
            statusGetInternationalDestination: "failed",
          });
        }
      },

      PostCalculateDomestic: async (data: reqQueryCalculateProps) => {
        const { postCalculateDomestic, hasSendRequest } = get();
        if (postCalculateDomestic && hasSendRequest) return;
        set({ statusPostCalculateDomestic: "loading" });
        try {
          const response = await postCalculateDomesticApi(data);
          set({
            postCalculateDomestic: response,
            statusPostCalculateDomestic: "success",
          });
          toast.success("Kalkulasi anda berhasil!");
        } catch (error: any) {
          set({
            postCalculateDomestic: error,
            statusPostCalculateDomestic: "failed",
          });
          toast.error("Kalkulasi anda tidak berhasil!");
        }
      },

      PostCalculateInternational: async (data: reqQueryCalculateProps) => {
        const { postCalculateInternational, hasSendRequest } = get();
        if (postCalculateInternational && hasSendRequest) return;
        set({ statusPostCalculateInternational: "loading" });
        try {
          const response = await postCalculateInternationalApi(data);
          set({
            postCalculateInternational: response,
            statusPostCalculateInternational: "success",
          });
        } catch (error: any) {
          set({
            postCalculateInternational: error,
            statusPostCalculateInternational: "failed",
          });
        }
      },

      PostTrackingAirwaysBill: async (data: reqQuerySearchProps) => {
        const { postTrackingAirwayBill, hasSendRequest } = get();
        if (postTrackingAirwayBill && hasSendRequest) return;
        set({ statusPostTrackingAirwayBill: "loading" });
        try {
          const response = await getDomesticDestinationApi(data);
          set({
            postTrackingAirwayBill: response,
            statusPostTrackingAirwayBill: "success",
          });
        } catch (error: any) {
          set({
            postTrackingAirwayBill: error,
            statusPostTrackingAirwayBill: "failed",
          });
        }
      },
    }),

    {
      name: "shipping-cost-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          state.hasSendRequest = false;
        }
      },
    }
  )
);

export { useShippingCost };
