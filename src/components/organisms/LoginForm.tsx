import {
  Button,
  Flex,
  FormControl,
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaUserAlt, FaLock } from "react-icons/fa";

export const LoginForm = () => {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      justify={"center"}
      alignItems={"center"}
      bg={{ sm: "white", md: "#eaeaea" }}
    >
      <form>
        <Stack
          spacing={10}
          p={{ base: "1rem", md: "2rem" }}
          bg={"white"}
          boxShadow={{ sm: "none", md: "md" }}
          rounded={"10px"}
        >
          <Text fontSize={"1.4rem"} fontWeight={"bold"} textAlign={"center"}>
            ログイン
          </Text>

          {/*eslint-disable*/}
          <FormControl>
            <InputGroup>
              <InputLeftElement children={<FaUserAlt color="gray" />} />
              <Input
                type="email"
                placeholder="メールアドレス"
                rounded={"full"}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement children={<FaLock color="gray" />} />
              <Input
                type="password"
                placeholder="パスワード"
                rounded={"full"}
              />
            </InputGroup>
          </FormControl>
          {/*eslint-disable*/}

          <Button colorScheme={"teal"} rounded={"full"}>
            ログイン
          </Button>
        </Stack>
      </form>
    </Flex>
  );
};
