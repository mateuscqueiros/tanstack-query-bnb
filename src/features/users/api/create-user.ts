import { useMutation } from '@tanstack/react-query';
import { axios } from '../../../lib/axios';
import { queryClient } from '../../../lib/query-client';

export function createUser(newUser: any) {
  return axios.post('/users/add', newUser).then((response) => response.data);
}

export function useCreateUser() {
  return useMutation({
    mutationFn: (newUser: any) => createUser(newUser),
    onSuccess: () => {
      return queryClient.invalidateQueries({ queryKey: ['users'] });
    },
  });
}
