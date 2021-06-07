import React, { Component } from "react";
import gotServices from "../../services/gotServices";
import ItemDetails, { Field } from "../itemDetails";

export default class booksItem extends Component {
  gotService = new gotServices();

  render() {
    return (
      <ItemDetails itemId={this.props.bookId} getData={this.gotService.getBook}>
        <Field field="numberOfPages" label="Number of Pages" />
        <Field field="publisher" label="Publisher" />
        <Field field="released" label="Released" />
      </ItemDetails>
    );
  }
}
