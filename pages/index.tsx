import Layout from "@/components/Layout";
import { HStack, Text } from "@chakra-ui/react";

export default function Home() {
  return (
    <Layout>
      <HStack justifyContent={"center"} paddingY={32}>
        <Text fontSize={52} fontWeight={700}>
          Home
        </Text>
      </HStack>
    </Layout>
  );
}
