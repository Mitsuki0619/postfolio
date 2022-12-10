import {
  Box,
  Button,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Text,
} from "@chakra-ui/react";
import { HeaderLink } from "components/molecules/HeaderLink";
import NextLink from "next/link";
import React from "react";
import { BsFillPlusCircleFill } from "react-icons/bs";
import { FaBell, FaHome } from "react-icons/fa";
import { MdAccountCircle, MdEmail } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <Box flexGrow={1}>
      <Flex
        minW={{ base: "70", xl: "350" }}
        h="full"
        direction="column"
        bgColor="white"
        pt={"8"}
        px={{ base: "2", md: "5" }}
        alignItems={"end"}
      >
        <Flex
          direction="column"
          h="full"
          alignItems={"center"}
          justify={"start"}
          gap={"4vh"}
        >
          <Box w={"full"}>
            <Heading as={"h1"}>
              <NextLink href="">Postfolio</NextLink>
            </Heading>
          </Box>

          <nav>
            <Wrap direction="column" spacing={"4vh"} fontSize={"xl"}>
              <WrapItem>
                <HeaderLink
                  text="ホーム"
                  href=""
                  icon={<FaHome size={"30"} />}
                />
              </WrapItem>
              <WrapItem>
                <HeaderLink text="通知" href="" icon={<FaBell size={"30"} />} />
              </WrapItem>
              <WrapItem>
                <HeaderLink
                  text="メッセージ"
                  href=""
                  icon={<MdEmail size={"30"} />}
                />
              </WrapItem>
              <WrapItem>
                <HeaderLink
                  text="プロフィール"
                  href=""
                  icon={<MdAccountCircle size={"30"} />}
                />
              </WrapItem>
            </Wrap>
          </nav>
          <Box>
            <Button
              display={{ base: "none", xl: "block" }}
              colorScheme={"teal"}
              rounded={"full"}
              size={"lg"}
              fontSize={"xl"}
              px={"10"}
            >
              ポストする
            </Button>
            <Box
              display={{ base: "block", xl: "none" }}
              color={"teal"}
              cursor={"pointer"}
              textAlign={"center"}
            >
              <BsFillPlusCircleFill size={"45"} />
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};
