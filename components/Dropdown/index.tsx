import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  Text,
  Box,
  Checkbox,
  VStack,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

interface DrowpdownProps {
  options: string[];
  label: string;
  checkedItems: string[];
  setcheckedItems: (payload: any) => void;
}

const Drowpdown = ({
  options,
  label,
  checkedItems,
  setcheckedItems,
}: DrowpdownProps) => {
  return (
    <VStack alignItems={"start"}>
      <Text fontWeight={600}>{label}</Text>
      <Menu closeOnSelect={false}>
        <MenuButton
          as={Button}
          borderRadius={"12px"}
          background="brand.gray50"
          w={"100%"}
          height={"48px"}
          textAlign={"left"}
          rightIcon={<ChevronDownIcon />}
          fontWeight={"400"}
          _active={{
            backgroundColor: "white",
            border: "2px solid black",
          }}
        >
          <Text width={"98%"} overflowX={"hidden"} fontSize={14}>
            {checkedItems.join(", ")}
          </Text>
        </MenuButton>
        <MenuList
          minW={412}
          boxShadow={
            "0px 4px 8px 0px rgba(92, 115, 131, 0.08), 0px 2px 6px 0px rgba(92, 115, 131, 0.08)"
          }
          borderRadius={"12px"}
          gap="10px"
          display={"flex"}
          flexDir={"column"}
        >
          {options.map((option, index) => (
            <MenuItem
              key={index}
              as={Checkbox}
              iconColor="white"
              isChecked={checkedItems.includes(option)}
              defaultChecked
              _checked={{
                "& .chakra-checkbox__control": {
                  background: "black",
                  border: 0,
                },
              }}
              value={option}
              onChange={(e: any) => {
                if (e.target.checked) {
                  setcheckedItems([...checkedItems, option]);
                } else {
                  const updated = checkedItems.filter(
                    (item) => item !== option
                  );
                  setcheckedItems(updated);
                }
              }}
            >
              {option}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </VStack>
  );
};

export default Drowpdown;
