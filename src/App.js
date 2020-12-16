import React from "react";
import store from "./store";
import { Posts } from "./Posts";

export default function App() {
  return (
    <div>
      <store.Provider initialValue={{ posts: [] }}>
        <Posts />
        <Posts />
        <Posts />
      </store.Provider>
    </div>
  );
}
