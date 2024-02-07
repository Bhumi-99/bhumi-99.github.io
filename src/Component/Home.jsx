import { Button, Text, Image, Box } from "@chakra-ui/react";
// import CV from "../images/CV.pdf";
export default function Home() {
  function resume() {
    window.open(
      "https://drive.google.com/file/d/1CoeUohXyB-Cfaj-yVdQ3RVCvAAXW4M1s/view"
      ,
      "_blank"
    );
  }

  return (
    <Box
      id="home"
      scrollBehavior="smooth"
      ml={{ base: "1px", md: "15rem", lg: "15rem", xl: "17rem" }}
      p={{ base: "1rem", sm: "3rem" }}
      pt={{ base: "4rem", sm:"4rem",md: "" }}
      // border=" 1px solid white"
      w={{ base: "100%", md: "75%", lg: "70%", xl: "75%" }}
      display="flex"
      justifyContent="space-between"
      flexDirection={{ base: "column-reverse", lg: "row" }}
      gap="3rem"
    >
      <Box
        textAlign={{ base: "center", lg: "left" }}
        alignItems="center"
        justifyContent="center"
        // border=" 1px solid white"
        fontWeight="bold"
      >
        <Text
          color="white"
          display="flex"
          // border=" 1px solid white"
          fontSize={{ base: "3pc", md: "4pc" }}
          alignItems="center"
          textAlign={{ base: "center" }}
          w={{ base: "75%", sm: "50%", md: "55%", lg: "100%" }}
          m="auto"
        >
          Hello
          <Image
            src="https://media1.giphy.com/media/jbqHopncJ10Wl1EuP0/100w.webp?cid=ecf05e47zl905akpqd114flq7evajlniw62w5at8zhh57het&rid=100w.webp&ct=s"
            alt="world"
            width={"95px"}
          />
          !
        </Text>
        <Text
          color="rgb(49, 130, 206)"
          id="user-detail-name"
          w="100%"
          // border=" 1px solid white"
          fontSize={{ base: "2pc", md: "3pc" }}
          alignItems="center"
          mb="1rem"
        >
          I Am Shaifali
        </Text>
        <Text
          pl={{ base: "5px", md: "" }}
          // border=" 1px solid white"
          m="auto"
          w={{ base: "85%", lg: "100%" }}
        >
          <a href="https://git.io/typing-svg">
            <Image
              src="https://readme-typing-svg.demolab.com?font=Fira+Sans&weight=500&size=30&pause=999&width=535&lines=I+am+a+Full+Stack+Web+Developer.;+Proficient+in+MERN+Stack+Developing."
              alt="Typing SVG"
            />
          </a>
        </Text>
        <Box
          border="0px solid white"
          textAlign={{ base: "center", lg: "left" }}
          mb="2rem"
          fontSize="1.7pc"
        >
           <a
              id="resume-link-2"
              href={
                "https://drive.google.com/u/0/uc?id=1CoeUohXyB-Cfaj-yVdQ3RVCvAAXW4M1s&export=download"
              }
              download="Shaifali.-Resume"
              target="_blank"
              rel='noopener noreferrer'
            >
          <Button
            id="resume-button-2"
            onClick={(e) => {
              e.preventDefault(); // Prevent the default action of the link click
              resume();
            }}
            borderRadius="lg"
            size="md"
            cursor="pointer"
            bg="blue.500"
            color="rgb(4, 4, 54)"
            fontSize="19px"
            fontWeight="400"
            rounded={"10px"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 30%), 0 6px 6px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.300",
            }}
          >
           
              Resume
          </Button>
            </a>
        </Box>
        {/* </Tooltip> */}
      </Box>
      <Image
        className="home-img heading-color"
        src="https://avatars.githubusercontent.com/u/112679991"
        alt="avatar"
        width={{ base: "65%", sm: "40%", md: " 35%" }}
        height=" 35%"
        m="auto"
        alignItems=" center"
        borderRadius=" 50%"
      />
    </Box>
  );
}
