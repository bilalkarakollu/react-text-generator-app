import { Box } from "@chakra-ui/react"
import { useSelector } from "react-redux"

const TextArea = () => {

    const { text } = useSelector(state => state.text);

  return (
    <Box mt={10} p={10} bg={'green.500'} borderRadius={30} color={'white'} fontSize={'lg'}>
        {text}
    </Box>
  )
}

export default TextArea
