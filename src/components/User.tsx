import React from 'react';

interface IUser {
  name: string;
  email: string;
}

interface Props {
  user: IUser;
}

const User: React.FC<Props> = ({ user }) => {  // FC = FunctionComponent
  return (
    <div>
      <strong>Nome:</strong> {user.name} <br /> 
      <strong>E-mail: </strong> {user.email} <br /> <br />
    </div>
  );
}   

export default User;