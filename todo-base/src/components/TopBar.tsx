import * as React from "react";
import { Button, Grid } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import { useAtom } from "jotai";
import { Todo, todosAtom } from "../store";

const TopBar = () => {
  const [, setTodos] = useAtom(todosAtom);
  const onLoad = () => {
    fetch(
      `https://raw.githubusercontent.com/jherr/todos-four-ways/master/data/todos.json`
    )
      .then((res) => res.json())
      .then((data: Todo[]) => setTodos(data));
  };

  return (
    <Grid pt={2} templateColumns="1fr 1fr" columnGap="3">
      <ColorModeSwitcher />
      <Button>Load</Button>
    </Grid>
  );
};

export default TopBar;
