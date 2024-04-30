import './App.css';
import { useCreateUser, useUsers } from './features/users';

function App() {
  const { data: users, isPending, isError } = useUsers();
  const mutation = useCreateUser();
  console.log('render');

  if (isPending) return <>Carregando...</>;
  if (isError) return <>Houve um erro</>;
  return (
    <>
      <button
        disabled={mutation.isPending}
        onClick={() => {
          if (mutation.isError) {
            mutation.reset();
            return;
          }
          mutation.mutate({ firstName: 'Mateus', lastName: 'Queirós' });
        }}
      >
        {mutation.isError && 'Houve um erro'}
        {mutation.isPending && 'Trabalhando nisso...'}
        {!mutation.isPending && !mutation.isError && 'Add user'}
      </button>
      {users && users.map((user) => <p key={user.id}>{user.firstName}</p>)}
    </>
  );
}

export default App;
