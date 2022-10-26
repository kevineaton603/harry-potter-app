import {
  Grid,
  MenuItem,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useMemo, useState } from "react";
import HouseCount from "../components/HouseCount";
import { useGetCharactersQuery } from "../services/character";

const HomeScreen: React.FC = () => {
  const [name, setName] = useState("");
  const [status, setStatus] = useState("");
  const { data } = useGetCharactersQuery();

  const filteredCharacters = useMemo(() => {
    return data
      ?.filter((character) =>
        character.name.toLocaleLowerCase().includes(name.toLocaleLowerCase())
      )
      ?.filter(
        (character) =>
          status === "" ||
          (status === "alive" && character.alive) ||
          (status === "dead" && !character.alive)
      );
  }, [data, name, status]);

  return (
    <Stack spacing={2}>
      <Typography variant="h1">Harry Potter App</Typography>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          width: "100%",
        }}
      >
        <HouseCount house="Gryffindor" />
        <HouseCount house="Hufflepuff" />
        <HouseCount house="Ravenclaw" />
        <HouseCount house="Slytherin" />
      </div>
      <TextField
        type="text"
        value={name}
        onChange={(e) => setName(e.currentTarget.value)}
        fullWidth
        label={"Name"}
      />
      <TextField
        label={"Dead or Alive"}
        fullWidth
        select
        onChange={(e) => setStatus(e.target.value)}
      >
        <MenuItem value={""}></MenuItem>
        <MenuItem value={"dead"}>Dead</MenuItem>
        <MenuItem value={"alive"}>Alive</MenuItem>
      </TextField>
      {filteredCharacters?.map((character, index) => (
        <Paper key={`${character.name}-${index}`}>
          <Grid container direction={"row"}>
            <Grid item xs={4}>
              <img
                src={character.image}
                alt={character.name}
                style={{ height: "100px" }}
              />
            </Grid>
            <Grid item xs={8}>
              <Stack direction={"column"} sx={{ p: 1 }}>
                <Typography variant="h3">{character.name}</Typography>
                <Typography variant="caption">{character.house}</Typography>
              </Stack>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Stack>
  );
};

export default HomeScreen;
