import { useMutation } from '@tanstack/react-query';
import { axios } from '../../../lib/axios';
import { queryClient } from '../../../lib/query-client';

export function updateUser(user: any, userId: number) {
  return axios.put(`/users/${userId}`, user).then((response) => response.data);
}

export function useUpdateUser(userId: number) {
  return useMutation({
    mutationFn: (user: any) => updateUser(user, userId),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
