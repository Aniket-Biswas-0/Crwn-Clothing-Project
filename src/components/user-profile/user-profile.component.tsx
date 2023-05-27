import React from 'react';

type UserProfileProps = {
  name: string;
  email: string;
  phoneNumber: string;
  orderHistory: string[];
  onPasswordChange: () => void;
  onEmailChange: () => void;
};

const UserProfile: React.FC<UserProfileProps> = ({
  name,
  email,
  phoneNumber,
  orderHistory,
  onPasswordChange,
  onEmailChange,
}) => {
  return (
    <div>
      <section>
        <h2>User Information</h2>
        <p>Name: {name}</p>
        <p>Email: {email}</p>
        <p>Phone Number: {phoneNumber}</p>
      </section>

      <section>
        <h2>Account Settings</h2>
        <button onClick={onPasswordChange}>Change Password</button>
        <button onClick={onEmailChange}>Change Email</button>
      </section>

      <section>
        <h2>Order History</h2>
        {orderHistory.length > 0 ? (
          <ul>
            {orderHistory.map((order, index) => (
              <li key={index}>{order}</li>
            ))}
          </ul>
        ) : (
          <p>No order history available.</p>
        )}
      </section>
    </div>
  );
};

export default UserProfile;