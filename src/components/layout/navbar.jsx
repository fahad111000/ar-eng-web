
import { useEffect, useState } from "react";

import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

import { LuMenu, LuX } from "react-icons/lu";

const NAME = "AR Engineering Solutions";

const links = [
  { label: "Home", href: "#top" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#commitment" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#top");

  // Scroll shadow
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      if (window.scrollY < 100) {
        setActive("#top");
      }
    };

    onScroll();

    window.addEventListener("scroll", onScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  // Active section detection
  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visible.length > 0) {
          setActive(`#${visible[0].target.id}`);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.25, 0.5, 0.75],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  const close = () => setOpen(false);

  return (
    <Box
      as="header"
      position="fixed"
      top={{ base: "3", md: "4" }}
      left="0"
      right="0"
      zIndex="100"
      px={{ base: "3", md: "5" }}
    >
      <Box
        maxW="1160px"
        mx="auto"
        px={{ base: "3", md: "6" }}
        bg={scrolled ? "#FFFFFF" : "rgba(255,255,255,0.94)"}
        backdropFilter="blur(12px)"
        border="1px solid #E9ECE8"
        borderRadius="full"
        boxShadow={
          scrolled
            ? "0 6px 24px rgba(25,40,32,0.09)"
            : "0 3px 15px rgba(25,40,32,0.04)"
        }
        transition="background 0.2s ease, box-shadow 0.2s ease"
      >
        <Flex
          minH="66px"
          align="center"
          justify="space-between"
        >
          {/* Logo */}
          <Link
            href="#top"
            display="flex"
            alignItems="center"
            gap="3"
            onClick={close}
            _hover={{ textDecoration: "none" }}
          >
            <Flex
              boxSize="40px"
              align="center"
              justify="center"
              bg="#344B3E"
              color="white"
              borderRadius="xl"
              fontWeight="800"
              fontSize="sm"
            >
              AR
            </Flex>

            <Box>
              <Text
                fontSize={{ base: "sm", sm: "md" }}
                fontWeight="700"
                color="#26372F"
                lineHeight="1.2"
              >
                {NAME}
              </Text>

              <Text
                display={{ base: "none", sm: "block" }}
                fontSize="9px"
                letterSpacing="0.15em"
                color="#929A94"
                textTransform="uppercase"
                mt="1"
              >
                Engineering Excellence
              </Text>
            </Box>
          </Link>

          {/* Desktop Navigation */}
          <Flex
            as="nav"
            display={{ base: "none", md: "flex" }}
            align="center"
            gap="2"
          >
            {links.map((link) => {
              const isActive = active === link.href;

              return (
                <Link
                  key={link.href}
                  href={link.href}
                  px="4"
                  py="2.5"
                  borderRadius="full"
                  fontSize="sm"
                  fontWeight={isActive ? "700" : "500"}
                  color={isActive ? "#344B3E" : "#778078"}
                  textDecoration="none"
                  bg="transparent"
                  transition="color 0.15s ease"
                  _hover={{
                    textDecoration: "none",
                    color: "#344B3E",
                    bg: "transparent",
                  }}
                  _focusVisible={{
                    outline: "2px solid #B58A43",
                    outlineOffset: "3px",
                  }}
                >
                  {link.label}

                  {isActive && (
                    <Box
                      w="5px"
                      h="5px"
                      bg="#B58A43"
                      borderRadius="full"
                      display="inline-block"
                      ml="2"
                      verticalAlign="middle"
                    />
                  )}
                </Link>
              );
            })}
          </Flex>

          {/* Mobile Toggle */}
          <IconButton
            display={{ base: "inline-flex", md: "none" }}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            variant="ghost"
            color="#344B3E"
            borderRadius="full"
            onClick={() => setOpen((prev) => !prev)}
          >
            {open ? <LuX /> : <LuMenu />}
          </IconButton>
        </Flex>

        {/* Mobile Navigation */}
        {open && (
          <Stack
            display={{ base: "flex", md: "none" }}
            gap="1"
            pt="2"
            pb="4"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={close}
                px="4"
                py="3"
                borderRadius="lg"
                fontSize="sm"
                fontWeight="600"
                color={active === link.href ? "#344B3E" : "#778078"}
                bg={active === link.href ? "#F0F3EF" : "transparent"}
                _hover={{
                  textDecoration: "none",
                  color: "#344B3E",
                  bg: "#F0F3EF",
                }}
              >
                {link.label}
              </Link>
            ))}
          </Stack>
        )}
      </Box>
    </Box>
  );
}
