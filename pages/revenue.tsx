import React from "react";
import { InfoIcon } from "@/components/Icon";
import Layout from "@/components/Layout";
import { Transactions } from "@/components/Transactions";
import { Box, Button, Flex, HStack, Text, VStack } from "@chakra-ui/react";
import { LineChart, Line, XAxis, ResponsiveContainer } from "recharts";
import { USDollar } from "@/utils";
import { AppContext } from "@/context/appContext";
import dayjs from "dayjs";

interface ItemProps {
  value: number | undefined;
  label: string;
}

const Item = ({ value, label }: ItemProps) => {
  return (
    <HStack w={"100%"} justifyContent={"space-between"} alignItems={"start"}>
      <VStack gap="12px" alignItems={"start"}>
        <Text fontSize={14} color={"brand.gray400"}>
          {label}
        </Text>
        <Text fontSize={28} color={"brand.black300"} fontWeight={900}>
          USD {USDollar.format(value ?? 0)}
        </Text>
      </VStack>
      <InfoIcon />
    </HStack>
  );
};

export default function Revenue() {
  const { isLoading, transactions, wallet, fetchWallet } =
    React.useContext(AppContext);

  const chartdata = transactions.map((transaction, index) => {
    return {
      ...transaction,
      date:
        index === 0 || index === transactions.length - 1
          ? dayjs(transaction.date).format("MMM DD, YYYY")
          : null,
    };
  });

  React.useEffect(() => {
    fetchWallet();
  }, []);

  return (
    <Layout>
      <Flex marginBottom={"82px"} justifyContent={"space-between"}>
        <VStack justifyContent={"space-between"} alignItems={"start"}>
          <HStack minW="462px" gap="64px">
            <VStack alignItems={"start"}>
              <Text color="brand.gray400" fontSize={14}>
                Available Balance
              </Text>
              <Text fontSize={36} fontWeight={800} color={"brand.black300"}>
                USD {wallet?.balance}
              </Text>
            </VStack>
            <Button
              height="52px"
              width="167px"
              bg="brand.black300"
              borderRadius={"100px"}
              color="white"
            >
              Withdraw
            </Button>
          </HStack>

          <ResponsiveContainer width={765} height={285}>
            <LineChart height={100} data={chartdata}>
              <Line
                dot={false}
                type="monotone"
                dataKey="amount"
                stroke="#FF5403"
                strokeWidth={2}
              />
              <XAxis dataKey="date" interval={0} />
            </LineChart>
          </ResponsiveContainer>
        </VStack>

        <VStack gap="32px" alignItems={"start"} w="271px">
          {/* ledger balance */}
          <Item value={wallet?.ledger_balance} label={"Ledger Balance"} />
          {/* total payout */}
          <Item value={wallet?.total_payout} label={"Total Payout"} />
          {/* total revenue */}
          <Item value={wallet?.total_revenue} label={"Total Revenue"} />
          {/* pending payout */}
          <Item value={wallet?.pending_payout} label={"Pending Payout"} />
        </VStack>
      </Flex>
      <Transactions />
    </Layout>
  );
}
