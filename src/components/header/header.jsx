import { AppBar, Toolbar, Box, styled, Typography } from '@mui/material';

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




const Header = () => {


    //flipkart logo url
    const logoURL = 'https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png';

    return (

        <StyledHeader>
            <Toolbar>
                <StyledBox>
                    <img src={logoURL} alt="logo" style = {{ width:75 }} />
                    <Box>
                        <StyledTypography>Explore 
                            <Box component="span" style={{ color: '#FFE500' }}>Plus</Box>
                        </StyledTypography>
                    </Box>
                </StyledBox>
            </Toolbar>
        </StyledHeader>

    )
}

export default Header;