import { Paper } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { trTR } from "@mui/x-data-grid/locales";

const columns = [
  { field: "bolumAd", headerName: "Bölüm", width: 250 },
  { field: "fakulteAd", headerName: "Fakülte", width: 200 },
  {
    field: "durum",
    headerName: "Lisans-Önlisans",
    width: 150,
  },
  {
    field: "fakulteUrl",
    headerName: "Website",
    width: 250,
  },
  {
    field: "degerler",
    headerName: "Degerler",
    sortable: false,
    width: 300,
    valueGetter: (value) => {
      var text = "";
      value.forEach((element) => {
        text += element.ad + ", ";
      });
      return text.trim().slice(0, -1);
    },
  },
];

export default function ResultTable({ selectedValues }) {
  const [tableData, setTableData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getTableData = async (values) => {
      const ids = values.map((item) => item.id).join(",");
      const url = `https://localhost:44316/api/Bolumler?ids=${ids}`;
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setTableData(result);
      } catch (error) {
        console.error("API gönderim hatası:", error);
      } finally {
        setLoading(false);
      }
    };
    getTableData(selectedValues);
  }, []);

  return (
    <Paper sx={{ height: 400, width: "100%" }}>
      <DataGrid
        loading={loading}
        slotProps={{
          loadingOverlay: {
            variant: "skeleton",
            noRowsVariant: "skeleton",
          },
        }}
        rows={tableData}
        columns={columns}
        localeText={trTR.components.MuiDataGrid.defaultProps.localeText}
        initialState={{ pagination: { paginationModel: { pageSize: 25 } } }}
        pageSizeOptions={[10, 25, 50, { value: -1, label: "All" }]}
        sx={{ border: 0 }}
      />
    </Paper>
  );
}
