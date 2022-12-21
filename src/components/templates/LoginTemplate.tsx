import { Flex } from "@chakra-ui/react";
import { LoginForm } from "components/organisms/LoginForm";

export const LoginTemplate: React.FC = () => {
  return (
    <Flex
      h={"100vh"}
      w={"100vw"}
      justify={"center"}
      alignItems={"center"}
      bg={{ sm: "white", md: "gray.100" }}
    >
      <LoginForm />
    </Flex>
  );
};
