import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  Text,
  Spinner
} from '@chakra-ui/react'
import { useRef } from 'react'
import { useSelector } from 'react-redux'
import Searchbutton from '../buttons/searchbutton'
import GridDisplay from '../datamovie/gridmoviesearch'
import Searchbar from '../searchbar'

const SearchDraw = () => {
  const { data, status } = useSelector(state => state.apidata.searchs)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const btnRef = useRef()

  return (<>
        <Searchbutton cb={onOpen} />
        <Drawer
            isOpen={isOpen}
            placement='left'
            size={'full'}
            onClose={onClose}
            finalFocusRef={btnRef}
        >
            <DrawerOverlay />
            <DrawerContent bgColor={'rgba(194, 207, 229,0.6) '}>
                <DrawerCloseButton />
                <DrawerHeader fontSize={'3xl'} color={'gray.700'}>Search your movie or serie</DrawerHeader>
                <DrawerBody>
                    <Searchbar />

                </DrawerBody>
            </DrawerContent>
        </Drawer>
    </>)
}

export default SearchDraw
