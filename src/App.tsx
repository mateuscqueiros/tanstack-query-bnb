import './App.css';
import { useUsers } from './features/users';

function App() {
  const { data: users, isPending, isError } = useUsers();

  if (isPending) return <>Carregando...</>;
  if (isError) return <>Houve um erro</>;
  return (
    <>{users && users.map((user) => <p key={user.id}>{user.firstName}</p>)}</>
  );
}

export default App;
