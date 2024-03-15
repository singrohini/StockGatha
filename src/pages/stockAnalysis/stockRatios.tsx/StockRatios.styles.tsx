import { Grid, styled, Typography } from "@mui/material";

export const ParentGrid = styled(Grid)`
  border: 75px;
  border-top-width: 100px;
  position: relative;

  .company-name-label {
    font-size: 2rem;
    line-height: 1.225;
    letter-spacing: -0.022em;
    font-weight: bold;
  }

  .company-price-detail {
    font-weight: bold;
  }

  .current-date-time {
    font-size: 0.7rem;
    font-weight: 500;
  }

  #top-ratios {
    margin: 0;
    padding: 0;
    display: grid;
    color: hsl(207, 12%, 43%);
    grid-template-columns: 1fr 1fr 1fr;
    column-gap: 24px;
    list-style-type: none;
  }

  .company-ratios {
    margin-top: 24px;
    border: 1.5px solid hsla(216, 41%, 87%, 0.8);
    border-radius: 8px;
    padding: 12px 24px 16px;
    font-size: 1.5rem;
    letter-spacing: -0.009em;
  }
`;
