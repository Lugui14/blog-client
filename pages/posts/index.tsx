import { NextPage } from "next";
import Head from "next/head";
import { useState } from "react";

import { BsArrowBarLeft, BsArrowBarRight } from "react-icons/bs";
import {
  Button,
  Center,
  Flex,
  Grid,
  GridItem,
  useMediaQuery,
  useColorModeValue,
} from "@chakra-ui/react";
import { Aside } from "../../components/Profile/Aside";
import { ThemeButton } from "../../components/ThemeButton";
import { Header } from "../../components/Header";
import { PostList } from "../../components/Posts/PostList";

const Posts: NextPage = () => {
  const [isDesktop] = useMediaQuery("(min-width: 1080px)");
  const [isAsideOpened, setIsAsideOpened] = useState(!isDesktop);

  return (
    <>
      <Head>
        <title> BLoUG! | Novos Posts </title>
      </Head>

      {isDesktop ? (
        <Grid
          p={4}
          minH={"100vh"}
          templateAreas={{
            lg: `"aside header header"
                "aside main main"
                "aside main main"`,
          }}
          gridTemplateRows={"10vh 1fr 1fr"}
          gridTemplateColumns={{ lg: "30vw 1fr 1fr" }}
          gap={4}
        >
          <GridItem
            p={12}
            maxH={"105vh"}
            bg={useColorModeValue("blackAlpha.50", "blackAlpha.400")}
            rounded={12}
            area={"aside"}
          >
            <Aside
              name={"Luiz Guilherme Zanella Lopes"}
              email={"zanelallopes9977@gmail.com"}
            />
          </GridItem>
          <GridItem
            bg={useColorModeValue("blackAlpha.50", "blackAlpha.400")}
            rounded={12}
            p={4}
            area={"header"}
          >
            <Header />
          </GridItem>
          <GridItem
            bg={useColorModeValue("blackAlpha.50", "blackAlpha.400")}
            rounded={12}
            p={6}
            area={"main"}
          >
            <PostList />
          </GridItem>
        </Grid>
      ) : (
        <>
          <Button
            onClick={() => setIsAsideOpened(!isAsideOpened)}
            position={"fixed"}
            top={4}
            left={!isAsideOpened ? "75vw" : 4}
          >
            {!isAsideOpened ? <BsArrowBarLeft /> : <BsArrowBarRight />}
          </Button>

          {!isAsideOpened && (
            <Center
              zIndex={1000}
              position={"fixed"}
              w={"70vw"}
              h={"100vh"}
              bg={useColorModeValue("gray.200", "gray.800")}
              borderRight={"2px solid #00ADB5"}
            >
              <Aside
                name={"Luiz Guilherme Zanella Lopes"}
                email={"zanelallopes9977@gmail.com"}
              />
            </Center>
          )}

          <Flex
            flexDir={"column"}
            justifyContent={"center"}
            alignItems={"center"}
            pt={16}
          >
            <Header />

            <PostList />
          </Flex>
        </>
      )}

      <ThemeButton />
    </>
  );
};

export default Posts;
