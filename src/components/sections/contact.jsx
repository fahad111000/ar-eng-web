
import {
  Box,
  Button,
  Container,
  Field,
  Flex,
  Heading,
  Input,
  NativeSelect,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";

import {
  LuArrowUpRight,
  LuMail,
  LuMapPin,
  LuMessageCircle,
  LuPhone,
} from "react-icons/lu";

// Client ki actual details yahan add karna
const CONTACT = {
  phone: "03130686999",
  whatsapp: "+923130686999",
  email: "engineeringsolutionar@gmail.com",
  // address: "[OFFICE ADDRESS]",
};

// Formspree ID yahan paste karna
const FORMSPREE_ID = "YOUR_FORM_ID";

const serviceOptions = [
  "Civil & Structural Engineering",
  "BIM Services",
  "Architecture & Building Design",
  "GIS & Remote Sensing",
  "Quantity Surveying & Cost Estimation",
  "Construction & Project Management",
  "Procurement & Tender Consultancy",
  "Engineering Software & Technical Consultancy",
  "Other",
];

const inputProps = {
  bg: "#F8F9F7",
  borderColor: "#E3E7E2",
  borderRadius: "lg",
  size: "lg",
  _placeholder: {
    color: "#A0A7A1",
  },
  _focusVisible: {
    borderColor: "#718778",
    boxShadow: "0 0 0 1px #718778",
  },
};

function ContactItem({ icon: Icon, label, value }) {
  return (
    <Flex align="center" gap="4">
      <Flex
        boxSize="11"
        flexShrink="0"
        align="center"
        justify="center"
        borderRadius="lg"
        bg="#EDF1EC"
        color="#53685B"
      >
        <Icon size={19} />
      </Flex>

      <Box minW="0">
        <Text fontSize="xs" color="#8A928C" mb="1">
          {label}
        </Text>

        <Text
          fontSize="sm"
          fontWeight="600"
          color="#293A31"
          overflowWrap="anywhere"
        >
          {value}
        </Text>
      </Box>
    </Flex>
  );
}

export default function Contact() {
  return (
    <Box
      id="contact"
      bg="#F7F8F6"
      py={{ base: "14", md: "20" }}
    >
      <Container maxW="1160px">

        {/* Section Header */}
        <Box maxW="600px" mb={{ base: "8", md: "10" }}>



          <Heading
            as="h2"
            fontSize={{ base: "3xl", md: "3xl" }}
            fontWeight="700"
            letterSpacing="-0.025em"
            color="#A77D37"
            mb="3"
            >
            LET'S CONNECT
            
          </Heading>

          <Text
            fontSize="2xl"
            fontWeight="700"
            letterSpacing="0.14em"
            color="#1D2D3D"
            mb="2"
          >
            Let's Discuss Your Project
          </Text>


          <Text
            fontSize={{ base: "sm", md: "md" }}
            lineHeight="1.7"
            color="#747D82"
          >
            Have a project in mind? Get in touch with our team
            to discuss your engineering requirements.
          </Text>
        </Box>

        {/* Contact Content */}
        <SimpleGrid
          columns={{ base: 1, lg: 5 }}
          gap={{ base: 8, lg: 10 }}
          alignItems="stretch"
        >

          {/* Left: Contact Information */}
          <Stack
            gridColumn={{ base: "auto", lg: "span 2" }}
            gap="7"
            justify="center"
          >
            <Box>
              <Heading
                fontSize="xl"
                fontWeight="700"
                color="#293A31"
                mb="2"
              >
                Get in Touch
              </Heading>

              <Text
                fontSize="sm"
                lineHeight="1.8"
                color="#7B847E"
              >
                We are ready to help with your next engineering
                project. Reach out to us through any of the
                following channels.
              </Text>
            </Box>

            <Stack gap="5">
              <ContactItem
                icon={LuPhone}
                label="Phone"
                value={CONTACT.phone}
              />

              <ContactItem
                icon={LuMessageCircle}
                label="WhatsApp"
                value={CONTACT.whatsapp}
              />

              <ContactItem
                icon={LuMail}
                label="Email"
                value={CONTACT.email}
              />

              <ContactItem
                icon={LuMapPin}
                label="Office Address"
                value={CONTACT.address}
              />
            </Stack>

            <Box
              borderLeft="3px solid #B58A43"
              pl="4"
              py="1"
            >
              <Text
                fontSize="sm"
                fontWeight="600"
                color="#53685B"
              >
                Quality Engineering. Innovative Solutions.
              </Text>
              <Text fontSize="xs" color="#8A928C" mt="1">
                Reliable Delivery.
              </Text>
            </Box>
          </Stack>

          {/* Right: Contact Form */}
          <Box
            gridColumn={{ base: "auto", lg: "span 3" }}
            bg="white"
            p={{ base: "5", md: "8" }}
            border="1px solid #E8EBE6"
            borderRadius="2xl"
            boxShadow="0 8px 30px rgba(30,45,40,0.04)"
          >
            <Stack
              as="form"
              action={`https://formspree.io/f/${FORMSPREE_ID}`}
              method="POST"
              gap="5"
            >
              <Box mb="1">
                <Heading
                  fontSize="xl"
                  fontWeight="700"
                  color="#26372F"
                  mb="1"
                >
                  Send Us a Message
                </Heading>

                <Text fontSize="sm" color="#89918B">
                  Fill in the details below and we'll get back to you.
                </Text>
              </Box>

              <SimpleGrid columns={{ base: 1, sm: 2 }} gap="4">
                <Field.Root required>
                  <Field.Label
                    fontSize="sm"
                    fontWeight="600"
                    color="#37463D"
                  >
                    Your Name
                  </Field.Label>

                  <Input
                    name="name"
                    placeholder="Enter your name"
                    required
                    {...inputProps}
                  />
                </Field.Root>

                <Field.Root required>
                  <Field.Label
                    fontSize="sm"
                    fontWeight="600"
                    color="#37463D"
                  >
                    Email Address
                  </Field.Label>

                  <Input
                    name="email"
                    type="email"
                    placeholder="Enter your email"
                    required
                    {...inputProps}
                  />
                </Field.Root>
              </SimpleGrid>

              <Field.Root>
                <Field.Label
                  fontSize="sm"
                  fontWeight="600"
                  color="#37463D"
                >
                  Service Required
                </Field.Label>

                <NativeSelect.Root size="lg">
                  <NativeSelect.Field
                    name="service"
                    {...inputProps}
                  >
                    <option value="">Choose a service</option>

                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </NativeSelect.Field>

                  <NativeSelect.Indicator />
                </NativeSelect.Root>
              </Field.Root>

              <Field.Root required>
                <Field.Label
                  fontSize="sm"
                  fontWeight="600"
                  color="#37463D"
                >
                  Project Details
                </Field.Label>

                <Textarea
                  name="message"
                  placeholder="Tell us a little about your project..."
                  rows={4}
                  resize="vertical"
                  required
                  {...inputProps}
                />
              </Field.Root>

              <Button
                type="submit"
                size="lg"
                alignSelf="flex-start"
                px="7"
                borderRadius="lg"
                bg="#344B3E"
                color="white"
                fontWeight="600"
                _hover={{
                  bg: "#263A30",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s ease"
              >
                Send Message
                <LuArrowUpRight />
              </Button>

            </Stack>
          </Box>

        </SimpleGrid>
      </Container>
    </Box>
  );
}
