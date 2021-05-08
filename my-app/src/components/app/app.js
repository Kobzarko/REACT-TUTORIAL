import React from "react";

import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";

const App = () => {
  // посты с бд для postlist
  // id это уникальные ключи для реакта
  const data = [
    { label: "Going to learn React", important: true, id: "xhgf" },
    { label: "Going to learn Vue", important: false, id: "ikjmn" },
    { label: "Going to learn Angular", important: false, id: "edfg" },
  ];

  return (
    <div className="app">
      <AppHeader />
      <div className="search-panel d-flex">
        <SearchPanel />
        <PostStatusFilter />
      </div>
      {/* передаем наш массив в postlist */}
      <PostList posts={data} />
      <PostAddForm />
    </div>
  );
};

export default App;
