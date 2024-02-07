import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  Link,
  Image,
  Heading,
} from "@chakra-ui/react";
import { IoMdMail } from "react-icons/io";
export default function Contacts() {
  return (
    <>
      <Box
        id="contact"
        mt="4rem"
        scrollBehavior="smooth"
        // border="1px solid white"
        ml={{ base: "1px", md: "15rem", xl: "18rem" }}
        w={{ base: "100%", md: "75%" }}
        display="flex"
        flexDirection="column"
        gap="1rem"
        padding="1rem"
      >
        <Heading
          // className="heading-color"
          color="rgb(49, 130, 206)"
          font-weight="bold"
          fontSize={{ base: "3xl", md: "4xl" }}
        >
          Contact
        </Heading>

        <Container as={Stack} maxW={"full"} py={1} align={"center"}>
          <SimpleGrid
            columns={{ base: 4, sm: 4, md: 4, lg: 4, xl: 4 }}
            justifyContent={"space-evenly"}
          >
            <Stack
              align={"flex-start"}
              borderRadius={"10px"}
              padding={"0.5rem"}
            >
              <Link
                href="https://github.com/officialshaifalij"
                w={"full"}
                display={"flex"}
                alignItems={"center"}
                id="contact-github"
              >
                <Image
                  src="https://img.icons8.com/fluency/1x/github.png"
                  alt="github"
                  w={{ base: "80%", sm: "80%", md: "70%", lg: "60%" }}
                />
                {/* <Text
                fontSize={{ base: "17px", md: "17px", lg: "15px" }}
                color={"#718096"}
              >
                OfficialShaifaliJ
              </Text> */}
              </Link>
            </Stack>

            <Stack
              align={"flex-start"}
              borderRadius={"10px"}
              padding={"0.5rem"}
            >
              <Link
                href="https://www.linkedin.com/in/shafali-j-610a66249/"
                w={"full"}
                display={"flex"}
                alignItems={"center"}
                id="contact-linkedin"
              >
                <Image
                  src="https://img.icons8.com/fluency/1x/linkedin-circled.png"
                  alt="linkedin"
                w={{ base: "80%", sm: "80%", md: "70%", lg: "60%" }}
                />
                {/* <Text
                fontSize={{ base: "17px", md: "17px", lg: "15px" }}
                color={"#718096"}
              >
                Shaifali
              </Text> */}
              </Link>
            </Stack>

            <Stack
              align={"flex-start"}
              borderRadius={"10px"}
              padding={"0.5rem"}
            >
              <Link
                href={"920509896"}
                id="contact-phone"
                w={"full"}
                display={"flex"}
                alignItems={"center"}
              >
                <Image
                  src="https://img.icons8.com/fluency/1x/phone-contact.png"
                  alt="phone"
                w={{ base: "80%", sm: "80%", md: "70%", lg: "60%" }}
                />
                {/* <Text
                fontSize={{ base: "17px", md: "17px", lg: "15px" }}
                color={"#718096"}
              >
                +919205098967
              </Text> */}
              </Link>
            </Stack>

            <Stack
              align={"flex-start"}
              borderRadius={"10px"}
              padding={"0.5rem"}
              justifyContent='center'
            >
              <Link
                href="https://mail.google.com/mail/u/0/#compose=new"
                display={"flex"}
                alignItems={"center"}
                w={{ base: "100%", md: "100%", lg: "100%" }}
                id="contact-email"
              >
                {/* <Image
                  src="https://img.icons8.com/fluency/1x/apple-mail.png"
                  alt="email"
                  w={{ base: "100%", sm: "80%", md: "70%", lg: "80%" }}
                /> */}
                <IoMdMail color='skyblue'/>

                {/* <Text
                fontSize={{ base: "15px", md: "17px", lg: "12px" }}
                color={"#718096"}
              >
                shaifali02000@gmail.com
              </Text> */}
              </Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Text color='lightgrey' m='auto' pb='3'>© 2024by Shaifali</Text>

      </Box>
      {/* <Box h="30px" bg='gray.50' textAlign='center'>
      </Box> */}
    </>
  );
}
