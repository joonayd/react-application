import { Button, Grid, TextField } from "@material-ui/core";
import React from "react";
import axios from "axios";

const NewProduct = (props) => {
  const [name, SetName] = React.useState("");
  const [price, SetPrice] = React.useState(0);
  return (
    <Grid container spacing={3}>
      <Grid item xs={12}>
        <h1>Add New Product</h1>
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={6}>
        <TextField
          label="name"
          fullWidth
          value={name}
          onChange={(e) => {
            SetName(e.target.value);
          }}
        />
        <TextField
          label="price"
          fullWidth
          value={price}
          onChange={(e) => {
            SetPrice(e.target.value);
          }}
        />
      </Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={3}></Grid>
      <Grid item xs={9}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            console.log("Send API call to add");
            axios
              .post("http://localhost:4000/api/products/", { name, price })
              .then((res) => {
                console.log(res.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Add New Product
        </Button>
      </Grid>
    </Grid>
  );
};

export default NewProduct;
