import { InputBase, Box, styled } from "@mui/material";
import { SearchIcon } from "@mui/icons-material";

//search field box style
const SearchContainerStyled = styled(Box)`

    background: #fff;
    width: 38%;
    border-radius: 2px;
    margin-left: 10px;
    display: flex;
`

//search field style
const InputBaseStyled = styled(InputBase)`

    padding-left: 20px;
    width: 100%;
`

//search icon style
const SearchIconStyled = styled(Box)`

    color: blue;
`
const Search = () => {

    return (
        <SearchContainerStyled>
            <InputBaseStyled
            placeholder="Search for products, brands and more"
            />
            <SearchIconStyled>
                <SearchIcon/>
            </SearchIconStyled>
        </SearchContainerStyled>
        
    )
}

export default Search;