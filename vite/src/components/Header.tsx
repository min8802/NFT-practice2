import { Button, Flex, Image } from "@chakra-ui/react";
import { JsonRpcSigner } from "ethers";
import { ethers } from "ethers";
import { Dispatch, FC, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";

interface HeaderProps {
    signer: JsonRpcSigner | null;
    setSigner: Dispatch<SetStateAction<JsonRpcSigner | null>>;
  }

const Header: FC<HeaderProps> = ({ signer, setSigner }) => {
    const navigate = useNavigate();

    const onClickMetamask = async () => {
        try {
            if (!window.ethereum) return;

            const provider = new ethers.BrowserProvider(window.ethereum);

            setSigner(await provider.getSigner());
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <Flex bgColor="blue.100" h={24} justifyContent="space-between">
        <Flex bgColor="red.100"
        w={40}
        fontSize={16}
        fontWeight="semibold"
        alignItems="center"
        >
            <Image w={14} src="/images/logo.svg" alt="슬라임 월드"/>슬라임 월드
        </Flex>
        <Flex bgColor="red.100" alignItems="center" gap={4}>
            <Button w={20} variant="link" colorScheme="green" onClick={() => navigate('/')}>
            홈
            </Button>
            <Button w={20} variant="link" colorScheme="green"  onClick={() => navigate('/mint-nft')}>
            민팅
            </Button>
            <Button w={20} variant="link" colorScheme="green" onClick={() => navigate('/my-nft')}>
            내 NFT
            </Button>
            <Button w={20} variant="link" colorScheme="green" onClick={() => navigate('/sale-nft')}>
            마켓
            </Button>
        </Flex>
        <Flex bgColor="red.100" w={40} alignItems="center">
               {signer ? <Button>{signer.address}</Button> : <Button onClick={onClickMetamask}>메타마스크 로그인</Button>}
        </Flex>
    </Flex>
  );
};

export default Header;