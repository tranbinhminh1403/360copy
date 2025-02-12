import { useMutation } from '@tanstack/react-query';
import axios from 'axios';


const API_URL = import.meta.env.VITE_FORM_API;

export const usePostForm = () => {
  return useMutation({
    mutationFn: async (formData: {
      email: string;
      age: number;
      fullName: string;
      gender: string;
      phoneNumber: string;
      pricing_title: string;
      note: string;
    }) => {
      const response = await axios.post(API_URL, formData);
      return response.data;
    }
  });
};
