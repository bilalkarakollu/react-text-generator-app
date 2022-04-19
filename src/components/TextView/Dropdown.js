import { Select, FormControl, FormLabel } from '@chakra-ui/react'
import { useDispatch, useSelector } from 'react-redux';
import { changeFormat } from '../../store/slices/textSlice';

const Dropdown = () => {

    const dispatch = useDispatch();
    const { loading } = useSelector(state => state.text);
    
    const handleChange = (e) => {
        const { value } = e.target;
        dispatch(changeFormat(value));
    }

    return (
        <FormControl px={5}>
            <FormLabel htmlFor='html'>Include HTML</FormLabel>
            <Select disabled={loading} onChange={handleChange} textTransform={'uppercase'} defaultValue={'text'} bg='tomato'
                borderColor='tomato' id='html' placeholder=''>
                <option value='text'>text</option>
                <option value='html'>html</option>
            </Select>
        </FormControl>
    )
}

export default Dropdown
