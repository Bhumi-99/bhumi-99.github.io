import { Button, Tooltip } from "@chakra-ui/react";
import CV from "../images/CV.pdf"
export default function Home() {

  function resume() {
    window.open(
      "https://drive.google.com/file/d/1CoeUohXyB-Cfaj-yVdQ3RVCvAAXW4M1s/view?usp=sharing",
      "_blank"
    );
  }

  return <div id="home">
    <div>
      <p>
        <img src="https://cliply.co/wp-content/uploads/2019/06/391906110_WAVING_HAND_400px.gif" alt="hello"
          width="75px" />
        Hello
        <img src="https://media1.giphy.com/media/jbqHopncJ10Wl1EuP0/100w.webp?cid=ecf05e47zl905akpqd114flq7evajlniw62w5at8zhh57het&rid=100w.webp&ct=s" alt="world" width={'95px'} />
        !

      </p>
      <p id="user-detail-name"> I am Shaifali</p>
      <p>Full Stack Web Developer</p>
      <Tooltip label="Click me!" bg={'blue.500'} hasArrow arrowSize={10} borderRadius={'5px'} placement={'auto'}>
        <Button id="resume-button-2" onClick={resume}
          align="center"
          px="6"
          mx="5"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          fontSize="15px"
          marginTop="2rem"
          bg="blue.500"
          color='white'
          rounded={'10px'}
          boxShadow={
            '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
          }
          _hover={{
            bg: 'blue.50',
            color: 'blue.500',
            border: "1px"
          }}
        >
          <a
            id="resume-link-2"
            href={'https://drive.google.com/u/0/uc?id=1CoeUohXyB-Cfaj-yVdQ3RVCvAAXW4M1s&export=download'}
            download="Shaifali-Resume"
            target="_blank"

          >
            Resume
          </a>
        </Button>
      </Tooltip>






    </div>

    <img className="home-img" src="https://avatars.githubusercontent.com/u/112679991" alt="avatar" />
  </div>
}