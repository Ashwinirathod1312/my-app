import * as React from "react";
import { styled } from "@mui/system";
import TablePagination, {
  tablePaginationClasses as classes
} from "@mui/base/TablePagination";
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
const SummaryPage = (props) => {
  const navigate = useNavigate();
  const { formData,onSubmit,FromBack,setFromBack
  } = props
const handleBack=()=>{
  onSubmit(formData);
        navigate("/");
        setFromBack("navigate behind")
}


  return (

    <Root sx={{ maxWidth: "100%", width: 500 }}>
      <table aria-label="custom pagination table">
        <thead>
          <tr>
            <th>main issue</th>
            <th>disgnoised</th>
            <th>duration_problem</th>
            <th>intensity</th>
            <th>mental_trauma</th>
            <th>multiChecbox</th>
            <th>other_input
            </th>
            <th>physical_trauma</th>


          </tr>
        </thead>
        <tbody>
          {formData ?
            formData.map((row) => (
              <tr key={row.description}>
                <td>{row.description}</td>
                <td style={{ width: 160 }} align="right">
                  {row.disgnoised}
                </td>
                <td style={{ width: 160 }} align="right">
                  {row.duration_problem}
                </td>
                <td style={{ width: 160 }} align="right">
                  {row.intensity}
                </td>
                <td style={{ width: 160 }} align="right">
                  {row.mental_trauma}
                </td>
                <td style={{ width: 160 }} align="right">
                  {row.multiCheckbox}
                </td>
                <td style={{ width: 160 }} align="right">
                  {row.other_input
                  }
                </td>
                <td style={{ width: 160 }} align="right">
                  {row.physical_trauma}
                </td>
              </tr>
            )) : []}


        </tbody>

      </table>
      <Button variant="contained" onClick={handleBack}>Back</Button>
    </Root>
  );
}

function createData(name, calories, fat) {
  return { name, calories, fat };
}

const rows = [
  createData("Cupcake", 305, 3.7),
  createData("Donut", 452, 25.0),
  createData("Eclair", 262, 16.0),
  createData("Frozen yoghurt", 159, 6.0),
  createData("Gingerbread", 356, 16.0),
  createData("Honeycomb", 408, 3.2),
  createData("Ice cream sandwich", 237, 9.0),
  createData("Jelly Bean", 375, 0.0),
  createData("KitKat", 518, 26.0),
  createData("Lollipop", 392, 0.2),
  createData("Marshmallow", 318, 0),
  createData("Nougat", 360, 19.0),
  createData("Oreo", 437, 18.0)
];
// .sort((a, b) => (a.calories < b.calories ? -1 : 1));

const grey = {
  200: "#d0d7de",
  800: "#32383f",
  900: "#24292f"
};

const Root = styled("div")(
  ({ theme }) => `
  table {
    font-family: IBM Plex Sans, sans-serif;
    font-size: 0.875rem;
    border-collapse: collapse;
    width: 100%;
  }

  td,
  th {
    border: 1px solid ${theme.palette.mode === "dark" ? grey[800] : grey[200]};
    text-align: left;
    padding: 8px;
  }

  th {
    background-color: ${theme.palette.mode === "dark" ? grey[900] : "#fff"};
  }
  `
);

const CustomTablePagination = styled(TablePagination)`
  & .${classes.toolbar} {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;

    @media (min-width: 768px) {
      flex-direction: row;
      align-items: center;
    }
  }

  & .${classes.selectLabel} {
    margin: 0;
  }

  & .${classes.displayedRows} {
    margin: 0;

    @media (min-width: 768px) {
      margin-left: auto;
    }
  }

  & .${classes.spacer} {
    display: none;
  }

  & .${classes.actions} {
    display: flex;
    gap: 0.25rem;
  }
`;


export default SummaryPage