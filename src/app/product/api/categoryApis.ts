import BaseApi from "@/services/baseApi";
import BaseCategoryType from "@/types/category";
import { AxiosRequestConfig } from "axios";

const CategoryApi = new BaseApi("/categories");

export type IDType = string | number;

const categoryServices = {
  async getAll(config: AxiosRequestConfig) {
    return CategoryApi.get<BaseCategoryType[]>("", { ...config }).then(
      (res) => res.data
    );
  },
  getOne(id: IDType, config: AxiosRequestConfig) {
    return CategoryApi.get<BaseCategoryType>("", { ...config });
  },
};

export default categoryServices;
