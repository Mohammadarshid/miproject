import React from "react";
import Layout from "../Components/Layout/Layout";
import { Box, Typography } from "@mui/material";
const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,

          "& h4": { fontWeight: "bold", my: 2, fontSize: "2rem" },

          "& p": { textAlign: "justify" },
          "@media(max-width:600px)": {
            mt: 0,
            "& h4": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">welcome to my football team</Typography>
        <p>
          Football was introduced to India by British soldiers in the
          mid-nineteenth century. It spread because of the efforts of Nagendra
          Prasad Sarbadhikari. In 1888 the Durand Cup was founded by then
          India's Foreign Secretary, Mortimer Durand at Shimla, India. The
          Durand Cup is the third oldest football competition behind the FA Cup
          and the Scottish Cup.[citation needed] It was initiated, as a
          recreation for British troops stationed in India. Royal Scots
          Fusiliers won the first edition of the cup by beating Highland Light
          Infantry 2–1 in the Final. In 1893 the IFA Shield was founded as the
          fourth oldest trophy in the world.[citation needed] Calcutta, then
          capital of British India, soon became the hub of Indian football.
          Sarada FC was the oldest Indian football club.
        </p>
        <br />
        <p>
          Calcutta FC was the first club to be established in 1872.[5][6] Other
          early clubs include Dalhousie Club, Traders Club and Naval Volunteers
          Club.[7] In 1889 India's oldest current team Mohun Bagan A.C. was
          founded as "Mohun Bagan Sporting Club". This was the first club to be
          under the rule of the army. Both Hindus and Muslims players played in
          it. Several football clubs like Calcutta FC, Sovabazar and Aryan Club
          were established in Calcutta during the 1890s. Tournaments like the
          Gladstone Cup, Trades Cup and Cooch Behar Cup also started around this
          time. R B Ferguson Football Club was established on February 20, 1899
          in Thrissur, Kerala and it was the oldest football club in the
          southern part of India. The club was named after the Kochi Police
          Superintendent, R B Ferguson. The club was famed by the nickname Young
          Men's Football Club and played a huge role in promoting football in
          Kerala during the early 1900s. The first Indian Federation, the Indian
          Football Association, was founded in 1893 but did not have a single
          Indian on its board.
        </p>
      </Box>
    </Layout>
  );
};

export default About;
