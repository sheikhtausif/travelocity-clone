import {
  FormGroup,
  FormControl,
  FormControlLabel,
  Checkbox,
} from "@material-ui/core";
import styled from "styled-components";

const Wrapper = styled.div`
  .filter-title {
    font-size: 1rem;
    font-weight: 700;
    margin: 1.5rem 0;
  }

  .popular-filter {
    display: flex;
    flex-direction: column;
    color: #505c66;
  }
`;

export const PopularFilter = () => {
  return (
    <Wrapper>
      <div className="filter-title">Popular filter</div>
      <div className="popular-filter">
        <FormControl component="fieldset">
          <FormGroup>
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Breakfast Included"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Ocean view"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Hotel resort"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Hotel"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Villa"
              labelPlacement="end"
            />
          </FormGroup>
        </FormControl>
      </div>
    </Wrapper>
  );
};
