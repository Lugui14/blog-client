import { NextPage } from "next";
import Head from "next/head";
import { Grid, GridItem } from "@chakra-ui/react";
import { Aside } from "../../components/Profile/Aside";
import { ThemeButton } from "../../components/ThemeButton";

const Posts: NextPage = () => {
  return (
    <>
      <Head>
        <title> BLoUG! | Novos Posts </title>
      </Head>

      <Grid
        p={4}
        minH={"100vh"}
        templateAreas={`"aside header header"
                      "aside main main"
                      "aside main main"`}
        gridTemplateRows={"10vh 1fr 1fr"}
        gridTemplateColumns={"30vw 1fr 1fr"}
        gap={4}
      >
        <GridItem bg={"blackAlpha.400"} rounded={12} p={6} area={"aside"}>
          {" "}
          <Aside
            name={"Luiz Guilherme Zanella Lopes"}
            email={"zanelallopes9977@gmail.com"}
          ></Aside>{" "}
        </GridItem>
        <GridItem
          bg={"blackAlpha.400"}
          rounded={12}
          p={6}
          area={"header"}
        ></GridItem>
        <GridItem
          bg={"blackAlpha.400"}
          rounded={12}
          p={6}
          area={"main"}
        ></GridItem>
      </Grid>

      <ThemeButton />
    </>
  );
};

export default Posts;
