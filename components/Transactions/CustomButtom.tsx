import { Button } from "@chakra-ui/react";

type CustomButtonProps = {
  label: string;
  icon: JSX.Element;
  onClick: () => void;
};

const CustomButton = ({ label, icon, onClick }: CustomButtonProps) => {
  return (
    <Button
      height={"48px"}
      fontWeight={400}
      padding={"12px 20px 12px 30px"}
      borderRadius={"100px"}
      color={"brand.black300"}
      gap="8px"
      background={"brand.gray50"}
      onClick={onClick}
    >
      {label}
      {icon}
    </Button>
  );
};

export default CustomButton;
