import React from "react";
import {
  Box,
  Button,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Square,
  Text,
  VStack,
  Link,
  Divider,
} from "@chakra-ui/react";
import { AppsIcon, ChevronDown, ChevronRight } from "../Icon";
import { appmenuitems } from "@/utils";

interface AppMenuDropdownProps {
  isActive: boolean;
  current_path: string;
}

const AppMenuDropdown = ({ isActive, current_path }: AppMenuDropdownProps) => {
  const currentPageTitle = () => {
    return appmenuitems.find((item) => current_path === item.route);
  };

  return (
    <Popover closeOnBlur={true} placement="bottom">
      {({}) => (
        <Box>
          <PopoverTrigger>
            <Button
              alignItems={"center"}
              gap={"10px"}
              paddingX={"18px"}
              height={"40px"}
              fontWeight={600}
              bg="transparent"
              _hover={{
                opacity: 0.5,
                textDecoration: "none",
              }}
              borderRadius={"100px"}
              backgroundColor={isActive ? "black" : "transparent"}
              color={isActive ? "white" : "brand.gray400"}
            >
              <HStack>
                <AppsIcon color={isActive ? "white" : "#56616B"} />
                <Text>Apps</Text>
              </HStack>
              {isActive && (
                <>
                  <Divider
                    opacity={0.2}
                    orientation="vertical"
                    borderColor="brand.gray50"
                  />
                  <HStack>
                    <Text>{currentPageTitle()?.label}</Text>
                    <ChevronDown color="white" />
                  </HStack>
                </>
              )}
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              top="10px"
              w={"420px"}
              background="white"
              borderRadius={"20px"}
              border={0}
              boxShadow={
                "0px 4px 8px 0px rgba(92, 115, 131, 0.08), 0px 2px 6px 0px rgba(92, 115, 131, 0.08)"
              }
            >
              <PopoverBody>
                <VStack
                  gap="12px"
                  alignItems={"start"}
                  padding="4px"
                  w={"full"}
                >
                  {appmenuitems.map((item, index) => (
                    <HStack
                      href={item.route}
                      as={Link}
                      w={"full"}
                      borderRadius={"12px"}
                      _hover={{
                        boxShadow:
                          "0px 4px 8px 0px rgba(92, 115, 131, 0.08), 0px 2px 6px 0px rgba(92, 115, 131, 0.08)",
                        cursor: "pointer",
                        textDecoration: "none",
                      }}
                      justifyContent={"space-between"}
                      padding="10px"
                      key={index}
                      role="group"
                    >
                      <HStack>
                        <Square
                          size="48px"
                          border="1px solid"
                          borderColor="brand.gray50"
                          borderRadius={"10px"}
                        >
                          {<item.icon />}
                        </Square>
                        <VStack alignItems={"start"} gap="3px">
                          <Text fontWeight={"bold"}>{item.label}</Text>
                          <Text fontSize={14} color="brand.gray400">
                            {item.sublabel}
                          </Text>
                        </VStack>
                      </HStack>
                      <Box opacity={0} _groupHover={{ opacity: 1 }}>
                        <ChevronRight />
                      </Box>
                    </HStack>
                  ))}
                </VStack>
              </PopoverBody>
            </PopoverContent>
          </Portal>
        </Box>
      )}
    </Popover>
  );
};

export default AppMenuDropdown;
