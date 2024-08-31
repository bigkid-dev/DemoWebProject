/*
=========================================================
* Material Kit 2 React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-kit-react
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// @mui material components
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";

// Material Kit 2 React components
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";

// Material Kit 2 React examples
import DefaultReviewCard from "examples/Cards/ReviewCards/DefaultReviewCard";

// Images
import appleLogo from "assets/images/logos/gray-logos/logo-apple.svg";
import facebookLogo from "assets/images/logos/gray-logos/logo-facebook.svg";
import nasaLogo from "assets/images/logos/gray-logos/logo-nasa.svg";
import vodafoneLogo from "assets/images/logos/gray-logos/logo-vodafone.svg";
import digitalOceanLogo from "assets/images/logos/gray-logos/logo-digitalocean.svg";

function Information() {
  return (
    <MKBox component="section" py={12}>
      <Container>
        <Grid
          container
          item
          xs={12}
          lg={6}
          justifyContent="center"
          sx={{ mx: "auto", textAlign: "center" }}
        >
          <MKTypography variant="h2" color="info" textGradient mb={2}>
            Our success is measured by the success of our clients
          </MKTypography>
          <MKTypography variant="body1" color="text" mb={2}>
            Over the past year, we have helped businesses achieve a 40% increase in operational
            efficiency through our custom software solutions, driven 50% more conversions with our
            expertly crafted sales funnels, and boosted online visibility by over 60% with our
            digital marketing strategies.
          </MKTypography>
        </Grid>
        <Grid container spacing={3} sx={{ mt: 8 }}>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="Olatunbosun Adeyemi"
              date="1 day ago"
              review="Immovable Digital Space completely transformed our operations with a custom software solution that perfectly fits our needs. The team's attention to detail and commitment to delivering a high-quality product were outstanding. We've seen a significant improvement in efficiency and productivity since implementation."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              color="info"
              name="Johnson Oluchi"
              date="1 week ago"
              review="Working with Immovable Digital Space has been a breath of fresh air. Their digital marketing strategies helped us reach a broader audience and significantly increase our online presence. The results speak for themselves—our website traffic has doubled, and our brand recognition has never been higher."
              rating={5}
            />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <DefaultReviewCard
              name="David Smith"
              date="3 weeks ago"
              review="Immovable Digital Space took our business to the next level with their cloud computing services. They guided us through the entire migration process, ensuring everything was seamless and secure. The flexibility and scalability we've gained have been invaluable, allowing us to focus more on growth and less on infrastructure."
              rating={5}
            />
          </Grid>
        </Grid>
        <Divider sx={{ my: 6 }} />
        <MKTypography sx={{ mb: 10 }} variant="h2" fontWeight="bold" textAlign={"center"}>
          Our Partners
        </MKTypography>
        <Grid container spacing={3} justifyContent="center">
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={appleLogo} alt="Apple" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={facebookLogo} alt="Facebook" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={nasaLogo} alt="Nasa" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox component="img" src={vodafoneLogo} alt="Vodafone" width="100%" opacity={0.6} />
          </Grid>
          <Grid item xs={6} md={4} lg={2}>
            <MKBox
              component="img"
              src={digitalOceanLogo}
              alt="DigitalOcean"
              width="100%"
              opacity={0.6}
            />
          </Grid>
        </Grid>
      </Container>
    </MKBox>
  );
}

export default Information;
