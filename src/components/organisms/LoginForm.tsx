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

          <FormControl>
            <InputGroup>
              <InputLeftElement>
                <FaUserAlt color="gray" />
              </InputLeftElement>
              <Input
                type="email"
                placeholder="メールアドレス"
                rounded={"full"}
              />
            </InputGroup>
          </FormControl>
          <FormControl>
            <InputGroup>
              <InputLeftElement>
                <FaLock color="gray" />
              </InputLeftElement>
              <Input
                type="password"
                placeholder="パスワード"
                rounded={"full"}
              />
            </InputGroup>
          </FormControl>

          <Button colorScheme={"teal"} rounded={"full"}>
            ログイン
          </Button>
        </Stack>
      </form>
    
  );
};
