import axios from "axios";

export const getDomesticDestinationApi = async (
  reqQuerySearch: reqQuerySearchProps
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_API_URL_RAJAONGKIR}/destination/domestic-destination?limit=${reqQuerySearch?.limit}&search=${reqQuerySearch?.search}&offset=${reqQuerySearch?.offset}`,
      {
        headers: {
          "Content-Type": "application/json",
          api_key: process.env.NEXT_API_KEY_SHIPPING_COST,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data || "Unknown error";
    console.error("Error fetching data:", errorData);
    return errorData;
  }
};

export const getInternationalDestinationApi = async (
  reqQuerySearch: reqQuerySearchProps
) => {
  try {
    const response = await axios.get(
      `${process.env.NEXT_API_URL_RAJAONGKIR}/destination/interational-destination?limit=${reqQuerySearch?.limit}&search=${reqQuerySearch?.search}&offset=${reqQuerySearch?.offset}`,
      {
        headers: {
          "Content-Type": "application/json",
          api_key: process.env.NEXT_API_KEY_SHIPPING_COST,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data || "Unknown error";
    console.error("Error fetching data:", errorData);
    return errorData;
  }
};

export const postCalculateDomesticApi = async (
  reqQueryCalculate: reqQueryCalculateProps
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_API_URL_RAJAONGKIR}/destination/domestic-cost`,
      reqQueryCalculate,
      {
        headers: {
          "Content-Type": "application/json",
          api_key: process.env.NEXT_API_KEY_SHIPPING_COST,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data || "Unknown error";
    console.error("Error fetching data:", errorData);
    return errorData;
  }
};

export const postCalculateInternationalApi = async (
  reqQueryCalculate: reqQueryCalculateProps
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_API_URL_RAJAONGKIR}/destination/international-cost`,
      reqQueryCalculate,
      {
        headers: {
          "Content-Type": "application/json",
          api_key: process.env.NEXT_API_KEY_SHIPPING_COST,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data || "Unknown error";
    console.error("Error fetching data:", errorData);
    return errorData;
  }
};

export const postTrackingAirwaysBillApi = async (
  reqQueryTrack: reqQueryTrackProps
) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_API_URL_RAJAONGKIR}/track/waybill`,
      reqQueryTrack,
      {
        headers: {
          "Content-Type": "application/json",
          api_key: process.env.NEXT_API_KEY_SHIPPING_COST,
        },
      }
    );

    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data || "Unknown error";
    console.error("Error fetching data:", errorData);
    return errorData;
  }
};
