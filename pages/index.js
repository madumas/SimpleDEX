/** @jsx jsx */
import { Container, jsx, Card, Heading, Text, Grid, Box, Flex } from 'theme-ui';
import Orders from '../components/Orders';
import Balances from '../components/Balances';

const Index = () => {
  const weth = '0xd0a1e359811322d97991e03f863a0c30c2cf029c'; //'0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2';
  const dai = '0x4f96fe3b7a6cf9725f59d353f723c1bdb64ca6aa'; //'0x6b175474e89094c44da98b954eedeac495271d0f';

  return (
    <Container>
      <Box sx={{ mt: 2, ml: [0, 'auto'], mr: [null, 0] }}>
        <Heading variant="mediumHeading">Mini-exchange</Heading>
          <Grid sx={{ my: 4 }}>
            <Card>
              <Heading sx={{ pb: 2 }} variant="smallHeading">
                Balances
              </Heading>

              <Balances/>

            </Card>

            <Card sx={{ my: 2, mx: [2, 'auto'], p: 0, pb: 3, maxWidth: '500px' }}>
              <Flex sx={{ p: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text sx={{ fontWeight: 'bold', fontSize: 4 }}>ETH Sell Offers</Text>
              </Flex>
              <Orders give={weth} get={dai}/>
            </Card>
            <Card sx={{ my: 2, mx: [2, 'auto'], p: 0, pb: 3, maxWidth: '500px' }}>
              <Flex sx={{ p: 3, alignItems: 'center', justifyContent: 'space-between' }}>
                <Text sx={{ fontWeight: 'bold', fontSize: 4 }}>ETH Buy Offers</Text>
              </Flex>
              <Orders give={dai} get={weth}/>
            </Card>

          </Grid>
      </Box>
    </Container>
  );
};

export default Index;