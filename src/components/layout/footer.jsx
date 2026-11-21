
import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import {
  LuArrowUpRight,
  LuArrowUp,
  LuMail,
  LuMapPin,
  LuPhone,
  LuMoveUpRight,
} from "react-icons/lu";

const NAME = "AR Engineering Solutions";

const TAGLINE =
  "Quality Engineering. Innovative Solutions. Reliable Delivery.";

const CONTACT = {
  phone: "+923130686999",
  email: "engineeringsolutionar@gmail.com",
  address: "Peshawar, Pakistan",
};

const quickLinks = [
  { label: "Home", href: "#top" },
  { label: "About Us", href: "#commitment" },
  { label: "Our Services", href: "#services" },
  { label: "Contact Us", href: "#contact" },
];

const services = [
  "Civil & Structural Engineering",
  "BIM Services",
  "Architecture & Design",
  "GIS & Remote Sensing",
  "Quantity Surveying",
  "Construction Management",
  "Procurement & Tenders",
  "Engineering Software",
];

function ColumnTitle({ children }) {
  return (
    <Heading
      as="h3"
      fontSize="sm"
      fontWeight="700"
      color="white"
      letterSpacing="0.04em"
      mb="6"
    >
      {children}
    </Heading>
  );
}

function FooterLink({ href, children }) {
  return (
    <Link
      href={href}
      display="inline-flex"
      alignItems="center"
      gap="2"
      fontSize="sm"
      color="#A9B8CA"
      transition="all 0.25s ease"
      _hover={{
        color: "#F2B632",
        textDecoration: "none",
        transform: "translateX(4px)",
      }}
    >
      {children}
    </Link>
  );
}

function ContactItem({ icon: Icon, label, href, children }) {
  return (
    <Flex align="flex-start" gap="3">
      <Flex
        boxSize="10"
        flexShrink="0"
        align="center"
        justify="center"
        borderRadius="lg"
        bg="rgba(242,169,0,0.10)"
        color="#F2B632"
      >
        <Icon size={17} />
      </Flex>

      <Stack gap="1" minW="0">
        <Text
          fontSize="xs"
          color="#71849B"
          fontWeight="600"
          textTransform="uppercase"
          letterSpacing="0.08em"
        >
          {label}
        </Text>

        <Link
          href={href}
          fontSize="sm"
          color="#D3DDE8"
          lineHeight="1.6"
          wordBreak="break-word"
          _hover={{
            color: "#F2B632",
            textDecoration: "none",
          }}
        >
          {children}
        </Link>
      </Stack>
    </Flex>
  );
}

