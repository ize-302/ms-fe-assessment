import Layout from "@/components/Layout";
import { HStack, Text } from "@chakra-ui/react";

export default function MediaKit() {
  return (
    <Layout>
      <HStack justifyContent={"center"} paddingY={32}>
        <Text fontSize={52} fontWeight={700}>
          Mediakit
        </Text>
      </HStack>
    </Layout>
  );
}
