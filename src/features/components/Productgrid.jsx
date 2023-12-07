import * as React from "react";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import RecipeReviewCard from "./Card";
import { useSelector } from "react-redux";
import { selectAllProducts } from "../product/productSlice";
import Progress from "./Progress";
import Paginationcomp from "./Pagination";
import { useState } from 'react';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

export default function Productgrid() {
  const allproducts = useSelector(selectAllProducts);

  const itemsPerPage = 6; // Adjust the number of items per page as needed
  const [currentPage, setCurrentPage] = useState(1); 

  // Calculate the index of the first and last items to display on the current page
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  // Get the current page of products
  const currentProducts = allproducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <>
      {allproducts ? (
        <Box sx={{ width: "100%", padding: "2rem" }}>
          <Grid
            container
            rowSpacing={3}
            columnSpacing={{ xs: 1, sm: 2, md: 2 }}
            columns={{ xs: 3, sm: 6, md: 12 }}
          >
            {currentProducts.map((data) => (
              <Grid item xs={3} key={data.id}>
                <RecipeReviewCard
                  title={data.title}
                  price={data.price}
                  description={data.description}
                  thumbnail={data.thumbnail}
                />
              </Grid>
            ))}
          </Grid>
          <div className="flex justify-end">
            <Paginationcomp
              allproducts={allproducts}
              itemsPerPage={itemsPerPage}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
          </div>
        </Box>
      ) : (
        <Progress />
      )}
    </>
  );
}
