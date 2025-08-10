import UserForm from './UserForm';
import UserList from './UserList';
function App() {
  return (
    <div style={{ padding: '20px' }}>
      <h1>User Management</h1>
      <UserForm />
      <UserList />
    </div>
  );
}
export default App;
