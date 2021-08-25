import { Hotelcard } from "./HotelCard";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import styled from "styled-components";
import StarRateIcon from "@material-ui/icons/StarRate";
import TagFacesIcon from "@material-ui/icons/TagFaces";

// import ToggleButton from "@material-ui/lab/ToggleButton";
import {
  Divider,
  FormControlLabel,
  makeStyles,
  TextField,
  Checkbox,
  Button,
  Paper,
  Chip,
  FormControl,
  FormGroup,
  RadioGroup,
  Radio,
} from "@material-ui/core";
import { useCallback } from "react";

const useStyle = makeStyles({
  input: {
    background: "white",
  },

  button: {
    margin: "10px 10px 0 0",
    background: "white",
  },

  selected: {
    display: "flex",
    background: "#f0f3f5",
  },
});

const Wrapper = styled.div`
  width: 65%;
  margin: auto;
  display: grid;
  grid-template-columns: 30% 70%;
  grid-gap: 1.5rem;
  //border: 1px solid red;

  .sorting {
    //border: 1px solid blue;
  }

  .search-title {
    font-size: 1.3rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .divider {
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
  }

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

export const HotelList = () => {
  const [hotels, setHotels] = useState([]);
  const [data, setData] = useState([]);
  const classes = useStyle();
  const [chipData, setChipData] = useState([]);
  const [guestRating, setGuestRating] = useState("");

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) =>
      chips.filter((chip) => chip.key !== chipToDelete.key)
    );
  };
  // const [selected, setSelected] = useState(false);

  const handleChange = (event) => {
    setGuestRating(event.target.value);
  };

  const getData = () => {
    axios
      .get("http://localhost:3001/data")
      .then((res) => {
        setData(res.data);
        setHotels(res.data);
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const handleStar = useCallback(
    (star) => {
      const newData = data.filter((item) => {
        return item.starRating === star;
      });

      setHotels(newData);
    },
    [data]
  );

  return (
    <>
      <Wrapper>
        <div className="sorting">
          <div className="search-title">Search by property name</div>
          <TextField
            className={classes.input}
            id="outlined-basic"
            label="Property name"
            variant="outlined"
            color="default"
          />
          <Divider className="divider" />
          <div className="search-title">Filter by</div>

          {/* ---------------------------------------------------------------------------------------------------- Popular Filter */}
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

          {/* ----------------------------------------------------------------------------------------------------- Star rating */}
          <div className="filter-title">Star rating</div>
          {/* <ToggleButton
          value="check"
          selected={selected}
          onChange={() => {
            setSelected(!selected);
          }}
        >
          1
          <StarRateIcon />
        </ToggleButton> */}
          <Button
            onClick={() => {
              handleStar(1);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            1
          </Button>
          <Button
            onClick={() => {
              handleStar(2);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            2
          </Button>
          <Button
            onClick={() => {
              handleStar(3);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            3
          </Button>
          <Button
            onClick={() => {
              handleStar(4);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            4
          </Button>
          <Button
            onClick={() => {
              handleStar(5);
            }}
            className={classes.button}
            variant="contained"
            color="default"
            endIcon={<StarRateIcon />}
          >
            5
          </Button>

          {/* ------------------------------------------------------------------------------------------------------- Your Budget rating  */}
          <div className="filter-title">Your Budget</div>
          <div className="popular-filter">
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Less than 75$"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="75$ to 125$"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="125$ to 200$"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="200$ to 300$"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="300$ and above"
              labelPlacement="end"
            />
          </div>
          {/*------------------------------------------------------------------------------------------------------------ Guest Rating  */}
          <div className="filter-title">Guest rating</div>
          <div className="popular-filter">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="gender"
                name="gender1"
                value={guestRating}
                onChange={handleChange}
              >
                <FormControlLabel
                  color="primary"
                  value="any"
                  control={<Radio color="primary" />}
                  label="Any"
                />
                <FormControlLabel
                  value="Wonderful 4.5+"
                  control={<Radio color="primary" />}
                  label="Wonderful 4.5+"
                />
                <FormControlLabel
                  value="Very good 4+"
                  control={<Radio color="primary" />}
                  label="Very good 4+"
                />
                <FormControlLabel
                  value="Good 3.5+"
                  control={<Radio color="primary" />}
                  label="Good 3.5+"
                />
              </RadioGroup>
            </FormControl>
          </div>

          {/* -------------------------------------------------------------------------------------------------------- Payment type  */}
          <div className="filter-title">Payment type</div>
          <div className="popular-filter">
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Fully refundable"
              labelPlacement="end"
            />
            <FormControlLabel
              value="end"
              control={<Checkbox color="primary" />}
              label="Reserve now, pay later"
              labelPlacement="end"
            />
          </div>
          {/* ----------------------------------------------------------------------------------------------------Property type */}
          <div className="filter-title">Property type</div>
          <div className="popular-filter">
            <FormControl component="fieldset">
              <FormGroup>
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
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Private vacation Home"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Condominium resort"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Residence"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Condo"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Townhouse"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </div>
          {/* ----------------------------------------------------------------------------------------------------Popular Locations  */}
          <div className="filter-title">Popular Locations</div>
          <div className="popular-filter">
            <FormControl component="fieldset">
              <RadioGroup
                aria-label="location"
                name="location"
                value={guestRating}
                onChange={handleChange}
              >
                <FormControlLabel
                  color="primary"
                  value="Calangute Beach"
                  control={<Radio color="primary" />}
                  label="Calangute Beach"
                />
                <FormControlLabel
                  value="Colva Beach"
                  control={<Radio color="primary" />}
                  label="Colva Beach"
                />
                <FormControlLabel
                  value="Varca Beach"
                  control={<Radio color="primary" />}
                  label="Varca Beach"
                />
                <FormControlLabel
                  value="Majorda Beach"
                  control={<Radio color="primary" />}
                  label="Majorda Beach"
                />
                <FormControlLabel
                  value="Benaulim Beach"
                  control={<Radio color="primary" />}
                  label="Benaulim Beach"
                />
                <FormControlLabel
                  value="Dudhsagar Waterfalls"
                  control={<Radio color="primary" />}
                  label="Dudhsagar Waterfalls"
                />
                <FormControlLabel
                  value="Miramar Beach"
                  control={<Radio color="primary" />}
                  label="Miramar Beach"
                />
                <FormControlLabel
                  value="Fort Aguada"
                  control={<Radio color="primary" />}
                  label="Fort Aguada"
                />
              </RadioGroup>
            </FormControl>
          </div>

          {/* ----------------------------------------------------------------------------------------------------Meals Option  */}
          <div className="filter-title">Meal Plans available</div>
          <div className="popular-filter">
            <FormControl component="fieldset">
              <FormGroup>
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Breakfast included"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Lunch included"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="Dinner included"
                  labelPlacement="end"
                />
                <FormControlLabel
                  value="end"
                  control={<Checkbox color="primary" />}
                  label="All included"
                  labelPlacement="end"
                />
              </FormGroup>
            </FormControl>
          </div>
        </div>
        <div className="list">
          <Paper className={classes.selected}>
            {chipData.map((data) => {
              let icon;

              if (data.label === "React") {
                icon = <TagFacesIcon />;
              }

              return (
                <div key={data.key}>
                  <Chip
                    icon={icon}
                    label={data.label}
                    onDelete={
                      data.label === "React" ? undefined : handleDelete(data)
                    }
                    className={classes.chip}
                  />
                </div>
              );
            })}
          </Paper>
          {hotels.map((item) => {
            return <Hotelcard data={item} />;
          })}
        </div>
      </Wrapper>
    </>
  );
};
