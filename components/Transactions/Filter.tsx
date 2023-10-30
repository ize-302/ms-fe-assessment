import {
  Badge,
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  HStack,
  Input,
  Text,
  VStack,
  useDisclosure,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
import React from "react";
import CustomButton from "./CustomButtom";
import { ChevronDown } from "../Icon";
import Drowpdown from "../Dropdown";
import DatePicker from "react-datepicker";
import styles from "./style.module.css";

import "react-datepicker/dist/react-datepicker.css";
import { ChevronDownIcon } from "@chakra-ui/icons";

function RadioCard(props: any) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        _checked={{
          bg: "brand.black300",
          color: "white",
        }}
        fontWeight={500}
        paddingX="12px"
        background={"white"}
        border="1px solid"
        borderColor="brand.gray50"
        height="36px"
        borderRadius="100px"
        whiteSpace={"nowrap"}
        display={"flex"}
        alignItems={"center"}
        marginLeft={props.index === 0 ? "24px" : 0}
        marginRight={
          props.index === props.filterbuttons.length - 1 ? "24px" : 0
        }
      >
        {props.children}
      </Box>
    </Box>
  );
}

function Filter() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [transactionTypeItems, settransactionTypeItems] = React.useState([]);
  const [transactionStatusItems, settransactionStatusItems] = React.useState(
    []
  );

  const transactionTypeOptions = [
    "Store transactions",
    "Get Tipped",
    "Withdrawals",
    "Chargebacks",
    "Cashbacks",
    "Refer & Earn",
  ];

  const transactionStatusOptions = ["Successful", "Pending", "Failed"];

  const filterbuttons = [
    "Today",
    "Last 7 days",
    "This month",
    "Last 3 months",
    "This year",
    "Last year",
    "All time",
  ];
  const [startDate, setStartDate] = React.useState<Date>(new Date());
  const [EndDate, setEndDate] = React.useState<Date>(new Date());

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "react",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <>
      <CustomButton onClick={onOpen} label={"Filter"} icon={<ChevronDown />} />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay background={"rgba(139, 139, 139, 0.319)"} />
        <DrawerContent
          minWidth="456px"
          height="98vh"
          borderRadius="20px"
          marginY="1vh"
          marginRight="10px"
          boxShadow={"md"}
        >
          <DrawerCloseButton />
          <DrawerHeader fontSize={24} fontWeight={"bold"}>
            Filter
          </DrawerHeader>

          <HStack
            {...group}
            width={"100%"}
            scrollBehavior={"auto"}
            overflow={"scroll"}
            sx={{
              "&::-webkit-scrollbar": {
                backgroundColor: `transparent`,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: `transparent`,
              },
            }}
          >
            {filterbuttons.map((value, index) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard
                  key={value}
                  index={index}
                  filterbuttons={filterbuttons}
                  {...radio}
                >
                  {value}
                </RadioCard>
              );
            })}
          </HStack>
          <DrawerBody>
            <VStack alignItems={"start"}>
              <Text fontWeight={600}>Date range</Text>
              <HStack
                justifyContent={"space-between"}
                gap="12px"
                width={"100%"}
              >
                <Box w={"50%"}>
                  <DatePicker
                    className={styles.datepicker}
                    selected={startDate}
                    onChange={(date: Date) => setStartDate(date)}
                  />
                </Box>
                <Box w={"50%"}>
                  <DatePicker
                    className={styles.datepicker}
                    selected={startDate}
                    onChange={(date: Date) => setEndDate(date)}
                  />
                </Box>
              </HStack>
            </VStack>
            <br />
            <Drowpdown
              options={transactionTypeOptions}
              label="Transaction Type"
              checkedItems={transactionTypeItems}
              setcheckedItems={settransactionTypeItems}
            />
            <br />
            <Drowpdown
              options={transactionStatusOptions}
              label="Transaction Status"
              checkedItems={transactionStatusItems}
              setcheckedItems={settransactionStatusItems}
            />
          </DrawerBody>
          <DrawerFooter>
            <Button
              width="50%"
              height="48px"
              variant="outline"
              mr={3}
              onClick={onClose}
              borderRadius={"100px"}
            >
              Clear
            </Button>
            <Button
              width="50%"
              height="48px"
              bg="brand.black300"
              color={"white"}
              borderRadius={"100px"}
            >
              Apply
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Filter;
