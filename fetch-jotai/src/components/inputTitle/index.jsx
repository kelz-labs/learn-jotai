import { Input } from "@chakra-ui/react";

const InputTitle = ({ filterTitle, setFilterTitle }) => {
  return (
    <Input
      marginTop={"4"}
      placeholder="Cari...."
      value={filterTitle}
      onChange={(event) => setFilterTitle(event.target.value)}
    />
  );
};

export default InputTitle;
