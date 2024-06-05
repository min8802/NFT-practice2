interface Window {
    ethereum: any;
}

interface NftMetadata {
    name: string;
    description: string;
    image: string;
    attributes? :{
        trait_type: string;
        value: string;
    }[]
}

//attributes는 없을 수도 있으니까 optional로 ? 표시