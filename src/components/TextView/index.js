import { useEffect } from "react"
import { Flex, Text, Box } from "@chakra-ui/react"
import Dropdown from "./Dropdown"
import Paragraphs from "./Paragraphs"
import TextArea from "./TextArea"
import { useDispatch, useSelector } from "react-redux"
import { fetchAsyncText } from "../../store/slices/textSlice"

const TextView = () => {
    
    const dispatch = useDispatch();
    const {paras, format, error} = useSelector(state => state.text);

    useEffect(() => {
        dispatch(fetchAsyncText());
    }, [paras, format, dispatch])
    
    return (
        <Box mb={20}>
            <Flex justifyContent={'center'} py={4}>
                <Text color={'pink.900'} fontSize={['lg','lg','lg','5xl']}>React sample text generator app</Text>
            </Flex>
            <Flex py={5} borderTop={'1px solid purple'}>
                <Paragraphs />
                <Dropdown />
            </Flex>
            {!error && <TextArea/>}
            {error && <Text fontSize={'xl'} mt={50}>{error}</Text>}
        </Box>
    )
}

export default TextView
