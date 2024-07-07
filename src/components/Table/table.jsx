import { TableRow, TableCell } from "./table.styled";

const Tabless = ({ datas, index }) => {
  const { name, kota, kasus, sembuh, meninggal, dirawat, numbers } = datas;

  const displayName = name || kota;
  const displayConfirmed =
    kasus !== undefined ? kasus : numbers ? numbers.confirmed : undefined;
  const displayRecovered =
    sembuh !== undefined ? sembuh : numbers ? numbers.recovered : undefined;
  const displayTreatment =
    dirawat !== undefined ? dirawat : numbers ? numbers.treatment : undefined;
  const displayDeath =
    meninggal !== undefined ? meninggal : numbers ? numbers.death : undefined;

  return (
    <TableRow>
      <TableCell>{index + 1}</TableCell>
      <TableCell>{displayName}</TableCell>
      <TableCell>{displayConfirmed}</TableCell>
      <TableCell>{displayRecovered}</TableCell>
      <TableCell>{displayTreatment}</TableCell>
      <TableCell>{displayDeath}</TableCell>
    </TableRow>
  );
};

export default Tabless;
