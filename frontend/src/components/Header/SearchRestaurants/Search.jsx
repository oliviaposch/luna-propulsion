import React from "react";
import {
    InputSearchForm,
    SearchInput,
    SentButton,
} from "./SearchStyled";

const SearchRestaurant = () => {

    return (
        <InputSearchForm>
            <SearchInput type="text" placeholder="Search..."/>
            <SentButton type="submit" value="search"/>
        </InputSearchForm>
    );
};

export default SearchRestaurant;

