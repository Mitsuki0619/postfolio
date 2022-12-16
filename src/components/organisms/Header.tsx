import {
  Box,
  Button,
  Flex,
  Heading,
  Wrap,
  WrapItem,
  Link,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Avatar,
  HStack,
  VStack,
  Text,
  Spacer,
} from "@chakra-ui/react";
import { HeaderLink } from "components/molecules/HeaderLink";
import NextLink from "next/link";
import React from "react";
import { BsFillPlusCircleFill, BsThreeDots } from "react-icons/bs";
import { FaBell, FaHome } from "react-icons/fa";
import { MdAccountCircle, MdEmail } from "react-icons/md";

export const Header: React.FC = () => {
  return (
    <Flex
      as="header"
      h="full"
      direction="column"
      bgColor="white"
      pt={"8"}
      pb={"3"}
      px={{ base: "2", md: "5" }}
      alignItems={"end"}
      borderRight={'1px solid #e6ecf0'}
    >
      <Flex
        direction="column"
        h="full"
        alignItems={"center"}
        justify={"start"}
        gap={"4vh"}
      >
        <Box w={"full"}>
          <Heading as={"h1"} textAlign={{ base: "center", xl: "start" }}>
            <Link as={NextLink} href="">
              PF
            </Link>
          </Heading>
        </Box>

        <nav>
          <Wrap direction="column" spacing={"4vh"} fontSize={"xl"}>
            <WrapItem>
              <HeaderLink text="ホーム" href="" icon={<FaHome size={"30"} />} />
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
      <Menu>
        <MenuButton
          _hover={{ bgColor: "gray.100" }}
          rounded={"full"}
          transition={"all"}
          transitionDuration={"0.5s"}
          py={{ base: "", xl: "2.5" }}
          px={{ base: "", xl: "4" }}
          w={{ base: "", xl: "full" }}
        >
          <Flex w={{ base: "", xl: "full" }} alignItems={"center"}>
            <Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
            <Box
              gap={0}
              display={{ base: "none", xl: "block" }}
              marginLeft={"2"}
            >
              <Text fontWeight={"bold"}>ユーザー</Text>
              <Text color={"gray.500"} fontSize={"sm"}>
                @user_1
              </Text>
            </Box>
            <Spacer />
            <Box display={{ base: "none", xl: "block" }}>
              <BsThreeDots />
            </Box>
          </Flex>
        </MenuButton>
        <MenuList>
          <MenuItem>
            <Link as={NextLink} href="">
              設定
            </Link>
          </MenuItem>
          <MenuItem>
            <Link as={NextLink} href="" color={"red.500"}>
              ログアウト
            </Link>
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};
