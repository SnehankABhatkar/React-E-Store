import { Box, Pagination, Typography } from "@mui/material";
import type { Pagination as PaginationType } from "../../models/pagination";

type Props = {
  metadata: PaginationType;
  onPageChange: (page: number) => void;
};

function AppPagination({ metadata, onPageChange }: Props) {
  const { currentPage, totalCount, pageSize, totalPages } = metadata;

  const startItem = (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalCount);

  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={1}
    >
      <Typography>
        Displaying {startItem}-{endItem} of {totalCount} items
      </Typography>
      <Pagination
        color="secondary"
        size="large"
        count={totalPages}
        page={currentPage}
        onChange={(_, page) => onPageChange(page)}
      />
    </Box>
  );
}

export default AppPagination;
