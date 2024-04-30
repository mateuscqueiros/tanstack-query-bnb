import { useMutation } from '@tanstack/react-query';
import { axios } from '../../../lib/axios';
import { queryClient } from '../../../lib/query-client';

export function deleteUser(userId: number) {
  return axios.delete(`/users/${userId}`).then((response) => response.data);
}

export function useDeleteUser(userId: number) {
  return useMutation({
    mutationFn: () => deleteUser(userId),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
