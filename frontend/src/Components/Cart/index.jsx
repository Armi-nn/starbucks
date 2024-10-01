import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItems, removeAll, removeItems } from "../../store/Slices/CartSlice";
import { Box, Button } from "@mui/material";

export default function Cart() {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cart.list);
  let totalCalories = 0;
  return (
    <>
      <Box>
        <table>
          <thead>
            <tr>
              <td>name</td>
              <td>calories</td>
              <td>remove/add</td>
            </tr>
          </thead>
          <tbody>
            {items.map((e, index) => {
              totalCalories = totalCalories + e?.attributes?.calories;
              return (
                <tr key={index}>
                  <td>{e?.attributes?.title}</td>
                  <td>{e?.attributes?.calories}</td>
                  <td>
                    <button onClick={dispatch(removeItems(e.id))}>-</button>
                    <button onClick={dispatch(addItems(e.id))}>+</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr>
              <td>total calories:</td>
              <td>{totalCalories}</td>
            </tr>
          </tfoot>
        </table>
      </Box>
      <Button
        variant="contained"
        color="error"
        onClick={() => dispatch(removeAll())}
      >
        Remove all
      </Button>
    </>
  );
}
