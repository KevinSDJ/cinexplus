import { Grid, GridItem, VStack, Heading, Badge, Box, Image, Skeleton, Text, Divider, IconButton, Icon } from '@chakra-ui/react'
import { FaPlay } from 'react-icons/fa'
import Rating from '../rating'

export const BoxDataSlideDesktop = ({ originaltitle, voteaverage, votecount, releasedate, posterpath, setOpenMedia }) => {
  return (
        <Grid templateColumns='2fr 1fr' paddingTop={'10%'} justifyItems={'center'} alignItems={'center'} templateRows={'1fr'} w={'100%'} height={'100%'} >
        <GridItem width={'90%'}>
          <VStack
            spacing={4}
            align='stretch'>
            <Heading as='h1' color="white" textShadow={'0 0 10px black'} fontSize={'calc(5vw)'} fontWeight={600}>{originaltitle}</Heading>
            <Rating votes={Number(String(voteaverage).split('')[0])} count={votecount} />
            <Badge variant='outline' fontSize={'2xl'} color={'blackAlpha.700'} w={'max-content'}>
              {releasedate}
            </Badge>
          </VStack>
        </GridItem>
        <GridItem bg='transparent' >
          <Box padding={'calc(10vw)'} pos={'relative'} display={'flex'} alignItems={'center'} bgColor={'blackAlpha.100'} borderRadius='90%' border={'1px solid white'}>
            <Image
              position={'absolute'}
              left={'-100px'}
              borderRadius={'2em'}
              fallback={<Skeleton/>}
              src={`https://image.tmdb.org/t/p/original/${posterpath}`}
              objectFit={'fill'}
              objectPosition={'top'}
              height={'300px'}
              w={'200px'}
            />
            <VStack align={'stretch'} spacing={1}>
              <Heading size={'2xl'} padding={0}>
                watch
              </Heading>
              <Divider />
              <Text fontSize={'3xl'} color={'white'} textShadow={'0 0 5px black'}>
                Trailer<IconButton variant={'unstyled'} borderRadius={'90%'} padding={'1.5'} aria-label='play trailer' onClick={() => setOpenMedia(true)} icon={<Icon fontSize={'3xl'} as={FaPlay} color={'red.400'}/> }/>
              </Text>
            </VStack>
          </Box>
        </GridItem>
      </Grid>
  )
}
