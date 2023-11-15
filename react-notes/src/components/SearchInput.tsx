import { Input } from "@chakra-ui/react";

const SearchInput = () => {
  return (
    <Input
      placeholder="Search notes"
      value={searchKeyword}
      onChange={(e) => setSearchKeyword(e.target.value)}
      margin={3}
    />
  );
};

export default SearchInput;
