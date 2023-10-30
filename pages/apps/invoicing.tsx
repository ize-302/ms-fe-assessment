import Layout from "@/components/Layout";
import { HStack, Text } from "@chakra-ui/react";

export default function Invoicing() {
  return (
    <Layout>
      <HStack justifyContent={"center"} paddingY={32}>
        <Text fontSize={52} fontWeight={700}>
          Invoicing
        </Text>
      </HStack>
    </Layout>
  );
}
