import React from "react";
import {
  Avatar,
  Box,
  Button,
  HStack,
  Popover,
  PopoverBody,
  PopoverContent,
  PopoverTrigger,
  Portal,
  Text,
  VStack,
} from "@chakra-ui/react";
import {
  AppsIcon,
  HamburgerIcon,
  PurchaseHistoryIcon,
  ReferAndEarnIcon,
  ReportBugIcon,
  SettingsIcon,
  SignoutIcon,
  SwitchAccountIcon,
} from "../Icon";
import { AppContext } from "@/context/appContext";

export const Menu = () => {
  const initRef = React.useRef();
  const { fetchUser, user } = React.useContext(AppContext);

  const menuitems = [
    {
      label: "Settings",
      icon: <SettingsIcon />,
    },
    {
      label: "Purchase History",
      icon: <PurchaseHistoryIcon />,
    },
    {
      label: "Refer and Earn",
      icon: <ReferAndEarnIcon />,
    },
    {
      label: "Integrations",
      icon: <AppsIcon color="#131316" />,
    },
    {
      label: "Report Bug",
      icon: <ReportBugIcon />,
    },
    {
      label: "Swich Account",
      icon: <SwitchAccountIcon />,
    },
    {
      label: "Sign Out",
      icon: <SignoutIcon />,
    },
  ];

  React.useEffect(() => {
    fetchUser();
  }, []);

  return (
    <Popover closeOnBlur={true} placement="bottom-end">
      {({}) => (
        <Box>
          <PopoverTrigger>
            <Button
              height={"40px"}
              borderRadius={"100px"}
              background="#EFF1F6"
              display={"flex"}
              gap="10px"
              justifyContent={"space-around"}
              padding={"4px 12px 5px 4px"}
              w={"81px"}
            >
              <Avatar
                bgGradient="linear(to-r, #5C6670, #131316)"
                color="white"
                letterSpacing={"1px"}
                fontWeight={600}
                name={`${user?.first_name} ${user?.last_name}`}
                size={"sm"}
              />
              <Box>
                <HamburgerIcon />
              </Box>
            </Button>
          </PopoverTrigger>
          <Portal>
            <PopoverContent
              top="10px"
              w={"350px"}
              background="white"
              borderRadius={"20px"}
              border={0}
              boxShadow={
                "0px 4px 8px 0px rgba(92, 115, 131, 0.08), 0px 2px 6px 0px rgba(92, 115, 131, 0.08)"
              }
            >
              <PopoverBody>
                <VStack gap="32px" alignItems={"start"} padding="16px">
                  <HStack>
                    <Avatar
                      bgGradient="linear(to-r, #5C6670, #131316)"
                      color="white"
                      letterSpacing={"1px"}
                      fontWeight={600}
                      name={`${user?.first_name} ${user?.last_name}`}
                      size={"md"}
                    />
                    <VStack alignItems={"start"} gap="2px">
                      <Text
                        fontSize={18}
                        color="brand.black300"
                        fontWeight={"bold"}
                      >
                        {user?.first_name} {user?.last_name}
                      </Text>
                      <Text
                        fontSize={14}
                        color="brand.gray400"
                        opacity={!user?.email ? 0.5 : 1}
                      >
                        {user?.email ?? "-"}
                      </Text>
                    </VStack>
                  </HStack>
                  {menuitems.map((item, index) => (
                    <HStack key={index}>
                      {item.icon}
                      <Text>{item.label}</Text>
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
