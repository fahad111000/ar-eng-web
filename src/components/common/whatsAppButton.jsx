import { Link, Text } from "@chakra-ui/react";
import { FaWhatsapp } from "react-icons/fa";

// Country code ke saath, bina + ya spaces ke.
// Pakistan: 0300 1234567 -> 923001234567
const NUMBER = "//";
const MESSAGE = "Hello, I would like to inquire about your services.";

export default function WhatsAppButton() {
  return (
    <Link
      href={`https://wa.me/${NUMBER}?text=${encodeURIComponent(MESSAGE)}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      position="fixed"
      right={{ base: "4", md: "6" }}
      bottom={{ base: "4", md: "6" }}
      zIndex="20"
      display="flex"
      alignItems="center"
      justifyContent="center"
      gap="3"
      h="14"
      minW="14"
      px={{ base: "0", md: "5" }}
      borderRadius="full"
      bg="#16803C"
      color="white"
      fontWeight="600"
      boxShadow="0 10px 30px rgba(22,128,60,0.4)"
      transition="all 0.2s ease"
      _hover={{
        textDecoration: "none",
        transform: "translateY(-3px)",
        boxShadow: "0 14px 36px rgba(22,128,60,0.55)",
      }}
    >
      <FaWhatsapp size={28} aria-hidden="true" />
      <Text display={{ base: "none", md: "inline" }}>Chat with us</Text>
    </Link>
  );
}