
import {
  Box,
  Flex,
  Heading,
  Stack,
  Text,
} from "@chakra-ui/react";

import { LuArrowUpRight, LuCheck } from "react-icons/lu";

export default function ServiceCard({
  index,
  title,
  Icon,
  icon,
  bullets = [],
}) {
  const ServiceIcon = Icon || icon;

  return (
    <Flex
      as="article"
      direction="column"
      bg="white"
      p={{ base: "5", md: "6" }}
      border="1px solid #E9ECE8"
      borderRadius="xl"
      minH="100%"
      gap="4"
      transition="all 0.25s ease"
      _hover={{
        transform: "translateY(-4px)",
        borderColor: "#D6DCD5",
        boxShadow: "0 12px 28px rgba(30, 45, 40, 0.07)",
      }}
    >
      {/* Icon and Number */}
      <Flex justify="space-between" align="center">
        <Flex
          align="center"
          justify="center"
          boxSize="11"
          borderRadius="lg"
          bg="#F0F3EF"
          color="#53685B"
        >
          {ServiceIcon && <ServiceIcon size={22} />}
        </Flex>

        <Text
          fontSize="xs"
          fontWeight="600"
          letterSpacing="0.08em"
          color="#A8AEAA"
        >
          {/* {String(index + 1).padStart(2, "0")} */}
        </Text>
      </Flex>

      {/* Title */}
      <Heading
        as="h3"
        fontSize="lg"
        lineHeight="1.4"
        fontWeight="700"
        color="#26372F"
      >
        {title}
      </Heading>

      {/* Features */}
      <Stack gap="2" flex="1">
        {bullets.map((bullet, i) => (
          <Flex key={i} align="flex-start" gap="2">
            <Box color="#87988A" mt="1" flexShrink="0">
              <LuCheck size={15} />
            </Box>

            <Text
              fontSize="sm"
              lineHeight="1.55"
              color="#747D78"
            >
              {bullet}
            </Text>
          </Flex>
        ))}
      </Stack>
    </Flex>
  );
}
