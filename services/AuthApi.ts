import axios from "axios";

export const loginApi = async (credential: credentialProps) => {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL_ALIMNFLGO}/login`,
      credential,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error: any) {
    const errorData = error.response?.data || "Unknown error";
    return errorData;
  }
};
