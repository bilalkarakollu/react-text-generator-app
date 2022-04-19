import { FormControl, FormLabel, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux';
import { changeParas } from '../../store/slices/textSlice';

const Paragraphs = () => {

    const dispatch = useDispatch();
    const { paras, loading } = useSelector(state => state.text);

    const handleChange = (e) => {
        dispatch(changeParas(e))
    }

    return (
        <FormControl px={5}>
            <FormLabel htmlFor='amount'>Paragraphs</FormLabel>
            <NumberInput borderRadius={10} bg={'teal.200'} disabled={loading} onChange={handleChange} max={50} min={2} value={paras}>
                <NumberInputField id='amount' />
                <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                </NumberInputStepper>
            </NumberInput>
        </FormControl>
    )
}

export default Paragraphs
