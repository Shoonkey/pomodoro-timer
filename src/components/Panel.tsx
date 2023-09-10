import { Flex, FlexProps, VisuallyHidden } from "@chakra-ui/react";
import { ReactNode } from "react";

interface PanelProps {
  children: ReactNode;
  hidden?: boolean;
}

function Panel({ children, hidden = false, ...props }: PanelProps & FlexProps) {
  const content = (
    <Flex flexDir="column" position="absolute" top="0px" h="100dvh" {...props}>
      {children}
    </Flex>
  );

  return hidden ? <VisuallyHidden>{content}</VisuallyHidden> : content;
}

export default Panel;
