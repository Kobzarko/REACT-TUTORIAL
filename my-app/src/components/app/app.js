import React, { Component } from "react";
import nextId from "react-id-generator";
import AppHeader from "../app-header";
import SearchPanel from "../search-panel";
import PostStatusFilter from "../post-status-filter";
import PostList from "../post-list";
import PostAddForm from "../post-add-form";

import "./app.css";
// import style from '../App.module.css'
import styled from "styled-components";

const AppBlock = styled.div`
  margin: 0 auto;
  max-width: 800px;
`;

// наследуем стили используя существующие
// const StyledAppBlock = styled(AppBlock)`
//   background-color: greenyellow;
// `;

export default class App extends Component {
  constructor(props) {
    super(props);
    // посты с бд для postlist
    // id это уникальные ключи для реакта
    this.state = {
      data: [
        {
          label: "Going to learn React",
          important: true,
          id: nextId(),
        },
        {
          label: "Going to learn Vue",
          important: false,
          id: nextId(),
        },
        {
          label: "Going to learn Angular",
          important: false,
          id: nextId(),
        },
      ],
    };

    this.deleteItem = this.deleteItem.bind(this);
    this.addItem = this.addItem.bind(this);
  }

  deleteItem(id) {
    this.setState(({ data }) => {
      const index = data.findIndex((elem) => elem.id === id);

      const newArr = [...data.slice(0, index), ...data.slice(index + 1)];
      return {
        data: newArr,
      };
    });
  }

  addItem(body) {
    const newItem = {
      label: body,
      important: false,
      id: nextId(),
    };

    this.setState(({ data }) => {
      const newArr = [...data, newItem];
      console.log(newArr);
      return {
        data: newArr,
      };
    });
  }

  render() {
    return (
      <AppBlock>
        <AppHeader />
        <div className="search-panel d-flex">
          <SearchPanel />
          <PostStatusFilter />
        </div>
        {/* передаем наш массив в postlist */}
        <PostList posts={this.state.data} onDelete={this.deleteItem} />
        <PostAddForm onAdd={this.addItem} />
      </AppBlock>
    );
  }
}
