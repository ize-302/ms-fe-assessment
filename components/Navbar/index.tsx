import React from "react";
import styles from "./Navbar.module.css";
import {
  AnalyticsIcon,
  CrmIcon,
  HomeIcon,
  Logo,
  RevenueIcon,
  AppsIcon,
  BellIcon,
  MessageIcon,
} from "../Icon";
import { HStack, Link } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { Flex } from "@chakra-ui/react";
import { Menu } from "./Menu";
import AppMenuDropdown from "./AppMenuDropdown";

export const Navbar = () => {
  const route = useRouter();
  const current_path = route.pathname;

  const items = [
    {
      name: "Home",
      route: "/",
      icon: <HomeIcon />,
    },
    {
      name: "Analytics",
      route: "/analytics",
      icon: <AnalyticsIcon />,
    },
    {
      name: "Revenue",
      route: "/revenue",
      icon: <RevenueIcon />,
    },
    {
      name: "CRM",
      route: "/crm",
      icon: <CrmIcon />,
    },
    {
      name: "Apps",
      children: [1, 2, 3, 4],
    },
  ];

  return (
    <Flex
      height={"64px"}
      borderRadius={"100px"}
      position={"sticky"}
      zIndex={1}
      top={"16px"}
      left={0}
      margin={"0 auto 16px auto"}
      justifyContent={"space-between"}
      alignItems={"center"}
      paddingLeft={"32px"}
      paddingRight={"6px"}
      backgroundColor="white"
      boxShadow={
        "0px 4px 8px 0px rgba(92, 115, 131, 0.08), 0px 2px 6px 0px rgba(92, 115, 131, 0.08)"
      }
    >
      <Logo />
      <Flex gap="20px" alignItems={"center"}>
        {items.map((item, index) => (
          <div key={index}>
            {!item.children ? (
              <Flex
                href={item.route}
                key={index}
                as={Link}
                alignItems={"center"}
                gap={"4px"}
                padding={"8px 18px"}
                fontWeight={600}
                color={"brand.gray400"}
                borderRadius="100px"
                _hover={{
                  textDecoration: "none",
                  background: "#EFF1F6",
                }}
                className={`
                ${current_path === item.route ? styles.active_nav : null}`}
              >
                {item.icon}
                {item.name}
              </Flex>
            ) : (
              <AppMenuDropdown
                current_path={current_path}
                isActive={current_path.includes("/app")}
              />
            )}
          </div>
        ))}
      </Flex>
      <HStack gap="32px">
        <BellIcon />
        <MessageIcon />
        <Menu />
      </HStack>
    </Flex>
  );
};
