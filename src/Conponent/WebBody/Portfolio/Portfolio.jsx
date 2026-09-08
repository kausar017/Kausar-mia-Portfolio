import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

const Portfolio = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="mx-auto py-20 px-5 bg-base-200 text-base-content">
      <h2 className="text-3xl font-bold text-center mb-10">My Portfolio</h2>

      <Box sx={{ width: "100%", color: "inherit" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="inherit"
          textSize="2xl"
          indicatorColor="error"
          centered
          className="hover: text-red-700"
        >
          <Tab label="All" sx={{ fontSize: "20px" }} />
          <Tab label="React" sx={{ fontSize: "20px" }} />
          <Tab label="CMS" sx={{ fontSize: "20px" }} />
        </Tabs>

        {value === 0 && (
          <Box p={3}>
            <div className="w-full max-w-[800px] mx-auto">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus illum, veniam iste molestias corporis ducimus
              architecto in facilis, sunt explicabo neque quam omnis officiis
              placeat hic. Nihil rerum temporibus delectus, animi illum ullam
              dolore nam quae quod recusandae. Earum quae obcaecati nisi tempora
              nulla ratione! Consequuntur fuga nostrum, libero deleniti possimus
              reprehenderit eaque debitis voluptatum ut quo perferendis vel ea
              ducimus quia ad molestias tempore ipsum architecto similique?
              Commodi nam dolores atque exercitationem unde eligendi. Adipisci
              saepe delectus incidunt! Quae dolore recusandae maxime, eos
              reiciendis dolorum, saepe eius temporibus nobis unde magnam optio
              blanditiis. Sit esse fugit unde veniam rem, necessitatibus aut,
              perspiciatis laborum consequuntur quaerat voluptatibus vitae.
              Similique aliquid autem, ab molestias, nemo, amet reprehenderit
              maxime porro natus provident eaque repellendus fugiat! Ducimus,
              consequuntur excepturi! Voluptatibus molestias voluptatum ipsa
              aliquid omnis iure eum doloribus, aspernatur, possimus aperiam,
              voluptate doloremque reiciendis explicabo corrupti corporis quos
              unde! Officia laboriosam in incidunt.
            </div>
          </Box>
        )}
        {value === 1 && (
          <Box p={3}>
            <div>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
              cumque culpa dolores dolorem repellendus laboriosam officia
              impedit recusandae nam praesentium laborum illum aut error nisi
              magnam fuga nobis harum ipsum vel, dignissimos dolor id?
              Blanditiis facere dolorum vel expedita nisi numquam eos ea
              deleniti quaerat, quia porro illum in ad.
            </div>
          </Box>
        )}
        {value === 2 && <Box p={3}>CMS Projects</Box>}
      </Box>
    </div>
  );
};

export default Portfolio;
