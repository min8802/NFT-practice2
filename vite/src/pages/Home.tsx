import { Button, Flex, FormHelperText, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { FC } from "react";

const Home: FC = () => {
  return ( 
    <Flex position="relative" width="full" bgColor="green">
      <Image src="https://static.wixstatic.com/media/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.png/v1/fill/w_1198,h_898,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/1f3f2b_45e0862f90b549b2b8858d28a44b60cc~mv2.png"
      position="absolute"
      width="50%"
      height="50%"
      objectFit="cover"
      objectPosition="80%"
      />
      <Image src="https://static.wixstatic.com/media/1f3f2b_21fe381c89284e328827e6c35f4b5513~mv2.png/v1/fill/w_476,h_483,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Untitled%20design%20-%202023-03-30T220301_142.png"
      position="absolute"
      width="30%"
      height="30%"
      left={500}
      />
      <Flex flexDir="column" position="absolute" left={220} top={120}>
        <Flex alignItems="center">
          <Image w={16} src="/images/logo.svg" alt="슬라임 월드" />
          <Text 
          color="white"
          width={100}
          fontSize={30}
          >SLIM
          </Text>
        </Flex>
        <Text 
        color="white"
        width={250}
        fontSize={20}
        >Don't miss your chance to own the world's best slime meme coin!
        </Text>
      </Flex>
      <Flex 
      position="absolute"
      gap={2}
      left={220}
      top={300}
      >
        <Image width={10} height={10} src="https://static.wixstatic.com/media/1f3f2b_8eaff3e5f42b45f88cf11d418e25d5e6~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/twitter%20(2).png"/>
        <Image width={10} height={10} src="https://static.wixstatic.com/media/1f3f2b_0078029a112449e5b8d712401bfbd5ac~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/telgrrgrgrgr.png"/>
        <Image width={10} height={10} src="https://static.wixstatic.com/media/1f3f2b_8dd371e91c534eba8bf5836ed468e899~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/dextools%20(1).png"/>
        <Image width={10} height={10} src="https://static.wixstatic.com/media/1f3f2b_95d714edb8484668b50ec07fb8b4f394~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/etherscan.png"/>
        <Image width={10} height={10} src="https://static.wixstatic.com/media/1f3f2b_614e05b6d3e84630b377c85d7ed33137~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cm%20c.png"/>
        <Image width={10} height={10} src="https://static.wixstatic.com/media/1f3f2b_9d0d4341170c4640b3663065417b3700~mv2.png/v1/fill/w_160,h_160,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/uniswap%20(2).png"/>
      </Flex>
      <Grid 
      templateColumns={["repeat(1, 1fr)", "repeat(1, 1fr)", "repeat(3, 1fr)"]}
      height={150}
      width={600}
      position="absolute"
      left={100}
      top={400}
      gap={2}>
          <Button>gemini</Button>
          <Button>binance</Button>
          <Button>crypto.com</Button>
          <Button>htx</Button>
          <Button>bybit</Button>
          <Button>okx</Button>
          <Button>cb wallet</Button>
          <Button>kucoin</Button>
          <Button>uniswap</Button>
      </Grid>
    </Flex>
    );
};

export default Home;