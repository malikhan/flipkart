import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';

//components
import Search from './Search';

//header style
const StyledHeader = styled(AppBar)`
    background: #2874f0;
    height: 55px;
`    

//box style
const StyledBox = styled(Box)`
    margin-left: 12%;
    line-height: 0;
`

//typography style
const StyledTypography = styled(Typography)`
    font-size: 10px;
    font-style: italic
`

//plus image style
const PlusImage = styled('img')({

    width: 10,
    height: 10,
    marginLeft: 4
})



const Header = () => {


    //flipkart logo url
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    //suburl plus image
    const subURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png';

    return (

        <StyledHeader>
            <Toolbar>
                <StyledBox>
                    <img src={logoURL} alt="logo" style = {{ width:75 }} />
                    <Box style={{ display:'flex' }}>
                        <StyledTypography>Explore&nbsp; 
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </StyledTypography>
                        <PlusImage src={subURL} alt="sub logo"/>
                    </Box>
                </StyledBox>
                <Search/>
            </Toolbar>
        </StyledHeader>

    )
}

export default Header;