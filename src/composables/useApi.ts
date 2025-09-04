/* eslint-disable @typescript-eslint/no-explicit-any */
import { ref } from 'vue';
import { Notify } from 'quasar';

export function useApi() {
  const loading = ref(false);
  const error = ref<string | null>(null);

  const callApi = async <T>(
    apiCall: () => Promise<T>,
    successMessage?: string,
  ): Promise<T | null> => {
    loading.value = true;
    error.value = null;

    try {
      const response = await apiCall();

      if (successMessage) {
        Notify.create({
          type: 'positive',
          message: successMessage,
          position: 'top-right',
        });
      }

      return response;
    } catch (err: any) {
      Notify.create({
        type: 'negative',
        message: err.response?.data?.message || 'An error occurred',
        position: 'top-right',
      });

      return null;
    } finally {
      loading.value = false;
    }
  };

  return {
    loading,
    error,
    callApi,
  };
}
