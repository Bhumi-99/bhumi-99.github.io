import { Box, Heading } from "@chakra-ui/react";

export default function About() {
  return (
    <Box
      id="about"
      className="about section"
      mt="4rem"
      scroll-behavior="smooth"
      ml={{ base: "1px", md: "15rem",lg:"17rem",xl:"19rem"}}
      w={{ base: "100%",md:"70%", lg: "75%",xl:"80%" }}
    >
      <Heading
        // className="heading-color"
        color="rgb(49, 130, 206)"
        font-weight="bold"
        fontSize={{ base: "3xl", md: "5xl" }}
      >
        About Me
      </Heading>

      <Box
        id="user-detail-intro"
        fontSize={{ md: "20px", sm: "18px",base:"15px" }}
        textAlign={{ md: "left", base: "center" }}
        mt={{ md: 6, base: 3 }}
        color="grey"
        w='90%'
        ml={{base:"1rem",sm:"2rem",md:"2rem",lg:"0px"}}
        letterSpacing="0.3px"
        lineHeight={{ md: "2.3pc", sm: "2pc" }}
        p={{sm: "1pc", md: "1.3pc" }}
      >
        An Enthusiastic and Professional Full Stack Web Developer with
        proficiency in HTML ,CSS ,Advanced JavaScript ,React etc.Expertise in
        the areas to build beautiful ,user friendly ,functional
        websites.Self-disciplined team Player with an eye on details. Looking
        forward to work in a reputed . Adapt at contributing to highly
        collaborative work environment and finding solutions.
      </Box>
    </Box>
  );
}
