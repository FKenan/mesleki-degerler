import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { memo, useEffect } from "react";
import { trTR } from "@mui/x-data-grid/locales";
import { useDispatch, useSelector } from "react-redux";
import { fetchTableData } from "./resultSlice";
import { selectFirst5Value } from "../valueSlice";

const columns = [
  { field: "bolumAd", headerName: "Bölüm", width: 250 },
  // { field: "fakulteAd", headerName: "Fakülte", width: 200 },
  // { field: "durum", headerName: "Öğrenim Düzeyi", width: 150 },
  // {
  //   field: "fakulteUrl",
  //   headerName: "Website",
  //   width: 250,
  //   renderCell: (params) => (
  //     <a href={params.value} target="_blank">
  //       {params.value}
  //     </a>
  //   ),
  // },
  {
    field: "degerler",
    headerName: "Degerler",
    sortable: false,
    width: 600,
    valueGetter: (value) => {
      const degerler = value.map((value) => value.ad).join(", ");
      return degerler;
    },
  },
];

function ResultTable() {
  const first5Value = useSelector(selectFirst5Value);

  const { filteredTableData, isLoading } = useSelector((state) => state.result);
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
        rows={filteredTableData}
        columns={columns}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        disableRowSelectionOnClick
        sx={{ border: 0 }}
      />
    </Paper>
  );
}

export default memo(ResultTable);
