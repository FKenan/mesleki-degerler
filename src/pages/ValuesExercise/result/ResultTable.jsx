import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect } from "react";
import { trTR } from "@mui/x-data-grid/locales";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "./resultSlice";

const columns = [
  { field: "bolumAd", headerName: "Bölüm", width: 250 },
  { field: "fakulteAd", headerName: "Fakülte", width: 200 },
  { field: "durum", headerName: "Lisans-Önlisans", width: 150 },
  {
    field: "fakulteUrl",
    headerName: "Website",
    width: 250,
    renderCell: (params) => (
      <a href={params.value} target="_blank">
        {params.value}
      </a>
    ),
  },
  {
    field: "degerler",
    headerName: "Degerler",
    sortable: false,
    width: 300,
    valueGetter: (value) => {
      const degerler = value.map((value) => value.ad).join(", ");
      return degerler;
    },
  },
];

export default function ResultTable() {
  const { first5Value } = useSelector((state) => state.value);
  const { tableData, isLoading } = useSelector((state) => state.result);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTableData(first5Value));
  }, [first5Value]);

  return (
    <Paper sx={{ width: "100%", my: 4 }}>
      <DataGrid
        loading={isLoading}
        hideFooter
        slotProps={{
          loadingOverlay: {
            variant: "circular-progress",
            noRowsVariant: "circular-progress",
          },
        }}
        rows={tableData}
        columns={columns}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
