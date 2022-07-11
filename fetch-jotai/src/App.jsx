import { Container, Flex, Grid, Input, Text } from "@chakra-ui/react";
import { useAtom } from "jotai";
import { useEffect } from "react";
import { dataAtom, filterAtom, filteredAtom } from "./store";
import InputTitle from "./components/inputTitle";
import Navbar from "./components/navbar";

const App = () => {
  const [filterTitle, setFilterTitle] = useAtom(filterAtom);
  const [filteredTitle] = useAtom(filteredAtom);
  const [, setData] = useAtom(dataAtom);

  const getData = async () => {
    const api = await fetch(
      `https://berita-indo-api.vercel.app/v1/kumparan-news`
    );
    const response = await api.json();

    setData(response.data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <Container padding={"6"} maxWidth={"50%"}>
      <Navbar />
      <Flex
        flexDirection={"column"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <InputTitle filterTitle={filterTitle} setFilterTitle={setFilterTitle} />
        <Grid gap={6} marginTop={"10"} templateColumns={"repeat(2, 1fr)"}>
          {filteredTitle.map((user) => (
            <Flex
              background={"telegram.400"}
              padding={"4"}
              shadow={"md"}
              flexDirection={"column"}
              borderRadius={"10px"}
            >
              <Text fontSize={"md"}>{user.creator}</Text>
              <Text marginTop={"2"} fontWeight={"semibold"} fontSize={"xl"}>
                {user.title}
              </Text>
              <Text marginTop={"1"} fontSize={"md"}>
                {user.description}
              </Text>
            </Flex>
          ))}
        </Grid>
      </Flex>
    </Container>
  );
};

export default App;
