import "./styles.css";
import { UserCard } from "./components/UserCard";
import { useAllUsers } from "./hooks/useAllUsers";
import axios from "axios";
import { User } from "./types/api/user";
import React, { useState } from "react";
import { UserProfile } from "./types/userProfile";

export default function App() {
  const { getUsers, userProfiles, loading, error } = useAllUsers();
  const onClickFetchUser = () => getUsers();
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>データ取得ボタン</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>データ取得の取得に失敗しました。</p>
      ) : loading ? (
        <p>Loading。</p>
      ) : (
        <>
          {userProfiles.map((user) => (
            <UserCard key={user.id} user={user} />
          ))}
        </>
      )}
    </div>
  );
}
