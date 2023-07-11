import Navbar from '../navbar/Navbar';

//import UserOrders from '../user/components/UserOrders';
import UserProfile from '../user/components/UserProfile';


function UserProfilePage() {
  return (
    <div>
      <Navbar>
        <h1 className='mx-auto text-2xl'>My Profile</h1>
        <UserProfile></UserProfile>
      </Navbar>
    </div>
  );
}

export default UserProfilePage;