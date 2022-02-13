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
    search: string;
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
    // updateData: (state, action: PayloadAction<ITemplate[]>) => {
    //   state.filteredResult = action.payload;
    // },
    filterBySearch: (state, action: PayloadAction<string>) => {
      state.filter.search = action.payload;

      const templates = state.data;
      const searchQuery = state.filter.search;

      if (searchQuery.length == 0) {
        state.filteredResult = templates;
      } else {
        state.filteredResult = state.filteredResult.filter(
          (d) =>
            searchQuery !== undefined &&
            d.name.toLowerCase().includes(state.filter.search.toLowerCase())
        );
      }
    },
    sortByCategory: (state, action: PayloadAction<string>) => {
      state.filter.category = action.payload;
      state.category = state.filter.category || "All";

      state.filteredResult = state.filteredResult.filter(
        (data) =>
          state.filter.category && data.category.includes(state.filter.category)
      );
    },
    sortByAlpha: (state, action: PayloadAction<string>) => {
      const alphaOrder = (state.filter.alphaOrder = action.payload);
      if (alphaOrder?.toLowerCase() === "ascending")
        state.filteredResult = state.filteredResult.sort((_a, _b) =>
          _a.name > _b.name ? -1 : 1
        );
      else if (alphaOrder.toLowerCase() === "descending")
        state.filteredResult = state.filteredResult.sort((a, b) =>
          b.name > a.name ? 1 : -1
        );
      else state.filteredResult = state.filteredResult.sort((a, b) => 0);
    },
    sortByDate: (state, action: PayloadAction<string>) => {
      const dateOrder = (state.filter.dateOrder = action.payload);
      if (dateOrder?.toLowerCase() === "ascending")
        state.filteredResult = state.filteredResult.sort((_a, _b) =>
          new Date(_a.created) > new Date(_b.created) ? -1 : 1
        );
      else if (dateOrder.toLowerCase() === "descending")
        state.filteredResult = state.filteredResult.sort((a, b) =>
          new Date(b.created) > new Date(a.created) ? 1 : -1
        );
      else state.filteredResult = state.filteredResult.sort((a, b) => 0);
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

export const { filterBySearch, sortByAlpha, sortByCategory, sortByDate } =
  templateSlice.actions;

export default templateSlice.reducer;
