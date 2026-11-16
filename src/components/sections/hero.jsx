
import {
  Box,
  Heading,
  Text,
  Button,
  HStack,
  VStack,
  Badge,
  Container,
  SimpleGrid,
} from "@chakra-ui/react";

import {
  ArrowUpRight,
  Building2,
  Layers3,
  Ruler,
  MapPin,
  CheckCircle2,
} from "lucide-react";

function Hero() {
  const services = [
    {
      icon: Building2,
      title: "Civil & Structural",
      desc: "Engineering and structural design",
    },
    {
      icon: Layers3,
      title: "BIM & 3D Modeling",
      desc: "Intelligent digital construction",
    },
    {
      icon: MapPin,
      title: "GIS & Remote Sensing",
      desc: "Advanced mapping and spatial analysis",
    },
    {
      icon: Ruler,
      title: "Architecture & Planning",
      desc: "Modern building design solutions",
    },
  ];

  return (
    <Box
      id="home"
      position="relative"
      overflow="hidden"
      w="100%"
      color="white"
      backgroundImage={`
        radial-gradient(ellipse at 85% 10%, rgba(56,189,248,0.30) 0%, transparent 38%),
        radial-gradient(ellipse at 5% 90%, rgba(37,99,235,0.25) 0%, transparent 42%),
        radial-gradient(ellipse at 55% 50%, rgba(30,64,175,0.13) 0%, transparent 65%),
        linear-gradient(125deg, #061426 0%, #0B2340 45%, #102E50 75%, #07182B 100%)
      `}
      backgroundSize="cover"
      backgroundPosition="center"
    >

      {/* Background Glow */}
      <Box
        position="absolute"
        top={{ base: "-100px", md: "-150px" }}
        right={{ base: "-100px", md: "-100px" }}
        w={{ base: "250px", md: "450px" }}
        h={{ base: "250px", md: "450px" }}
        rounded="full"
        bg="blue.400"
        opacity="0.08"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="-100px"
        left="-100px"
        w={{ base: "250px", md: "400px" }}
        h={{ base: "250px", md: "400px" }}
        rounded="full"
        bg="cyan.400"
        opacity="0.08"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Container
        maxW="1280px"
        px={{ base: 5, sm: 6, md: 8 }}
        py={{ base: 14, sm: 16, md: 24, lg: 28 }}
      >

        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          gap={{ base: 12, md: 14, lg: 12 }}
          alignItems="center"
        >

          {/* LEFT CONTENT */}
          <VStack
            align="start"
            gap={{ base: 5, md: 6 }}
            w="100%"
          >

            <Badge
              my={10}
              px={4}
              py={2}
              rounded="full"
              bg="rgba(56,189,248,0.12)"
              color="#7DD3FC"
              border="1px solid rgba(56,189,248,0.25)"
              fontSize="xs"
              letterSpacing="2px"
            >
              ENGINEERING EXCELLENCE
            </Badge>

            {/* Heading */}
            <Heading
              fontSize={{

                base: "38px",
                sm: "46px",
                md: "58px",
                lg: "66px",
                xl: "66px",
              }}
              lineHeight="1.12"
              fontWeight="bold"
              letterSpacing={{ base: "-1.5px", md: "-2px" }}
            >
              Building

              <Text
                as="span"
                display="block"
                color="#60C8FF"
              >
                Smarter
              </Text>

              Engineering

              <Text
                as="span"
                display="block"
              >
                Solutions.
              </Text>
            </Heading>


            <Text
              color="gray.300"
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
              lineHeight="1.9"
              maxW="550px"
            >
              Delivering innovative engineering, construction,
              BIM and GIS solutions with technical excellence,
              modern technology and reliable project execution.
            </Text>

            {/* Services Tags */}
            <HStack
              wrap="wrap"
              gap={2}
              w="100%"
            >
              {["Engineering", "BIM", "GIS", "Construction"].map(
                (item) => (
                  <Box
                    key={item}
                    px={{ base: 2.5, md: 3 }}
                    py={2}
                    rounded="md"
                    bg="whiteAlpha.100"
                    border="1px solid"
                    borderColor="whiteAlpha.200"
                    color="gray.200"
                    fontSize="xs"
                  >
                    {item}
                  </Box>
                )
              )}
            </HStack>

            {/* CTA Buttons */}
            <HStack
              gap={3}
              flexDirection={{ base: "column", sm: "row" }}
              w="100%"
              align={{ base: "stretch", sm: "center" }}
              pt={2}
            >

              <Button
                size="lg"
                w={{ base: "100%", sm: "auto" }}
                bg="#38BDF8"
                color="#061426"
                rounded="lg"
                px={7}
                _hover={{
                  bg: "#7DD3FC",
                  transform: "translateY(-3px)",
                }}
                transition="all 0.2s"
                onClick={() =>
                  document.getElementById("services")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Explore Services
                <ArrowUpRight size={18} />
              </Button>

              <Button
                size="lg"
                w={{ base: "100%", sm: "auto" }}
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                rounded="lg"
                px={7}
                _hover={{
                  bg: "whiteAlpha.100",
                }}
                onClick={() =>
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  })
                }
              >
                Contact Us
              </Button>

            </HStack>

            {/* Trust Point */}
            <HStack
              pt={3}
              gap={2}
              color="gray.300"
              align="start"
            >
              <Box flexShrink={0} mt="2px">
                <CheckCircle2 size={17} color="#38BDF8" />
              </Box>

              <Text
                fontSize={{ base: "xs", md: "sm" }}
                lineHeight="1.7"
              >
                Quality Engineering. Innovative Solutions.
                Reliable Delivery.
              </Text>
            </HStack>

          </VStack>

          {/* RIGHT VISUAL */}
          <Box
            position="relative"
            w="100%"
            minW="0"
          >

            {/* Glow */}
            <Box
              position="absolute"
              inset={{ base: "-10px", md: "-20px" }}
              rounded="3xl"
              bg="blue.400"
              opacity="0.10"
              filter="blur(55px)"
              pointerEvents="none"
            />

            {/* Main Card */}
            <Box
              position="relative"
              rounded={{ base: "2xl", md: "3xl" }}
              overflow="hidden"
              border="1px solid"
              borderColor="whiteAlpha.300"
              bg="rgba(255,255,255,0.06)"
              backdropFilter="blur(12px)"
              p={{ base: 4, sm: 5, md: 7 }}
              boxShadow="0 25px 80px rgba(0,0,0,0.3)"
            >

              <HStack
                justify="space-between"
                mb={{ base: 4, md: 6 }}
                gap={2}
              >

                <Box minW="0">
                  <Text
                    color="#7DD3FC"
                    fontSize="xs"
                    letterSpacing="2px"
                  >
                    OUR EXPERTISE
                  </Text>

                  <Heading
                    fontSize={{ base: "lg", md: "xl" }}
                    mt={2}
                  >
                    Integrated Solutions
                  </Heading>
                </Box>

                <Box
                  // flexShrink={0}
                  bg="rgba(56,189,248,0.15)"
                  p={{ base: 2.5, md: 3 }}
                  rounded="xl"
                  color="#7DD3FC"
                >
                  <Building2 size={26} />
                </Box>

              </HStack>

              {/* Expertise Cards */}
              <VStack gap={{ base: 2.5, md: 3 }} align="stretch">

                {services.map((item) => {
                  const Icon = item.icon;

                  return (
                    <HStack
                      key={item.title}
                      p={{ base: 3, sm: 3.5, md: 4 }}
                      rounded="xl"
                      bg="whiteAlpha.100"
                      border="1px solid"
                      borderColor="whiteAlpha.100"
                      transition="all 0.2s"
                      _hover={{
                        bg: "whiteAlpha.200",
                        transform: { md: "translateX(5px)" },
                        borderColor: "#38BDF8",
                      }}
                      gap={{ base: 3, md: 4 }}
                      minW="0"
                    >

                      <Box
                        flexShrink={0}
                        p={{ base: 2.5, md: 3 }}
                        rounded="lg"
                        bg="rgba(56,189,248,0.15)"
                        color="#7DD3FC"
                      >
                        <Icon size={22} />
                      </Box>

                      <Box flex="1" minW="0">
                        <Text
                          fontWeight="semibold"
                          fontSize={{ base: "xs", sm: "sm" }}
                          color="white"
                        >
                          {item.title}
                        </Text>

                        <Text
                          fontSize={{ base: "2xs", sm: "xs" }}
                          color="gray.400"
                          mt={1}
                        >
                          {item.desc}
                        </Text>
                      </Box>


                    </HStack>
                  );
                })}

              </VStack>

              {/* Bottom Label */}
              <HStack
                mt={{ base: 4, md: 6 }}
                pt={{ base: 4, md: 5 }}
                borderTop="1px solid"
                borderColor="whiteAlpha.200"
                justify="space-between"
                gap={2}
              >

                <Text
                  color="gray.400"
                  fontSize={{ base: "2xs", md: "xs" }}
                >
                  ENGINEERING THE FUTURE
                </Text>

                <Text
                  color="#7DD3FC"
                  fontWeight="bold"
                  fontSize={{ base: "2xs", md: "xs" }}
                >
                  AR SOLUTIONS
                </Text>

              </HStack>

            </Box>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default Hero;
