import { notification } from 'antd';
import { useMutation, UseMutationResult } from '@tanstack/react-query';
import axios from 'axios';

// Define types for the API response
interface OrderResponse {
  success: boolean;
  message?: string;
  data?: any; // Adjust this based on the actual structure of the response data
}

// Define types for the error handling
interface PostOrderError {
  response?: {
    status: number;
    data: {
      message: string;
    };
  };
}

const POST_URL = import.meta.env.VITE_PAYMENT_DETAIL;

export const usePostOrderReference = (): UseMutationResult<OrderResponse, PostOrderError, string> => {
  const mutation = useMutation<OrderResponse, PostOrderError, string>({
    mutationFn: async (orderReference: string) => {
      const response = await axios.post<OrderResponse>(POST_URL, { order_reference: orderReference });
      return response.data;
    },
    onSuccess: () => {
      // Show success notification
      notification.success({
        message: 'Thanh toán thành công',
        description: 'Đơn hàng của bạn đã được thanh toán thành công.',
      });
      // Redirect to /result page
      window.location.href = '/result';  // or use navigate('/result') if using useNavigate
    },
    onError: (error: PostOrderError) => {
      if (error.response && error.response.status === 400) {
        notification.error({
          message: 'Không tìm thấy đơn hàng',
          description: 'Đơn hàng chưa được thanh toán',
        });
      } else {
        console.error('Error posting order reference:', error);
      }
    },
  });

  return mutation;
};
