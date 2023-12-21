import React, { useEffect, useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import jsonDataa from "./courses.json";
const Cards = () => {
  const [jsonData, setJsonData] = useState([]);

  useEffect(() => {
    getCourseDetails();
  }, []);

  const getCourseDetails = async () => {
    try {
      //   const data = await fetch('./courses.json');
      //   const jsonData = await data.json();
      setJsonData(jsonDataa);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <Grid container spacing={3}>
        {jsonData.map((course) => (
          <Grid item key={course.id} xs={12} sm={6} md={4}>
            <Card sx={{ height: "100%" }}>
              <CardHeader
                title={course.title}
                subheader={`Instructor: ${course.instructor}`}
              />
              <CardContent>
                <Typography variant="body1" color="textSecondary">
                  Duration: {course.duration}
                </Typography>
                <Typography variant="body1" color="textSecondary">
                  Level: {course.level}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </>
  );
};

export default Cards;
