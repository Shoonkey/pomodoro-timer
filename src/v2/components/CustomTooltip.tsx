import { Tooltip, TooltipProps } from "@chakra-ui/react";

function CustomTooltip(props: TooltipProps) {
  return (
    <Tooltip hasArrow px={4} py={2} bg="primary.500" borderRadius="8px" color="#e2e2e2" fontWeight="bold" {...props} />
  )
}

export default CustomTooltip;