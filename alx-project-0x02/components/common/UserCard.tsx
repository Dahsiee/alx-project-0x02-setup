// components/common/UserCard.tsx
import React from "react";
import { type UserProps } from "@/interfaces";

const UserCard: React.FC<UserProps> = ({ name, email, address }) => {
  return (
    <div className="border rounded-md shadow p-4 bg-white">
      <h2 className="text-xl font-bold mb-2">{name}</h2>
      <p className="text-gray-700 mb-1">Email: {email}</p>
      <p className="text-gray-600 text-sm">Address: {address}</p>
    </div>
  );
};

export default UserCard;
