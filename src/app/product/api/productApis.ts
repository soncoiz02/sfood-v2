import BaseApi from "@/services/baseApi";
import BaseProductType from "@/types/product";
import { AxiosRequestConfig } from "axios";

const ProductApi = new BaseApi("/products");

export type IDType = string | number;

const productServices = {
  getAll(config: AxiosRequestConfig) {
    return ProductApi.get<BaseProductType[]>("", { ...config });
  },
  getOne(id: IDType, config: AxiosRequestConfig) {
    return ProductApi.get<BaseProductType>("", { ...config });
  },
};

export default productServices;