export default function Footer() {
  return (
    <Box
      as="footer"
      position="relative"
      overflow="hidden"
      bg="#07182B"
      color="#A9B8CA"
    >
      {/* Decorative background */}
      <Box
        position="absolute"
        top="-180px"
        right="-100px"
        w="420px"
        h="420px"
        borderRadius="full"
        bg="rgba(37,99,235,0.10)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Box
        position="absolute"
        bottom="-180px"
        left="-100px"
        w="380px"
        h="380px"
        borderRadius="full"
        bg="rgba(242,169,0,0.07)"
        filter="blur(100px)"
        pointerEvents="none"
      />

      <Container
        maxW="1200px"
        position="relative"
        pt={{ base: "14", md: "20" }}
        pb="6"
        px={{ base: "5", md: "6" }}
      >
        {/* Top CTA */}
        <Flex
          direction={{ base: "column", md: "row" }}
          align={{ base: "flex-start", md: "center" }}
          justify="space-between"
          gap="6"
          p={{ base: "6", md: "9" }}
          mb={{ base: "14", md: "16" }}
          borderRadius="2xl"
          bg="rgba(255,255,255,0.045)"
          border="1px solid"
          borderColor="rgba(255,255,255,0.10)"
        >
          <Box maxW="620px">
            <Text
              color="#F2B632"
              fontSize="xs"
              fontWeight="700"
              letterSpacing="0.16em"
              textTransform="uppercase"
              mb="3"
            >
              Let's Build Something Great
            </Text>

            <Heading
              color="white"
              fontSize={{ base: "xl", md: "2xl" }}
              lineHeight="1.3"
              mb="2"
            >
              Have an Engineering Project in Mind?
            </Heading>

            <Text fontSize="sm" color="#A9B8CA" lineHeight="1.7">
              Let's discuss your project and explore how our engineering
              expertise can help bring your vision to life.
            </Text>
          </Box>

          <Link
            href="#contact"
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            gap="3"
            px="6"
            py="3.5"
            borderRadius="lg"
            bg="#F2B632"
            color="#081B32"
            fontSize="sm"
            fontWeight="700"
            whiteSpace="nowrap"
            transition="all 0.25s ease"
            _hover={{
              bg: "#FFD166",
              textDecoration: "none",
              transform: "translateY(-3px)",
              boxShadow: "0 8px 25px rgba(242,169,0,0.2)",
            }}
          >
            Get In Touch
            <LuArrowUpRight size={18} />
          </Link>
        </Flex>

        {/* Main Footer Grid */}
        <Grid
          templateColumns={{
            base: "1fr",
            sm: "repeat(2, 1fr)",
            lg: "1.4fr 0.8fr 1.3fr 1.2fr",
          }}
          gap={{ base: "10", md: "12" }}
        >
          {/* Brand */}
          <Stack gap="5">
            <Flex align="center" gap="3">
              <Flex
                boxSize="12"
                flexShrink="0"
                align="center"
                justify="center"
                borderRadius="xl"
                bg="#F2B632"
                color="#081B32"
                fontSize="lg"
                fontWeight="800"
                fontFamily="heading"
                boxShadow="0 5px 20px rgba(242,169,0,0.15)"
              >
                AR
              </Flex>

              <Box>
                <Text
                  color="white"
                  fontWeight="700"
                  fontSize="md"
                  lineHeight="1.3"
                >
                  AR Engineering
                </Text>
                <Text
                  color="#F2B632"
                  fontSize="xs"
                  fontWeight="600"
                  letterSpacing="0.08em"
                >
                  SOLUTIONS
                </Text>
              </Box>
            </Flex>

            <Text fontSize="sm" lineHeight="1.9" color="#A9B8CA">
              {TAGLINE} We deliver professional engineering solutions
              with a focus on quality, innovation, and client satisfaction.
            </Text>

            <Text
              fontSize="xs"
              color="#71849B"
              lineHeight="1.8"
            >
              Engineering | Construction | BIM | GIS | Procurement
            </Text>
          </Stack>

          {/* Quick Links */}
          <Box>
            <ColumnTitle>Quick Links</ColumnTitle>

            <Stack gap="4">
              {quickLinks.map((item) => (
                <FooterLink key={item.label} href={item.href}>
                  {item.label}
                </FooterLink>
              ))}
            </Stack>
          </Box>

          {/* Services */}
          <Box>
            <ColumnTitle>Our Expertise</ColumnTitle>

            <Grid
              templateColumns={{ base: "1fr", md: "1fr 1fr" }}
              columnGap="4"
              rowGap="4"
            >
              {services.map((service) => (
                <FooterLink key={service} href="#services">
                  {service}
                </FooterLink>
              ))}
            </Grid>
          </Box>

          {/* Contact */}
          <Box>
            <ColumnTitle>Get In Touch</ColumnTitle>

            <Stack gap="5">
              <ContactItem
                icon={LuPhone}
                label="Phone"
                href={`tel:${CONTACT.phone}`}
              >
                {CONTACT.phone}
              </ContactItem>

              <ContactItem
                icon={LuMail}
                label="Email Address"
                href={`mailto:${CONTACT.email}`}
              >
                {CONTACT.email}
              </ContactItem>

              <ContactItem
                icon={LuMapPin}
                label="Office Location"
                href="#contact"
              >
                {CONTACT.address}
              </ContactItem>
            </Stack>
          </Box>
        </Grid>

        {/* Bottom Bar */}
        <Flex
          mt={{ base: "12", md: "16" }}
          pt="6"
          borderTop="1px solid"
          borderColor="rgba(255,255,255,0.12)"
          direction={{ base: "column", md: "row" }}
          align="center"
          justify="space-between"
          gap="5"
        >
          <Text fontSize="xs" color="#71849B" textAlign="center">
            © {new Date().getFullYear()} {NAME}. All rights reserved.
          </Text>

          <Text
            fontSize="xs"
            color="#71849B"
            textAlign="center"
          >
            Designed with precision. Built with purpose.
          </Text>

          <Link
            href="#top"
            aria-label="Back to top"
            display="flex"
            alignItems="center"
            justifyContent="center"
            boxSize="11"
            flexShrink="0"
            borderRadius="lg"
            border="1px solid"
            borderColor="rgba(255,255,255,0.2)"
            color="white"
            transition="all 0.25s ease"
            _hover={{
              bg: "#F2B632",
              color: "#081B32",
              borderColor: "#F2B632",
              transform: "translateY(-3px)",
            }}
          >
            <LuArrowUp size={19} />
          </Link>
        </Flex>
      </Container>
    </Box>
  );
}
