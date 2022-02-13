import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axiosInstance from "../../../shared/axiosInstance";
import { ITemplate } from "../../../shared/interfaces/template.interface";

export interface TemplateState {
  category: string;
  loading: boolean;
  data: ITemplate[];
  filteredResult: ITemplate[];
  currentPage: number;
  totalPages: number;
  errorMessage: any;
  filter: {
    search?: string;
    category?: string;
    alphaOrder?: string;
    dateOrder?: string;
  };
}

export const fetchTemplates = createAsyncThunk(
  "template/fetchTemplates",
  async () => {
    const response = await axiosInstance.get(`/task_templates`);
    return response.data;
  }
);

const initialState: TemplateState = {
  category: "All",
  filteredResult: [],
  filter: {
    search: "",
    category: "",
    alphaOrder: "",
    dateOrder: "",
  },
  loading: false,
  data: [],
  currentPage: 1,
  totalPages: 1,
  errorMessage: null,
};

export const templateSlice = createSlice({
  name: "template",
  initialState,
  reducers: {
    updateData: (state, action: PayloadAction<ITemplate[]>) => {
      state.filteredResult = action.payload;
    },
    filterBySearch: (state, action: PayloadAction<string>) => {
      state.filter.search = action.payload;
    },
    filterTemplates: (
      state,
      action: PayloadAction<typeof initialState.filter>
    ) => {
      state.filter = action.payload;
      const { category, alphaOrder, dateOrder } = state.filter;
      console.log(
        "state filter",
        state.filter,
        "action payload",
        action.payload
      );
      state.category = category || "All";

      state.filter.search = ""; //reset the search bar value
      state.filteredResult = state.filteredResult
        .filter(
          (data) => category !== undefined && data.category.includes(category)
        )
        .sort((_a, _b) =>
          alphaOrder?.toLowerCase() === "Ascending"
            ? -1
            : alphaOrder?.toLowerCase() === "Descending"
            ? 1
            : 0
        );
      state.filteredResult = state.filteredResult
        .filter(
          (data) => category !== undefined && data.category.includes(category)
        )
        .sort((a, b) =>
          dateOrder?.toLowerCase() === "ascending"
            ? -1
            : dateOrder?.toLowerCase() === "descending"
            ? 1
            : 0
        );
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTemplates.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(fetchTemplates.fulfilled, (state, action) => {
        state.loading = false;
        state.data = state.filteredResult = action.payload;
        state.errorMessage = null;
        state.totalPages = state.data.length;
      })
      .addCase(fetchTemplates.rejected, (state, action) => {
        state.loading = false;
        state.data = state.filteredResult = [];
        state.errorMessage = action.error;
      });
  },
});

export const { filterTemplates, filterBySearch, updateData } =
  templateSlice.actions;

export default templateSlice.reducer;
