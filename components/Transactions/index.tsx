import React from "react";
import { Circle, Flex, HStack, Spinner, Text, VStack } from "@chakra-ui/react";
import dayjs from "dayjs";
import {
  ArrowDeposit,
  ArrowWithdrawal,
  ChevronDown,
  DownloadIcon,
} from "../Icon";
import CustomButton from "./CustomButtom";
import { AppContext } from "@/context/appContext";
import Filter from "./Filter";

export const Transactions = () => {
  const { isLoading, transactions, fetchTransactions } =
    React.useContext(AppContext);

  React.useEffect(() => {
    fetchTransactions();
  }, []);

  const isDeposit = (transactionType: string) => {
    return transactionType === "deposit";
  };

  if (isLoading) {
    return (
      <HStack justifyContent={"center"} pt={20}>
        <Spinner size={"lg"} color="black" />
      </HStack>
    );
  }

  return (
    <>
      <Flex
        justifyContent={"space-between"}
        borderBottom={"1px solid"}
        borderColor={"brand.gray50"}
        paddingBottom={"24px"}
        marginBottom={"33px"}
      >
        <VStack alignItems={"start"} gap={0}>
          <Text fontWeight={800} fontSize={24} color={"brand.black300"}>
            {transactions.length} Transactions
          </Text>
          <Text fontWeight={400} fontSize={14} color={"brand.gray400"}>
            Your transactions for the last 7 days
          </Text>
        </VStack>
        <HStack gap={"12px"}>
          <Filter />
          <CustomButton
            onClick={() => {}}
            label={"Explore list"}
            icon={<DownloadIcon />}
          />
        </HStack>
      </Flex>

      {/* transactions */}
      <Flex flexDirection={"column"} gap="24px">
        {transactions.map((transaction: ITransaction, index: number) => (
          <Flex
            key={transaction?.payment_reference || index}
            justifyContent={"space-between"}
          >
            <HStack gap={"14.5px"}>
              <Circle
                backgroundColor={
                  isDeposit(transaction.type)
                    ? "brand.transhedJade100"
                    : "brand.transhedRed100"
                }
                size={"48px"}
              >
                {isDeposit(transaction.type) ? (
                  <ArrowDeposit />
                ) : (
                  <ArrowWithdrawal />
                )}
              </Circle>
              <VStack alignItems={"start"} gap={"2px"}>
                <Text
                  fontWeight={600}
                  color="brand.black300"
                  opacity={!transaction?.metadata?.product_name ? "0.5" : 1}
                >
                  {transaction?.metadata?.product_name ?? "data unavailable"}
                </Text>
                <Text
                  color="brand.gray400"
                  fontWeight={400}
                  fontSize={14}
                  opacity={!transaction?.metadata?.name ? "0.5" : 1}
                >
                  {transaction?.metadata?.name ?? "data unavailable"}
                </Text>
              </VStack>
            </HStack>

            <VStack alignItems={"end"} gap={"2px"}>
              <Text fontWeight={800} color="brand.black300">
                USD {transaction?.amount}
              </Text>
              <Text color="brand.gray400" fontWeight={400} fontSize={14}>
                {dayjs(transaction?.date).format("MMM DD, YYYY")}
              </Text>
            </VStack>
          </Flex>
        ))}
      </Flex>
    </>
  );
};
