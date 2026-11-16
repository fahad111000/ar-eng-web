
import {
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
} from "@chakra-ui/react";
import { LuCheck, LuArrowUpRight } from "react-icons/lu";

const TAGLINE =
  "Quality Engineering. Innovative Solutions. Reliable Delivery.";

const COMMITMENT =
  "We are committed to providing professional services through technical expertise, modern engineering technologies, cost-effective solutions, and client-focused project delivery.";

const values = [
  "Technical Expertise",
  "Modern Engineering Technologies",
  "Cost-Effective Solutions",
  "Client-Focused Delivery",
];

export default function Commitment() {
  return (
    <Box
      id="commitment"
      bg="#F4F7FB"
      py={{ base: "16", md: "24" }}
      px={{ base: "4", md: "6" }}
    >
      <Container maxW="1200px">
        <Box
          position="relative"
          overflow="hidden"
          bg="#081B32"
          color="white"
          borderRadius={{ base: "2xl", md: "3xl" }}
          p={{ base: "7", sm: "9", md: "14", lg: "16" }}
          border="1px solid"
          borderColor="whiteAlpha.200"
          boxShadow="0 25px 70px rgba(8, 27, 50, 0.16)"
        >
          {/* Background decorative effects */}
          <Box
            position="absolute"
            top="-140px"
            right="-100px"
            w="380px"
            h="380px"
            borderRadius="full"
            bg="rgba(56, 189, 248, 0.13)"
            filter="blur(90px)"
            pointerEvents="none"
          />

          <Box
            position="absolute"
            bottom="-150px"
            left="-100px"
            w="350px"
            h="350px"
            borderRadius="full"
            bg="rgba(242, 169, 0, 0.12)"
            filter="blur(90px)"
            pointerEvents="none"
          />

          <Stack position="relative" gap={{ base: "10", md: "14" }}>
            {/* Main Content */}
            <Flex
              direction={{ base: "column", lg: "row" }}
              align={{ base: "start", lg: "center" }}
              justify="space-between"
              gap={{ base: "7", lg: "16" }}
            >
              <Stack flex="1" gap="5" maxW="620px">
                <Flex align="center" gap="3">
                  <Box
                    w="35px"
                    h="2px"
                    bg="#F2A900"
                    borderRadius="full"
                  />
                  <Text
                    color="#F2B632"
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.2em"
                    textTransform="uppercase"
                  >
                    Our Commitment
                  </Text>
                </Flex>

                <Heading
                  as="h2"
                  fontSize={{
                    base: "3xl",
                    sm: "4xl",
                    md: "5xl",
                    lg: "5xl",
                  }}
                  lineHeight="1.12"
                  letterSpacing="-0.04em"
                  fontWeight="800"
                  fontFamily="heading"
                >
                  Building Trust Through{" "}
                  <Text as="span" color="#F2B632">
                    Engineering Excellence.
                  </Text>
                </Heading>

                <Text
                  color="#B9C8D9"
                  fontSize={{ base: "sm", md: "md" }}
                  lineHeight="1.9"
                  maxW="570px"
                >
                  {COMMITMENT}
                </Text>
              </Stack>

              {/* Tagline Panel */}
              <Box
                flex="1"
                maxW={{ base: "100%", lg: "390px" }}
                w="100%"
                p={{ base: "5", md: "7" }}
                borderRadius="2xl"
                bg="rgba(255,255,255,0.06)"
                border="1px solid"
                borderColor="rgba(255,255,255,0.13)"
                backdropFilter="blur(12px)"
              >
                <Text
                  color="#F2B632"
                  fontSize="xs"
                  fontWeight="700"
                  letterSpacing="0.16em"
                  textTransform="uppercase"
                  mb="5"
                >
                  Our Promise
                </Text>

                <Stack gap="4">
                  {[
                    "Quality Engineering",
                    "Innovative Solutions",
                    "Reliable Delivery",
                  ].map((item, index) => (
                    <Flex key={item} align="center" gap="3">
                      <Flex
                        align="center"
                        justify="center"
                        boxSize="9"
                        flexShrink="0"
                        borderRadius="lg"
                        bg="rgba(242,169,0,0.13)"
                        color="#F2B632"
                        fontWeight="700"
                        fontSize="sm"
                      >
                        0{index + 1}
                      </Flex>
                      <Text
                        fontWeight="600"
                        fontSize={{ base: "sm", md: "md" }}
                        color="white"
                      >
                        {item}
                      </Text>
                    </Flex>
                  ))}
                </Stack>
              </Box>
            </Flex>

            {/* Divider */}
            <Box h="1px" bg="whiteAlpha.200" />

            {/* Core Values */}
            <Stack gap="5">
              <Flex
                align={{ base: "start", sm: "center" }}
                justify="space-between"
                direction={{ base: "column", sm: "row" }}
                gap="2"
              >
                <Box>
                  <Text
                    color="#F2B632"
                    fontSize="xs"
                    fontWeight="700"
                    letterSpacing="0.16em"
                    textTransform="uppercase"
                    mb="2"
                  >
                    What Drives Us
                  </Text>
                  <Heading
                    fontSize={{ base: "xl", md: "2xl" }}
                    fontWeight="700"
                  >
                    The Principles Behind Our Work
                  </Heading>
                </Box>

                <Flex align="center" gap="2" color="#B9C8D9">
                  <Text fontSize="sm">Our Core Values</Text>
                  <LuArrowUpRight size={18} />
                </Flex>
              </Flex>

              <SimpleGrid
                columns={{ base: 1, sm: 2, lg: 4 }}
                gap="3"
              >
                {values.map((value, index) => (
                  <Flex
                    key={value}
                    align="center"
                    gap="3"
                    p={{ base: "4", md: "5" }}
                    minH="76px"
                    borderRadius="xl"
                    bg="rgba(255,255,255,0.055)"
                    border="1px solid"
                    borderColor="rgba(255,255,255,0.11)"
                    transition="all 0.25s ease"
                    _hover={{
                      bg: "rgba(255,255,255,0.11)",
                      borderColor: "#F2B632",
                      transform: "translateY(-4px)",
                    }}
                  >
                    <Flex
                      boxSize="8"
                      flexShrink="0"
                      align="center"
                      justify="center"
                      borderRadius="full"
                      bg="rgba(242,169,0,0.15)"
                      color="#F2B632"
                    >
                      <LuCheck size={16} />
                    </Flex>

                    <Text
                      fontSize="sm"
                      fontWeight="600"
                      color="#E6EDF5"
                      lineHeight="1.5"
                    >
                      {value}
                    </Text>
                  </Flex>
                ))}
              </SimpleGrid>
            </Stack>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
