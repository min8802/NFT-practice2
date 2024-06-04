import { Button, Flex, Image } from "@chakra-ui/react";
import { FC } from "react";
import { useNavigate } from "react-router-dom";

const Header: FC = () => {
    const navigate = useNavigate();

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
            <Button>
                메타마스크 로그인
            </Button>
        </Flex>
    </Flex>
  );
};

export default Header;